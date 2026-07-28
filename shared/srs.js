/* ============================================================
   Português do Zero — shared/srs.js
   Spaced-repetition engine (simplified SM-2) + adaptive
   difficulty engine.

   WHY THIS EXISTS
   Recognition ("pick the right answer out of 4") produces the
   illusion of learning: you can score 100% and remember nothing
   a week later. Retention comes from (a) ACTIVE RECALL — you
   have to produce the answer yourself — and (b) SPACED
   REPETITION — the item comes back just before you'd forget it.
   This file implements both.
   ============================================================ */

/* ============================================================
   SM-2 (simplified)
   Each card: { ef, interval, reps, due, lapses, seen }
     ef       ease factor (1.3 – 2.8), how "easy" this item is for
              this particular learner
     interval days until the next review
     reps     number of consecutive successful reviews
     due      timestamp (ms) when the card becomes due
     lapses   number of times it was forgotten after being learnt
     seen     total number of reviews

   Quality scale (what the learner did):
     0 = total blank / wrong
     3 = correct but hesitant, or correct with a typo
     5 = correct, instant, confident
   Anything < 3 is a failure: interval resets to 1 day.
   ============================================================ */

const SRS_MIN_EF = 1.3;
const SRS_MAX_EF = 2.8;
const DAY_MS = 24 * 60 * 60 * 1000;

function srsNewCard(){
  return { ef: 2.5, interval: 0, reps: 0, due: 0, lapses: 0, seen: 0 };
}

/**
 * Advance a card after a review.
 * @param {object} card  existing card (or undefined for a new one)
 * @param {number} quality 0..5
 * @param {number} now  timestamp in ms
 * @returns {object} the updated card
 */
function srsReview(card, quality, now){
  card = card ? Object.assign(srsNewCard(), card) : srsNewCard();
  now = now || Date.now();
  card.seen++;

  if(quality < 3){
    // Forgotten. Reset the schedule but keep (a slightly reduced) ease.
    if(card.reps > 0) card.lapses++;
    card.reps = 0;
    card.interval = 1;
    card.ef = Math.max(SRS_MIN_EF, card.ef - 0.2);
  } else {
    card.reps++;
    if(card.reps === 1)      card.interval = 1;
    else if(card.reps === 2) card.interval = 3;
    else                     card.interval = Math.round(card.interval * card.ef);
    // Classic SM-2 ease adjustment
    const delta = 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02);
    card.ef = Math.min(SRS_MAX_EF, Math.max(SRS_MIN_EF, card.ef + delta));
  }
  card.due = now + card.interval * DAY_MS;
  return card;
}

/* ---------- Card store, persisted inside `progress.srs` ---------- */

function srsStore(){
  if(!progress.srs) progress.srs = {};
  return progress.srs;
}
function srsGet(key){ return srsStore()[key]; }
function srsSet(key, card){ srsStore()[key] = card; }

/** Record a review result for one item key. */
function srsRecord(key, quality, now){
  const updated = srsReview(srsGet(key), quality, now);
  srsSet(key, updated);
  return updated;
}

/** Every card whose due date has passed (i.e. needs reviewing today). */
function srsDueKeys(now){
  now = now || Date.now();
  const store = srsStore();
  return Object.keys(store).filter(k => store[k].due <= now);
}

/** Cards that exist but aren't due yet. */
function srsScheduledCount(){ return Object.keys(srsStore()).length; }

/** How many due right now. */
function srsDueCount(now){ return srsDueKeys(now).length; }

/**
 * A card is considered "mastered" once it has survived several
 * successful reviews and its next review is far out.
 */
function srsIsMastered(key){
  const c = srsGet(key);
  return !!c && c.reps >= 4 && c.interval >= 21;
}
function srsMasteredCount(){
  return Object.keys(srsStore()).filter(srsIsMastered).length;
}

/** Human-readable "next review in ..." for the UI. */
function srsDueLabel(card, now){
  if(!card) return 'jamais vu';
  now = now || Date.now();
  const diff = card.due - now;
  if(diff <= 0) return 'à réviser';
  const days = Math.ceil(diff / DAY_MS);
  if(days === 1) return 'demain';
  if(days < 30) return `dans ${days} jours`;
  const months = Math.round(days/30);
  return `dans ${months} mois`;
}

/* ============================================================
   ADAPTIVE DIFFICULTY
   We keep a rolling record of the learner's recent accuracy and
   use it to decide HOW an item is tested. The same word can be
   asked four different ways, from easiest to hardest:

     1. mcq       — pick the French meaning from 4 options   (recognition)
     2. listen    — hear it, pick the meaning                (aural recognition)
     3. gap       — complete the sentence                    (guided recall)
     4. write     — type the Portuguese from the French      (free recall)
     5. dictation — hear it and write it                     (hardest)

   As accuracy climbs, we stop offering multiple choice and start
   demanding production. If she starts struggling, we drop back
   down instead of letting her fail repeatedly.
   ============================================================ */

const ADAPT_WINDOW = 20; // number of recent answers we consider

function adaptStore(){
  if(!progress.adaptive) progress.adaptive = { recent: [], byType: {} };
  if(!progress.adaptive.recent) progress.adaptive.recent = [];
  if(!progress.adaptive.byType) progress.adaptive.byType = {};
  return progress.adaptive;
}

/** Record one answer outcome (used to steer future difficulty). */
function adaptRecord(correct, type){
  const a = adaptStore();
  a.recent.push(correct ? 1 : 0);
  if(a.recent.length > ADAPT_WINDOW) a.recent.shift();
  if(type){
    if(!a.byType[type]) a.byType[type] = { correct:0, total:0 };
    a.byType[type].total++;
    if(correct) a.byType[type].correct++;
  }
}

/** Rolling accuracy 0..1 over the recent window. Defaults to 0.6 when new. */
function adaptAccuracy(){
  const r = adaptStore().recent;
  if(r.length < 4) return 0.6; // not enough data — assume middling
  return r.reduce((a,b)=>a+b, 0) / r.length;
}

/**
 * Difficulty tier 1..4 derived from rolling accuracy.
 *   1 = struggling      → recognition only
 *   2 = finding footing → recognition + guided recall
 *   3 = solid           → production expected
 *   4 = strong          → mostly free recall & dictation
 */
function adaptTier(){
  const acc = adaptAccuracy();
  if(acc < 0.55) return 1;
  if(acc < 0.75) return 2;
  if(acc < 0.90) return 3;
  return 4;
}

/**
 * The mix of exercise types to use at the current tier, expressed
 * as how many of each to generate in a lesson quiz. Deliberately
 * never 100% of one type — variety itself aids retention.
 */
const ADAPT_MIX = {
  1: { mcq:5, listen:2, gap:1, write:0, dictation:0, speak:2 },
  2: { mcq:3, listen:2, gap:2, write:2, dictation:0, speak:2 },
  3: { mcq:2, listen:1, gap:2, write:3, dictation:1, speak:2 },
  4: { mcq:1, listen:1, gap:2, write:3, dictation:2, speak:2 },
};
function adaptMix(tierOverride){
  const tier = tierOverride || adaptTier();
  return Object.assign({}, ADAPT_MIX[tier] || ADAPT_MIX[2]);
}

/** Label shown in the UI so she understands why it got harder. */
function adaptLabel(){
  return ['', 'Consolidation', 'Progression', 'Production', 'Maîtrise'][adaptTier()];
}

/**
 * Converts a quiz answer into an SM-2 quality score.
 * Exact + fast = 5, correct-but-hard-type = 4, typo = 3, wrong = 0.
 */
function qualityFromAnswer(correct, type, meta){
  if(!correct) return 0;
  if(meta && meta.typo) return 3;
  // Producing the word from scratch demonstrates stronger memory
  // than recognising it, so it earns a better score.
  if(type === 'write' || type === 'dictation') return 5;
  if(type === 'gap' || type === 'speak') return 4;
  return 4;
}
