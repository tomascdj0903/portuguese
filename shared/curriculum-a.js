/* ============================================================
   Português do Zero — curriculum A1 + A2
   Sequenced after the Referencial Camões PLE.

   A1 deliberately contains NO past tense. That is not an
   omission: the official European-Portuguese reference level
   description introduces the pretérito perfeito only at A2.
   A1 covers the present, the near future (ir + infinitivo) and
   the progressive (estar a + infinitivo).
   ============================================================ */

/* ============================================================
   A1 — INICIAÇÃO
   ============================================================ */

defineModule('a1-saudacoes', {
  level:'A1', title:"Saluer & remercier", icon:"👋",
  description:"Les tout premiers mots : dire bonjour, merci, pardon — et le faire au bon moment de la journée.",
  intro:[
    "Le portugais découpe la journée en <b>trois</b>, pas deux : <b>bom dia</b> jusqu'à midi, <b>boa tarde</b> de midi à la tombée du jour (~20h), <b>boa noite</b> ensuite. Et <i>boa noite</i> sert aussi bien à saluer qu'à prendre congé.",
    "⚠️ <b>Obrigado</b> s'accorde avec <u>celui qui parle</u>, pas avec la personne remerciée. Une femme dit toujours <b>obrigada</b>, même à un homme. C'est l'erreur francophone la plus tenace.",
    "Au Portugal, on dit <b>se faz favor</b> bien plus souvent que <i>por favor</i> — c'est la formule du quotidien, dans les cafés comme dans la rue.",
  ],
  items:[
    ["🌅","bom dia","bonjour (le matin)"],
    ["🌤️","boa tarde","bonjour (l'après-midi)"],
    ["🌙","boa noite","bonsoir / bonne nuit"],
    ["🙋","olá","salut"],
    ["👋","adeus","au revoir"],
    ["🤙","até logo","à tout à l'heure"],
    ["📅","até amanhã","à demain"],
    ["🙏","se faz favor","s'il vous plaît (usuel au Portugal)"],
    ["🙏","por favor","s'il vous plaît"],
    ["😊","obrigado","merci (dit par un homme)"],
    ["😊","obrigada","merci (dit par une femme)"],
    ["🤝","de nada","de rien"],
    ["😅","desculpe","pardon / excusez-moi"],
    ["🚶","com licença","pardon (pour passer)"],
    ["🤝","muito prazer","enchanté(e)"],
    ["👍","tudo bem?","ça va ?"],
    ["✅","sim","oui"],
    ["❌","não","non"],
  ],
  phrases:[
    {pt:"Bom dia! Tudo bem?", fr:"Bonjour ! Ça va ?"},
    {pt:"Muito prazer em conhecê-la", fr:"Enchanté de faire votre connaissance"},
    {pt:"Desculpe, não percebo", fr:"Pardon, je ne comprends pas"},
    {pt:"Obrigada, até amanhã", fr:"Merci, à demain"},
  ],
  gaps:[
    {sentence:"___ dia, senhora Maria!", answer:"Bom", fr:"Bonjour, madame Maria !"},
    {sentence:"Muito obrigad___ , disse a Ana.", answer:"a", fr:"Merci beaucoup, dit Ana.", hint:"Ana est une femme"},
    {sentence:"Com ___ , posso passar?", answer:"licença", fr:"Pardon, je peux passer ?"},
    {sentence:"Se faz ___ , um café.", answer:"favor", fr:"S'il vous plaît, un café."},
  ],
  dialogues:[
    {title:"Dans la rue", lines:[
      ["a","Bom dia! Desculpe, é o senhor Silva?","Bonjour ! Pardon, êtes-vous monsieur Silva ?"],
      ["b","Sou, sim. Bom dia!","Oui, c'est moi. Bonjour !"],
      ["a","Muito prazer. Chamo-me Marie.","Enchantée. Je m'appelle Marie."],
      ["b","O prazer é meu. Tudo bem?","Tout le plaisir est pour moi. Ça va ?"],
      ["a","Tudo bem, obrigada. Até logo!","Ça va, merci. À tout à l'heure !"],
    ]},
  ],
  quizExtra:[
    {type:"mcq", q:"Une femme remercie un homme. Elle dit :", opts:["Obrigado","Obrigada","Obrigados","Obrigade"], a:1},
    {type:"mcq", q:"Il est 18h. On dit :", opts:["Bom dia","Boa tarde","Boa noite","Até amanhã"], a:1},
    {type:"mcq", q:"La formule la plus courante au Portugal pour « s'il vous plaît » :", opts:["Por favor","Se faz favor","Faz favor de","Com licença"], a:1},
  ],
});

defineModule('a1-identidade', {
  level:'A1', title:"Dire qui l'on est", icon:"🪪",
  description:"Se présenter, dire son nom, son âge, sa nationalité — et découvrir les deux verbes « être ».",
  intro:[
    "Le portugais a <b>deux verbes « être »</b> là où le français n'en a qu'un. <b>Ser</b> = ce qui est permanent (identité, nationalité, profession, caractère). <b>Estar</b> = ce qui est passager (état, humeur, position).<br>« <i>Sou francesa</i> » (je suis française, pour toujours) mais « <i>Estou cansada</i> » (je suis fatiguée, aujourd'hui).",
    "Le pronom sujet est presque toujours <b>omis</b> : on dit <i>Sou de Lisboa</i>, pas <i>Eu sou de Lisboa</i>. La terminaison du verbe suffit à dire qui parle.",
    "⚠️ Pour l'âge, le portugais utilise <b>ter</b> (avoir), comme le français : <i>Tenho vinte anos</i>.",
  ],
  items:[
    ["🗣️","chamo-me","je m'appelle"],
    ["❓","como se chama?","comment vous appelez-vous ?"],
    ["❓","como te chamas?","comment tu t'appelles ?"],
    ["🇫🇷","sou francês","je suis français"],
    ["🇫🇷","sou francesa","je suis française"],
    ["🇵🇹","português","portugais"],
    ["🌍","de onde és?","d'où viens-tu ?"],
    ["🏠","moro em Lisboa","j'habite à Lisbonne"],
    ["🎂","tenho vinte anos","j'ai vingt ans"],
    ["❓","quantos anos tens?","quel âge as-tu ?"],
    ["💼","sou professora","je suis professeure"],
    ["🧑‍🎓","sou estudante","je suis étudiant(e)"],
    ["😊","estou bem","je vais bien"],
    ["😴","estou cansado","je suis fatigué"],
    ["📧","o meu email","mon email"],
    ["📱","o meu telemóvel","mon téléphone portable"],
  ],
  phrases:[
    {pt:"Chamo-me Marie e sou francesa", fr:"Je m'appelle Marie et je suis française"},
    {pt:"Tenho vinte e cinco anos", fr:"J'ai vingt-cinq ans"},
    {pt:"Sou de Paris, mas moro em Lisboa", fr:"Je suis de Paris, mais j'habite à Lisbonne"},
    {pt:"Estou muito bem, obrigada", fr:"Je vais très bien, merci"},
  ],
  gaps:[
    {sentence:"Eu ___ francesa.", answer:"sou", hint:"ser", fr:"Je suis française."},
    {sentence:"Hoje ___ cansada.", answer:"estou", hint:"estar", fr:"Aujourd'hui je suis fatiguée."},
    {sentence:"___ vinte anos.", answer:"Tenho", hint:"ter", fr:"J'ai vingt ans."},
    {sentence:"Ela ___ professora.", answer:"é", hint:"ser", fr:"Elle est professeure."},
    {sentence:"Nós ___ em Lisboa.", answer:"estamos", hint:"estar", fr:"Nous sommes à Lisbonne."},
  ],
  grammarTables:[
    { kind:"conj", title:"Ser (permanent) vs Estar (passager)", pronouns:pronouns5,
      cols:[{name:"Ser", forms:["sou","és","é","somos","são"]},{name:"Estar", forms:["estou","estás","está","estamos","estão"]}] },
    { kind:"conj", title:"Ter (avoir) — sert aussi pour l'âge", pronouns:pronouns5,
      cols:[{name:"Ter", forms:["tenho","tens","tem","temos","têm"]}] },
    { kind:"simple", title:"Ser ou Estar ? Le réflexe à prendre", headers:["On parle de…","Verbe","Exemple"],
      rows:[
        ["Nationalité, origine","ser","Sou francesa"],
        ["Profession","ser","Ele é médico"],
        ["Caractère","ser","Ela é simpática"],
        ["Humeur, état du jour","estar","Estou triste"],
        ["Position, lieu","estar","O livro está na mesa"],
        ["Météo du moment","estar","Está frio hoje"],
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"« Je suis fatiguée » (aujourd'hui) :", opts:["Sou cansada","Estou cansada","Tenho cansada","Sou cansado"], a:1},
    {type:"mcq", q:"Quel verbe pour la nationalité ?", opts:["Estar","Ter","Ser","Ficar"], a:2},
    {type:"mcq", q:"« J'ai trente ans » se dit :", opts:["Sou trinta anos","Estou trinta anos","Tenho trinta anos","Faço trinta anos"], a:2},
  ],
});

defineModule('a1-numeros', {
  level:'A1', title:"Nombres, heures & couleurs", icon:"🔢",
  description:"Compter, dire l'heure, donner un prix, nommer les couleurs.",
  intro:[
    "Attention à <b>16, 17, 19</b> : au Portugal on dit <b>dezasseis, dezassete, dezanove</b> (le Brésil dit <i>dezesseis…</i>).",
    "Pour l'heure, on utilise <b>ser</b> et il s'accorde : <i>É uma hora</i> (singulier) mais <i>São duas horas</i> (pluriel).",
    "<b>Um/dois</b> ont un féminin : <i>uma</i>, <i>duas</i>. On dit <i>duas horas</i>, jamais <i>dois horas</i>.",
  ],
  items:[
    ["0️⃣","zero","zéro"],["1️⃣","um / uma","un / une"],["2️⃣","dois / duas","deux"],["3️⃣","três","trois"],
    ["4️⃣","quatro","quatre"],["5️⃣","cinco","cinq"],["6️⃣","seis","six"],["7️⃣","sete","sept"],
    ["8️⃣","oito","huit"],["9️⃣","nove","neuf"],["🔟","dez","dix"],["1️⃣1️⃣","onze","onze"],
    ["1️⃣2️⃣","doze","douze"],["1️⃣5️⃣","quinze","quinze"],["1️⃣6️⃣","dezasseis","seize (Portugal)"],
    ["2️⃣0️⃣","vinte","vingt"],["3️⃣0️⃣","trinta","trente"],["5️⃣0️⃣","cinquenta","cinquante"],
    ["💯","cem","cent"],["🔢","mil","mille"],
    ["🕐","que horas são?","quelle heure est-il ?"],["🕑","são duas horas","il est deux heures"],
    ["💶","quanto custa?","combien ça coûte ?"],["💰","caro","cher"],["🪙","barato","bon marché"],
    ["🔴","vermelho","rouge"],["🔵","azul","bleu"],["🟢","verde","vert"],["🟡","amarelo","jaune"],
    ["⚫","preto","noir"],["⚪","branco","blanc"],["🟤","castanho","marron"],["🩶","cinzento","gris"],
  ],
  phrases:[
    {pt:"Que horas são, se faz favor?", fr:"Quelle heure est-il, s'il vous plaît ?"},
    {pt:"São três e meia", fr:"Il est trois heures et demie"},
    {pt:"Quanto custa este livro?", fr:"Combien coûte ce livre ?"},
    {pt:"Custa dez euros e cinquenta", fr:"Ça coûte dix euros cinquante"},
  ],
  gaps:[
    {sentence:"São ___ horas. (2)", answer:"duas", fr:"Il est deux heures."},
    {sentence:"É ___ hora. (1)", answer:"uma", fr:"Il est une heure."},
    {sentence:"Tenho ___ euros. (16)", answer:"dezasseis", fr:"J'ai seize euros."},
    {sentence:"O carro é ___ . (rouge)", answer:"vermelho", fr:"La voiture est rouge."},
  ],
  quizExtra:[
    {type:"mcq", q:"« Seize » au Portugal se dit :", opts:["dezesseis","dezasseis","dezaseis","dezoito"], a:1},
    {type:"mcq", q:"« Il est deux heures » :", opts:["É duas horas","São duas horas","São dois horas","É dois horas"], a:1},
    {type:"mcq", q:"« Marron » se dit :", opts:["castanho","marrom","moreno","cinzento"], a:0},
  ],
});

defineModule('a1-familia', {
  level:'A1', title:"La famille & les possessifs", icon:"👨‍👩‍👧",
  description:"Parler de sa famille — et la règle de l'article devant le possessif, qui n'existe pas en français.",
  intro:[
    "⚠️ Règle capitale : en portugais on met <b>l'article devant le possessif</b>. On dit <b>a minha mãe</b>, <b>o meu pai</b> — jamais <i>minha mãe</i> tout court. Le français « ma mère » devient littéralement « <u>la</u> ma mère ».",
    "On met aussi <b>l'article devant les prénoms</b> : <i>o João</i>, <i>a Maria</i>. Dire <i>João chegou</i> sans article sonne étrange au Portugal.",
    "Le possessif s'accorde avec <u>l'objet possédé</u>, pas avec le possesseur : <i>o meu irmão</i> / <i>a minha irmã</i>.",
  ],
  items:[
    ["👨","o pai","le père"],["👩","a mãe","la mère"],["👦","o filho","le fils"],["👧","a filha","la fille"],
    ["👴","o avô","le grand-père"],["👵","a avó","la grand-mère"],["🧑","o irmão","le frère"],["👩‍🦰","a irmã","la sœur"],
    ["💍","o marido","le mari"],["👰","a mulher","la femme / l'épouse"],["👶","o bebé","le bébé"],
    ["👨‍👩‍👧","a família","la famille"],["🧔","o tio","l'oncle"],["👩","a tia","la tante"],
    ["🧒","o primo","le cousin"],["👧","a prima","la cousine"],["🐕","o cão","le chien"],["🐈","o gato","le chat"],
    ["🙋","o meu","mon / le mien"],["🙋","a minha","ma / la mienne"],["👥","o nosso","notre"],
    ["❤️","casado","marié"],["💔","solteiro","célibataire"],
  ],
  phrases:[
    {pt:"A minha mãe chama-se Ana", fr:"Ma mère s'appelle Ana"},
    {pt:"Tenho dois irmãos e uma irmã", fr:"J'ai deux frères et une sœur"},
    {pt:"O meu pai é médico", fr:"Mon père est médecin"},
    {pt:"A nossa família é grande", fr:"Notre famille est grande"},
  ],
  gaps:[
    {sentence:"___ minha mãe é professora.", answer:"A", fr:"Ma mère est professeure.", hint:"l'article devant le possessif"},
    {sentence:"O ___ pai chama-se Paulo.", answer:"meu", fr:"Mon père s'appelle Paulo."},
    {sentence:"Tenho duas ___ . (sœurs)", answer:"irmãs", fr:"J'ai deux sœurs."},
    {sentence:"___ João é o meu primo.", answer:"O", fr:"João est mon cousin.", hint:"l'article devant le prénom"},
  ],
  grammarTables:[
    { kind:"simple", title:"Les possessifs — toujours avec l'article", headers:["","Masculin","Féminin"],
      rows:[
        ["mon / ma","o meu","a minha"],["ton / ta","o teu","a tua"],
        ["son / sa","o seu (ou: dele / dela)","a sua"],
        ["notre","o nosso","a nossa"],["leur","o vosso / deles","a vossa / delas"],
      ] },
    { kind:"simple", title:"Les articles", headers:["","Défini (le/la)","Indéfini (un/une)"],
      rows:[["Masc. sg.","o","um"],["Fém. sg.","a","uma"],["Masc. pl.","os","uns"],["Fém. pl.","as","umas"]] },
  ],
  quizExtra:[
    {type:"mcq", q:"« Ma mère » se dit :", opts:["minha mãe","a minha mãe","mãe minha","a mãe minha"], a:1},
    {type:"mcq", q:"Pour dire « son frère à elle », sans ambiguïté :", opts:["o seu irmão","o irmão dela","o irmão sua","a sua irmão"], a:1},
    {type:"mcq", q:"« Grand-mère » se dit :", opts:["o avô","a avó","a avô","o avó"], a:1},
  ],
});

defineModule('a1-presente', {
  level:'A1', title:"Le présent de l'indicatif", icon:"📗",
  description:"Les trois groupes de verbes, et le piège de la 1ʳᵉ personne qui change de voyelle.",
  intro:[
    "Trois groupes, reconnaissables à l'infinitif : <b>-ar</b> (falar), <b>-er</b> (comer), <b>-ir</b> (partir). Les terminaisons sont très régulières.",
    "⚠️ Piège européen classique : certains verbes en <b>-ir</b> changent de voyelle <u>uniquement au « eu »</u>. <i>dormir → <b>durmo</b></i>, <i>vestir → <b>visto</b></i>, <i>preferir → <b>prefiro</b></i>, <i>sentir → <b>sinto</b></i>, <i>pedir → <b>peço</b></i>. Mais <i>nós dormimos</i>, sans changement.",
    "Le présent portugais sert aussi à exprimer un <b>futur proche daté</b> : <i>Amanhã janto com a Ana</i> = demain je dîne avec Ana.",
  ],
  items:[
    ["🗣️","falar","parler"],["🍽️","comer","manger"],["🚪","partir","partir"],
    ["📖","estudar","étudier"],["💼","trabalhar","travailler"],["🏠","morar","habiter"],
    ["❤️","gostar de","aimer / apprécier"],["🥤","beber","boire"],["👀","ver","voir"],
    ["😴","dormir","dormir"],["👕","vestir","habiller / mettre"],["🙏","pedir","demander"],
    ["💪","poder","pouvoir"],["🙋","querer","vouloir"],["🧠","saber","savoir"],
    ["🚶","ir","aller"],["🔙","vir","venir"],["🛠️","fazer","faire"],
    ["🗨️","dizer","dire"],["🎁","dar","donner"],["👂","ouvir","entendre"],
  ],
  phrases:[
    {pt:"Falo um pouco de português", fr:"Je parle un peu portugais"},
    {pt:"Gosto muito de Lisboa", fr:"J'aime beaucoup Lisbonne"},
    {pt:"Durmo oito horas por noite", fr:"Je dors huit heures par nuit"},
    {pt:"Não sei onde ele mora", fr:"Je ne sais pas où il habite"},
  ],
  gaps:[
    {sentence:"Eu ___ português todos os dias.", answer:"falo", hint:"falar", fr:"Je parle portugais tous les jours."},
    {sentence:"Nós ___ em Lisboa.", answer:"moramos", hint:"morar", fr:"Nous habitons à Lisbonne."},
    {sentence:"Eu ___ oito horas. (dormir)", answer:"durmo", hint:"dormir — attention à la voyelle", fr:"Je dors huit heures."},
    {sentence:"Eles ___ muito bem.", answer:"comem", hint:"comer", fr:"Ils mangent très bien."},
    {sentence:"Eu ___ um café. (pedir)", answer:"peço", hint:"pedir — attention à la voyelle", fr:"Je demande un café."},
    {sentence:"Tu ___ de música?", answer:"gostas", hint:"gostar", fr:"Tu aimes la musique ?"},
  ],
  grammarTables:[
    { kind:"conj", title:"Les trois groupes réguliers", pronouns:pronouns5,
      cols:[
        {name:"Falar (-ar)", forms:["falo","falas","fala","falamos","falam"]},
        {name:"Comer (-er)", forms:["como","comes","come","comemos","comem"]},
        {name:"Partir (-ir)", forms:["parto","partes","parte","partimos","partem"]},
      ] },
    { kind:"conj", title:"Verbes irréguliers essentiels", pronouns:pronouns5,
      cols:[
        {name:"Ir", forms:["vou","vais","vai","vamos","vão"]},
        {name:"Fazer", forms:["faço","fazes","faz","fazemos","fazem"]},
        {name:"Poder", forms:["posso","podes","pode","podemos","podem"]},
        {name:"Querer", forms:["quero","queres","quer","queremos","querem"]},
      ] },
    { kind:"simple", title:"⚠️ Les verbes qui changent de voyelle au « eu » seulement", headers:["Infinitif","eu","nós"],
      rows:[
        ["dormir","durmo","dormimos"],["vestir","visto","vestimos"],
        ["preferir","prefiro","preferimos"],["sentir","sinto","sentimos"],
        ["pedir","peço","pedimos"],["conseguir","consigo","conseguimos"],
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"« Je dors » se dit :", opts:["dormo","durmo","dormio","durmio"], a:1},
    {type:"mcq", q:"Conjugue « morar » avec « nós » :", opts:["moro","moras","moramos","moram"], a:2},
    {type:"mcq", q:"« Je demande » (pedir) :", opts:["pedo","pido","peço","peco"], a:2},
  ],
});

defineModule('a1-estar-a', {
  level:'A1', title:"Estar a + infinitif & le futur proche", icon:"⏳",
  description:"La structure la plus portugaise de toutes — et celle que tous les cours brésiliens enseignent de travers.",
  intro:[
    "⭐ Pour dire « je suis <u>en train de</u> faire », le portugais du Portugal utilise <b>estar a + infinitif</b> : <i>Estou a comer</i>. Le Brésil dit <i>estou comendo</i> (gérondif) — au Portugal, cela sonne immédiatement brésilien. C'est <b>le</b> marqueur de l'accent européen.",
    "Le <b>futur proche</b> se forme avec <b>ir + infinitif</b>, exactement comme le français « je vais faire » : <i>Vou viajar amanhã</i>. À l'oral, il remplace presque toujours le futur simple.",
    "Trois autres structures indispensables : <b>ter de + infinitif</b> (devoir, obligation — au Portugal on préfère <i>ter de</i> à <i>ter que</i>), <b>costumar + infinitif</b> (avoir l'habitude de), <b>acabar de + infinitif</b> (venir de).",
  ],
  items:[
    ["⏳","estou a trabalhar","je suis en train de travailler"],
    ["🍽️","estou a comer","je suis en train de manger"],
    ["📚","estou a aprender","je suis en train d'apprendre"],
    ["✈️","vou viajar","je vais voyager"],
    ["🛒","vou comprar","je vais acheter"],
    ["⚠️","tenho de ir","je dois y aller"],
    ["🔁","costumo ir","j'ai l'habitude d'aller"],
    ["✅","acabo de chegar","je viens d'arriver"],
    ["🎬","começar a","commencer à"],
    ["🏁","acabar de","venir de / finir de"],
    ["🕐","agora","maintenant"],
    ["📅","amanhã","demain"],
    ["📆","hoje","aujourd'hui"],
    ["🌙","logo","tout à l'heure"],
    ["🔜","depois","après / ensuite"],
    ["♾️","sempre","toujours"],
    ["🚫","nunca","jamais"],
    ["🔄","às vezes","parfois"],
  ],
  phrases:[
    {pt:"Estou a aprender português", fr:"Je suis en train d'apprendre le portugais"},
    {pt:"Vou viajar para Lisboa amanhã", fr:"Je vais voyager à Lisbonne demain"},
    {pt:"Tenho de trabalhar hoje", fr:"Je dois travailler aujourd'hui"},
    {pt:"Costumo tomar café de manhã", fr:"J'ai l'habitude de prendre un café le matin"},
  ],
  gaps:[
    {sentence:"Ela está ___ estudar.", answer:"a", fr:"Elle est en train d'étudier.", hint:"la structure portugaise"},
    {sentence:"Amanhã ___ viajar para o Porto.", answer:"vou", hint:"ir", fr:"Demain je vais voyager à Porto."},
    {sentence:"Tenho ___ ir agora.", answer:"de", fr:"Je dois y aller maintenant."},
    {sentence:"Nós estamos ___ comer.", answer:"a", fr:"Nous sommes en train de manger."},
    {sentence:"Eles ___ chegar. (venir d'arriver)", answer:"acabam de", alt:["acabaram de"], fr:"Ils viennent d'arriver."},
  ],
  quizExtra:[
    {type:"mcq", q:"« Je suis en train de manger », au Portugal :", opts:["Estou comendo","Estou a comer","Estou de comer","Sou a comer"], a:1},
    {type:"mcq", q:"« Estou comendo » est :", opts:["Correct au Portugal","Du portugais brésilien","Incorrect partout","Du futur"], a:1},
    {type:"mcq", q:"« Je dois partir » :", opts:["Tenho que partir","Tenho de partir","Devo de partir","Estou a partir"], a:1},
  ],
});

defineModule('a1-quotidiano', {
  level:'A1', title:"La maison & le quotidien", icon:"🏠",
  description:"Décrire où l'on vit, sa journée — et maîtriser les contractions de prépositions.",
  intro:[
    "Les prépositions <b>fusionnent</b> avec les articles, et c'est obligatoire : <i>de + o = <b>do</b></i>, <i>em + a = <b>na</b></i>, <i>a + o = <b>ao</b></i>. On ne dit jamais <i>de o</i>.",
    "Nuance importante : <b>a</b> = aller quelque part brièvement (<i>Vou <b>ao</b> cinema</i>), <b>para</b> = destination durable (<i>Vou <b>para</b> casa</i>), <b>em</b> = être quelque part (<i>Estou <b>em</b> casa</i>).",
    "Pour dire « il y a », on utilise <b>há</b>, qui est <u>toujours invariable</u> : <i>Há um café</i>, <i>Há muitos cafés</i>. Jamais <i>hão</i>.",
  ],
  items:[
    ["🏠","a casa","la maison"],["🚪","a porta","la porte"],["🪟","a janela","la fenêtre"],
    ["🛏️","o quarto","la chambre"],["🍳","a cozinha","la cuisine"],["🛋️","a sala","le salon"],
    ["🚽","a casa de banho","les toilettes / la salle de bain"],["🪑","a mesa","la table"],
    ["💺","a cadeira","la chaise"],["🛗","o prédio","l'immeuble"],["🌳","o jardim","le jardin"],
    ["☕","o pequeno-almoço","le petit-déjeuner"],["🍽️","o almoço","le déjeuner"],["🌙","o jantar","le dîner"],
    ["🛁","tomar banho","prendre une douche"],["😴","acordar","se réveiller"],
    ["🚶","sair","sortir"],["🔙","voltar","revenir"],["📺","a televisão","la télévision"],
    ["❄️","o frigorífico","le réfrigérateur"],["📱","o telemóvel","le téléphone portable"],
  ],
  phrases:[
    {pt:"Moro num apartamento pequeno", fr:"J'habite dans un petit appartement"},
    {pt:"Há um jardim atrás da casa", fr:"Il y a un jardin derrière la maison"},
    {pt:"Tomo o pequeno-almoço às oito", fr:"Je prends le petit-déjeuner à huit heures"},
    {pt:"Vou para casa depois do trabalho", fr:"Je rentre à la maison après le travail"},
  ],
  gaps:[
    {sentence:"O livro está ___ mesa. (em + a)", answer:"na", fr:"Le livre est sur la table."},
    {sentence:"Vou ___ cinema. (a + o)", answer:"ao", fr:"Je vais au cinéma."},
    {sentence:"A porta ___ quarto. (de + o)", answer:"do", fr:"La porte de la chambre."},
    {sentence:"___ um café nesta rua.", answer:"Há", fr:"Il y a un café dans cette rue."},
    {sentence:"Vou ___ casa agora. (destination durable)", answer:"para", fr:"Je rentre à la maison maintenant."},
  ],
  grammarTables:[
    { kind:"simple", title:"Les contractions obligatoires", headers:["Préposition","+ o","+ a","+ os","+ as"],
      rows:[
        ["de (de)","do","da","dos","das"],
        ["em (dans/à)","no","na","nos","nas"],
        ["a (à)","ao","à","aos","às"],
        ["por (par)","pelo","pela","pelos","pelas"],
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"« Sur la table » (em + a mesa) :", opts:["em a mesa","na mesa","da mesa","à mesa"], a:1},
    {type:"mcq", q:"« Il y avait beaucoup de touristes » — la forme correcte :", opts:["Haviam muitos turistas","Havia muitos turistas","Hão muitos turistas","Têm muitos turistas"], a:1},
    {type:"mcq", q:"« Les toilettes » au Portugal :", opts:["o banheiro","a casa de banho","o toalete","a retrete"], a:1},
  ],
});

defineModule('a1-comida', {
  level:'A1', title:"Manger & boire", icon:"🍽️",
  description:"Commander au café et au restaurant, nommer ce qu'on aime.",
  intro:[
    "Au café portugais, <b>um café</b> tout court désigne un expresso. Si vous voulez un allongé, demandez <b>um abatanado</b> ; avec un nuage de lait, <b>um garoto</b>.",
    "Pour commander poliment à ce stade, la formule la plus simple est <b>Um café, se faz favor</b>. (La tournure plus élégante <i>Queria um café</i> arrive au niveau A2.)",
    "⚠️ <b>Gostar</b> exige toujours la préposition <b>de</b> : <i>Gosto <b>de</b> peixe</i>, jamais <i>gosto peixe</i>.",
  ],
  items:[
    ["🍞","o pão","le pain"],["🧀","o queijo","le fromage"],["🐟","o peixe","le poisson"],
    ["🥩","a carne","la viande"],["🍚","o arroz","le riz"],["🥗","a salada","la salade"],
    ["🍷","o vinho","le vin"],["☕","o café","le café"],["💧","a água","l'eau"],
    ["🥐","o pastel de nata","le pastel de nata"],["🍊","a laranja","l'orange"],["🍎","a maçã","la pomme"],
    ["🧂","o sal","le sel"],["🥛","o leite","le lait"],["🍳","o ovo","l'œuf"],
    ["🥔","a batata","la pomme de terre"],["🍮","a sobremesa","le dessert"],
    ["🧾","a conta","l'addition"],["🍴","o prato","le plat / l'assiette"],["🥄","a colher","la cuillère"],
    ["😋","delicioso","délicieux"],["🤤","tenho fome","j'ai faim"],["🥤","tenho sede","j'ai soif"],
  ],
  phrases:[
    {pt:"Um café e um pastel de nata, se faz favor", fr:"Un café et un pastel de nata, s'il vous plaît"},
    {pt:"Gosto muito de peixe", fr:"J'aime beaucoup le poisson"},
    {pt:"A conta, se faz favor", fr:"L'addition, s'il vous plaît"},
    {pt:"Está delicioso, obrigada", fr:"C'est délicieux, merci"},
  ],
  gaps:[
    {sentence:"Gosto ___ peixe.", answer:"de", fr:"J'aime le poisson.", hint:"gostar exige une préposition"},
    {sentence:"A ___ , se faz favor. (addition)", answer:"conta", fr:"L'addition, s'il vous plaît."},
    {sentence:"Tenho ___ . (faim)", answer:"fome", fr:"J'ai faim."},
    {sentence:"Um ___ de nata, se faz favor.", answer:"pastel", fr:"Un pastel de nata, s'il vous plaît."},
  ],
  dialogues:[
    {title:"Au café", lines:[
      ["a","Bom dia! O que deseja?","Bonjour ! Que désirez-vous ?"],
      ["b","Bom dia! Um café e um pastel de nata, se faz favor.","Bonjour ! Un café et un pastel de nata, s'il vous plaît."],
      ["a","Para tomar aqui ou para levar?","Sur place ou à emporter ?"],
      ["b","Para tomar aqui, obrigada.","Sur place, merci."],
      ["a","São dois euros e cinquenta.","Ça fait deux euros cinquante."],
    ]},
  ],
  quizExtra:[
    {type:"mcq", q:"« J'aime le vin » :", opts:["Gosto vinho","Gosto de vinho","Gosto o vinho","Gosto ao vinho"], a:1},
    {type:"mcq", q:"Au Portugal, « um café » désigne :", opts:["Un café allongé","Un expresso","Un café au lait","Un décaféiné"], a:1},
  ],
});

/* ============================================================
   A2 — ELEMENTAR
   ============================================================ */

defineModule('a2-passado', {
  level:'A2', title:"Le passé accompli", icon:"⏮️",
  description:"Le pretérito perfeito simples — et pourquoi il ne ressemble PAS au passé composé français.",
  intro:[
    "⚠️ <b>Le piège majeur du francophone.</b> Le français « j'ai mangé » ressemble à <i>tenho comido</i>… mais ce n'est pas du tout ça. Le portugais dit <b>comi</b>. La règle à retenir : <b>passé composé français → pretérito perfeito simples portugais</b>.",
    "Ce temps exprime une action <b>terminée</b> dans le passé : <i>Ontem fui ao cinema</i>, <i>Comi bem</i>, <i>Ela chegou tarde</i>.",
    "⚠️ Orthographe européenne : à la 1ʳᵉ personne du pluriel des verbes en -ar, on écrit <b>falámos</b> avec un accent (le Brésil écrit <i>falamos</i>). L'accent distingue le passé du présent.",
    "<b>Ser</b> et <b>ir</b> ont exactement les mêmes formes au passé : <i>fui</i> peut vouloir dire « je fus » ou « j'allai ». Le contexte tranche.",
  ],
  items:[
    ["⏮️","ontem","hier"],["📅","a semana passada","la semaine dernière"],
    ["🗓️","o ano passado","l'année dernière"],["🕐","há dois dias","il y a deux jours"],
    ["✅","já","déjà"],["🚫","ainda não","pas encore"],["🔚","depois","ensuite"],
    ["🎬","comecei","j'ai commencé"],["🏁","acabei","j'ai fini"],
    ["🚶","fui","je suis allé / j'ai été"],["🍽️","comi","j'ai mangé"],
    ["🗣️","falei","j'ai parlé"],["👀","vi","j'ai vu"],["🛠️","fiz","j'ai fait"],
    ["🗨️","disse","j'ai dit"],["🎁","dei","j'ai donné"],["🔙","vim","je suis venu"],
    ["📍","estive","j'ai été / je suis resté"],["🤲","tive","j'ai eu"],
  ],
  phrases:[
    {pt:"Ontem fui ao cinema com a Ana", fr:"Hier je suis allé au cinéma avec Ana"},
    {pt:"Comi um bacalhau delicioso", fr:"J'ai mangé une morue délicieuse"},
    {pt:"Falámos durante duas horas", fr:"Nous avons parlé pendant deux heures"},
    {pt:"Ela chegou muito tarde", fr:"Elle est arrivée très tard"},
  ],
  gaps:[
    {sentence:"Ontem eu ___ ao cinema.", answer:"fui", hint:"ir", fr:"Hier je suis allé au cinéma."},
    {sentence:"Nós ___ português na aula. (falar)", answer:"falámos", hint:"falar — orthographe européenne", fr:"Nous avons parlé portugais en cours."},
    {sentence:"Ela ___ um bolo ontem. (comer)", answer:"comeu", hint:"comer", fr:"Elle a mangé un gâteau hier."},
    {sentence:"Eles ___ o trabalho. (fazer)", answer:"fizeram", hint:"fazer", fr:"Ils ont fait le travail."},
    {sentence:"Eu ___ o filme na semana passada. (ver)", answer:"vi", hint:"ver", fr:"J'ai vu le film la semaine dernière."},
  ],
  grammarTables:[
    { kind:"conj", title:"Pretérito perfeito simples — réguliers", pronouns:pronouns5,
      cols:[
        {name:"Falar", forms:["falei","falaste","falou","falámos","falaram"]},
        {name:"Comer", forms:["comi","comeste","comeu","comemos","comeram"]},
        {name:"Partir", forms:["parti","partiste","partiu","partimos","partiram"]},
      ] },
    { kind:"conj", title:"Les irréguliers indispensables", pronouns:pronouns5,
      cols:[
        {name:"Ser / Ir", forms:["fui","foste","foi","fomos","foram"]},
        {name:"Estar", forms:["estive","estiveste","esteve","estivemos","estiveram"]},
        {name:"Ter", forms:["tive","tiveste","teve","tivemos","tiveram"]},
        {name:"Fazer", forms:["fiz","fizeste","fez","fizemos","fizeram"]},
      ] },
    { kind:"conj", title:"Encore des irréguliers", pronouns:pronouns5,
      cols:[
        {name:"Dizer", forms:["disse","disseste","disse","dissemos","disseram"]},
        {name:"Ver", forms:["vi","viste","viu","vimos","viram"]},
        {name:"Vir", forms:["vim","vieste","veio","viemos","vieram"]},
        {name:"Poder", forms:["pude","pudeste","pôde","pudemos","puderam"]},
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"« J'ai mangé » (hier) se traduit par :", opts:["Tenho comido","Comi","Comia","Estava a comer"], a:1},
    {type:"mcq", q:"Au Portugal, « nous avons parlé » s'écrit :", opts:["falamos","falámos","falâmos","falarmos"], a:1},
    {type:"mcq", q:"« Fui » peut être le passé de :", opts:["« ir » seulement","« ser » seulement","« ir » et « ser »","« estar »"], a:2},
  ],
});

defineModule('a2-imperfeito', {
  level:'A2', title:"L'imparfait & la politesse", icon:"🔁",
  description:"Décrire le passé, les habitudes — et la formule magique pour commander poliment.",
  intro:[
    "L'imparfait décrit le <b>décor</b> du passé : ce qui durait, se répétait, ou servait de fond. <i>Quando era pequena, vivia em Lisboa</i>.",
    "⭐ Usage capital au Portugal : l'<b>imparfait de politesse</b>. Là où le français utilise le conditionnel (« je voudrais »), le portugais utilise l'imparfait : <b>Queria um café</b>. C'est LA façon de commander, bien plus naturelle que <i>quero</i>, qui sonne brusque.",
    "L'imparfait sert aussi de conditionnel à l'oral : <i>Eu ajudava-te, mas não tenho tempo</i> = je t'aiderais, mais je n'ai pas le temps.",
  ],
  items:[
    ["🔁","costumava","j'avais l'habitude de"],["👶","quando era pequeno","quand j'étais petit"],
    ["🏠","vivia","je vivais"],["🎒","ia","j'allais"],["🗣️","falava","je parlais"],
    ["☕","queria","je voudrais (poli)"],["🙏","podia","pourriez-vous"],
    ["⏳","antigamente","autrefois"],["🔄","todos os dias","tous les jours"],
    ["🌦️","estava frio","il faisait froid"],["😊","era feliz","j'étais heureux"],
    ["📻","enquanto","pendant que"],["🕰️","naquela altura","à cette époque"],
    ["👦","a infância","l'enfance"],["🏫","a escola","l'école"],["🎠","brincar","jouer (enfant)"],
  ],
  phrases:[
    {pt:"Queria um café, se faz favor", fr:"Je voudrais un café, s'il vous plaît"},
    {pt:"Quando era pequena, vivia no Porto", fr:"Quand j'étais petite, je vivais à Porto"},
    {pt:"Podia ajudar-me, se faz favor?", fr:"Pourriez-vous m'aider, s'il vous plaît ?"},
    {pt:"Todos os dias ia à escola a pé", fr:"Tous les jours j'allais à l'école à pied"},
  ],
  gaps:[
    {sentence:"___ um café, se faz favor. (poli)", answer:"Queria", hint:"querer à l'imparfait", fr:"Je voudrais un café, s'il vous plaît."},
    {sentence:"Quando eu ___ pequeno, vivia em Paris.", answer:"era", hint:"ser", fr:"Quand j'étais petit, je vivais à Paris."},
    {sentence:"Ela ___ à escola todos os dias. (ir)", answer:"ia", hint:"ir", fr:"Elle allait à l'école tous les jours."},
    {sentence:"Nós ___ muito quando éramos jovens. (falar)", answer:"falávamos", hint:"falar", fr:"Nous parlions beaucoup quand nous étions jeunes."},
    {sentence:"___ ajudar-me? (pouvoir, poli)", answer:"Podia", hint:"poder à l'imparfait", fr:"Pourriez-vous m'aider ?"},
  ],
  grammarTables:[
    { kind:"conj", title:"L'imparfait — réguliers", pronouns:pronouns5,
      cols:[
        {name:"Falar", forms:["falava","falavas","falava","falávamos","falavam"]},
        {name:"Comer", forms:["comia","comias","comia","comíamos","comiam"]},
        {name:"Partir", forms:["partia","partias","partia","partíamos","partiam"]},
      ] },
    { kind:"conj", title:"Les quatre irréguliers (il n'y en a que quatre !)", pronouns:pronouns5,
      cols:[
        {name:"Ser", forms:["era","eras","era","éramos","eram"]},
        {name:"Ter", forms:["tinha","tinhas","tinha","tínhamos","tinham"]},
        {name:"Vir", forms:["vinha","vinhas","vinha","vínhamos","vinham"]},
        {name:"Pôr", forms:["punha","punhas","punha","púnhamos","punham"]},
      ] },
    { kind:"simple", title:"Perfeito ou imperfeito ?", headers:["Situation","Temps","Exemple"],
      rows:[
        ["Action terminée, ponctuelle","perfeito","Ontem fui ao cinema"],
        ["Description, décor","imperfeito","Estava frio e chovia"],
        ["Habitude passée","imperfeito","Ia à praia todos os verões"],
        ["Action qui interrompt","perfeito","Estava a ler quando ela chegou"],
        ["Politesse (commander)","imperfeito","Queria a conta"],
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"Pour commander poliment au café, on dit :", opts:["Quero um café","Queria um café","Quererei um café","Quisera um café"], a:1},
    {type:"mcq", q:"« Il faisait froid et il pleuvait » utilise :", opts:["le perfeito","l'imperfeito","le futur","l'impératif"], a:1},
  ],
});

defineModule('a2-clitiques', {
  level:'A2', title:"Les pronoms compléments", icon:"🔗",
  description:"Le point où tous les francophones se trompent : au Portugal, le pronom se place APRÈS le verbe.",
  intro:[
    "⭐ <b>La règle inverse du français.</b> En français le pronom est toujours devant : « je <u>m'</u>appelle ». En portugais européen, il se colle <b>après</b> le verbe avec un trait d'union : <b>chamo-me</b>, <b>dá-me</b>, <b>vejo-te</b>.",
    "⚠️ Le brésilien fait l'inverse (<i>me chamo</i>) — et comme c'est ce qu'on entend le plus sur internet, l'erreur se renforce toute seule. Au Portugal, <i>me chamo</i> est agrammatical.",
    "MAIS le pronom repasse <b>devant</b> le verbe dans une liste précise de cas. Apprenez-la comme une liste fermée :<br>• après une <b>négation</b> : <i>Não <b>me</b> chamo Ana</i><br>• après un <b>mot interrogatif</b> : <i>Como <b>te</b> chamas?</i><br>• après <b>que, porque, quando</b>… (subordination) : <i>Sei que <b>te</b> viu</i><br>• après certains <b>adverbes</b> (já, ainda, também, só, sempre) : <i>Já <b>te</b> disse</i><br>• après <b>quantificateurs</b> (todos, alguém, ninguém) : <i>Ninguém <b>me</b> ajudou</i>",
  ],
  items:[
    ["🙋","-me","me / moi"],["🫵","-te","te / toi"],["🧑","-o / -a","le / la"],
    ["🧑","-lhe","lui (à lui/elle)"],["👥","-nos","nous"],["👨‍👩‍👧","-os / -as","les"],
    ["👨‍👩‍👧","-lhes","leur (à eux)"],["🔁","-se","se"],
    ["🗣️","chamo-me","je m'appelle"],["🎁","dá-me","donne-moi"],["👀","vejo-te","je te vois"],
    ["📞","telefono-lhe","je lui téléphone"],["❤️","amo-te","je t'aime"],
    ["🤝","ajuda-me","aide-moi"],["📖","explica-me","explique-moi"],
    ["🚫","não me lembro","je ne me souviens pas"],["❓","como te chamas?","comment tu t'appelles ?"],
  ],
  phrases:[
    {pt:"Chamo-me Marie e moro em Lisboa", fr:"Je m'appelle Marie et j'habite à Lisbonne"},
    {pt:"Não me lembro do nome dele", fr:"Je ne me souviens pas de son nom"},
    {pt:"Ele deu-me um livro muito bom", fr:"Il m'a donné un très bon livre"},
    {pt:"Já te disse que sim", fr:"Je t'ai déjà dit que oui"},
  ],
  gaps:[
    {sentence:"Eu chamo-___ Marie.", answer:"me", fr:"Je m'appelle Marie."},
    {sentence:"Não ___ chamo Ana.", answer:"me", fr:"Je ne m'appelle pas Ana.", hint:"après une négation, le pronom passe devant"},
    {sentence:"Como ___ chamas?", answer:"te", fr:"Comment tu t'appelles ?", hint:"après un interrogatif, le pronom passe devant"},
    {sentence:"Ele deu-___ um livro. (à moi)", answer:"me", fr:"Il m'a donné un livre."},
    {sentence:"Já ___ disse tudo.", answer:"te", fr:"Je t'ai déjà tout dit.", hint:"après « já », le pronom passe devant"},
  ],
  grammarTables:[
    { kind:"simple", title:"Après ou avant le verbe ?", headers:["Cas","Placement","Exemple"],
      rows:[
        ["Phrase normale","APRÈS (trait d'union)","Chamo-me Ana"],
        ["Négation (não, nunca)","AVANT","Não me chamo Ana"],
        ["Question (como, quem, onde)","AVANT","Como te chamas?"],
        ["Subordonnée (que, porque)","AVANT","Sei que te viu"],
        ["Adverbes já, ainda, também, só","AVANT","Já te disse"],
        ["todos, alguém, ninguém","AVANT","Ninguém me ajudou"],
      ] },
    { kind:"simple", title:"Les formes", headers:["","Direct (le/la)","Indirect (à qui)"],
      rows:[
        ["moi","me","me"],["toi","te","te"],["lui/elle","o / a","lhe"],
        ["nous","nos","nos"],["eux/elles","os / as","lhes"],
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"« Je m'appelle Ana » au Portugal :", opts:["Me chamo Ana","Chamo-me Ana","Eu me chamo Ana","Chamo me Ana"], a:1},
    {type:"mcq", q:"« Je ne m'appelle pas Ana » :", opts:["Não chamo-me Ana","Não me chamo Ana","Chamo-me não Ana","Não me chamo-me Ana"], a:1},
    {type:"mcq", q:"« Me chamo » est :", opts:["Correct au Portugal","Du brésilien","Du portugais formel","Toujours faux"], a:1},
  ],
});

defineModule('a2-imperativo', {
  level:'A2', title:"Donner un ordre, un conseil", icon:"☝️",
  description:"L'impératif — et pourquoi la forme négative est complètement différente.",
  intro:[
    "À l'affirmatif avec <b>tu</b>, l'impératif est simplement la 3ᵉ personne du présent sans le -s : <i>falas → <b>Fala!</b></i>, <i>comes → <b>Come!</b></i>.",
    "⚠️ Au <b>négatif</b>, tout change : on emploie le subjonctif. <i>Fala!</i> mais <i>Não <b>fales</b>!</i> — jamais <i>não fala</i>.",
    "Avec la forme polie (você / o senhor), on utilise aussi le subjonctif : <b>Fale!</b>, <b>Coma!</b>, <b>Não fale!</b>",
    "⚠️ Rappel : à l'impératif affirmatif, le pronom reste <b>après</b> le verbe (<i>Diz-me!</i>) ; au négatif il passe <b>devant</b> (<i>Não me digas!</i>).",
  ],
  items:[
    ["☝️","fala!","parle !"],["🍽️","come!","mange !"],["🚶","vai!","vas-y !"],
    ["👀","olha!","regarde !"],["👂","ouve!","écoute !"],["⏳","espera!","attends !"],
    ["🚪","entra!","entre !"],["💺","senta-te!","assieds-toi !"],
    ["🚫","não fales!","ne parle pas !"],["🚫","não vás!","n'y va pas !"],
    ["🙏","desculpe!","excusez-moi !"],["📞","liga-me!","appelle-moi !"],
    ["🤫","cuidado!","attention !"],["🆘","socorro!","au secours !"],
    ["➡️","vire à direita","tournez à droite"],["⬅️","vire à esquerda","tournez à gauche"],
    ["⬆️","siga em frente","continuez tout droit"],
  ],
  phrases:[
    {pt:"Diz-me a verdade, se faz favor", fr:"Dis-moi la vérité, s'il te plaît"},
    {pt:"Não te preocupes, está tudo bem", fr:"Ne t'inquiète pas, tout va bien"},
    {pt:"Siga em frente e vire à direita", fr:"Continuez tout droit et tournez à droite"},
    {pt:"Espera um momento, se faz favor", fr:"Attends un moment, s'il te plaît"},
  ],
  gaps:[
    {sentence:"___ comigo! (falar, tu)", answer:"Fala", fr:"Parle avec moi !"},
    {sentence:"Não ___ tão depressa! (falar, tu)", answer:"fales", hint:"impératif négatif = subjonctif", fr:"Ne parle pas si vite !"},
    {sentence:"___ a sopa! (comer, tu)", answer:"Come", fr:"Mange la soupe !"},
    {sentence:"___ à direita. (virar, forme polie)", answer:"Vire", fr:"Tournez à droite."},
    {sentence:"Não ___ embora! (ir, tu)", answer:"vás", hint:"ir au subjonctif", fr:"Ne t'en va pas !"},
  ],
  grammarTables:[
    { kind:"simple", title:"Affirmatif vs négatif", headers:["Verbe","Tu (affirm.)","Tu (négatif)","Você (poli)"],
      rows:[
        ["falar","Fala!","Não fales!","Fale!"],
        ["comer","Come!","Não comas!","Coma!"],
        ["partir","Parte!","Não partas!","Parta!"],
        ["ir","Vai!","Não vás!","Vá!"],
        ["ser","Sê!","Não sejas!","Seja!"],
        ["fazer","Faz!","Não faças!","Faça!"],
        ["dizer","Diz!","Não digas!","Diga!"],
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"« Ne parle pas ! » (à un ami) :", opts:["Não fala!","Não fales!","Não falas!","Não falar!"], a:1},
    {type:"mcq", q:"« Mange ! » (à un ami) :", opts:["Come!","Coma!","Comes!","Comer!"], a:0},
    {type:"mcq", q:"« Ne me dis pas ça ! » :", opts:["Não digas-me isso!","Não me digas isso!","Digas-me não isso!","Não me diz isso!"], a:1},
  ],
});

defineModule('a2-cidade', {
  level:'A2', title:"En ville & se déplacer", icon:"🚉",
  description:"Prendre les transports, demander son chemin, se repérer.",
  intro:[
    "Vocabulaire spécifiquement portugais : le train est un <b>comboio</b> (pas <i>trem</i>), le bus un <b>autocarro</b> (pas <i>ônibus</i>). Utiliser les mots brésiliens vous fera immédiatement repérer.",
    "Pour demander où se trouve quelque chose, deux tournures : <b>Onde fica…?</b> (pour un lieu fixe) et <b>Onde é…?</b>",
  ],
  items:[
    ["🚉","a estação","la gare"],["🚂","o comboio","le train"],["🚌","o autocarro","le bus"],
    ["🚇","o metro","le métro"],["🚕","o táxi","le taxi"],["✈️","o aeroporto","l'aéroport"],
    ["🎫","o bilhete","le billet"],["🏨","o hotel","l'hôtel"],["🏦","o banco","la banque"],
    ["🏥","o hospital","l'hôpital"],["💊","a farmácia","la pharmacie"],["🛒","o supermercado","le supermarché"],
    ["📮","os correios","la poste"],["🛣️","a rua","la rue"],["🏛️","a praça","la place"],
    ["🅿️","o estacionamento","le parking"],["⛽","a bomba de gasolina","la station-service"],
    ["➡️","à direita","à droite"],["⬅️","à esquerda","à gauche"],["⬆️","em frente","tout droit"],
    ["📍","perto","près"],["🔭","longe","loin"],["🔀","a esquina","le coin de rue"],
  ],
  phrases:[
    {pt:"Onde fica a estação, se faz favor?", fr:"Où est la gare, s'il vous plaît ?"},
    {pt:"Um bilhete para o Porto, se faz favor", fr:"Un billet pour Porto, s'il vous plaît"},
    {pt:"É longe daqui? Posso ir a pé?", fr:"C'est loin d'ici ? Je peux y aller à pied ?"},
    {pt:"Onde posso apanhar o autocarro?", fr:"Où puis-je prendre le bus ?"},
  ],
  gaps:[
    {sentence:"Onde ___ a estação? (ficar)", answer:"fica", fr:"Où est la gare ?"},
    {sentence:"Vou apanhar o ___ para Lisboa. (train)", answer:"comboio", fr:"Je vais prendre le train pour Lisbonne."},
    {sentence:"Vire ___ direita.", answer:"à", fr:"Tournez à droite."},
    {sentence:"O ___ é mais rápido que o autocarro. (métro)", answer:"metro", fr:"Le métro est plus rapide que le bus."},
  ],
  quizExtra:[
    {type:"mcq", q:"« Le train » au Portugal :", opts:["o trem","o comboio","a locomotiva","o carril"], a:1},
    {type:"mcq", q:"« Le bus » au Portugal :", opts:["o ônibus","o autocarro","a camioneta","o busão"], a:1},
  ],
});

defineModule('a2-compras', {
  level:'A2', title:"Faire les courses", icon:"🛍️",
  description:"Acheter, essayer, comparer les prix, se plaindre poliment.",
  intro:[
    "Le comparatif se construit avec <b>mais… (do) que</b> ou <b>menos… (do) que</b> : <i>Este é mais caro <b>do que</b> aquele</i>.",
    "Quatre irréguliers à connaître : <b>bom → melhor</b>, <b>mau → pior</b>, <b>grande → maior</b>, <b>pequeno → menor</b>.",
    "Le superlatif absolu se forme en <b>-íssimo</b> : <i>caro → <b>caríssimo</b></i> (extrêmement cher).",
  ],
  items:[
    ["👕","a camisa","la chemise"],["👖","as calças","le pantalon"],["👟","os sapatos","les chaussures"],
    ["🧥","o casaco","le manteau"],["👗","o vestido","la robe"],["🧣","a camisola","le pull"],
    ["👜","a mala","le sac"],["💶","o dinheiro","l'argent"],["💳","o cartão","la carte"],
    ["🏷️","o preço","le prix"],["🧾","o recibo","le reçu"],["🔖","os saldos","les soldes"],
    ["📏","o tamanho","la taille"],["🎨","a cor","la couleur"],
    ["👍","melhor","meilleur"],["👎","pior","pire"],["⬆️","maior","plus grand"],["⬇️","menor","plus petit"],
    ["💸","caríssimo","extrêmement cher"],["🪙","em promoção","en promotion"],
    ["🔄","trocar","échanger"],["🧪","experimentar","essayer"],
  ],
  phrases:[
    {pt:"Posso experimentar este vestido?", fr:"Puis-je essayer cette robe ?"},
    {pt:"Este é mais caro do que aquele", fr:"Celui-ci est plus cher que celui-là"},
    {pt:"Tem um tamanho maior, se faz favor?", fr:"Vous avez une taille plus grande, s'il vous plaît ?"},
    {pt:"Aceita cartão ou só dinheiro?", fr:"Vous acceptez la carte ou seulement les espèces ?"},
  ],
  gaps:[
    {sentence:"Este livro é ___ caro do que aquele.", answer:"mais", fr:"Ce livre est plus cher que celui-là."},
    {sentence:"Este vinho é ___ do que o outro. (meilleur)", answer:"melhor", fr:"Ce vin est meilleur que l'autre."},
    {sentence:"Posso ___ este casaco? (essayer)", answer:"experimentar", fr:"Puis-je essayer ce manteau ?"},
    {sentence:"É caríssim___ ! (très cher, masculin)", answer:"o", fr:"C'est extrêmement cher !"},
  ],
  quizExtra:[
    {type:"mcq", q:"Le comparatif de « bom » :", opts:["mais bom","melhor","maior","boníssimo"], a:1},
    {type:"mcq", q:"« Plus cher que » :", opts:["mais caro que","mais caro de","muito caro que","tão caro que"], a:0},
  ],
});

defineModule('a2-mqp', {
  level:'A2', title:"Le passé du passé", icon:"⏪",
  description:"Le plus-que-parfait composé et le participe passé.",
  intro:[
    "Pour dire qu'une action précède une autre action passée, on utilise <b>tinha + participe passé</b> : <i>Quando cheguei, ele já <b>tinha saído</b></i>.",
    "Le participe passé régulier se forme en <b>-ado</b> (-ar) ou <b>-ido</b> (-er/-ir). Les irréguliers indispensables : <i>ver → <b>visto</b></i>, <i>pôr → <b>posto</b></i>, <i>abrir → <b>aberto</b></i>, <i>fazer → <b>feito</b></i>, <i>dizer → <b>dito</b></i>, <i>escrever → <b>escrito</b></i>, <i>vir → <b>vindo</b></i>.",
    "Le participe sert aussi à la <b>voix passive d'état</b> avec estar : <i>As portas <b>estão fechadas</b></i> — et il s'accorde alors en genre et en nombre.",
  ],
  items:[
    ["⏪","tinha saído","il était sorti"],["✅","já","déjà"],["🚫","ainda não","pas encore"],
    ["👀","visto","vu"],["🛠️","feito","fait"],["🗨️","dito","dit"],
    ["🚪","aberto","ouvert"],["🔒","fechado","fermé"],["✍️","escrito","écrit"],
    ["📍","posto","mis"],["🔙","vindo","venu"],["💰","pago","payé"],
    ["🍽️","comido","mangé"],["🗣️","falado","parlé"],["📖","lido","lu"],
    ["😴","acordado","réveillé"],["🎁","dado","donné"],
  ],
  phrases:[
    {pt:"Quando cheguei, ele já tinha saído", fr:"Quand je suis arrivé, il était déjà sorti"},
    {pt:"As lojas estão fechadas ao domingo", fr:"Les magasins sont fermés le dimanche"},
    {pt:"Nunca tinha visto uma coisa assim", fr:"Je n'avais jamais vu une chose pareille"},
    {pt:"A conta já estava paga", fr:"L'addition était déjà payée"},
  ],
  gaps:[
    {sentence:"Quando cheguei, ele já ___ saído. (ter)", answer:"tinha", hint:"ter à l'imparfait", fr:"Quand je suis arrivé, il était déjà sorti."},
    {sentence:"Nunca tinha ___ este filme. (ver)", answer:"visto", hint:"participe irrégulier", fr:"Je n'avais jamais vu ce film."},
    {sentence:"As portas estão ___ . (fechar, féminin pluriel)", answer:"fechadas", fr:"Les portes sont fermées."},
    {sentence:"O trabalho já estava ___ . (fazer)", answer:"feito", hint:"participe irrégulier", fr:"Le travail était déjà fait."},
  ],
  grammarTables:[
    { kind:"simple", title:"Participes passés irréguliers", headers:["Infinitif","Participe","Sens"],
      rows:[
        ["ver","visto","vu"],["fazer","feito","fait"],["dizer","dito","dit"],
        ["abrir","aberto","ouvert"],["escrever","escrito","écrit"],["pôr","posto","mis"],
        ["vir","vindo","venu"],["pagar","pago","payé"],["ganhar","ganho","gagné"],
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"Le participe passé de « ver » :", opts:["vido","visto","vejo","veido"], a:1},
    {type:"mcq", q:"« Il était déjà parti » :", opts:["Já partiu","Já tinha partido","Já tem partido","Já parte"], a:1},
  ],
});

defineModule('a2-fauxamis', {
  level:'A2', title:"Les faux-amis", icon:"⚠️",
  description:"Les mots qui ressemblent au français mais qui trahissent — classés par dégât causé.",
  intro:[
    "Le portugais et le français sont des langues sœurs : environ 85% du vocabulaire se ressemble. C'est un immense avantage… et un piège permanent.",
    "⚠️ Le pire de tous : <b>mais</b> ne veut PAS dire « mais ». Il veut dire « <b>plus</b> ». Pour dire « mais », c'est <b>mas</b>. Une seule lettre, sens opposé.",
  ],
  isFauxAmis:true,
  items:[
    ["➕","mais","plus (quantité)"],["↔️","mas","mais (opposition)"],
    ["🚪","puxe","tirez"],["🚪","empurre","poussez"],
    ["😷","constipado","enrhumé"],["🤨","esquisito","bizarre"],
    ["📺","assistir a","regarder"],["🔍","procurar","chercher"],
    ["⏰","acordar","se réveiller"],["🎯","pretender","avoir l'intention de"],
    ["🏪","o balcão","le comptoir"],["🌇","a varanda","le balcon"],
    ["✉️","a carta","la lettre"],["🗺️","o mapa","la carte"],
    ["😠","a discussão","la dispute"],["💬","a conversa","la conversation"],
    ["📁","a pasta","le dossier"],["🍝","a massa","les pâtes"],
    ["😤","chatear","ennuyer / agacer"],["🧠","esperto","malin"],
  ],
  phrases:[
    {pt:"Quero mais café, mas não tenho tempo", fr:"Je veux plus de café, mais je n'ai pas le temps"},
    {pt:"Estou constipado, não é nada grave", fr:"Je suis enrhumé, ce n'est rien de grave"},
    {pt:"Vamos assistir a um filme", fr:"On va regarder un film"},
    {pt:"Estou à procura de um apartamento", fr:"Je cherche un appartement"},
  ],
  gaps:[
    {sentence:"Quero ___ café. (davantage)", answer:"mais", fr:"Je veux plus de café."},
    {sentence:"Gosto, ___ não posso. (opposition)", answer:"mas", fr:"J'aime bien, mais je ne peux pas."},
    {sentence:"Na porta está escrito « ___ ». (tirez)", answer:"puxe", fr:"Sur la porte il est écrit « tirez »."},
    {sentence:"Vamos ___ a um filme. (regarder)", answer:"assistir", fr:"On va regarder un film."},
  ],
  quizExtra:[
    {type:"mcq", q:"« Mais » en portugais veut dire :", opts:["mais","plus","moins","jamais"], a:1},
    {type:"mcq", q:"Sur une porte, « Puxe » signifie :", opts:["Poussez","Tirez","Fermez","Sonnez"], a:1},
    {type:"mcq", q:"« Estou constipado » veut dire :", opts:["Je suis constipé","Je suis enrhumé","Je suis fatigué","Je suis perdu"], a:1},
    {type:"mcq", q:"« Assistir a um filme » veut dire :", opts:["Aider à faire un film","Regarder un film","Jouer dans un film","Produire un film"], a:1},
  ],
});
