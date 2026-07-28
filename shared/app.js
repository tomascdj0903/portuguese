/* ============================================================
   Português do Zero — shared/app.js
   Core engine: theme, shared chrome, progress storage, audio
   (TTS + speech recognition), the quiz runner, and the games.

   Load order matters:
     data-core.js → curriculum-a/b/c.js → exams.js
     → app.js → srs.js → exercises.js
   ============================================================ */

/* ============================================================
   UTILITIES
   ============================================================ */
function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function el(html){ const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstElementChild; }
function escapeAttr(s){ return String(s).replace(/"/g,'&quot;'); }
function pad2(n){ return n<10 ? '0'+n : ''+n; }

/* ============================================================
   VOCAB POOLS
   ============================================================ */
const ALL_VOCAB = MODULE_ORDER.flatMap(key => {
  const m = MODULE_DATA[key];
  if(!m.items) return [];
  return m.items.map(([emoji,pt,fr]) => ({module:key, level:m.level, emoji, pt, fr}));
});
const TOTAL_WORDS = ALL_VOCAB.length;
const ALL_PHRASES = MODULE_ORDER.flatMap(key => {
  const m = MODULE_DATA[key];
  if(!m.phrases) return [];
  return m.phrases.map(p => ({module:key, level:m.level, pt:p.pt, fr:p.fr}));
});
function vocabUpToLevel(levelCode){
  const idx = LEVELS.indexOf(levelCode);
  if(idx < 0) return ALL_VOCAB;
  return ALL_VOCAB.filter(v => LEVELS.indexOf(v.level) <= idx);
}

/* ============================================================
   THEME
   ============================================================ */
const THEME_KEY = 'pt0_theme';
(function initTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  if(saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    document.documentElement.classList.add('dark');
  }
})();
function toggleTheme(){
  document.documentElement.classList.toggle('dark');
  localStorage.setItem(THEME_KEY, document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  syncThemeIcon();
}
function syncThemeIcon(){
  const isDark = document.documentElement.classList.contains('dark');
  const moon = document.getElementById('iconMoon'), sun = document.getElementById('iconSun');
  if(moon) moon.classList.toggle('hidden', isDark);
  if(sun) sun.classList.toggle('hidden', !isDark);
}

/* ============================================================
   PROGRESS STORAGE  (local only — no account, by design)
   ============================================================ */
const PROGRESS_KEY = 'pt0_progress_v4';
function defaultProgress(){
  return {
    known:{},
    level:null,
    completedModules:{},
    srs:{},
    adaptive:{ recent:[], byType:{} },
    exams:{},
    pronunciation:{attempts:0,successes:0,scoreSum:0},
    listening:{correct:0,total:0,bestStreak:0,streak:0},
    sentence:{correct:0,total:0},
    stats:{ answered:0, correct:0 },
  };
}
function loadProgress(){
  const d = defaultProgress();
  try{
    const raw = localStorage.getItem(PROGRESS_KEY);
    if(raw){
      const p = JSON.parse(raw);
      return {
        known: p.known || {},
        level: p.level || null,
        completedModules: p.completedModules || {},
        srs: p.srs || {},
        adaptive: Object.assign({recent:[],byType:{}}, p.adaptive||{}),
        exams: p.exams || {},
        pronunciation: Object.assign(d.pronunciation, p.pronunciation||{}),
        listening: Object.assign(d.listening, p.listening||{}),
        sentence: Object.assign(d.sentence, p.sentence||{}),
        stats: Object.assign(d.stats, p.stats||{}),
      };
    }
  }catch(e){}
  return d;
}
function saveProgress(){ try{ localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); }catch(e){} }
function wordKey(moduleKey, pt){ return moduleKey + '::' + pt; }
let progress = loadProgress();

/* ---------- Placement gate: the test is mandatory ---------- */
function placementDone(){ return !!(progress.level && progress.level.code); }
function requirePlacement(){
  if(placementDone()) return true;
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if(here === 'placement.html') return true;
  location.replace('placement.html?required=1');
  return false;
}

function placedLevel(){ return (progress.level && progress.level.code) || 'A1'; }

function isModuleUnlocked(key){
  const m = MODULE_DATA[key];
  if(!m) return false;
  const placedIdx = LEVELS.indexOf(placedLevel());
  const modIdx = LEVELS.indexOf(m.level);
  if(modIdx < placedIdx) return true;                    // levels below hers stay open
  if(modIdx === placedIdx && modulesForLevel(m.level)[0] === key) return true; // entry point
  const i = MODULE_ORDER.indexOf(key);
  if(i <= 0) return true;
  return !!progress.completedModules[MODULE_ORDER[i-1]];
}
function markModuleComplete(key, score, total){
  const prev = progress.completedModules[key];
  if(!prev || score > prev.score){
    progress.completedModules[key] = { score, total };
  }
  saveProgress();
}
function nextModuleKey(){
  for(const key of MODULE_ORDER){
    if(!progress.completedModules[key] && isModuleUnlocked(key)) return key;
  }
  return MODULE_ORDER[0];
}
function levelProgress(level){
  const mods = modulesForLevel(level);
  const done = mods.filter(k => progress.completedModules[k]).length;
  return { done, total: mods.length, pct: mods.length ? Math.round(done/mods.length*100) : 0 };
}

function computeBadges(){
  const knownCount = Object.keys(progress.known).filter(k=>progress.known[k]).length;
  const completedCount = Object.keys(progress.completedModules).length;
  const examPassed = Object.keys(progress.exams||{}).filter(k => (progress.exams[k].best||0) >= CAPLE_PASS).length;
  return [
    {icon:'🎯', label:'Niveau évalué', done: placementDone()},
    {icon:'🏁', label:'1ᵉʳ module', done: completedCount>=1},
    {icon:'📚', label:'10 modules', done: completedCount>=10},
    {icon:'🏆', label:'Tous les modules', done: completedCount>=MODULE_ORDER.length},
    {icon:'🔤', label:'50 mots appris', done: knownCount>=50},
    {icon:'📖', label:'200 mots appris', done: knownCount>=200},
    {icon:'🧠', label:'50 mots en mémoire', done: srsMasteredCount()>=50},
    {icon:'🎤', label:'25 prononciations', done: progress.pronunciation.attempts>=25},
    {icon:'🎧', label:'Écoute x20', done: progress.listening.correct>=20},
    {icon:'🎓', label:'1 examen CAPLE réussi', done: examPassed>=1},
    {icon:'👑', label:'DUPLE C2 réussi', done: (progress.exams.duple||{}).best >= CAPLE_PASS},
  ];
}

/* ============================================================
   AUDIO — text-to-speech
   ============================================================ */
let ptVoice = null;
function pickVoice(){
  if(!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if(!voices || !voices.length) return null;
  return voices.find(v=>v.lang && v.lang.toLowerCase()==='pt-pt')
    || voices.find(v=>v.lang && v.lang.toLowerCase().startsWith('pt') && /portugal/i.test(v.name))
    || voices.find(v=>v.lang && v.lang.toLowerCase().startsWith('pt'))
    || null;
}
if('speechSynthesis' in window){
  ptVoice = pickVoice();
  window.speechSynthesis.onvoiceschanged = ()=>{ ptVoice = pickVoice(); };
}
function speak(text, rate){
  if(!('speechSynthesis' in window) || !text) return;
  try{
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'pt-PT';
    if(ptVoice) utter.voice = ptVoice;
    utter.rate = rate || 0.92;
    window.speechSynthesis.speak(utter);
  }catch(e){}
}
function speakBtnHtml(text, label){
  label = label || '🔊';
  return `<button type="button" class="speak-btn inline-flex items-center justify-center gap-1 h-6 px-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-[11px] text-neutral-500 dark:text-neutral-400 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 dark:hover:bg-white dark:hover:text-neutral-900 transition shrink-0" data-speak="${escapeAttr(text)}" title="Écouter">${label}</button>`;
}
document.addEventListener('click', (e)=>{
  const btn = e.target.closest('.speak-btn');
  if(btn){ speak(btn.dataset.speak); }
});

/* ============================================================
   AUDIO — speech recognition (mic pronunciation scoring)
   ============================================================ */
const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;
const micSupported = !!SpeechRecognitionCtor;

function normalizeText(s){
  return (s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z0-9 ]/g,'').replace(/\s+/g,' ').trim();
}
function levenshtein(a,b){
  const m=a.length, n=b.length;
  if(m===0) return n;
  if(n===0) return m;
  const dp = [];
  for(let i=0;i<=m;i++){ dp.push(new Array(n+1).fill(0)); dp[i][0]=i; }
  for(let j=0;j<=n;j++) dp[0][j]=j;
  for(let i=1;i<=m;i++){
    for(let j=1;j<=n;j++){
      dp[i][j] = a[i-1]===b[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[m][n];
}
function similarityScore(target, heard){
  const t = normalizeText(target), h = normalizeText(heard);
  if(!t.length) return 0;
  const dist = levenshtein(t,h);
  const maxLen = Math.max(t.length, h.length);
  return Math.max(0, Math.round((1 - dist/maxLen) * 100));
}

function renderMicExercise(mount, item, onScored){
  mount.innerHTML = `
    <div class="text-center">
      <div class="text-[11px] font-semibold tracking-widest uppercase text-neutral-400">Prononce à voix haute</div>
      <div class="font-display text-2xl md:text-3xl font-bold mt-2 text-neutral-900 dark:text-white">${item.pt}</div>
      <div class="text-neutral-500 dark:text-neutral-400 mt-1 text-sm">${item.fr || ''}</div>
      <button type="button" id="micListenBtn" class="mt-4 inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm font-semibold hover:border-neutral-900 dark:hover:border-white transition">🔊 Écouter le modèle</button>
      <div class="mt-7 flex flex-col items-center gap-3">
        <button type="button" id="micRecordBtn" class="w-16 h-16 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xl flex items-center justify-center hover:scale-105 transition disabled:opacity-30 disabled:hover:scale-100" title="Parler">🎤</button>
        <div class="text-[13px] text-neutral-500 dark:text-neutral-400 min-h-[18px]" id="micStatus"></div>
      </div>
      <div id="micFeedback" class="mt-3"></div>
    </div>`;
  mount.querySelector('#micListenBtn').addEventListener('click', ()=> speak(item.pt));
  const micBtn = mount.querySelector('#micRecordBtn');
  const statusEl = mount.querySelector('#micStatus');
  const fbEl = mount.querySelector('#micFeedback');

  if(!micSupported){
    micBtn.disabled = true;
    statusEl.textContent = "Reconnaissance vocale indisponible — utilise Chrome ou Edge.";
    if(onScored) setTimeout(()=> onScored(-1, ''), 100); // let quizzes continue
    return;
  }
  statusEl.textContent = "Clique sur le micro puis répète à voix haute.";
  const recognition = new SpeechRecognitionCtor();
  recognition.lang = 'pt-PT';
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;

  micBtn.addEventListener('click', ()=>{
    micBtn.classList.add('mic-listening');
    statusEl.textContent = "🎙️ Je t'écoute...";
    try{ recognition.start(); }catch(e){}
  });
  recognition.onresult = (event)=>{
    const results = event.results[0];
    let best=0, bestText='';
    for(let i=0;i<results.length;i++){
      const score = similarityScore(item.pt, results[i].transcript);
      if(score > best){ best = score; bestText = results[i].transcript; }
    }
    let cls, msg;
    if(best>=80){ cls='border-accent-200 dark:border-accent-800 bg-accent-50 dark:bg-accent-950/50 text-accent-900 dark:text-accent-200'; msg='🎉 Muito bem! Excellente prononciation.'; }
    else if(best>=55){ cls='border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300'; msg='👍 Presque ! Encore un petit effort.'; }
    else{ cls='border-rose-200 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300'; msg='🔁 À retravailler — réécoute et réessaie.'; }
    fbEl.innerHTML = `<div class="rounded-xl border ${cls} p-4 text-left max-w-sm mx-auto"><b class="block text-sm font-semibold mb-1">${msg}</b><span class="text-[12.5px] opacity-80">Compris : « ${bestText || '(rien détecté)'} » — similarité ${best}%</span></div>`;
    statusEl.textContent = "Tu peux réessayer, ou continuer.";
    progress.pronunciation.attempts++;
    progress.pronunciation.scoreSum += best;
    if(best>=80) progress.pronunciation.successes++;
    saveProgress();
    refreshProgressWidgets();
    if(onScored) onScored(best, bestText);
  };
  recognition.onerror = (event)=>{
    micBtn.classList.remove('mic-listening');
    let msg = "Une erreur est survenue. Réessaie.";
    if(event.error === 'not-allowed' || event.error === 'service-not-allowed') msg = "Accès au micro refusé — autorise le micro dans ton navigateur.";
    else if(event.error === 'no-speech') msg = "Rien entendu — parle un peu plus fort.";
    statusEl.textContent = msg;
  };
  recognition.onend = ()=>{ micBtn.classList.remove('mic-listening'); };
}

/* ============================================================
   SHARED CHROME
   ============================================================ */
function renderHeader(activeHref){
  const mount = document.getElementById('app-header');
  if(!mount) return;
  const due = typeof srsDueCount === 'function' ? srsDueCount() : 0;
  const links = [
    ["index.html","Parcours"],
    ["revision.html","Révision" + (due ? ` <span class="ml-1 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-accent-600 text-white text-[10px] font-bold">${due}</span>` : '')],
    ["exames.html","Examens"],
    ["alphabet.html","Alphabet"],
    ["jeux.html","Jeux"],
    ["prononciation.html","Prononciation"],
  ];
  mount.innerHTML = `
  <header class="sticky top-0 z-40 border-b border-neutral-200/70 dark:border-neutral-800/70 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md">
    <div class="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-4">
      <a href="index.html" class="flex items-center gap-2 font-display font-bold text-[15px] tracking-tight shrink-0">
        <span class="inline-block w-2 h-2 rounded-full bg-accent-600"></span>
        Português<span class="text-neutral-400 dark:text-neutral-500 font-medium">.zero</span>
      </a>
      <nav id="navLinks" class="hidden xl:flex items-center gap-0.5 text-[13.5px]">
        ${links.map(([href,label])=>`<a href="${href}" class="nav-link px-3 py-2 rounded-lg font-medium transition inline-flex items-center ${activeHref===href ? 'text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-900' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900'}">${label}</a>`).join('')}
      </nav>
      <div class="flex items-center gap-2 shrink-0">
        <span id="levelBadge" class="hidden sm:inline-flex items-center h-9 px-3 rounded-full text-[12px] font-semibold bg-accent-50 text-accent-800 dark:bg-accent-950 dark:text-accent-300 whitespace-nowrap">Niveau —</span>
        <button id="progressBtn" class="inline-flex items-center h-9 px-3 rounded-full text-[12px] font-semibold border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white transition"><span id="progressBadge">0%</span></button>
        <button id="themeToggle" class="w-9 h-9 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white transition" title="Basculer le thème">
          <svg id="iconMoon" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg id="iconSun" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
        </button>
        <button id="hamburger" class="xl:hidden w-9 h-9 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center" aria-label="menu">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>
    <nav id="mobileNav" class="hidden xl:hidden border-t border-neutral-200 dark:border-neutral-800 px-5 py-3 flex-col gap-1 text-sm bg-white dark:bg-neutral-950">
      ${links.map(([href,label])=>`<a href="${href}" class="px-3 py-2 rounded-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 flex items-center">${label}</a>`).join('')}
    </nav>
  </header>`;

  document.getElementById('hamburger').addEventListener('click', ()=>{
    const nav = document.getElementById('mobileNav');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
  });
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  document.getElementById('progressBtn').addEventListener('click', openProgressModal);
  syncThemeIcon();
}

function renderFooter(){
  const mount = document.getElementById('app-footer');
  if(!mount) return;
  mount.innerHTML = `
  <footer class="border-t border-neutral-200 dark:border-neutral-800 mt-10">
    <div class="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-wrap items-center justify-between gap-4">
      <div class="text-[13px] text-neutral-400">Português.zero — du niveau zéro au niveau bilingue, gratuitement.</div>
      <div class="text-[13px] text-neutral-400">Programme calqué sur le Referencial Camões PLE · Examens CAPLE · Boa sorte! 🇵🇹</div>
    </div>
  </footer>`;
}

function renderProgressModal(){
  const mount = document.getElementById('app-modal-root');
  if(!mount) return;
  mount.innerHTML = `
  <div id="progressModal" class="fixed inset-0 z-50 hidden items-center justify-center bg-neutral-900/40 backdrop-blur-sm p-4">
    <div class="w-full max-w-md bg-white dark:bg-neutral-900 rounded-3xl shadow-soft border border-neutral-200 dark:border-neutral-800 p-7 relative max-h-[85vh] overflow-y-auto thin-scroll">
      <button id="closeProgressModal" class="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">✕</button>
      <div class="text-[11px] font-semibold tracking-widest uppercase text-accent-600 dark:text-accent-400 mb-1">Ta progression</div>
      <h3 class="font-display text-xl font-bold mb-2">Tableau de bord</h3>
      <p class="text-[13px] text-neutral-500 dark:text-neutral-400 mb-5 leading-relaxed">Sauvegardée dans ce navigateur — aucun compte requis.</p>
      <div class="space-y-4">
        <div>
          <div class="flex items-center justify-between text-sm mb-2"><span class="text-neutral-500 dark:text-neutral-400">Modules terminés</span><span class="font-semibold" id="modalModulesStat">0 / ${MODULE_ORDER.length}</span></div>
          <div class="h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden"><div id="modalModulesFill" class="h-full bg-accent-600 rounded-full transition-all duration-500" style="width:0%"></div></div>
        </div>
        <div>
          <div class="flex items-center justify-between text-sm mb-2"><span class="text-neutral-500 dark:text-neutral-400">Vocabulaire rencontré</span><span class="font-semibold" id="modalVocabStat">0 / 0</span></div>
          <div class="h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden"><div id="modalVocabFill" class="h-full bg-accent-600 rounded-full transition-all duration-500" style="width:0%"></div></div>
        </div>
        <div class="grid grid-cols-2 gap-3 pt-1">
          <div class="rounded-xl border border-neutral-200 dark:border-neutral-800 p-3"><div class="text-[11px] text-neutral-500 dark:text-neutral-400 mb-1">À réviser aujourd'hui</div><div class="font-display font-bold text-lg" id="modalDueStat">—</div></div>
          <div class="rounded-xl border border-neutral-200 dark:border-neutral-800 p-3"><div class="text-[11px] text-neutral-500 dark:text-neutral-400 mb-1">Mots mémorisés</div><div class="font-display font-bold text-lg" id="modalMasteredStat">—</div></div>
          <div class="rounded-xl border border-neutral-200 dark:border-neutral-800 p-3"><div class="text-[11px] text-neutral-500 dark:text-neutral-400 mb-1">Précision récente</div><div class="font-display font-bold text-lg" id="modalAccStat">—</div></div>
          <div class="rounded-xl border border-neutral-200 dark:border-neutral-800 p-3"><div class="text-[11px] text-neutral-500 dark:text-neutral-400 mb-1">Prononciation moy.</div><div class="font-display font-bold text-lg" id="modalMicStat">—</div></div>
        </div>
        <div class="rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 p-3">
          <div class="text-[11px] text-neutral-500 dark:text-neutral-400 mb-1">Mode d'entraînement actuel</div>
          <div class="font-display font-bold text-[15px]" id="modalTierStat">—</div>
          <div class="text-[11.5px] text-neutral-400 mt-1" id="modalTierHint"></div>
        </div>
      </div>
      <div class="mt-6"><div class="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 mb-2">Badges</div><div id="badgeList" class="flex flex-wrap gap-1.5"></div></div>
      <button id="resetProgressBtn" class="mt-7 w-full py-2.5 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-sm font-semibold hover:bg-rose-50 dark:hover:bg-rose-950/40 transition">Réinitialiser ma progression</button>
    </div>
  </div>`;
  document.getElementById('closeProgressModal').addEventListener('click', closeProgressModal);
  document.getElementById('progressModal').addEventListener('click', (e)=>{ if(e.target.id==='progressModal') closeProgressModal(); });
  document.getElementById('resetProgressBtn').addEventListener('click', ()=>{
    if(confirm('Réinitialiser toute ta progression, y compris ton niveau ? Tu devras refaire le test de positionnement.')){
      progress = defaultProgress();
      saveProgress();
      location.href = 'placement.html?required=1';
    }
  });
}
function openProgressModal(){ const m=document.getElementById('progressModal'); if(m){ m.classList.remove('hidden'); m.classList.add('flex'); } }
function closeProgressModal(){ const m=document.getElementById('progressModal'); if(m){ m.classList.add('hidden'); m.classList.remove('flex'); } }

function refreshProgressWidgets(){
  const knownCount = Object.keys(progress.known).filter(k=>progress.known[k]).length;
  const completedCount = Object.keys(progress.completedModules).length;
  const modPct = Math.round(completedCount/MODULE_ORDER.length*100);
  const set = (id,txt)=>{ const e=document.getElementById(id); if(e) e.textContent = txt; };

  set('progressBadge', modPct + '%');
  set('modalModulesStat', completedCount + ' / ' + MODULE_ORDER.length);
  const mf = document.getElementById('modalModulesFill'); if(mf) mf.style.width = modPct + '%';
  set('modalVocabStat', knownCount + ' / ' + TOTAL_WORDS);
  const vf = document.getElementById('modalVocabFill'); if(vf) vf.style.width = (TOTAL_WORDS ? Math.round(knownCount/TOTAL_WORDS*100) : 0) + '%';

  if(typeof srsDueCount === 'function'){
    set('modalDueStat', srsDueCount() + ' mots');
    set('modalMasteredStat', srsMasteredCount() + ' mots');
  }
  if(typeof adaptAccuracy === 'function'){
    set('modalAccStat', progress.stats.answered >= 4 ? Math.round(adaptAccuracy()*100) + '%' : '—');
    set('modalTierStat', adaptLabel());
    const hints = {
      1:"Questions à choix multiples — on consolide les bases.",
      2:"Choix multiples et textes à trous.",
      3:"Tu dois maintenant écrire tes réponses.",
      4:"Traduction libre et dictée — niveau maximal.",
    };
    set('modalTierHint', hints[adaptTier()] || '');
  }
  set('modalMicStat', progress.pronunciation.attempts ? Math.round(progress.pronunciation.scoreSum/progress.pronunciation.attempts) + '%' : '—');

  const levelBadge = document.getElementById('levelBadge');
  if(levelBadge) levelBadge.textContent = placementDone() ? ('Niveau ' + progress.level.code) : 'Niveau —';

  const badgeList = document.getElementById('badgeList');
  if(badgeList){
    badgeList.innerHTML = computeBadges().map(b=>`<span class="inline-flex items-center gap-1 text-[11.5px] font-medium px-2.5 py-1.5 rounded-full border ${b.done ? 'border-accent-200 dark:border-accent-800 bg-accent-50 dark:bg-accent-950/60 text-accent-800 dark:text-accent-300' : 'border-neutral-200 dark:border-neutral-800 text-neutral-400 dark:text-neutral-600'}">${b.icon} ${b.label}</span>`).join('');
  }
}

/** Call once per page. Returns false if the page redirected to the placement test. */
function initSharedChrome(activeHref, opts){
  opts = opts || {};
  if(!opts.skipPlacementGate && !requirePlacement()) return false;
  renderHeader(activeHref);
  renderFooter();
  renderProgressModal();
  refreshProgressWidgets();
  const scrollbar = document.getElementById('scrollbar');
  if(scrollbar){
    window.addEventListener('scroll', ()=>{
      const h = document.documentElement;
      const denom = h.scrollHeight - h.clientHeight;
      scrollbar.style.width = (denom > 0 ? h.scrollTop / denom * 100 : 0) + '%';
    });
  }
  return true;
}

/* ============================================================
   FLASHCARDS
   ============================================================ */
function renderFlashGrid(mount, items, moduleKey){
  mount.innerHTML = items.map(([emoji,pt,fr])=>{
    const key = wordKey(moduleKey, pt);
    const isKnown = !!progress.known[key];
    const card = typeof srsGet === 'function' ? srsGet(key) : null;
    const dueLabel = card ? srsDueLabel(card) : '';
    return `
    <div class="flip h-32 cursor-pointer" data-pt="${escapeAttr(pt)}">
      <div class="flip-inner">
        <div class="flip-face flip-front rounded-2xl border ${isKnown ? 'border-accent-300 dark:border-accent-800' : 'border-neutral-200 dark:border-neutral-800'} bg-white dark:bg-neutral-900 flex flex-col items-center justify-center gap-1 p-3 text-center relative">
          <div class="absolute top-2 left-2">${speakBtnHtml(pt)}</div>
          <div class="absolute top-2 right-2 text-accent-600 text-xs ${isKnown?'':'hidden'}">✓</div>
          <span class="text-xl">${emoji}</span>
          <b class="font-display text-[14px] font-semibold text-neutral-900 dark:text-white leading-tight">${fr}</b>
          ${dueLabel ? `<span class="absolute bottom-1.5 text-[9.5px] text-neutral-300 dark:text-neutral-700">${dueLabel}</span>` : ''}
        </div>
        <div class="flip-face flip-back rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex flex-col items-center justify-center gap-2 p-3 text-center">
          <span class="font-display font-semibold text-[14.5px] inline-flex items-center gap-1.5 leading-tight">${pt}<span class="text-white/70 dark:text-neutral-500">${speakBtnHtml(pt)}</span></span>
          <button type="button" class="know-btn text-[11px] font-semibold px-2.5 py-1 rounded-full border ${isKnown ? 'bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white border-transparent' : 'border-white/40 dark:border-neutral-400 text-white/90 dark:text-neutral-700'}">${isKnown?'✓ Je connais':'Marquer comme su'}</button>
        </div>
      </div>
    </div>`;
  }).join('');
  mount.querySelectorAll('.flip').forEach(c=>{
    c.addEventListener('click', (e)=>{
      if(e.target.classList.contains('know-btn') || e.target.closest('.speak-btn')) return;
      c.classList.toggle('is-flipped');
    });
  });
  mount.querySelectorAll('.know-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      const card = btn.closest('.flip');
      const key = wordKey(moduleKey, card.dataset.pt);
      progress.known[key] = !progress.known[key];
      if(progress.known[key] && typeof srsRecord === 'function' && !srsGet(key)) srsRecord(key, 4);
      saveProgress();
      refreshProgressWidgets();
      renderFlashGrid(mount, items, moduleKey);
    });
  });
}

/* ============================================================
   GRAMMAR TABLES
   ============================================================ */
function renderGrammarTable(table){
  if(table.kind === 'simple'){
    return `
      <div class="mb-7 overflow-x-auto thin-scroll">
        <h3 class="font-display font-semibold mb-3">${table.title}</h3>
        <table class="w-full text-sm min-w-[420px]">
          <tr class="text-left text-[11px] uppercase tracking-wide text-neutral-400">${table.headers.map(h=>`<th class="pb-2 pr-3 font-medium">${h}</th>`).join('')}</tr>
          ${table.rows.map(r=>`<tr class="border-t border-neutral-100 dark:border-neutral-800">${r.map((c,i)=>`<td class="py-2.5 pr-3 align-top ${i===0?'text-neutral-500 dark:text-neutral-400':'font-semibold'}">${c}</td>`).join('')}</tr>`).join('')}
        </table>
      </div>`;
  }
  if(table.kind === 'conj'){
    return `
      <div class="mb-7 overflow-x-auto thin-scroll">
        <h3 class="font-display font-semibold mb-3">${table.title}</h3>
        <table class="w-full text-sm min-w-[460px]">
          <tr class="text-left text-[11px] uppercase tracking-wide text-neutral-400"><th class="pb-2 pr-3 font-medium">Pronom</th>${table.cols.map(c=>`<th class="pb-2 pr-3 font-medium">${c.name}</th>`).join('')}</tr>
          ${table.pronouns.map((p,i)=>`<tr class="border-t border-neutral-100 dark:border-neutral-800"><td class="py-2.5 pr-3 text-neutral-500 dark:text-neutral-400 whitespace-nowrap">${p}</td>${table.cols.map(c=>`<td class="py-2.5 pr-3 font-semibold whitespace-nowrap"><span class="inline-flex items-center gap-1.5">${c.forms[i]} ${speakBtnHtml(c.forms[i])}</span></td>`).join('')}</tr>`).join('')}
        </table>
      </div>`;
  }
  return '';
}

/* ============================================================
   QUIZ ENGINE — mcq / listen / speak / write / gap / dictation / reading
   Records every answer into the SRS and the adaptive engine.
   ============================================================ */
function runQuiz(root, items, opts){
  opts = opts || {};
  let index = 0, score = 0;
  const fill = root.querySelector('#qProgressFill');
  const area = root.querySelector('#qArea');
  const result = root.querySelector('#qResult');

  function record(item, correct, meta){
    progress.stats.answered++;
    if(correct) progress.stats.correct++;
    if(typeof adaptRecord === 'function' && opts.adaptive !== false) adaptRecord(correct, item.type);
    if(item.srsKey && typeof srsRecord === 'function' && opts.srs !== false){
      srsRecord(item.srsKey, qualityFromAnswer(correct, item.type, meta));
    }
    saveProgress();
  }
  function advance(){
    index++;
    if(index < items.length) renderQ(); else finish();
  }
  function header(extra){
    return `<div class="flex items-center justify-between text-[11px] font-semibold text-neutral-400 mb-3"><span>Question ${index+1} / ${items.length}</span><span class="uppercase tracking-wide">${extra||''}</span></div>`;
  }

  function renderQ(){
    result.classList.add('hidden');
    result.innerHTML = '';        // drop any leftover result markup from a previous run
    area.classList.remove('hidden');
    const item = items[index];
    if(fill) fill.style.width = (index/items.length*100)+'%';

    /* --- speak --- */
    if(item.type === 'speak'){
      area.innerHTML = header('prononciation') + `<div id="speakMount"></div>
        <div class="text-center mt-5"><button type="button" id="speakNextBtn" class="inline-flex items-center gap-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-200 transition">Continuer →</button></div>`;
      let scored = false, lastScore = 0;
      renderMicExercise(area.querySelector('#speakMount'), item, (s)=>{ if(s>=0){ scored = true; lastScore = s; } });
      area.querySelector('#speakNextBtn').addEventListener('click', ()=>{
        const ok = scored && lastScore >= 55;
        if(ok) score++;
        if(scored) record(item, ok);
        advance();
      });
      return;
    }

    /* --- write --- */
    if(item.type === 'write'){
      area.innerHTML = header('traduction') + `<div id="exMount"></div>`;
      renderWriteExercise(area.querySelector('#exMount'), item, (res)=>{
        if(res.correct) score++;
        record(item, res.correct, {typo: res.typo || res.accentOnly});
        advance();
      });
      return;
    }

    /* --- gap --- */
    if(item.type === 'gap'){
      area.innerHTML = header('texte à trous') + `<div id="exMount"></div>`;
      renderGapExercise(area.querySelector('#exMount'), item, (res)=>{
        if(res.correct) score++;
        record(item, res.correct, {typo: res.typo || res.accentOnly});
        advance();
      });
      return;
    }

    /* --- dictation --- */
    if(item.type === 'dictation'){
      area.innerHTML = header('dictée') + `<div id="exMount"></div>`;
      renderDictationExercise(area.querySelector('#exMount'), item, (res)=>{
        if(res.correct) score++;
        record(item, res.correct, {typo: res.typo || res.accentOnly});
        advance();
      });
      return;
    }

    /* --- reading --- */
    if(item.type === 'reading'){
      area.innerHTML = header('compréhension') + `<div id="exMount"></div>`;
      renderReadingExercise(area.querySelector('#exMount'), item, (res)=>{
        if(res.correct) score++;
        record(item, res.correct);
        advance();
      });
      return;
    }

    /* --- mcq / listen (default) --- */
    const isListen = item.type === 'listen' || (!item.type && item.audio);
    area.innerHTML = header(isListen ? 'écoute' : '') + `
      <div class="font-display text-lg font-semibold mb-4">${item.q}</div>
      ${isListen ? `<button type="button" id="qListenBtn" class="mb-4 inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm font-semibold hover:border-neutral-900 dark:hover:border-white transition">🔊 Écouter</button>
        <button type="button" id="qSlowBtn" class="mb-4 ml-1.5 inline-flex items-center gap-1 rounded-xl border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-[12px] font-semibold text-neutral-500 hover:border-neutral-900 dark:hover:border-white transition">🐢</button>` : ''}
      <div class="grid gap-2">${item.opts.map((o,i)=>`<button type="button" data-i="${i}" class="quiz-opt w-full text-left px-4 py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-[14px] font-medium hover:border-neutral-900 dark:hover:border-white transition">${o}</button>`).join('')}</div>`;
    if(isListen){
      area.querySelector('#qListenBtn').addEventListener('click', ()=> speak(item.audio));
      area.querySelector('#qSlowBtn').addEventListener('click', ()=> speak(item.audio, 0.6));
      setTimeout(()=> speak(item.audio), 300);
    }
    area.querySelectorAll('.quiz-opt').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const chosen = parseInt(btn.dataset.i);
        area.querySelectorAll('.quiz-opt').forEach(b=>b.disabled=true);
        const correct = chosen === item.a;
        if(correct){ score++; btn.className='quiz-opt w-full text-left px-4 py-3.5 rounded-xl border-2 border-accent-500 bg-accent-50 dark:bg-accent-950/50 text-[14px] font-medium'; }
        else{
          btn.className='quiz-opt w-full text-left px-4 py-3.5 rounded-xl border-2 border-rose-300 bg-rose-50 dark:bg-rose-950/40 text-[14px] font-medium';
          const good = area.querySelector(`.quiz-opt[data-i="${item.a}"]`);
          if(good) good.className='quiz-opt w-full text-left px-4 py-3.5 rounded-xl border-2 border-accent-500 bg-accent-50 dark:bg-accent-950/50 text-[14px] font-medium';
        }
        record(item, correct);
        setTimeout(advance, correct ? 650 : 1400);
      });
    });
  }
  function finish(){
    area.classList.add('hidden');
    if(fill) fill.style.width='100%';
    result.classList.remove('hidden');
    refreshProgressWidgets();
    if(opts.onFinish) opts.onFinish(score, items.length);
  }
  if(!items.length){ finish(); return; }
  renderQ();
}

/* ============================================================
   GAMES
   ============================================================ */
function startMemoryGame(gridEl, statsEl, pool, count){
  count = Math.min(count || 8, pool.length);
  let moves=0, matched=0, selected=[];
  function updateStats(){ statsEl.textContent = `${moves} coups · ${matched} / ${count} paires trouvées`; }
  function start(){
    moves=0; matched=0; selected=[];
    const pairs = shuffle(pool).slice(0,count);
    const cards = shuffle([
      ...pairs.map((p,i)=>({pair:i, text:p.pt, lang:'pt'})),
      ...pairs.map((p,i)=>({pair:i, text:p.fr, lang:'fr'})),
    ]);
    gridEl.innerHTML = cards.map(c=>`<button type="button" class="memory-card text-[11px] leading-tight font-semibold rounded-xl border border-neutral-200 dark:border-neutral-800 p-2 min-h-[56px] hover:border-neutral-900 dark:hover:border-white transition" data-pair="${c.pair}" data-lang="${c.lang}">${c.text}</button>`).join('');
    gridEl.querySelectorAll('.memory-card').forEach(btn=> btn.addEventListener('click', onClick));
    updateStats();
  }
  function onClick(e){
    const btn = e.currentTarget;
    if(btn.classList.contains('opacity-40') || selected.includes(btn) || selected.length===2) return;
    btn.classList.add('border-amber-400','bg-amber-50','dark:bg-amber-950/40');
    selected.push(btn);
    if(selected.length===2){
      moves++;
      const [a,b] = selected;
      const isMatch = a.dataset.pair===b.dataset.pair && a.dataset.lang!==b.dataset.lang;
      if(isMatch){
        [a,b].forEach(x=>{ x.classList.remove('border-amber-400','bg-amber-50','dark:bg-amber-950/40'); x.classList.add('opacity-40','border-accent-400','pointer-events-none'); });
        selected=[]; matched++; updateStats();
        if(matched===count) statsEl.textContent += ' — 🎉 Terminé !';
      } else {
        setTimeout(()=>{ [a,b].forEach(x=> x.classList.remove('border-amber-400','bg-amber-50','dark:bg-amber-950/40')); selected=[]; }, 650);
        updateStats();
      }
    }
  }
  start();
  return start;
}

function startListeningGame(playBtn, optsEl, statsEl, pool){
  let current = null;
  function updateStats(){ statsEl.textContent = `${progress.listening.correct} correct sur ${progress.listening.total} · série ${progress.listening.streak} · record ${progress.listening.bestStreak}`; }
  function pickRandom(exclude){ let it,tries=0; do{ it=pool[Math.floor(Math.random()*pool.length)]; tries++; }while(exclude && it.pt===exclude.pt && pool.length>1 && tries<50); return it; }
  function round(){
    current = pickRandom();
    const distractors=[]; let guard=0;
    while(distractors.length<3 && guard<200){ guard++; const d=pickRandom(current); if(d.fr!==current.fr && !distractors.some(x=>x.fr===d.fr)) distractors.push(d); }
    const options = shuffle([current, ...distractors]);
    optsEl.innerHTML = options.map(o=>`<button type="button" class="quiz-opt w-full text-left px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 text-[13.5px] font-medium hover:border-neutral-900 dark:hover:border-white transition" data-fr="${escapeAttr(o.fr)}">${o.fr}</button>`).join('');
    optsEl.querySelectorAll('.quiz-opt').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        optsEl.querySelectorAll('.quiz-opt').forEach(b=>b.disabled=true);
        const correct = btn.dataset.fr === current.fr;
        btn.className = 'quiz-opt w-full text-left px-4 py-3 rounded-xl border-2 text-[13.5px] font-medium ' + (correct ? 'border-accent-500 bg-accent-50 dark:bg-accent-950/50' : 'border-rose-300 bg-rose-50 dark:bg-rose-950/40');
        if(!correct){
          optsEl.querySelectorAll('.quiz-opt').forEach(b=>{ if(b.dataset.fr===current.fr) b.className='quiz-opt w-full text-left px-4 py-3 rounded-xl border-2 border-accent-500 bg-accent-50 dark:bg-accent-950/50 text-[13.5px] font-medium'; });
        }
        progress.listening.total++;
        if(correct){ progress.listening.correct++; progress.listening.streak++; if(progress.listening.streak>progress.listening.bestStreak) progress.listening.bestStreak=progress.listening.streak; }
        else{ progress.listening.streak=0; }
        saveProgress(); refreshProgressWidgets(); updateStats();
        setTimeout(round, 1100);
      });
    });
    speak(current.pt);
  }
  playBtn.addEventListener('click', ()=> current && speak(current.pt));
  round(); updateStats();
}

function startSentenceGame(mount, statsEl, pool){
  let current = null, built = [], bank = [];
  function updateStats(){ statsEl.textContent = `${progress.sentence.correct} / ${progress.sentence.total} phrases correctes`; }
  function normalize(s){ return s.toLowerCase().replace(/[.,!?]/g,'').trim(); }
  function render(){
    built = [];
    current = pool[Math.floor(Math.random()*pool.length)];
    bank = shuffle(current.pt.split(' '));
    mount.innerHTML = `
      <div class="text-center mb-4">
        <div class="text-[11px] font-semibold tracking-widest uppercase text-neutral-400">Reconstitue la phrase</div>
        <div class="text-neutral-500 dark:text-neutral-400 text-sm mt-1 inline-flex items-center gap-1.5">${current.fr} ${speakBtnHtml(current.pt,'🔊 modèle')}</div>
      </div>
      <div id="sentAnswer" class="min-h-[52px] flex flex-wrap gap-2 p-3 rounded-xl border-2 border-dashed border-neutral-200 dark:border-neutral-800 mb-4"></div>
      <div id="sentBank" class="flex flex-wrap gap-2 justify-center mb-5"></div>
      <div class="flex justify-center gap-2">
        <button type="button" id="sentCheck" class="inline-flex items-center gap-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2.5 text-sm font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-200 transition">Vérifier</button>
        <button type="button" id="sentClear" class="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-5 py-2.5 text-sm font-semibold hover:border-neutral-900 dark:hover:border-white transition">Effacer</button>
      </div>
      <div id="sentFeedback" class="mt-4 text-center"></div>`;
    renderBank();
  }
  function renderBank(){
    mount.querySelector('#sentAnswer').innerHTML = built.map((w,i)=>`<button type="button" data-i="${i}" class="ans-word px-3 py-1.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold">${w}</button>`).join('') || `<span class="text-neutral-300 dark:text-neutral-700 text-sm">Clique sur les mots ci-dessous…</span>`;
    mount.querySelector('#sentBank').innerHTML = bank.map((w,i)=>`<button type="button" data-i="${i}" class="bank-word px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-sm font-semibold hover:border-neutral-900 dark:hover:border-white transition">${w}</button>`).join('');
    mount.querySelectorAll('.bank-word').forEach(btn=>{
      btn.addEventListener('click', ()=>{ const i=parseInt(btn.dataset.i); built.push(bank[i]); bank.splice(i,1); renderBank(); });
    });
    mount.querySelectorAll('.ans-word').forEach(btn=>{
      btn.addEventListener('click', ()=>{ const i=parseInt(btn.dataset.i); bank.push(built[i]); built.splice(i,1); renderBank(); });
    });
  }
  mount.addEventListener('click', (e)=>{
    if(e.target.id==='sentClear'){ bank = shuffle([...built, ...bank]); built=[]; renderBank(); }
    if(e.target.id==='sentCheck'){
      const fb = mount.querySelector('#sentFeedback');
      const ok = normalize(built.join(' ')) === normalize(current.pt);
      progress.sentence.total++;
      if(ok) progress.sentence.correct++;
      saveProgress(); refreshProgressWidgets(); updateStats();
      fb.innerHTML = ok
        ? `<span class="text-accent-700 dark:text-accent-400 font-semibold text-sm">🎉 Correct !</span>`
        : `<span class="text-rose-600 dark:text-rose-400 font-semibold text-sm">Pas tout à fait — réponse : « ${current.pt} »</span>`;
      setTimeout(render, 1500);
    }
  });
  render(); updateStats();
}
