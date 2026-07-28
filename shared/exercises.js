/* ============================================================
   Português do Zero — shared/exercises.js
   The four "active recall" exercise types:
     1. write      — type the Portuguese from the French
     2. gap        — complete a sentence / conjugate a verb
     3. dictation  — listen and write what you hear
     4. reading    — read a text and answer questions

   Plus the tolerant answer checker and the Portuguese accent
   keyboard (essential: a French keyboard cannot type ã õ ê
   without contortions, and we don't want to punish her for that).
   Depends on shared/app.js (speak, normalizeText, levenshtein).
   ============================================================ */

/* ============================================================
   TOLERANT ANSWER CHECKING
   Being too strict kills motivation; being too lax teaches
   nothing. The rule we use:
     - exact match                  → perfect
     - right letters, wrong accents → correct, but we point it out
     - 1 character off (or 2 on a
       long answer)                 → accepted as a typo, correction shown
     - otherwise                    → wrong, correct answer shown
   ============================================================ */

/** Strips accents and punctuation, lowercases, collapses spaces. */
function stripAccents(s){
  return (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'');
}
function normalizeAnswer(s){
  return stripAccents(s).toLowerCase()
    .replace(/[.,!?;:¡¿"'`´]/g,'')
    .replace(/\s+/g,' ')
    .trim();
}
/** Keeps accents, but normalises case/punctuation/spacing. */
function normalizeKeepAccents(s){
  return (s||'').toLowerCase()
    .replace(/[.,!?;:¡¿"'`´]/g,'')
    .replace(/\s+/g,' ')
    .trim();
}

/**
 * Compares a typed answer against one or more accepted answers.
 * @returns {{correct:boolean, typo:boolean, accentOnly:boolean, best:string, message:string}}
 */
function checkAnswer(input, accepted){
  const list = Array.isArray(accepted) ? accepted : [accepted];
  const inNorm = normalizeAnswer(input);
  const inExact = normalizeKeepAccents(input);
  let best = list[0], bestDist = Infinity;

  for(const target of list){
    // 1. Perfect match, accents included
    if(inExact === normalizeKeepAccents(target)){
      return { correct:true, typo:false, accentOnly:false, best:target, message:'' };
    }
  }
  for(const target of list){
    // 2. Right word, wrong (or missing) accents
    if(inNorm === normalizeAnswer(target)){
      return {
        correct:true, typo:false, accentOnly:true, best:target,
        message:`Attention aux accents : on écrit « ${target} ».`
      };
    }
  }
  // 3. Close enough to be a typing slip
  for(const target of list){
    const d = levenshtein(inNorm, normalizeAnswer(target));
    if(d < bestDist){ bestDist = d; best = target; }
  }
  const tolerance = normalizeAnswer(best).length > 8 ? 2 : 1;
  if(inNorm.length > 0 && bestDist <= tolerance){
    return {
      correct:true, typo:true, accentOnly:false, best,
      message:`Presque — la bonne orthographe est « ${best} ».`
    };
  }
  return {
    correct:false, typo:false, accentOnly:false, best,
    message:`La réponse était « ${best} ».`
  };
}

/* ============================================================
   PORTUGUESE ACCENT KEYBOARD
   Inserts characters a French AZERTY keyboard can't reach easily.
   ============================================================ */
const PT_CHARS = ['á','à','â','ã','ç','é','ê','í','ó','ô','õ','ú'];

function accentBarHtml(){
  return `<div class="accent-bar flex flex-wrap justify-center gap-1 mt-3">
    ${PT_CHARS.map(c=>`<button type="button" class="accent-key w-8 h-8 rounded-lg border border-neutral-200 dark:border-neutral-800 text-[13px] font-semibold text-neutral-600 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white hover:bg-neutral-50 dark:hover:bg-neutral-900 transition" data-char="${c}">${c}</button>`).join('')}
  </div>`;
}

/** Wires the accent bar inside `mount` to write into `input`. */
function wireAccentBar(mount, input){
  mount.querySelectorAll('.accent-key').forEach(btn=>{
    btn.addEventListener('mousedown', (e)=>{
      e.preventDefault(); // keep focus in the field
      const start = input.selectionStart, end = input.selectionEnd;
      const v = input.value;
      input.value = v.slice(0,start) + btn.dataset.char + v.slice(end);
      input.selectionStart = input.selectionEnd = start + 1;
      input.focus();
    });
  });
}

/* ---------- shared feedback card ---------- */
function feedbackHtml(res, extra){
  let cls, icon, title;
  if(res.correct && !res.typo && !res.accentOnly){
    cls = 'border-accent-200 dark:border-accent-800 bg-accent-50 dark:bg-accent-950/50 text-accent-900 dark:text-accent-200';
    icon = '🎉'; title = 'Correct !';
  } else if(res.correct){
    cls = 'border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300';
    icon = '👍'; title = 'Accepté';
  } else {
    cls = 'border-rose-200 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300';
    icon = '🔁'; title = 'Pas tout à fait';
  }
  return `<div class="rounded-xl border ${cls} p-4 text-left">
    <b class="block text-sm font-semibold mb-0.5">${icon} ${title}</b>
    ${res.message ? `<span class="text-[13px] opacity-90">${res.message}</span>` : ''}
    ${extra ? `<div class="text-[12.5px] opacity-80 mt-1.5">${extra}</div>` : ''}
  </div>`;
}

/* ============================================================
   1. WRITE — type the Portuguese from the French
   The single most important addition: it forces production
   rather than recognition.
   item: { pt, fr, alt?:[...] , hint?: string }
   ============================================================ */
function renderWriteExercise(mount, item, onDone){
  const accepted = [item.pt].concat(item.alt || []);
  mount.innerHTML = `
    <div class="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 mb-2">Écris en portugais</div>
    <div class="font-display text-xl md:text-2xl font-semibold mb-1">${item.fr}</div>
    ${item.hint ? `<div class="text-[12.5px] text-neutral-400 mb-3">💡 ${item.hint}</div>` : '<div class="mb-3"></div>'}
    <input type="text" id="wIn" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
      class="w-full px-4 py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-[15px] focus:outline-none focus:border-neutral-900 dark:focus:border-white transition"
      placeholder="Tape ta réponse…">
    ${accentBarHtml()}
    <div id="wFeedback" class="mt-4"></div>
    <div class="mt-4 flex justify-end">
      <button type="button" id="wCheck" class="inline-flex items-center gap-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2.5 text-sm font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-200 transition">Vérifier</button>
    </div>`;
  const input = mount.querySelector('#wIn');
  const fb = mount.querySelector('#wFeedback');
  const btn = mount.querySelector('#wCheck');
  wireAccentBar(mount, input);
  input.focus();

  let answered = false;
  function submit(){
    if(answered) return;
    if(!input.value.trim()){ input.focus(); return; }
    answered = true;
    const res = checkAnswer(input.value, accepted);
    input.disabled = true;
    input.className += res.correct ? ' border-accent-400' : ' border-rose-300';
    fb.innerHTML = feedbackHtml(res, `🔊 <button type="button" class="speak-btn inline-flex items-center h-6 px-2 rounded-full border border-current/30 text-[11px] opacity-90" data-speak="${escapeAttr(item.pt)}">Écouter « ${item.pt} »</button>`);
    btn.textContent = 'Continuer →';
    btn.onclick = ()=> onDone && onDone(res);
  }
  btn.addEventListener('click', submit);
  input.addEventListener('keydown', (e)=>{ if(e.key === 'Enter'){ e.preventDefault(); answered ? onDone && onDone(checkAnswer(input.value, accepted)) : submit(); } });
}

/* ============================================================
   2. GAP — complete the sentence / conjugate the verb
   item: { sentence:"Eu ___ francês.", answer:"sou", hint?:"ser",
           fr?:"Je suis français.", alt?:[...] }
   ============================================================ */
function renderGapExercise(mount, item, onDone){
  const accepted = [item.answer].concat(item.alt || []);
  const full = item.sentence.replace('___', item.answer);
  const parts = item.sentence.split('___');
  mount.innerHTML = `
    <div class="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 mb-2">Complète la phrase</div>
    <div class="font-display text-lg md:text-xl font-semibold leading-relaxed mb-1 flex flex-wrap items-center gap-x-1.5 gap-y-2">
      <span>${parts[0] || ''}</span>
      <input type="text" id="gIn" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
        class="inline-block min-w-[110px] w-[130px] px-3 py-1.5 rounded-lg border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-[15px] font-semibold text-center focus:outline-none focus:border-accent-500 transition">
      <span>${parts[1] || ''}</span>
    </div>
    ${item.fr ? `<div class="text-[13px] text-neutral-500 dark:text-neutral-400 mt-2">${item.fr}</div>` : ''}
    ${item.hint ? `<div class="text-[12.5px] text-neutral-400 mt-1.5">💡 verbe : <b>${item.hint}</b></div>` : ''}
    ${accentBarHtml()}
    <div id="gFeedback" class="mt-4"></div>
    <div class="mt-4 flex justify-end">
      <button type="button" id="gCheck" class="inline-flex items-center gap-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2.5 text-sm font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-200 transition">Vérifier</button>
    </div>`;
  const input = mount.querySelector('#gIn');
  const fb = mount.querySelector('#gFeedback');
  const btn = mount.querySelector('#gCheck');
  wireAccentBar(mount, input);
  input.focus();

  let answered = false;
  function submit(){
    if(answered) return;
    if(!input.value.trim()){ input.focus(); return; }
    answered = true;
    const res = checkAnswer(input.value, accepted);
    input.disabled = true;
    input.classList.remove('border-dashed');
    input.classList.add(res.correct ? 'border-accent-500' : 'border-rose-400');
    fb.innerHTML = feedbackHtml(res, `Phrase complète : <b>${full}</b> <button type="button" class="speak-btn inline-flex items-center h-6 px-2 rounded-full border border-current/30 text-[11px] ml-1" data-speak="${escapeAttr(full)}">🔊</button>`);
    btn.textContent = 'Continuer →';
    btn.onclick = ()=> onDone && onDone(res);
  }
  btn.addEventListener('click', submit);
  input.addEventListener('keydown', (e)=>{ if(e.key === 'Enter'){ e.preventDefault(); answered ? onDone && onDone(checkAnswer(input.value, accepted)) : submit(); } });
}

/* ============================================================
   3. DICTATION — listen and write what you hear
   The most complete exercise: ear + spelling + vocabulary at once.
   item: { pt, fr }
   ============================================================ */
function renderDictationExercise(mount, item, onDone){
  mount.innerHTML = `
    <div class="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 mb-2">Dictée — écris ce que tu entends</div>
    <div class="text-center my-5">
      <button type="button" id="dPlay" class="w-16 h-16 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-2xl flex items-center justify-center hover:scale-105 transition mx-auto" title="Réécouter">🔊</button>
      <button type="button" id="dSlow" class="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 text-[12px] font-semibold text-neutral-500 dark:text-neutral-400 hover:border-neutral-900 dark:hover:border-white transition">🐢 Plus lentement</button>
    </div>
    <input type="text" id="dIn" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
      class="w-full px-4 py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-[15px] focus:outline-none focus:border-neutral-900 dark:focus:border-white transition"
      placeholder="Écris la phrase entendue…">
    ${accentBarHtml()}
    <div id="dFeedback" class="mt-4"></div>
    <div class="mt-4 flex justify-end">
      <button type="button" id="dCheck" class="inline-flex items-center gap-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2.5 text-sm font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-200 transition">Vérifier</button>
    </div>`;
  const input = mount.querySelector('#dIn');
  const fb = mount.querySelector('#dFeedback');
  const btn = mount.querySelector('#dCheck');
  wireAccentBar(mount, input);
  mount.querySelector('#dPlay').addEventListener('click', ()=> speak(item.pt));
  mount.querySelector('#dSlow').addEventListener('click', ()=> speak(item.pt, 0.6));
  setTimeout(()=> speak(item.pt), 350); // play once automatically
  input.focus();

  let answered = false;
  function submit(){
    if(answered) return;
    if(!input.value.trim()){ input.focus(); return; }
    answered = true;
    const res = checkAnswer(input.value, [item.pt]);
    input.disabled = true;
    fb.innerHTML = feedbackHtml(res, `<b>${item.pt}</b>${item.fr ? ` — ${item.fr}` : ''}`);
    btn.textContent = 'Continuer →';
    btn.onclick = ()=> onDone && onDone(res);
  }
  btn.addEventListener('click', submit);
  input.addEventListener('keydown', (e)=>{ if(e.key === 'Enter'){ e.preventDefault(); answered ? onDone && onDone(checkAnswer(input.value,[item.pt])) : submit(); } });
}

/* ============================================================
   4. READING — read a text, answer questions
   This is the format used by the "Compreensão da Leitura"
   section of every CAPLE exam.
   item: { title, text, source?, questions:[{q, opts, a}] }
   ============================================================ */
function renderReadingExercise(mount, item, onDone){
  let answered = 0, correct = 0;
  mount.innerHTML = `
    <div class="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 mb-2">Compréhension écrite</div>
    <h3 class="font-display text-lg font-semibold mb-1">${item.title}</h3>
    ${item.source ? `<div class="text-[11.5px] text-neutral-400 mb-3">${item.source}</div>` : ''}
    <div class="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/50 p-5 mb-2 text-[14.5px] leading-[1.75] text-neutral-700 dark:text-neutral-300 whitespace-pre-line">${item.text}</div>
    <div class="flex justify-end mb-6">${speakBtnHtml(item.text.replace(/\s+/g,' ').slice(0,600), '🔊 Écouter le texte')}</div>
    <div id="rQuestions" class="space-y-6"></div>
    <div id="rDone" class="mt-6 hidden flex justify-end">
      <button type="button" id="rNext" class="inline-flex items-center gap-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2.5 text-sm font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-200 transition">Continuer →</button>
    </div>`;

  const qMount = mount.querySelector('#rQuestions');
  qMount.innerHTML = item.questions.map((q,qi)=>`
    <div class="reading-q" data-qi="${qi}">
      <div class="font-semibold text-[14.5px] mb-2.5">${qi+1}. ${q.q}</div>
      <div class="grid gap-2">
        ${q.opts.map((o,oi)=>`<button type="button" class="r-opt w-full text-left px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 text-[13.5px] font-medium hover:border-neutral-900 dark:hover:border-white transition" data-qi="${qi}" data-oi="${oi}">${o}</button>`).join('')}
      </div>
    </div>`).join('');

  qMount.querySelectorAll('.r-opt').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const qi = parseInt(btn.dataset.qi), oi = parseInt(btn.dataset.oi);
      const block = qMount.querySelector(`.reading-q[data-qi="${qi}"]`);
      if(block.dataset.done) return;
      block.dataset.done = '1';
      const q = item.questions[qi];
      block.querySelectorAll('.r-opt').forEach(b=>{
        b.disabled = true;
        const bi = parseInt(b.dataset.oi);
        if(bi === q.a) b.className = 'r-opt w-full text-left px-4 py-3 rounded-xl border-2 border-accent-500 bg-accent-50 dark:bg-accent-950/50 text-[13.5px] font-medium';
        else if(bi === oi) b.className = 'r-opt w-full text-left px-4 py-3 rounded-xl border-2 border-rose-300 bg-rose-50 dark:bg-rose-950/40 text-[13.5px] font-medium';
      });
      if(oi === q.a) correct++;
      answered++;
      if(answered === item.questions.length){
        mount.querySelector('#rDone').classList.remove('hidden');
        mount.querySelector('#rDone').classList.add('flex');
      }
    });
  });

  mount.querySelector('#rNext').addEventListener('click', ()=>{
    onDone && onDone({ correct: correct >= Math.ceil(item.questions.length * 0.6), score: correct, total: item.questions.length, typo:false, accentOnly:false });
  });
}

/* ============================================================
   BUILDING AN ADAPTIVE EXERCISE SET
   Given a module's vocabulary and sentences, produce a mixed set
   of exercises matched to the learner's current tier.
   ============================================================ */
function buildAdaptiveQuiz(mod, opts){
  opts = opts || {};
  const mix = opts.mix || adaptMix(opts.tier);
  const items = mod.items || [];
  const phrases = mod.phrases || [];
  const pool = opts.pool || ALL_VOCAB;
  const out = [];

  function distractorsFor(fr, n){
    const candidates = shuffle(pool.filter(v => v.fr !== fr));
    const res = [];
    for(const c of candidates){ if(res.length >= n) break; if(!res.includes(c.fr)) res.push(c.fr); }
    while(res.length < n) res.push('—');
    return res;
  }

  // Recognition: multiple choice
  shuffle(items).slice(0, mix.mcq).forEach(([emoji, pt, fr])=>{
    const o = shuffle([fr, ...distractorsFor(fr,3)]);
    out.push({ type:'mcq', q:`Que veut dire « ${pt} » ?`, opts:o, a:o.indexOf(fr), srsKey: pt });
  });
  // Aural recognition
  shuffle(items).slice(0, mix.listen).forEach(([emoji, pt, fr])=>{
    const o = shuffle([fr, ...distractorsFor(fr,3)]);
    out.push({ type:'listen', q:'Écoute et choisis la bonne traduction :', audio:pt, opts:o, a:o.indexOf(fr), srsKey: pt });
  });
  // Guided recall — prefers hand-written gap items, falls back to vocab
  const gaps = shuffle(mod.gaps || []).slice(0, mix.gap);
  gaps.forEach(g => out.push(Object.assign({ type:'gap' }, g)));
  // Free recall — type it
  shuffle(items).slice(0, mix.write).forEach(([emoji, pt, fr])=>{
    out.push({ type:'write', pt, fr, srsKey: pt });
  });
  // Dictation — prefers full sentences, falls back to words
  const dictSource = phrases.length ? phrases : items.map(([e,pt,fr])=>({pt,fr}));
  shuffle(dictSource).slice(0, mix.dictation).forEach(p=>{
    out.push({ type:'dictation', pt:p.pt, fr:p.fr, srsKey: p.pt });
  });
  // Speaking
  const speakSource = phrases.length ? phrases : items.map(([e,pt,fr])=>({pt,fr}));
  shuffle(speakSource).slice(0, mix.speak).forEach(p=>{
    out.push({ type:'speak', pt:p.pt, fr:p.fr, srsKey: p.pt });
  });

  return shuffle(out);
}
