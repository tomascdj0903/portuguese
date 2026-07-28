/* ============================================================
   Português do Zero — shared/data-core.js
   Foundations shared by every level: the alphabet, phonetics,
   false friends, and the module registry that the six
   curriculum files fill in.

   Curriculum design follows the Referencial Camões PLE (Camões
   I.P., 2017), the official European-Portuguese reference level
   description aligned to the CEFR. Two consequences worth
   knowing, because they contradict what most courses do:
     - There is NO past tense at A1. None.
     - The progressive is "estar a + infinitivo", never the
       gerund (that is Brazilian).
   ============================================================ */

const LEVELS = ['A1','A2','B1','B2','C1','C2'];
const LEVEL_INFO = {
  A1: { name:'Iniciação',  fr:'Découverte',        blurb:"Se présenter, poser des questions simples, survivre au quotidien.", exam:'ACESSO' },
  A2: { name:'Elementar',  fr:'Élémentaire',       blurb:"Raconter au passé, faire ses courses, se débrouiller partout.", exam:'CIPLE' },
  B1: { name:'Limiar',     fr:'Seuil',             blurb:"Donner son avis, gérer l'imprévu, comprendre l'essentiel des médias.", exam:'DEPLE' },
  B2: { name:'Vantagem',   fr:'Avancé',            blurb:"Argumenter, nuancer, suivre une conversation entre natifs.", exam:'DIPLE' },
  C1: { name:'Autonomia',  fr:'Autonome',          blurb:"S'exprimer sans chercher ses mots, y compris sur des sujets complexes.", exam:'DAPLE' },
  C2: { name:'Mestria',    fr:'Maîtrise',          blurb:"Saisir l'ironie, l'implicite et les registres. Niveau quasi natif.", exam:'DUPLE' },
};

/* Module registry — the curriculum files call defineModule() in order. */
const MODULE_DATA = {};
const MODULE_ORDER = [];
function defineModule(key, def){
  MODULE_DATA[key] = def;
  MODULE_ORDER.push(key);
}
function modulesForLevel(level){ return MODULE_ORDER.filter(k => MODULE_DATA[k].level === level); }

/* ---------- Alphabet: how each letter is NAMED out loud in
   European Portuguese, plus an example word ---------- */
const alphaData = [
  ["A","á","a comme dans « papa »","água"],
  ["B","bê","","bom"],
  ["C","cê","« k » ou « ss » devant e/i","casa"],
  ["D","dê","","dia"],
  ["E","é","ouvert ou fermé selon la place","ela"],
  ["F","efe","","fácil"],
  ["G","gê","« gu » ou « j » devant e/i","gato"],
  ["H","agá","toujours muet","hoje"],
  ["I","i","comme le « i » français","isto"],
  ["J","jota","comme le « j » français","já"],
  ["K","cápa","seulement mots étrangers","kiwi"],
  ["L","ele","« l » sombre en fin de mot","livro"],
  ["M","eme","","mãe"],
  ["N","ene","","não"],
  ["O","ó","ouvert ou fermé selon la place","olá"],
  ["P","pê","","pão"],
  ["Q","quê","toujours suivi de u","quando"],
  ["R","erre","guttural en début de mot","rua"],
  ["S","esse","« ss » ou « ch » en fin de mot","sim"],
  ["T","tê","","tudo"],
  ["U","u","comme le « ou » français","último"],
  ["V","vê","","vida"],
  ["W","dâblio","seulement mots étrangers","wi-fi"],
  ["X","xis","« ch » le plus souvent","caixa"],
  ["Y","ípsilon","seulement mots étrangers","yoga"],
  ["Z","zê","","zero"],
];

const soundData = [
  ["ã / õ","Voyelles nasales","comme « an »/« on » français mais prononcé dans le nez, sans fermer avec un « n ».","pão","não"],
  ["ão","Diphtongue nasale","le son qui n'existe pas en français : un « a » nasal qui glisse vers « ou ». Le piège n°1 du francophone.","pão","lição"],
  ["lh","Comme « ll » espagnol","proche du « ill » français dans « fille ».","trabalho","filho"],
  ["nh","Comme le « gn » français","identique au son de « montagne ».","amanhã","vinho"],
  ["ç","Toujours « ss »","jamais « k » ni « z ».","começar","almoço"],
  ["x","Généralement « ch »","comme en français. Entre deux voyelles, parfois « z » ou « ks ».","caixa","táxi"],
  ["r / rr","Guttural, dans la gorge","en début de mot ou en « rr » — comme le « r » français.","rua","carro"],
  ["-r-","Roulé bref","entre deux voyelles, un « r » battu qui n'existe pas en français. C'est ce qui distingue caro de carro.","caro","pera"],
  ["s final","Souvent « ch » chuintant","la grande différence avec l'accent brésilien, qui dit « s ».","livros","português"],
  ["e final","Quasi muet / avalé","au Portugal, contre un « i » prononcé au Brésil.","tarde","noite"],
  ["l final","« l » sombre","prononcé au fond de la bouche, pas le « l » clair français.","Portugal","mil"],
];

const ipaData = [
  ["/a/","a","casa","« a » de « papa »"],
  ["/ɐ/","a atone","para","« a » bref et relâché"],
  ["/ɛ/","é, e ouvert","café","« è » ouvert, comme « père »"],
  ["/e/","ê, e fermé","medo","« é » fermé, comme « été »"],
  ["/ɨ/","e final atone","de","voyelle presque muette, propre au Portugal"],
  ["/i/","i","vida","« i » français"],
  ["/ɔ/","ó, o ouvert","avó","« o » ouvert, comme « bord »"],
  ["/o/","ô, o fermé","avô","« o » fermé, comme « beau »"],
  ["/u/","u, o final atone","tudo","« ou » français"],
  ["/ɐ̃/","ã, am, an","maçã","nasale, « an » bref"],
  ["/ẽ/","em, en","tempo","nasale, proche de « in »"],
  ["/õ/","om, on","bom","nasale, proche de « on »"],
  ["/ũ/","um, un","algum","« ou » nasalisé"],
  ["/ɐ̃w̃/","ão","pão","diphtongue nasale — inexistante en français"],
  ["/ɐ̃j̃/","ãe","mãe","diphtongue nasale"],
  ["/õj̃/","õe","põe","diphtongue nasale"],
  ["/ʎ/","lh","trabalho","« ill » de « fille »"],
  ["/ɲ/","nh","vinho","« gn » de « montagne »"],
  ["/ʃ/","x, ch, s final","chá","« ch » français"],
  ["/ʒ/","j, ge, gi","já","« j » français"],
  ["/ʁ/","r initial, rr","rua","« r » guttural, comme en français"],
  ["/ɾ/","-r- entre voyelles","caro","« r » battu, bref — n'existe pas en français"],
  ["/ɫ/","l final","Portugal","« l » sombre, vélarisé"],
];

const pronouns5 = ["eu","tu","ele/ela/você","nós","eles/elas/vocês"];

/* ---------- False friends: French ↔ European Portuguese ----------
   Ordered by how much damage they do in real conversation. */
const fauxAmis = [
  ["mais","« plus » (quantité)","mais (conjonction)","LE piège n°1. « mais » = plus. Pour dire « mais », c'est <b>mas</b>."],
  ["puxe","« Tirer » (sur une porte)","pousser","Sur toutes les portes du Portugal. Pousser se dit <b>empurre</b>."],
  ["esquisito","« Bizarre / étrange »","exquis","Dire d'un plat qu'il est esquisito, c'est vexer le cuisinier."],
  ["constipado","« Enrhumé »","constipé","« Estou constipado » = j'ai un rhume. Rien de digestif."],
  ["assistir a","« Regarder » (un film)","assister / aider","Assistir ao filme = regarder le film."],
  ["procurar","« Chercher »","procurer","Estou à procura de = je cherche."],
  ["acordar","« Se réveiller »","accorder","Acordo às sete = je me réveille à sept heures."],
  ["pretender","« Avoir l'intention de »","prétendre","Pretendo viajar = j'ai l'intention de voyager."],
  ["balcão","« Comptoir »","balcon","Le balcon se dit <b>varanda</b>."],
  ["carta","« Lettre » (courrier)","carte","La carte se dit <b>mapa</b> ou <b>cartão</b>."],
  ["discussão","« Dispute »","discussion","Une discussion calme, c'est <b>conversa</b>."],
  ["pasta","« Chemise / dossier »","pâtes","Les pâtes se disent <b>massa</b>."],
  ["chatear","« Ennuyer / agacer »","bavarder (chatter)","« Estou chateado » = je suis contrarié."],
  ["esperto","« Malin / intelligent »","expert","Un expert se dit <b>perito</b> ou <b>especialista</b>."],
  ["camisola","« Pull »","camisole","Au Portugal, c'est le pull. Le maillot de foot aussi."],
  ["rapariga","« Jeune fille » (neutre)","—","Parfaitement neutre au Portugal, contrairement au Brésil."],
];

/* ---------- EP vs BP: the vocabulary splits that matter ---------- */
const epVsBp = [
  ["comboio","trem","train"],
  ["autocarro","ônibus","bus"],
  ["pequeno-almoço","café da manhã","petit-déjeuner"],
  ["telemóvel","celular","téléphone portable"],
  ["casa de banho","banheiro","toilettes / salle de bain"],
  ["frigorífico","geladeira","réfrigérateur"],
  ["fato","terno","costume"],
  ["ecrã","tela","écran"],
  ["desporto","esporte","sport"],
  ["rapariga","garota","jeune fille"],
  ["fixe","legal","cool / sympa"],
  ["sandes","sanduíche","sandwich"],
  ["boleia","carona","auto-stop"],
  ["chávena","xícara","tasse"],
];

/* ---------- Sentence-builder game pool (grows with level) ---------- */
const SENTENCE_POOL = [
  {pt:"Eu chamo-me Ana", fr:"je m'appelle Ana", level:"A1"},
  {pt:"Sou francesa", fr:"je suis française", level:"A1"},
  {pt:"Tenho vinte anos", fr:"j'ai vingt ans", level:"A1"},
  {pt:"Onde fica a estação?", fr:"où est la gare ?", level:"A1"},
  {pt:"Estou a aprender português", fr:"je suis en train d'apprendre le portugais", level:"A1"},
  {pt:"Vou ao supermercado", fr:"je vais au supermarché", level:"A1"},
  {pt:"A minha mãe mora no Porto", fr:"ma mère habite à Porto", level:"A1"},
  {pt:"Queria um café, se faz favor", fr:"je voudrais un café, s'il vous plaît", level:"A2"},
  {pt:"Ontem fui ao cinema", fr:"hier je suis allé au cinéma", level:"A2"},
  {pt:"Quando era pequena, vivia em Lisboa", fr:"quand j'étais petite, je vivais à Lisbonne", level:"A2"},
  {pt:"Ele deu-me um livro", fr:"il m'a donné un livre", level:"A2"},
  {pt:"Não me lembro do nome dele", fr:"je ne me souviens pas de son nom", level:"A2"},
  {pt:"É melhor falarmos amanhã", fr:"il vaut mieux que nous parlions demain", level:"B1"},
  {pt:"Espero que tenhas um bom dia", fr:"j'espère que tu passes une bonne journée", level:"B1"},
  {pt:"Quando chegares, telefona-me", fr:"quand tu arriveras, appelle-moi", level:"B1"},
  {pt:"Tenho trabalhado muito ultimamente", fr:"je travaille beaucoup ces derniers temps", level:"B1"},
  {pt:"Se eu tivesse tempo, ia contigo", fr:"si j'avais le temps, j'irais avec toi", level:"B2"},
  {pt:"Vendem-se apartamentos nesta rua", fr:"on vend des appartements dans cette rue", level:"B2"},
  {pt:"Tendo terminado o trabalho, saímos", fr:"ayant terminé le travail, nous sommes sortis", level:"C1"},
  {pt:"Quando cheguei, ele já partira", fr:"quand je suis arrivé, il était déjà parti", level:"C1"},
];

/* ---------- Alphabet page mini-quiz ---------- */
const alphabetQuizData = [
  {type:"mcq", q:"Comment se prononce la lettre « H » en portugais ?", opts:["Comme en français","Elle est toujours muette","« ha »","« ache »"], a:1},
  {type:"mcq", q:"Comment appelle-t-on la lettre « R » en portugais ?", opts:["erre","ergue","arre","rê"], a:0},
  {type:"mcq", q:"Quel son fait « lh » dans « trabalho » ?", opts:["Comme « l »","Comme « ill » français (fille)","Comme « k »","Il est muet"], a:1},
  {type:"mcq", q:"Le « s » en fin de mot se prononce le plus souvent :", opts:["« s » comme au Brésil","« ch » chuintant","« z »","Il est muet"], a:1},
  {type:"mcq", q:"Le « ç » se prononce toujours :", opts:["« k »","« z »","« ss »","« ch »"], a:2},
  {type:"mcq", q:"Dans « caro » et « carro », la différence porte sur :", opts:["L'accent tonique","Le type de « r »","La longueur du « a »","Rien, c'est identique"], a:1},
  {type:"mcq", q:"Le son « ão » de « pão » est :", opts:["Une voyelle nasale simple","Une diphtongue nasale inexistante en français","Le « on » français","Un « a » long"], a:1},
  {type:"listen", q:"Écoute : quelle lettre est nommée ?", audio:"agá", opts:["A","G","H","K"], a:2},
  {type:"listen", q:"Écoute : quelle lettre est nommée ?", audio:"jota", opts:["G","J","X","Z"], a:1},
  {type:"speak", pt:"agá", fr:"le nom de la lettre H"},
  {type:"speak", pt:"erre", fr:"le nom de la lettre R"},
  {type:"speak", pt:"pão", fr:"pain — la diphtongue nasale"},
];

/* ---------- Free pronunciation drill: sounds French speakers
   systematically get wrong ---------- */
const PRONUNCIATION_TRAPS = [
  {pt:"pão", fr:"pain — la diphtongue nasale ão"},
  {pt:"mãe", fr:"mère — la diphtongue nasale ãe"},
  {pt:"põe", fr:"il/elle met — la diphtongue nasale õe"},
  {pt:"lições", fr:"leçons — ão au pluriel"},
  {pt:"caro", fr:"cher — r battu, bref"},
  {pt:"carro", fr:"voiture — r guttural, comme en français"},
  {pt:"Portugal", fr:"Portugal — l final sombre"},
  {pt:"os amigos", fr:"les amis — le s se prononce z entre voyelles"},
  {pt:"dois", fr:"deux — le s final chuinte : « doich »"},
  {pt:"pequeno", fr:"petit — le e atone s'efface presque"},
  {pt:"telefone", fr:"téléphone — attention à l'accent tonique sur FO"},
  {pt:"médico", fr:"médecin — accent sur MÉ, pas sur la fin"},
  {pt:"rápido", fr:"rapide — accent sur RÁ, pas sur la fin"},
  {pt:"trabalho", fr:"travail — le lh comme « fille »"},
  {pt:"vinho", fr:"vin — le nh comme « montagne »"},
  {pt:"coração", fr:"cœur — le ç puis la diphtongue ão"},
];
