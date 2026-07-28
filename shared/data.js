/* ============================================================
   Português do Zero — shared/data.js
   All course content lives here: alphabet, phonetics, vocab
   modules, grammar tables, phrases, dialogues, false friends,
   placement test and the final exam.
   ============================================================ */

/* ---------- Alphabet: LETTER NAMES (how you say the letter
   itself out loud in European Portuguese) + an example word ---------- */
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
  ["L","ele","","livro"],
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
  ["lh","Comme « ll » espagnol","proche du « ill » français dans « fille ».","trabalho","filho"],
  ["nh","Comme le « gn » français","identique au son de « montagne ».","amanhã","vinho"],
  ["ç","Toujours « ss »","jamais « k » ni « z ».","começar","almoço"],
  ["x","Généralement « ch »","comme en français. Entre deux voyelles, parfois « z » ou « ks ».","caixa","táxi"],
  ["r / rr","Guttural, dans la gorge","en début de mot ou en « rr ».","rua","carro"],
  ["s final","Souvent « ch » chuintant","la grande différence avec l'accent brésilien, qui dit « s ».","livros","português"],
  ["e final","Quasi muet / avalé","au Portugal, contre un « i » prononcé au Brésil.","tarde","noite"],
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
  ["/õ/","ão, om, on","bom","nasale, proche de « on »"],
  ["/ũ/","um, un","algum","« ou » nasalisé"],
  ["/ʎ/","lh","trabalho","« ill » de « fille »"],
  ["/ɲ/","nh","vinho","« gn » de « montagne »"],
  ["/ʃ/","x, ch, s final","chá","« ch » français"],
  ["/ʒ/","j, ge, gi","já","« j » français"],
  ["/ʁ/","r, rr","rua","« r » guttural"],
];

const pronomsData = [
  ["eu","je"],["tu","tu"],["ele / ela","il / elle"],["você","vous (semi-formel, sg.)"],
  ["nós","nous"],["vós","vous (littéraire, rare)"],["eles / elas","ils / elles"],["vocês","vous (pluriel usuel)"]
];
const pronouns5 = ["eu","tu","ele/ela/você","nós","eles/elas/vocês"];
const imperativoData = [
  ["Falar (parler)","Fala!","Fale!"],["Comer (manger)","Come!","Coma!"],["Partir (partir)","Parte!","Parta!"],
  ["Ir (aller)","Vai!","Vá!"],["Ter (avoir)","Tem!","Tenha!"],["Ser (être)","Sê!","Seja!"],
];

const fauxAmis = [
  ["Puxe","« Tirer » (sur une porte)","Pousser","Piège classique sur les portes !"],
  ["Esquisito","« Bizarre / étrange »","Exquis","Rien à voir avec un délice."],
  ["Constipado","« Enrhumé »","Constipé","Dire « estou constipado », c'est juste avoir un rhume."],
  ["Esperto","« Malin / intelligent »","Expert","N'a rien à voir avec un expert au sens formel."],
  ["Pasta","« Pâte à tartiner / pâte »","Pâtes (parfois)","Peut aussi désigner un dossier/chemise."],
  ["Chatear","« Ennuyer / agacer »","Bavarder (« chatter »)","« Estou chateado » = énervé, pas « en train de chatter »."],
  ["Latão","« Grand bidon en métal »","Laiton (proche mais différent)","Faux-ami partiel à surveiller."],
  ["Salada","« Salade » (vrai ami ici)","Salade","Un des rares vrais amis de cette liste !"],
];

const dialogues = [
  {title:"Au café", lines:[
    ["a","Bom dia! O que deseja?","Bonjour ! Qu'est-ce que vous désirez ?"],
    ["b","Bom dia! Queria um café e um pastel de nata, por favor.","Je voudrais un café et un pastel de nata, s'il vous plaît."],
    ["a","Para tomar aqui ou para levar?","Sur place ou à emporter ?"],
    ["b","Para tomar aqui, obrigado.","Sur place, merci."],
    ["a","São dois euros e cinquenta, se faz favor.","Ça fait deux euros cinquante, s'il vous plaît."],
  ]},
  {title:"Faire connaissance", lines:[
    ["a","Olá! Como te chamas?","Salut ! Comment tu t'appelles ?"],
    ["b","Chamo-me Marie. E tu?","Je m'appelle Marie. Et toi ?"],
    ["a","Chamo-me Rui. De onde és?","Je m'appelle Rui. D'où viens-tu ?"],
    ["b","Sou francesa, de Paris. E tu, és português?","Je suis française, de Paris. Et toi, tu es portugais ?"],
    ["a","Sim, sou de Lisboa. Muito prazer!","Oui, je suis de Lisbonne. Enchanté !"],
  ]},
];

/* ---------- 15-question placement test ---------- */
const placementData = [
  {q:"Comment dit-on « Bonjour » (le matin) ?", opts:["Boa noite","Bom dia","Adeus","Obrigado"], a:1},
  {q:"Quel son fait « lh » dans « trabalho » ?", opts:["Comme « l »","Comme « ill » français (fille)","Comme « k »","Il est muet"], a:1},
  {q:"« La maison » se dit :", opts:["o casa","a casa","um casa","uma casa"], a:1},
  {q:"Combien fait « cinco » ?", opts:["3","4","5","6"], a:2},
  {q:"Écoute et choisis la bonne traduction :", opts:["Bonjour","Merci","Pardon","Au revoir"], a:1, audio:"Obrigado", type:"listen"},
  {q:"« Estou cansado » veut dire :", opts:["Je suis français","Je suis fatigué","J'ai faim","Je pars"], a:1},
  {q:"Quel verbe pour la nationalité (permanent) ?", opts:["Estar","Ter","Ser","Ir"], a:2},
  {q:"« Je voudrais un café » se dit :", opts:["Quero um café","Queria um café","Querias um café","Quer um café"], a:1},
  {q:"Écoute et choisis ce que demande cette phrase :", opts:["L'heure qu'il est","Où est la gare","Le prix du billet","Son prénom"], a:1, audio:"Onde fica a estação?", type:"listen"},
  {q:"Conjugue « falar » avec « nós » (nous) :", opts:["falo","falas","falamos","falam"], a:2},
  {q:"« Eu fui » est le passé de :", opts:["« ir » seulement","« ser » seulement","« ir » et « ser » (identiques)","« estar »"], a:2},
  {q:"« Vou viajar amanhã » exprime :", opts:["Un futur proche","Un passé","Un ordre","Une question"], a:0},
  {q:"Le faux-ami « esquisito » veut dire :", opts:["Délicieux","Bizarre / étrange","Cher","Rapide"], a:1},
  {q:"Complète : « Nós ___ portugueses. »", opts:["é","somos","são","sou"], a:1},
  {q:"Pour dire « Parle ! » à un ami (tu), à l'impératif :", opts:["Fala!","Fale!","Falas!","Falar!"], a:0},
];

/* ============================================================
   MODULES — the Duolingo-style lesson path
   Each module: key, title, icon, level tag, description,
   optional intro notes, optional items (flashcard vocab as
   [emoji, pt, fr]), optional grammarTables, optional dialogues,
   optional quizExtra (hand-written quiz items on top of the
   auto-generated ones built from "items" by app.js).
   ============================================================ */
const MODULE_ORDER = ["presentation","famille","nombres","nourriture","corps","ville","verbes","grammaire1","grammaire2","phrases","fauxamis"];

const MODULE_DATA = {

  presentation: {
    title:"Se présenter", icon:"👋", level:"A0",
    description:"Salutations, politesse, et les toutes premières phrases pour se présenter.",
    intro: [
      "Le portugais européen distingue plusieurs niveaux de politesse : <b>tu</b> (familier), <b>você</b> (semi-formel) et <b>o senhor / a senhora</b> (formel).",
      "« Você » n'est pas neutre par défaut au Portugal — il peut sembler distant. Entre inconnus adultes, on tourne souvent la phrase à la 3ᵉ personne."
    ],
    items: [
      ["👋","Bom dia","bonjour (le matin)"],
      ["🌤️","Boa tarde","bonjour (l'après-midi)"],
      ["🌙","Boa noite","bonsoir / bonne nuit"],
      ["🙋","Olá","salut"],
      ["👋","Adeus","au revoir"],
      ["🙏","Por favor","s'il te plaît"],
      ["🙏","Obrigado","merci (dit par un homme)"],
      ["🙏","Obrigada","merci (dit par une femme)"],
      ["🤝","Muito prazer","enchanté(e)"],
      ["❓","Como te chamas?","comment tu t'appelles ?"],
      ["🗣️","Chamo-me Ana","je m'appelle Ana"],
      ["🌍","Sou francês","je suis français"],
    ],
    quizExtra: [
      {type:"mcq", q:"« De rien » se dit :", opts:["De nada","Por favor","Desculpe","Com licença"], a:0},
      {type:"mcq", q:"Pour dire pardon en passant devant quelqu'un :", opts:["Desculpe","Com licença","Não percebo","De nada"], a:1},
      {type:"speak", pt:"Muito prazer", fr:"enchanté(e)"},
    ]
  },

  famille: {
    title:"La famille", icon:"👨‍👩‍👧", level:"A1",
    description:"Le vocabulaire indispensable pour parler de sa famille.",
    intro: ["La plupart des noms de famille suivent la règle -o masculin / -a féminin : <i>filho/filha</i>, <i>irmão/irmã</i> (exception), <i>avô/avó</i>."],
    items: [
      ["👨","pai","père"],["👩","mãe","mère"],["👦","filho","fils"],["👧","filha","fille"],
      ["👴","avô","grand-père"],["👵","avó","grand-mère"],["🧑","irmão","frère"],["👩‍🦰","irmã","sœur"],
      ["💍","marido","mari"],["👰","esposa","épouse"],["👶","bebé","bébé"],["👨‍👩‍👧","família","famille"]
    ],
  },

  nombres: {
    title:"Nombres & couleurs", icon:"🔢", level:"A1",
    description:"Compter de 0 à 100 et nommer les couleurs.",
    items: [
      ["0","zero","zéro"],["1","um","un"],["2","dois","deux"],["3","três","trois"],["4","quatro","quatre"],
      ["5","cinco","cinq"],["6","seis","six"],["7","sete","sept"],["8","oito","huit"],["9","nove","neuf"],
      ["10","dez","dix"],["15","quinze","quinze"],["20","vinte","vingt"],["30","trinta","trente"],
      ["50","cinquenta","cinquante"],["100","cem","cent"],
      ["🔴","vermelho","rouge"],["🔵","azul","bleu"],["🟢","verde","vert"],["🟡","amarelo","jaune"],
      ["⚫","preto","noir"],["⚪","branco","blanc"],["🟠","laranja","orange"],["🟣","roxo","violet"],
      ["🩷","rosa","rose"],["🟤","castanho","marron"],["🩶","cinzento","gris"],["🟨","dourado","doré"]
    ],
    quizExtra: [
      {type:"mcq", q:"« Dezasseis » veut dire :", opts:["6","16","60","106"], a:1},
      {type:"speak", pt:"Cinquenta e cinco", fr:"cinquante-cinq"},
    ]
  },

  nourriture: {
    title:"Nourriture", icon:"🍽️", level:"A1",
    description:"De quoi commander et parler de nourriture.",
    items: [
      ["🍞","pão","pain"],["🧀","queijo","fromage"],["🐟","peixe","poisson"],["🥩","carne","viande"],
      ["🍚","arroz","riz"],["🥗","salada","salade"],["🍷","vinho","vin"],["☕","café","café"],
      ["🥐","pastel de nata","pastel de nata"],["🧂","sal","sel"],["🍊","laranja","orange (fruit)"],["💧","água","eau"]
    ],
  },

  corps: {
    title:"Corps & vêtements", icon:"🧥", level:"A1",
    description:"Le corps humain, et de quoi faire du shopping.",
    items: [
      ["👤","cabeça","tête"],["👁️","olho","œil"],["👃","nariz","nez"],["👄","boca","bouche"],
      ["👂","orelha","oreille"],["✋","mão","main"],["🦶","pé","pied"],["❤️","coração","cœur"],
      ["👕","camisa","chemise"],["👖","calças","pantalon"],["👟","sapatos","chaussures"],["🧥","casaco","manteau"],
      ["👗","vestido","robe"],["💶","dinheiro","argent"],["🏷️","preço","prix"],["🧾","recibo","reçu"]
    ],
  },

  ville: {
    title:"Ville & transport", icon:"🚉", level:"A1",
    description:"Se déplacer et s'orienter en ville.",
    items: [
      ["🚉","estação","gare"],["🚌","autocarro","bus"],["🚕","táxi","taxi"],["✈️","aeroporto","aéroport"],
      ["🏨","hotel","hôtel"],["🏦","banco","banque"],["🏥","hospital","hôpital"],["🛒","supermercado","supermarché"],
      ["🚦","rua","rue"],["🏛️","praça","place"],["🚻","casa de banho","toilettes"],["🅿️","parque de estacionamento","parking"]
    ],
  },

  verbes: {
    title:"Verbes courants", icon:"🗣️", level:"A2",
    description:"Les verbes que tu utiliseras tous les jours.",
    items: [
      ["🗣️","falar","parler"],["🍽️","comer","manger"],["🥤","beber","boire"],["😴","dormir","dormir"],
      ["💼","trabalhar","travailler"],["📖","estudar","étudier"],["🧳","viajar","voyager"],["🛍️","comprar","acheter"],
      ["❤️","gostar","aimer / apprécier"],["💪","poder","pouvoir"],["🙋","querer","vouloir"],["🧠","saber","savoir"]
    ],
  },

  grammaire1: {
    title:"Grammaire — les bases", icon:"📘", level:"A1",
    description:"Genre, articles, pronoms, et les verbes ser / estar / ter.",
    intro: [
      "La plupart des noms masculins finissent en <b>-o</b>, les féminins en <b>-a</b>.",
      "Le portugais a <b>deux</b> verbes « être » : <b>ser</b> (permanent : identité, nationalité) et <b>estar</b> (temporaire : état, lieu)."
    ],
    items: [
      ["🙋","eu","je"],["🫵","tu","tu"],["🧑","ele / ela","il / elle"],["🙇","você","vous (semi-formel)"],
      ["👥","nós","nous"],["👨‍👩‍👧‍👦","eles / elas","ils / elles"]
    ],
    grammarTables: [
      { kind:"simple", title:"Articles définis et indéfinis", headers:["","Défini","Indéfini"],
        rows:[["Masc. sg.","o","um"],["Fém. sg.","a","uma"],["Masc. pl.","os","uns"],["Fém. pl.","as","umas"]] },
      { kind:"conj", title:"Ser (permanent) vs Estar (temporaire)", pronouns:pronouns5,
        cols:[{name:"Ser", forms:["sou","és","é","somos","são"]},{name:"Estar", forms:["estou","estás","está","estamos","estão"]}] },
      { kind:"conj", title:"Ter (avoir)", pronouns:pronouns5,
        cols:[{name:"Ter", forms:["tenho","tens","tem","temos","têm"]}] },
    ],
    quizExtra: [
      {type:"mcq", q:"L'article défini féminin singulier (« la ») :", opts:["o","um","a","as"], a:2},
      {type:"mcq", q:"Quel verbe pour une caractéristique permanente (nationalité) ?", opts:["Estar","Ter","Ser","Ir"], a:2},
      {type:"mcq", q:"« Estou cansado » veut dire :", opts:["Je suis français","Je suis fatigué","J'ai faim","Je pars"], a:1},
      {type:"mcq", q:"« Tenho vinte anos » signifie :", opts:["J'ai vingt ans","Je suis à vingt heures","J'ai vingt euros","Je viens à vingt heures"], a:0},
      {type:"speak", pt:"Sou francês", fr:"je suis français"},
    ]
  },

  grammaire2: {
    title:"Grammaire — les temps", icon:"📗", level:"A2",
    description:"Le présent, le passé, le futur proche et l'impératif.",
    intro: [
      "Comme en français, les verbes se classent en 3 groupes à l'infinitif : <b>-ar</b>, <b>-er</b>, <b>-ir</b>.",
      "À l'oral, le <b>futur proche</b> (ir + infinitif) domine largement sur le futur simple, comme « je vais faire » en français."
    ],
    items: [
      ["🗣️","falo","je parle"],["🍽️","como","je mange"],["🚪","parto","je pars"],
      ["🗣️","falei","j'ai parlé"],["🍽️","comi","j'ai mangé"],["🚶","vou falar","je vais parler"]
    ],
    grammarTables: [
      { kind:"conj", title:"Présent — verbes réguliers", pronouns:pronouns5,
        cols:[{name:"Falar", forms:["falo","falas","fala","falamos","falam"]},{name:"Comer", forms:["como","comes","come","comemos","comem"]},{name:"Partir", forms:["parto","partes","parte","partimos","partem"]}] },
      { kind:"conj", title:"Passé (pretérito perfeito)", pronouns:pronouns5,
        cols:[{name:"Falar", forms:["falei","falaste","falou","falámos","falaram"]},{name:"Comer", forms:["comi","comeste","comeu","comemos","comeram"]},{name:"Ir / Ser", forms:["fui","foste","foi","fomos","foram"]}] },
      { kind:"conj", title:"Futur proche", pronouns:pronouns5,
        cols:[{name:"Ir + infinitif", forms:["vou falar","vais falar","vai falar","vamos falar","vão falar"]}] },
    ],
    quizExtra: [
      {type:"mcq", q:"« Fui a Lisboa no ano passado » est au temps :", opts:["Présent","Passé (pretérito perfeito)","Futur proche","Impératif"], a:1},
      {type:"mcq", q:"Pour dire « Mange ! » à un ami (tu) :", opts:["Come!","Coma!","Comes!","Comer!"], a:0},
      {type:"mcq", q:"« Vou viajar amanhã » exprime :", opts:["Un futur proche","Un passé","Un ordre","Une question"], a:0},
      {type:"mcq", q:"Conjugue « falar » avec « nós » (nous) :", opts:["falo","falas","falamos","falam"], a:2},
      {type:"speak", pt:"Vou falar português", fr:"je vais parler portugais"},
    ]
  },

  phrases: {
    title:"Phrases & dialogues", icon:"💬", level:"A2",
    description:"Les indispensables pour voyager, avec deux dialogues complets.",
    items: [
      ["🍽️","Uma mesa para dois, por favor","une table pour deux, s'il vous plaît"],
      ["🍽️","Queria...","je voudrais..."],
      ["🧾","A conta, por favor","l'addition, s'il vous plaît"],
      ["😋","Está delicioso","c'est délicieux"],
      ["🏨","Tenho uma reserva","j'ai une réservation"],
      ["📶","O wifi não funciona","le wifi ne fonctionne pas"],
      ["🚉","Onde fica a estação?","où est la gare ?"],
      ["📍","É longe daqui?","c'est loin d'ici ?"],
      ["🎫","Um bilhete para o Porto","un billet pour Porto"],
      ["🆘","Socorro!","au secours !"],
      ["🏥","Preciso de um médico","j'ai besoin d'un médecin"],
      ["💊","Onde fica a farmácia?","où est la pharmacie ?"],
    ],
    dialogues: dialogues,
  },

  fauxamis: {
    title:"Faux-amis", icon:"⚠️", level:"A2",
    description:"Des mots qui ressemblent au français mais n'ont pas le même sens.",
    isFauxAmis: true,
    quizExtra: [
      {type:"mcq", q:"« Puxe » sur une porte veut dire :", opts:["Poussez","Tirez","Fermez","Sonnez"], a:1},
      {type:"mcq", q:"« Estou constipado » veut dire :", opts:["Je suis constipé","J'ai un rhume","Je suis fatigué","J'ai faim"], a:1},
      {type:"mcq", q:"Le faux-ami « esquisito » veut dire :", opts:["Délicieux","Bizarre / étrange","Cher","Rapide"], a:1},
      {type:"mcq", q:"« Chatear » en portugais veut dire :", opts:["Bavarder","Ennuyer / agacer","Discuter en ligne","Chanter"], a:1},
      {type:"speak", pt:"Estou chateado", fr:"je suis énervé / contrarié"},
    ]
  },
};

/* ---------- Alphabet page mini-quiz ---------- */
const alphabetQuizData = [
  {type:"mcq", q:"Comment se prononce la lettre « H » en portugais ?", opts:["Comme en français","Elle est toujours muette","« ha »","« ache »"], a:1},
  {type:"mcq", q:"Quel son fait « lh » dans « trabalho » ?", opts:["Comme « l »","Comme « ill » français (fille)","Comme « k »","Il est muet"], a:1},
  {type:"mcq", q:"Le « s » en fin de mot se prononce le plus souvent :", opts:["« s » comme au Brésil","« ch » chuintant","« z »","Il est muet"], a:1},
  {type:"mcq", q:"Comment appelle-t-on la lettre « R » en portugais ?", opts:["erre","ergue","arre","rê seulement"], a:0},
  {type:"mcq", q:"Le « ç » se prononce toujours :", opts:["« k »","« z »","« ss »","« ch »"], a:2},
  {type:"speak", pt:"agá", fr:"le nom de la lettre H"},
  {type:"speak", pt:"jota", fr:"le nom de la lettre J"},
  {type:"speak", pt:"erre", fr:"le nom de la lettre R"},
];

/* ---------- Sentence builder game pool ---------- */
const SENTENCE_POOL = [
  {pt:"Eu chamo-me Ana", fr:"je m'appelle Ana"},
  {pt:"Sou francês", fr:"je suis français"},
  {pt:"Como está?", fr:"comment allez-vous ?"},
  {pt:"Tenho vinte anos", fr:"j'ai vingt ans"},
  {pt:"Queria um café", fr:"je voudrais un café"},
  {pt:"Onde fica a estação?", fr:"où est la gare ?"},
  {pt:"Eu gosto de português", fr:"j'aime le portugais"},
  {pt:"Vou viajar amanhã", fr:"je vais voyager demain"},
  {pt:"A conta, por favor", fr:"l'addition, s'il vous plaît"},
  {pt:"Sou de Lisboa", fr:"je suis de Lisbonne"},
  {pt:"Preciso de ajuda", fr:"j'ai besoin d'aide"},
  {pt:"Muito prazer", fr:"enchanté"},
];

/* ---------- Final cumulative exam ---------- */
const quizFinalData = [
  {type:"mcq", q:"Comment dit-on « Bonjour » (le matin) en portugais ?", opts:["Boa noite","Bom dia","Adeus","Obrigado"], a:1},
  {type:"mcq", q:"Quel est l'article défini féminin singulier (« la ») ?", opts:["o","um","a","as"], a:2},
  {type:"mcq", q:"Comment se prononce généralement le « x » en portugais ?", opts:["ks","z","ch","gz"], a:2},
  {type:"mcq", q:"« Estou cansado » veut dire :", opts:["Je suis français","Je suis fatigué","J'ai faim","Je pars"], a:1},
  {type:"mcq", q:"Lequel de ces verbes est irrégulier ?", opts:["falar","comer","partir","ir"], a:3},
  {type:"mcq", q:"« Obrigada » est utilisé par :", opts:["Un homme","Une femme","Un enfant seulement","Personne, c'est incorrect"], a:1},
  {type:"listen", q:"Écoute et choisis la bonne traduction :", audio:"Onde fica a casa de banho?", opts:["Où est la gare ?","Où sont les toilettes ?","Quelle heure est-il ?","Combien ça coûte ?"], a:1},
  {type:"mcq", q:"« Tenho vinte anos » signifie :", opts:["J'ai vingt ans","Je suis à vingt heures","J'ai vingt euros","Je viens à vingt heures"], a:0},
  {type:"mcq", q:"Quel verbe utilise-t-on pour une caractéristique permanente ?", opts:["Estar","Ter","Ser","Ir"], a:2},
  {type:"listen", q:"Écoute et choisis la bonne traduction :", audio:"A conta, por favor", opts:["Un café, s'il vous plaît","L'addition, s'il vous plaît","Où est la gare ?","Bon appétit"], a:1},
  {type:"mcq", q:"« Fui a Lisboa no ano passado » est au temps :", opts:["Présent","Passé (pretérito perfeito)","Futur proche","Impératif"], a:1},
  {type:"mcq", q:"Pour dire « Mange ! » à un ami (tu) :", opts:["Come!","Coma!","Comes!","Comer!"], a:0},
  {type:"mcq", q:"Le faux-ami « esquisito » veut dire :", opts:["Délicieux","Bizarre / étrange","Cher","Rapide"], a:1},
  {type:"speak", pt:"Bom dia, como está?", fr:"bonjour, comment allez-vous ?"},
  {type:"speak", pt:"Queria a conta, por favor", fr:"je voudrais l'addition, s'il vous plaît"},
  {type:"speak", pt:"Chamo-me Ana e sou francesa", fr:"je m'appelle Ana et je suis française"},
];
