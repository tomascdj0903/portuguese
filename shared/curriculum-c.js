/* ============================================================
   Português do Zero — curriculum C1 + C2
   At this stage the grammar is almost complete; what remains is
   the compound system, the literary tenses, and the registers.
   C2 in particular is less about new rules than about knowing
   which rule to break, and when.
   ============================================================ */

/* ============================================================
   C1 — AUTONOMIA
   ============================================================ */

defineModule('c1-compostos', {
  level:'C1', title:"Les temps composés", icon:"🧱",
  description:"Futur antérieur, subjonctif passé, subjonctif futur composé — l'architecture complète.",
  intro:[
    "Tout se construit sur le même principe : <b>ter</b> conjugué + <b>participe passé</b>. Il suffit de changer le temps de <i>ter</i>.",
    "<b>Futuro composto</b> (terei falado) : une action achevée <u>avant</u> un moment futur. <i>Quando chegares, eu já <b>terei saído</b></i>.<br>Il exprime aussi la supposition sur le passé : <i>No acidente <b>terão morrido</b> três pessoas</i> (trois personnes seraient mortes).",
    "<b>Pretérito perfeito composto do conjuntivo</b> (tenha falado) : après une expression de doute ou d'émotion portant sur le passé. <i>Duvido que ele <b>tenha dito</b> isso</i>.",
    "<b>Futuro composto do conjuntivo</b> (tiver falado) : après <i>quando, se, assim que</i>, pour une action achevée dans le futur. <i>Vão sair assim que <b>tiverem terminado</b></i>.",
    "<b>Condicional composto</b> (teria falado) : le regret, l'irréel du passé. <i>Se tivesse sabido, <b>teria vindo</b></i>.",
  ],
  items:[
    ["🧱","terei falado","j'aurai parlé"],["🧱","terás terminado","tu auras terminé"],
    ["🧱","tenha dito","qu'il ait dit"],["🧱","tenhamos feito","que nous ayons fait"],
    ["🧱","tiver acabado","aura fini (subj.)"],["🧱","tiverem chegado","seront arrivés (subj.)"],
    ["🧱","teria vindo","je serais venu"],["🧱","teríamos podido","nous aurions pu"],
    ["🧱","tivesse sabido","si j'avais su"],["🧱","tivessem vindo","s'ils étaient venus"],
    ["⏭️","até lá","d'ici là"],["🔚","entretanto","entre-temps"],
    ["📌","assim que","dès que"],["🤔","é provável que","il est probable que"],
  ],
  phrases:[
    {pt:"Quando chegares, eu já terei saído", fr:"Quand tu arriveras, je serai déjà parti"},
    {pt:"Duvido que ele tenha dito isso", fr:"Je doute qu'il ait dit ça"},
    {pt:"Vão sair assim que tiverem terminado", fr:"Ils partiront dès qu'ils auront terminé"},
    {pt:"Se tivesse sabido, teria vindo mais cedo", fr:"Si j'avais su, je serais venu plus tôt"},
  ],
  gaps:[
    {sentence:"Quando chegares, eu já ___ saído. (ter, futur)", answer:"terei", fr:"Quand tu arriveras, je serai déjà parti."},
    {sentence:"Duvido que ele ___ dito isso. (ter, subj. présent)", answer:"tenha", fr:"Je doute qu'il ait dit ça."},
    {sentence:"Saem assim que ___ terminado. (ter, futur du subj.)", answer:"tiverem", fr:"Ils partent dès qu'ils auront terminé."},
    {sentence:"Se ___ sabido, teria vindo. (ter, subj. imparfait)", answer:"tivesse", fr:"Si j'avais su, je serais venu."},
  ],
  grammarTables:[
    { kind:"simple", title:"Toute l'architecture composée", headers:["Temps de « ter »","Résultat","Sens"],
      rows:[
        ["Présent → tenho","tenho falado","je parle depuis quelque temps"],
        ["Imparfait → tinha","tinha falado","j'avais parlé"],
        ["Futur → terei","terei falado","j'aurai parlé"],
        ["Conditionnel → teria","teria falado","j'aurais parlé"],
        ["Subj. présent → tenha","tenha falado","que j'aie parlé"],
        ["Subj. imparfait → tivesse","tivesse falado","que j'eusse parlé"],
        ["Subj. futur → tiver","tiver falado","quand j'aurai parlé"],
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"« Je doute qu'il ait dit ça » :", opts:["Duvido que ele disse","Duvido que ele tenha dito","Duvido que ele tinha dito","Duvido que ele dissesse"], a:1},
    {type:"mcq", q:"« Dès qu'ils auront terminé » :", opts:["Assim que terminaram","Assim que tiverem terminado","Assim que terminarão","Assim que tenham terminado"], a:1},
  ],
});

defineModule('c1-mais-que-perfeito', {
  level:'C1', title:"Le plus-que-parfait simple", icon:"📜",
  description:"Le temps littéraire par excellence — et deux expressions figées que tout le monde utilise.",
  intro:[
    "📜 <b>Falara</b>, <b>fizera</b>, <b>fora</b> : un plus-que-parfait en un seul mot, sans auxiliaire. Il équivaut à <i>tinha falado</i>, mais appartient au registre <b>littéraire et journalistique</b>.",
    "Formation : encore la même recette. 3ᵉ personne du pluriel du passé simple, moins <b>-ram</b>, plus <b>-ra</b>.<br><i>fala<u>ram</u> → fala<b>ra</b></i> · <i>fo<u>ram</u> → fo<b>ra</b></i> · <i>fize<u>ram</u> → fize<b>ra</b></i>",
    "⚠️ Trois temps partagent donc exactement le même radical : le futur du subjonctif (<i>falar</i>), l'imparfait du subjonctif (<i>falasse</i>) et celui-ci (<i>falara</i>). Apprendre la 3ᵉ personne du pluriel du passé, c'est débloquer les trois d'un coup.",
    "Deux expressions figées où il survit dans la langue parlée, et qu'il faut connaître :<br>• <b>Quem me dera!</b> — « Ah, si seulement ! »<br>• <b>Pudera!</b> — « Évidemment ! », « Tu m'étonnes ! »",
  ],
  items:[
    ["📜","falara","il avait parlé"],["📜","fizera","il avait fait"],
    ["📜","fora","il avait été / était allé"],["📜","tivera","il avait eu"],
    ["📜","dissera","il avait dit"],["📜","vira","il avait vu"],
    ["📜","viera","il était venu"],["📜","chegara","il était arrivé"],
    ["💫","quem me dera!","si seulement !"],["😏","pudera!","évidemment !"],
    ["📖","o narrador","le narrateur"],["✍️","a crónica","la chronique"],
    ["🕰️","outrora","autrefois"],["📚","o romance","le roman"],
  ],
  phrases:[
    {pt:"Quando entrei na sala, já ele partira", fr:"Quand je suis entré dans la salle, il était déjà parti"},
    {pt:"Mudara de país, casara e tivera filhos", fr:"Il avait changé de pays, s'était marié et avait eu des enfants"},
    {pt:"Quem me dera ter mais tempo!", fr:"Ah, si seulement j'avais plus de temps !"},
    {pt:"Nunca vira nada semelhante", fr:"Il n'avait jamais rien vu de semblable"},
  ],
  gaps:[
    {sentence:"Quando cheguei, ele já ___ . (partir, mais-que-parfait simple)", answer:"partira", fr:"Quand je suis arrivé, il était déjà parti."},
    {sentence:"Nunca ___ nada assim. (ver)", answer:"vira", hint:"vi<u>ram</u> → vira", fr:"Il n'avait jamais rien vu de tel."},
    {sentence:"Ele ___ a Lisboa no ano anterior. (ir)", answer:"fora", hint:"fo<u>ram</u> → fora", fr:"Il était allé à Lisbonne l'année précédente."},
    {sentence:"Quem me ___ ter mais tempo! (dar)", answer:"dera", fr:"Si seulement j'avais plus de temps !"},
  ],
  grammarTables:[
    { kind:"conj", title:"Le plus-que-parfait simple", pronouns:pronouns5,
      cols:[
        {name:"Falar", forms:["falara","falaras","falara","faláramos","falaram"]},
        {name:"Ser / Ir", forms:["fora","foras","fora","fôramos","foram"]},
        {name:"Ter", forms:["tivera","tiveras","tivera","tivéramos","tiveram"]},
      ] },
    { kind:"simple", title:"Un seul radical, trois temps", headers:["Passé 3pl","Futur subj.","Imparfait subj.","Plus-que-parfait"],
      rows:[
        ["falaram","falar","falasse","falara"],
        ["foram","for","fosse","fora"],
        ["fizeram","fizer","fizesse","fizera"],
        ["tiveram","tiver","tivesse","tivera"],
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"« Ele partira » équivaut à :", opts:["Ele partiu","Ele tinha partido","Ele partirá","Ele partia"], a:1},
    {type:"mcq", q:"« Quem me dera! » signifie :", opts:["Qui me donne ?","Si seulement !","Donne-moi !","Qui m'a donné ?"], a:1},
  ],
});

defineModule('c1-infinitivo-composto', {
  level:'C1', title:"L'infinitif composé", icon:"⏳",
  description:"L'infinitif personnel au passé — l'élégance portugaise poussée à son terme.",
  intro:[
    "On combine l'infinitif personnel de <b>ter</b> avec un participe : <i>ter falado, ter<b>es</b> falado, ter falado, ter<b>mos</b> falado, ter<b>em</b> falado</i>.",
    "Il exprime une action <b>antérieure</b> tout en gardant la souplesse de l'infinitif : <i>Os alunos lamentaram <b>terem chegado</b> atrasados</i> (les élèves regrettèrent d'être arrivés en retard).",
    "L'infinitif <b>impersonnel</b> composé existe aussi, quand le sujet ne change pas : <i>Gostaria de <b>ter conhecido</b> Lisboa antes</i>.",
    "C'est une des marques les plus sûres d'un portugais vraiment maîtrisé — un locuteur B2 tournera la phrase autrement.",
  ],
  items:[
    ["⏳","ter falado","avoir parlé"],["⏳","teres dito","que tu aies dit"],
    ["⏳","termos feito","que nous ayons fait"],["⏳","terem chegado","qu'ils soient arrivés"],
    ["😔","lamentar","regretter"],["😌","agradecer","remercier"],
    ["🙌","apesar de terem","bien qu'ils aient"],["📌","depois de termos","après que nous ayons"],
    ["💭","por teres","parce que tu as"],["🎯","sem terem","sans qu'ils aient"],
    ["😊","alegrar-se","se réjouir"],["😞","arrepender-se","regretter / se repentir"],
  ],
  phrases:[
    {pt:"Os alunos lamentaram terem chegado atrasados", fr:"Les élèves ont regretté d'être arrivés en retard"},
    {pt:"Agradeço-te por teres vindo", fr:"Je te remercie d'être venu"},
    {pt:"Depois de termos falado, tudo ficou claro", fr:"Après que nous ayons parlé, tout est devenu clair"},
    {pt:"Gostaria de me ter despedido dela", fr:"J'aurais aimé lui dire au revoir"},
  ],
  gaps:[
    {sentence:"Lamentaram ___ chegado atrasados. (ter, eles)", answer:"terem", fr:"Ils ont regretté d'être arrivés en retard."},
    {sentence:"Agradeço-te por ___ vindo. (ter, tu)", answer:"teres", fr:"Je te remercie d'être venu."},
    {sentence:"Depois de ___ falado, ficou claro. (ter, nós)", answer:"termos", fr:"Après avoir parlé, c'est devenu clair."},
  ],
  quizExtra:[
    {type:"mcq", q:"« Je te remercie d'être venu » :", opts:["por ter vindo","por teres vindo","por tiveres vindo","por vieres"], a:1},
  ],
});

defineModule('c1-absolutas', {
  level:'C1', title:"Constructions absolues", icon:"🎩",
  description:"Condenser une subordonnée entière en deux mots — et la conditionnelle sans « se ».",
  intro:[
    "Le portugais soutenu adore <b>condenser</b>. Une subordonnée complète peut se réduire à un participe ou un gérondif détaché.",
    "<b>Participe absolu</b> : <i><b>Lesionado</b>, o atleta não participou</i> (blessé, l'athlète n'a pas participé). <i><b>Terminada</b> a reunião, saímos</i> (la réunion terminée, nous sommes sortis) — noter l'accord.",
    "<b>Gérondif absolu</b> : <i><b>Tendo ouvido</b> a notícia, telefonei à Maria</i>. <i><b>Estando</b> o país em alerta, resolvemos não sair</i>.",
    "⭐ <b>Conditionnelle sans conjonction</b> : le subjonctif seul, avec inversion, suffit à dire « si ».<br><i><b>Tivessem</b> eles trazido os cães e agora não poderiam entrar</i> = s'ils avaient amené les chiens…<br><i><b>Viesse</b> a chuva mais cedo e a colheita ter-se-ia salvado.</i>",
  ],
  items:[
    ["🎩","terminada a reunião","la réunion terminée"],["🎩","lida a carta","la lettre lue"],
    ["🎩","chegada a hora","l'heure venue"],["🎩","cumprido o objetivo","l'objectif atteint"],
    ["🎩","tendo ouvido","ayant entendu"],["🎩","estando o país","le pays étant"],
    ["🎩","sabendo disso","sachant cela"],["🎩","posto isto","cela posé"],
    ["🔀","tivesse eu sabido","si j'avais su"],["🔀","viesse ele","s'il venait"],
    ["📌","dado que","étant donné que"],["📌","visto isto","vu cela"],
    ["⚖️","não obstante","nonobstant"],["🎯","por conseguinte","par conséquent"],
  ],
  phrases:[
    {pt:"Terminada a reunião, saímos todos", fr:"La réunion terminée, nous sommes tous sortis"},
    {pt:"Tendo ouvido a notícia, telefonei-lhe logo", fr:"Ayant entendu la nouvelle, je lui ai téléphoné aussitôt"},
    {pt:"Estando o país em alerta, resolvemos não sair", fr:"Le pays étant en alerte, nous avons décidé de ne pas sortir"},
    {pt:"Tivesse eu sabido, teria agido de outra forma", fr:"Si j'avais su, j'aurais agi autrement"},
  ],
  gaps:[
    {sentence:"___ a reunião, saímos. (terminar, participe féminin)", answer:"Terminada", fr:"La réunion terminée, nous sommes sortis."},
    {sentence:"___ ouvido a notícia, telefonei. (ter, gérondif)", answer:"Tendo", fr:"Ayant entendu la nouvelle, j'ai téléphoné."},
    {sentence:"___ eu sabido, teria vindo. (ter, subj. imparfait)", answer:"Tivesse", fr:"Si j'avais su, je serais venu."},
  ],
  quizExtra:[
    {type:"mcq", q:"« Terminada a reunião » équivaut à :", opts:["Quando terminar a reunião","Depois de terminada a reunião","Se terminar a reunião","Para terminar a reunião"], a:1},
    {type:"mcq", q:"« Tivesse eu sabido » signifie :", opts:["J'ai su","Si j'avais su","Je saurai","Que je sache"], a:1},
  ],
});

defineModule('c1-idiomatico', {
  level:'C1', title:"Expressions idiomatiques", icon:"🎭",
  description:"Ce qu'aucun dictionnaire ne traduit — les images que les Portugais utilisent tous les jours.",
  intro:[
    "Les expressions idiomatiques sont le dernier verrou : on peut avoir une grammaire impeccable et rester transparent tant qu'on ne les manie pas.",
    "Beaucoup tournent autour de la nourriture, de la mer et des animaux — logique dans un pays de pêcheurs et de navigateurs.",
  ],
  items:[
    ["🍲","é canja","c'est du gâteau / c'est facile"],
    ["🐒","vai pentear macacos","va voir ailleurs"],
    ["🦟","ficar com a pulga atrás da orelha","avoir des soupçons"],
    ["🔪","ter a faca e o queijo na mão","avoir toutes les cartes en main"],
    ["🐴","tirar o cavalinho da chuva","faire une croix dessus"],
    ["🦶","meter os pés pelas mãos","s'emmêler les pinceaux"],
    ["💧","água pela barba","être débordé"],
    ["🎨","estar-se nas tintas","s'en ficher complètement"],
    ["🐔","muitos anos a virar frangos","avoir de la bouteille"],
    ["🏛️","cair o Carmo e a Trindade","que tout s'écroule"],
    ["🐟","fazer render o peixe","faire durer les choses"],
    ["🧠","ter macaquinhos no sótão","avoir des idées bizarres"],
    ["👃","estar com os azeites","être de mauvaise humeur"],
    ["🌊","dar à costa","échouer / finir mal"],
    ["🎯","acertar em cheio","taper dans le mille"],
    ["🤝","dar uma mãozinha","donner un coup de main"],
    ["😴","dormir a sono solto","dormir à poings fermés"],
    ["💸","custar os olhos da cara","coûter les yeux de la tête"],
  ],
  phrases:[
    {pt:"Este exercício é canja!", fr:"Cet exercice, c'est du gâteau !"},
    {pt:"Fiquei com a pulga atrás da orelha", fr:"J'ai eu des soupçons"},
    {pt:"Esse carro custa os olhos da cara", fr:"Cette voiture coûte les yeux de la tête"},
    {pt:"Podes tirar o cavalinho da chuva", fr:"Tu peux faire une croix dessus"},
  ],
  gaps:[
    {sentence:"Este teste é ___ ! (facile)", answer:"canja", fr:"Ce test, c'est du gâteau !"},
    {sentence:"Custa os ___ da cara. (yeux)", answer:"olhos", fr:"Ça coûte les yeux de la tête."},
    {sentence:"Fiquei com a ___ atrás da orelha. (puce)", answer:"pulga", fr:"J'ai eu des soupçons."},
  ],
  quizExtra:[
    {type:"mcq", q:"« É canja » signifie :", opts:["C'est de la soupe","C'est très facile","C'est raté","C'est cher"], a:1},
    {type:"mcq", q:"« Estar-se nas tintas » signifie :", opts:["Être peintre","S'en ficher","Être sale","Être bloqué"], a:1},
    {type:"mcq", q:"« Tirar o cavalinho da chuva » signifie :", opts:["Rentrer le cheval","Faire une croix dessus","Se dépêcher","Se protéger"], a:1},
  ],
});

defineModule('c1-cultura', {
  level:'C1', title:"Culture & histoire", icon:"🏛️",
  description:"Les références que tout Portugais partage — et sans lesquelles on rate la moitié des conversations.",
  items:[
    ["🎶","o fado","le fado"],["💔","a saudade","la saudade"],
    ["🔷","os azulejos","les azulejos"],["⛵","os Descobrimentos","les Grandes Découvertes"],
    ["🌸","o 25 de Abril","la Révolution des Œillets"],["🇵🇹","a Revolução dos Cravos","la Révolution des Œillets"],
    ["📜","Camões","Camões"],["✒️","Fernando Pessoa","Fernando Pessoa"],
    ["📚","José Saramago","José Saramago"],["🏆","o Prémio Nobel","le prix Nobel"],
    ["🐟","o bacalhau","la morue"],["🥐","os pastéis de nata","les pastéis de nata"],
    ["🍷","o vinho do Porto","le porto"],["🏰","Sintra","Sintra"],
    ["⛪","os Jerónimos","les Hiéronymites"],["🌉","o Tejo","le Tage"],
    ["🎭","a lusofonia","la lusophonie"],["🗺️","o Império","l'Empire"],
    ["👑","a monarquia","la monarchie"],["🏛️","a República","la République"],
    ["⚖️","o Estado Novo","l'État Nouveau (dictature)"],["🕊️","a democracia","la démocratie"],
  ],
  phrases:[
    {pt:"A saudade é intraduzível para outras línguas", fr:"La saudade est intraduisible dans d'autres langues"},
    {pt:"O 25 de Abril pôs fim à ditadura", fr:"Le 25 avril a mis fin à la dictature"},
    {pt:"Saramago recebeu o Nobel da Literatura em 1998", fr:"Saramago a reçu le Nobel de littérature en 1998"},
  ],
  reading:{
    title:"O que é a saudade?",
    source:"Texte de réflexion — registre soutenu",
    text:`Diz-se frequentemente que a palavra "saudade" não tem tradução. A afirmação é, em rigor, exagerada: outras línguas dispõem de termos aproximados, como o romeno "dor" ou o galego "saudade", que partilha com o português a mesma raiz. O que é verdadeiramente singular não é a palavra, mas o lugar que ela ocupa na cultura portuguesa.

A saudade não é apenas a falta de alguém. É um sentimento ambivalente, que mistura a dor da ausência com o prazer da recordação. Quem tem saudades não deseja necessariamente que o passado regresse — por vezes, contenta-se em habitá-lo.

Esta ambiguidade explica que a saudade tenha atravessado toda a literatura portuguesa, de Camões, que escrevia longe da pátria, até ao fado, onde se canta aquilo que se perdeu sem que isso seja motivo de desespero.

Tivesse Portugal sido um país de fronteiras fechadas, e talvez a saudade não existisse. Foi por ter mandado tantos dos seus para o mar que o país fez da ausência uma forma de identidade.`,
    questions:[
      {q:"Selon le texte, l'affirmation que « saudade » est intraduisible est :", opts:["Totalement vraie","Exagérée","Absurde","Récente"], a:1},
      {q:"Quelle langue partage la même racine ?", opts:["L'espagnol","Le roumain","Le galicien","L'italien"], a:2},
      {q:"La saudade est décrite comme :", opts:["Une tristesse pure","Un sentiment ambivalent","Une joie","Une nostalgie politique"], a:1},
      {q:"« Tivesse Portugal sido » est une conditionnelle :", opts:["Avec « se »","Sans conjonction, par inversion","Au futur","À l'impératif"], a:1},
      {q:"Selon la conclusion, la saudade naît :", opts:["De la dictature","Des départs vers la mer","De la littérature","Du fado"], a:1},
    ],
  },
  quizExtra:[
    {type:"mcq", q:"Le 25 avril 1974 correspond à :", opts:["L'entrée dans l'UE","La Révolution des Œillets","L'indépendance","La fin de la monarchie"], a:1},
    {type:"mcq", q:"José Saramago a reçu :", opts:["Le prix Camões seulement","Le Nobel de littérature","Le Goncourt","Le Cervantes"], a:1},
  ],
});

/* ============================================================
   C2 — MESTRIA
   ============================================================ */

defineModule('c2-em-gerundio', {
  level:'C2', title:"Em + gérondif & participes absolus", icon:"🕯️",
  description:"Des tournures d'un autre siècle, toujours vivantes à l'écrit et dans certaines régions.",
  intro:[
    "<b>Em + gérondif</b> exprime une condition ou une antériorité immédiate : <i><b>Em chegando</b> o João, vamos</i> (dès que João arrive, on y va). <i><b>Em tendo</b> tempo, vou contigo</i>.",
    "La tournure a un parfum archaïque mais reste parfaitement vivante à l'écrit soutenu et dans le nord du pays.",
    "<b>Participe absolu sans auxiliaire</b> : la subordonnée se réduit au participe seul. <i><b>Aberta</b> a porta, puderam entrar</i>. <i><b>Lido</b> o texto, os alunos conversaram</i>. Le participe s'accorde toujours avec le nom qui suit.",
  ],
  items:[
    ["🕯️","em chegando","dès l'arrivée de"],["🕯️","em tendo tempo","si j'ai le temps"],
    ["🕯️","em acabando","dès que j'aurai fini"],["🕯️","em sabendo","dès que je saurai"],
    ["🚪","aberta a porta","la porte ouverte"],["📖","lido o texto","le texte lu"],
    ["🕐","chegada a hora","l'heure venue"],["✅","cumprida a tarefa","la tâche accomplie"],
    ["🏁","findo o prazo","le délai expiré"],["📜","dito isto","cela dit"],
    ["⚖️","posto isto","ceci posé"],["🎯","visto o exposto","vu ce qui précède"],
  ],
  phrases:[
    {pt:"Em chegando o João, começamos a reunião", fr:"Dès que João arrive, nous commençons la réunion"},
    {pt:"Aberta a porta, puderam finalmente entrar", fr:"La porte ouverte, ils purent enfin entrer"},
    {pt:"Em tendo tempo, passo por tua casa", fr:"Si j'ai le temps, je passe chez toi"},
    {pt:"Findo o prazo, não se aceitam candidaturas", fr:"Le délai expiré, aucune candidature n'est acceptée"},
  ],
  gaps:[
    {sentence:"___ chegando o João, vamos. (préposition)", answer:"Em", fr:"Dès que João arrive, on y va."},
    {sentence:"___ a porta, entraram. (abrir, participe féminin)", answer:"Aberta", fr:"La porte ouverte, ils entrèrent."},
    {sentence:"___ o texto, discutimos. (ler, participe masculin)", answer:"Lido", fr:"Le texte lu, nous en avons discuté."},
  ],
  quizExtra:[
    {type:"mcq", q:"« Em chegando o João » signifie :", opts:["João part","Dès que João arrive","João est arrivé","João arrivait"], a:1},
  ],
});

defineModule('c2-cliticos-literarios', {
  level:'C2', title:"Clitiques littéraires", icon:"🖋️",
  description:"La proclise stylistique et les groupes qui ne fusionnent pas — le raffinement ultime.",
  intro:[
    "À ce niveau, la position du pronom devient un <b>choix stylistique</b>, pas une contrainte. Un complément placé en tête de phrase attire le pronom devant le verbe, sans qu'aucune règle ne l'impose.<br><i>Com a verdade <b>me</b> enganas</i> · <i>Um dia <b>te</b> contarei tudo</i>",
    "Certains groupes de clitiques <b>refusent</b> de fusionner et s'accumulent : <i>A boca abriu-<b>se-lhe</b> de espanto</i> · <i>Os gritos, ouvia-<b>se-lhos</b> muitas vezes</i>.",
    "L'<b>objet indirect pléonastique</b> redouble le pronom pour insister : <i>Quem <b>lhe</b> disse <b>a ela</b> que estávamos aqui?</i>",
    "Ces constructions ne s'improvisent pas : on les reconnaît d'abord, on les emploie ensuite.",
  ],
  items:[
    ["🖋️","com a verdade me enganas","c'est par la vérité que tu me trompes"],
    ["🖋️","um dia te contarei","un jour je te raconterai"],
    ["🖋️","bem te disse","je te l'avais bien dit"],
    ["🖋️","abriu-se-lhe","s'ouvrit à lui"],
    ["🖋️","ouvia-se-lhos","on les lui entendait"],
    ["🖋️","que susto me pregaste!","quelle peur tu m'as faite !"],
    ["🖋️","ele que me ligue","qu'il m'appelle"],
    ["💫","tal","tel"],["💫","o mesmo","le même"],
    ["📌","pleonástico","pléonastique"],["🎭","a ênfase","l'emphase"],
  ],
  phrases:[
    {pt:"Bem te disse que isto ia acabar mal", fr:"Je te l'avais bien dit que ça finirait mal"},
    {pt:"Que susto me pregaste!", fr:"Quelle peur tu m'as faite !"},
    {pt:"Ele que me ligue quando chegar", fr:"Qu'il m'appelle quand il arrivera"},
    {pt:"A boca abriu-se-lhe de espanto", fr:"Sa bouche s'ouvrit de stupeur"},
  ],
  gaps:[
    {sentence:"Bem ___ disse! (te)", answer:"te", fr:"Je te l'avais bien dit !"},
    {sentence:"Que susto ___ pregaste! (me)", answer:"me", fr:"Quelle peur tu m'as faite !"},
    {sentence:"Ele que ___ ligue quando chegar. (me)", answer:"me", fr:"Qu'il m'appelle quand il arrivera."},
  ],
  quizExtra:[
    {type:"mcq", q:"« Bem te disse » place le pronom devant à cause :", opts:["D'une négation","D'un adverbe emphatique","D'une question","D'une subordonnée"], a:1},
  ],
});

defineModule('c2-nominalizacao', {
  level:'C2', title:"L'infinitif nominalisé", icon:"🧿",
  description:"Transformer une proposition entière en sujet — la souplesse maximale du portugais.",
  intro:[
    "L'infinitif personnel peut devenir un <b>groupe nominal complet</b>, sujet ou complément, avec son propre sujet exprimé et un article devant.<br><i>O que me surpreendeu foi <b>o ele ter ido</b> sem nos dizer nada.</i>",
    "Dans les complétives soutenues, le sujet peut se glisser entre l'auxiliaire et le participe : <i>A Paula afirmou <b>ter o João sido</b> o responsável</i> (Paula affirma que João avait été le responsable).",
    "Cette compression est typique du portugais juridique, académique et journalistique. Elle permet d'éviter une cascade de <i>que</i>.",
  ],
  items:[
    ["🧿","o ele ter ido","le fait qu'il soit parti"],
    ["🧿","o teres vindo","le fait que tu sois venu"],
    ["🧿","ter o João sido","que João ait été"],
    ["🧿","o facto de","le fait que"],
    ["📌","surpreender","surprendre"],["📌","afirmar","affirmer"],
    ["📌","alegar","alléguer"],["📌","o responsável","le responsable"],
    ["⚖️","comprovar","prouver"],["📊","constatar","constater"],
    ["🔍","apurar","établir / vérifier"],
  ],
  phrases:[
    {pt:"O que me surpreendeu foi o ele ter ido sem avisar", fr:"Ce qui m'a surpris, c'est qu'il soit parti sans prévenir"},
    {pt:"A Paula afirmou ter o João sido o responsável", fr:"Paula a affirmé que João avait été le responsable"},
    {pt:"O teres vindo mudou tudo", fr:"Le fait que tu sois venu a tout changé"},
  ],
  gaps:[
    {sentence:"O que me surpreendeu foi o ele ___ ido. (ter)", answer:"ter", fr:"Ce qui m'a surpris, c'est qu'il soit parti."},
    {sentence:"O ___ vindo mudou tudo. (ter, tu)", answer:"teres", fr:"Le fait que tu sois venu a tout changé."},
  ],
  quizExtra:[
    {type:"mcq", q:"« O ele ter ido » est :", opts:["Un impératif","Un infinitif nominalisé","Un participe","Un gérondif"], a:1},
  ],
});

defineModule('c2-registo', {
  level:'C2', title:"Registres & ironie", icon:"🎚️",
  description:"Passer du très formel au très familier — et saisir ce qui n'est pas dit.",
  intro:[
    "Maîtriser une langue, c'est savoir <b>changer de registre</b> à volonté. Le portugais en a au moins quatre, et se tromper de registre est plus grave qu'une faute de grammaire.",
    "<b>Très formel</b> (administration, justice) : <i>Venho por este meio</i>, <i>Exmos. Senhores</i>, <i>Junto se envia</i>, <i>Estamos em crer que</i>, <i>Serve a presente para</i>.",
    "<b>Familier</b> (entre amis) : <i>pá</i> (mec), <i>fixe</i> (cool), <i>giro</i> (sympa/joli), <i>chatice</i> (galère), <i>tá-se bem</i> (ça roule), <i>bué</i> (vachement, argot jeune).",
    "L'<b>ironie</b> portugaise passe souvent par la litote et le diminutif : <i>Está um bocadinho caro</i> pour dire que c'est hors de prix ; <i>Ele é um espertinho</i> pour dire qu'il est trop malin pour son propre bien.",
  ],
  items:[
    ["🎩","venho por este meio","je viens par la présente"],
    ["🎩","exmos. senhores","messieurs (formel)"],
    ["🎩","junto se envia","ci-joint"],
    ["🎩","estamos em crer que","nous croyons que"],
    ["🎩","com os melhores cumprimentos","cordialement (formel)"],
    ["😎","pá","mec / eh"],["😎","fixe","cool"],["😎","giro","sympa / joli"],
    ["😩","que chatice","quelle galère"],["👌","tá-se bem","ça roule"],
    ["🔥","bué","vachement (argot)"],["🙄","espertinho","petit malin (ironique)"],
    ["🤏","um bocadinho","un tout petit peu (souvent ironique)"],
    ["😏","lá isso é verdade","ça pour sûr"],["🤷","enfim","enfin / bref"],
    ["💬","ora bem","bon, alors"],["🎯","pois","eh bien / oui (marqueur portugais)"],
  ],
  phrases:[
    {pt:"Venho por este meio solicitar a vossa atenção", fr:"Je viens par la présente solliciter votre attention"},
    {pt:"Está um bocadinho caro, não achas?", fr:"C'est un tout petit peu cher, tu ne trouves pas ?"},
    {pt:"Que chatice, perdi o comboio!", fr:"Quelle galère, j'ai raté le train !"},
    {pt:"Pois, lá isso é verdade", fr:"Eh bien, ça c'est vrai"},
  ],
  gaps:[
    {sentence:"___ por este meio solicitar… (venir, formel)", answer:"Venho", fr:"Je viens par la présente solliciter…"},
    {sentence:"Que ___ , perdi o comboio! (galère)", answer:"chatice", fr:"Quelle galère, j'ai raté le train !"},
    {sentence:"Este bar é muito ___ ! (cool, portugais)", answer:"fixe", fr:"Ce bar est très cool !"},
  ],
  quizExtra:[
    {type:"mcq", q:"« Fixe » au Portugal signifie :", opts:["Fixe","Cool","Cher","Fermé"], a:1},
    {type:"mcq", q:"« Está um bocadinho caro » est souvent :", opts:["Littéral","Une litote ironique","Une erreur","Du formel"], a:1},
    {type:"mcq", q:"« Pois » est :", opts:["Une conjonction seulement","Un marqueur de discours très portugais","Un verbe","Un adjectif"], a:1},
  ],
});

defineModule('c2-literatura', {
  level:'C2', title:"Littérature & pensée", icon:"📖",
  description:"Lire les grands textes et parler comme on écrit.",
  items:[
    ["📖","o romance","le roman"],["✍️","o conto","la nouvelle"],
    ["🎭","a peça","la pièce"],["📜","a epopeia","l'épopée"],
    ["🖊️","o heterónimo","l'hétéronyme"],["🌊","Os Lusíadas","Les Lusiades"],
    ["💭","o Livro do Desassossego","Le Livre de l'intranquillité"],
    ["🏆","o Prémio Camões","le prix Camões"],
    ["🧠","a metáfora","la métaphore"],["🔄","a ironia","l'ironie"],
    ["🎨","o estilo","le style"],["📐","a estrutura","la structure"],
    ["👤","a personagem","le personnage"],["🗣️","o narrador","le narrateur"],
    ["⏳","a intriga","l'intrigue"],["💫","a lírica","la poésie lyrique"],
    ["🔍","a crítica","la critique"],["📚","a obra","l'œuvre"],
  ],
  phrases:[
    {pt:"Pessoa criou dezenas de heterónimos", fr:"Pessoa a créé des dizaines d'hétéronymes"},
    {pt:"Os Lusíadas narram a viagem de Vasco da Gama", fr:"Les Lusiades racontent le voyage de Vasco de Gama"},
    {pt:"A obra de Saramago é marcada pela ironia", fr:"L'œuvre de Saramago est marquée par l'ironie"},
  ],
  reading:{
    title:"Pessoa e a arte de ser vários",
    source:"Essai littéraire — registre académique",
    text:`Poucos escritores terão levado tão longe quanto Fernando Pessoa a ideia de que um autor não precisa de ser uma só pessoa. Aos chamados heterónimos — Alberto Caeiro, Ricardo Reis, Álvaro de Campos — não atribuiu apenas nomes, mas biografias, datas de nascimento, doenças, opiniões políticas e, sobretudo, estilos irredutíveis entre si.

Caeiro escrevia em verso livre, com uma simplicidade quase agressiva; Reis compunha odes de rigor clássico; Campos, o mais moderno dos três, oscilava entre a euforia futurista e o desespero. Tivesse Pessoa publicado apenas sob o próprio nome, e a literatura portuguesa do século XX teria sido consideravelmente mais pobre.

O que impressiona não é a quantidade, mas a coerência. Cada heterónimo discute com os outros, critica-lhes os excessos, corrige-lhes as ideias. Lido o conjunto, percebe-se que Pessoa não se limitou a inventar autores: inventou uma tradição literária inteira, com as suas polémicas internas.

Resta a pergunta, que ele próprio deixou em aberto: quem escrevia, afinal, quando escrevia Pessoa?`,
    questions:[
      {q:"Que sont Caeiro, Reis et Campos ?", opts:["Des amis de Pessoa","Ses hétéronymes","Ses éditeurs","Ses personnages de roman"], a:1},
      {q:"Quel hétéronyme écrivait des odes classiques ?", opts:["Caeiro","Reis","Campos","Pessoa lui-même"], a:1},
      {q:"« Tivesse Pessoa publicado » est :", opts:["Un passé simple","Une conditionnelle sans « se »","Un impératif","Un futur"], a:1},
      {q:"« Lido o conjunto » est :", opts:["Un participe absolu","Un gérondif","Un infinitif","Un subjonctif"], a:0},
      {q:"Selon le texte, ce qui impressionne le plus, c'est :", opts:["La quantité d'hétéronymes","Leur cohérence entre eux","Leur célébrité","Leur style unique"], a:1},
      {q:"« critica-lhes os excessos » emploie :", opts:["Un pronom direct","Un pronom indirect en enclise","Une mésoclise","Un possessif"], a:1},
    ],
  },
  quizExtra:[
    {type:"mcq", q:"« Os Lusíadas » est une œuvre de :", opts:["Pessoa","Camões","Saramago","Eça de Queirós"], a:1},
    {type:"mcq", q:"Un « heterónimo » est :", opts:["Un pseudonyme simple","Un auteur fictif avec sa propre biographie et son style","Un traducteur","Un critique"], a:1},
  ],
});
