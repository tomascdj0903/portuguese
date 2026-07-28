/* ============================================================
   Português do Zero — curriculum B1 + B2
   B1 is where Portuguese stops resembling French. Three
   structures here have NO French equivalent at all: the personal
   infinitive, the future subjunctive, and the true value of the
   compound perfect. They are the difference between "speaking
   Portuguese words" and "speaking Portuguese".
   ============================================================ */

/* ============================================================
   B1 — LIMIAR
   ============================================================ */

defineModule('b1-infinitivo-pessoal', {
  level:'B1', title:"L'infinitif personnel", icon:"⭐",
  description:"La structure la plus caractéristique du portugais. Elle n'existe dans aucune autre langue romane courante.",
  intro:[
    "⭐ Le portugais possède un infinitif qui <b>se conjugue</b>. C'est unique et c'est ce qui donne à la langue sa souplesse. On ajoute simplement les terminaisons <b>-, -es, -, -mos, -em</b> à l'infinitif : <i>falar, falar<b>es</b>, falar, falar<b>mos</b>, falar<b>em</b></i>.",
    "À quoi ça sert ? À garder l'infinitif quand le sujet <b>change</b>. Le français est obligé de passer par le subjonctif ; le portugais, non.<br>« <i>Avant <u>qu'ils ne sortent</u></i> » → <b>Antes de saírem</b><br>« <i>Il vaut mieux <u>que nous parlions</u></i> » → <b>É melhor falarmos</b>",
    "Quand le sujet est <b>le même</b>, on garde l'infinitif normal (impersonnel) : <i>Antes de <b>sair</b>, fechei a porta</i> (c'est moi qui sors et qui ferme).",
    "Il s'utilise surtout : après <b>para, antes de, depois de, sem, até, apesar de</b> ; après les expressions impersonnelles <b>é melhor / é preciso / é importante</b>.",
  ],
  items:[
    ["⭐","antes de saírem","avant qu'ils ne sortent"],
    ["⭐","depois de chegarmos","après que nous soyons arrivés"],
    ["⭐","para eu perceber","pour que je comprenne"],
    ["⭐","sem eles saberem","sans qu'ils le sachent"],
    ["⭐","é melhor falarmos","il vaut mieux que nous parlions"],
    ["⭐","é preciso teres calma","il faut que tu sois calme"],
    ["⭐","até chegarem","jusqu'à ce qu'ils arrivent"],
    ["📌","apesar de","malgré / bien que"],
    ["🎯","a fim de","afin de"],
    ["⏳","no caso de","au cas où"],
    ["✅","é importante","il est important"],
    ["🔑","é necessário","il est nécessaire"],
    ["👍","vale a pena","ça vaut la peine"],
    ["🤔","é difícil","c'est difficile"],
    ["😌","é fácil","c'est facile"],
  ],
  phrases:[
    {pt:"É melhor falarmos amanhã", fr:"Il vaut mieux que nous parlions demain"},
    {pt:"Antes de saírem, fechem as janelas", fr:"Avant de sortir, fermez les fenêtres"},
    {pt:"Fiz isto para tu perceberes melhor", fr:"J'ai fait ça pour que tu comprennes mieux"},
    {pt:"Saíram sem eu saber", fr:"Ils sont partis sans que je le sache"},
  ],
  gaps:[
    {sentence:"É melhor ___ amanhã. (falar, nós)", answer:"falarmos", hint:"infinitif personnel", fr:"Il vaut mieux que nous parlions demain."},
    {sentence:"Antes de ___ , fechem a porta. (sair, vocês)", answer:"saírem", hint:"infinitif personnel", fr:"Avant de sortir, fermez la porte."},
    {sentence:"Fiz isto para tu ___ . (perceber)", answer:"perceberes", hint:"infinitif personnel", fr:"J'ai fait ça pour que tu comprennes."},
    {sentence:"É preciso ___ calma. (ter, tu)", answer:"teres", hint:"infinitif personnel", fr:"Il faut que tu sois calme."},
    {sentence:"Saíram sem eu ___ . (saber)", answer:"saber", hint:"1ʳᵉ personne : forme identique à l'infinitif", fr:"Ils sont partis sans que je le sache."},
  ],
  grammarTables:[
    { kind:"conj", title:"L'infinitif personnel — c'est toujours régulier", pronouns:pronouns5,
      cols:[
        {name:"Falar", forms:["falar","falares","falar","falarmos","falarem"]},
        {name:"Ser", forms:["ser","seres","ser","sermos","serem"]},
        {name:"Ter", forms:["ter","teres","ter","termos","terem"]},
      ] },
    { kind:"simple", title:"Impersonnel ou personnel ?", headers:["Situation","Forme","Exemple"],
      rows:[
        ["Même sujet","infinitif normal","Antes de sair, fechei a porta"],
        ["Sujet différent","infinitif personnel","Antes de saíres, fecha a porta"],
        ["Sujet explicite","infinitif personnel","É melhor eles virem cedo"],
        ["Expression impersonnelle","infinitif personnel","É preciso estudarmos mais"],
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"« Il vaut mieux que nous parlions » :", opts:["É melhor falamos","É melhor falarmos","É melhor falemos","É melhor falar"], a:1},
    {type:"mcq", q:"L'infinitif personnel de « ter » avec « tu » :", opts:["ter","teres","tenhas","tiveres"], a:1},
    {type:"mcq", q:"« Avant qu'ils ne sortent » :", opts:["Antes de sair","Antes de saírem","Antes que saem","Antes de saiam"], a:1},
  ],
});

defineModule('b1-conjuntivo', {
  level:'B1', title:"Le subjonctif présent", icon:"🌀",
  description:"Le mode du doute, du souhait et de l'émotion. Bonne nouvelle : le français en a un aussi.",
  intro:[
    "Le subjonctif portugais fonctionne comme le français dans l'ensemble — c'est un des rares points où le transfert joue en votre faveur.",
    "Formation : on prend la <b>1ʳᵉ personne du présent</b>, on enlève le <b>-o</b>, et on inverse la voyelle. Verbes en <b>-ar</b> → terminaisons en <b>-e</b> ; verbes en <b>-er/-ir</b> → terminaisons en <b>-a</b>.<br><i>falo → fal<b>e</b></i> · <i>como → com<b>a</b></i> · <i>durmo → durm<b>a</b></i> · <i>faço → faç<b>a</b></i>",
    "Six irréguliers ne suivent pas cette règle : <b>ser (seja), estar (esteja), ir (vá), querer (queira), saber (saiba), haver (haja)</b>.",
    "⚠️ Deux emplois que le français ne partage pas :<br>• après un <b>antécédent indéfini</b> : <i>Quero uma casa que <b>tenha</b> jardim</i> (une maison quelconque) vs <i>a casa que <b>tem</b> jardim</i> (celle-là précisément)<br>• après <b>talvez</b> : <i>Talvez ele <b>venha</b></i>",
  ],
  items:[
    ["🌀","espero que","j'espère que"],["🙏","oxalá","pourvu que"],
    ["🤔","talvez","peut-être"],["❓","duvido que","je doute que"],
    ["😊","fico contente que","je suis content que"],["😟","receio que","je crains que"],
    ["💭","é possível que","il est possible que"],["⚠️","é preciso que","il faut que"],
    ["🚫","não creio que","je ne crois pas que"],["👍","quero que","je veux que"],
    ["📌","para que","pour que"],["⏳","até que","jusqu'à ce que"],
    ["🔀","embora","bien que"],["🎯","a menos que","à moins que"],
    ["✨","que seja","que ce soit"],["🏃","que vá","qu'il aille"],
    ["🧠","que saiba","qu'il sache"],["🤲","que tenha","qu'il ait"],
  ],
  phrases:[
    {pt:"Espero que tenhas um bom dia", fr:"J'espère que tu passes une bonne journée"},
    {pt:"Talvez ele venha amanhã", fr:"Peut-être qu'il viendra demain"},
    {pt:"Quero uma casa que tenha jardim", fr:"Je veux une maison qui ait un jardin"},
    {pt:"Não creio que ela saiba a verdade", fr:"Je ne crois pas qu'elle sache la vérité"},
  ],
  gaps:[
    {sentence:"Espero que tu ___ bem. (estar)", answer:"estejas", hint:"estar au subjonctif", fr:"J'espère que tu vas bien."},
    {sentence:"Talvez ele ___ amanhã. (vir)", answer:"venha", hint:"vir au subjonctif", fr:"Peut-être qu'il viendra demain."},
    {sentence:"Duvido que ela ___ a verdade. (saber)", answer:"saiba", hint:"saber au subjonctif", fr:"Je doute qu'elle sache la vérité."},
    {sentence:"Quero que tu ___ mais. (estudar)", answer:"estudes", hint:"estudar au subjonctif", fr:"Je veux que tu étudies plus."},
    {sentence:"É preciso que nós ___ cedo. (ir)", answer:"vamos", hint:"ir au subjonctif", fr:"Il faut que nous partions tôt."},
  ],
  grammarTables:[
    { kind:"conj", title:"Le subjonctif présent — réguliers", pronouns:pronouns5,
      cols:[
        {name:"Falar", forms:["fale","fales","fale","falemos","falem"]},
        {name:"Comer", forms:["coma","comas","coma","comamos","comam"]},
        {name:"Partir", forms:["parta","partas","parta","partamos","partam"]},
      ] },
    { kind:"conj", title:"Les six irréguliers", pronouns:pronouns5,
      cols:[
        {name:"Ser", forms:["seja","sejas","seja","sejamos","sejam"]},
        {name:"Estar", forms:["esteja","estejas","esteja","estejamos","estejam"]},
        {name:"Ir", forms:["vá","vás","vá","vamos","vão"]},
        {name:"Saber", forms:["saiba","saibas","saiba","saibamos","saibam"]},
      ] },
    { kind:"simple", title:"Indicatif ou subjonctif ? La paire minimale", headers:["Indicatif (certitude)","Subjonctif (doute)"],
      rows:[
        ["Creio que ele é português","Não creio que ele seja português"],
        ["A casa que tem jardim","Uma casa que tenha jardim"],
        ["Sei que ela vem","Espero que ela venha"],
        ["É certo que chove","É possível que chova"],
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"« J'espère que tu vas bien » :", opts:["Espero que estás bem","Espero que estejas bem","Espero que sejas bem","Espero que estarás bem"], a:1},
    {type:"mcq", q:"« Je veux une maison qui ait un jardin » (n'importe laquelle) :", opts:["que tem jardim","que tenha jardim","que teria jardim","que terá jardim"], a:1},
  ],
});

defineModule('b1-futuro-conjuntivo', {
  level:'B1', title:"Le futur du subjonctif", icon:"🔮",
  description:"Le temps qui n'existe pas en français — et que les Portugais utilisent tous les jours.",
  intro:[
    "⭐ Un temps que le français a totalement perdu, et que le portugais utilise <b>en permanence</b>. Après <b>quando, se, assim que, logo que, enquanto, sempre que, depois que</b>, quand on parle du futur, le portugais exige ce temps.",
    "Le français dit « <i>quand tu <u>arriveras</u></i> » (futur) ou « <i>si tu <u>peux</u></i> » (présent). Le portugais dit <b>quando chegares</b>, <b>se puderes</b>. Traduire mot à mot donne <i>quando chegas</i> — une faute immédiatement audible.",
    "Formation : hyper simple. On prend la <b>3ᵉ personne du pluriel du passé simple</b>, on enlève <b>-ram</b>, et on ajoute <b>-, -es, -, -mos, -em</b>.<br><i>fala<u>ram</u> → falar</i> · <i>fize<u>ram</u> → fizer</i> · <i>fo<u>ram</u> → for</i> · <i>tive<u>ram</u> → tiver</i>",
    "⚠️ Pour les verbes réguliers, la forme est <b>identique</b> à l'infinitif personnel. Pour les irréguliers, elle diffère : <i>ser</i> → infinitif personnel <b>ser/seres</b>, futur du subjonctif <b>for/fores</b>.",
  ],
  items:[
    ["🔮","quando chegares","quand tu arriveras"],["🔮","se puderes","si tu peux"],
    ["🔮","assim que acabares","dès que tu auras fini"],["🔮","logo que souberes","dès que tu sauras"],
    ["🔮","enquanto estiveres","tant que tu seras"],["🔮","sempre que quiseres","chaque fois que tu voudras"],
    ["🔮","se for possível","si c'est possible"],["🔮","quando fores","quand tu iras"],
    ["🔮","se tiveres tempo","si tu as le temps"],["🔮","quando vires","quand tu verras"],
    ["⏰","depois que","après que"],["🔁","conforme","selon que"],
    ["📞","liga-me","appelle-moi"],["🎁","avisa-me","préviens-moi"],
  ],
  phrases:[
    {pt:"Quando chegares, telefona-me", fr:"Quand tu arriveras, appelle-moi"},
    {pt:"Se puderes, traz o livro", fr:"Si tu peux, apporte le livre"},
    {pt:"Assim que acabares, avisa-me", fr:"Dès que tu auras fini, préviens-moi"},
    {pt:"Faremos isso quando for possível", fr:"Nous ferons ça quand ce sera possible"},
  ],
  gaps:[
    {sentence:"Quando tu ___ , telefona-me. (chegar)", answer:"chegares", hint:"futur du subjonctif", fr:"Quand tu arriveras, appelle-moi."},
    {sentence:"Se tu ___ , traz o livro. (poder)", answer:"puderes", hint:"pude<u>ram</u> → puder", fr:"Si tu peux, apporte le livre."},
    {sentence:"Assim que ele ___ , avisa-me. (acabar)", answer:"acabar", hint:"futur du subjonctif", fr:"Dès qu'il aura fini, préviens-moi."},
    {sentence:"Quando ___ possível, falamos. (ser)", answer:"for", hint:"fo<u>ram</u> → for", fr:"Quand ce sera possible, nous parlerons."},
    {sentence:"Se ___ tempo, vou contigo. (ter, eu)", answer:"tiver", hint:"tive<u>ram</u> → tiver", fr:"Si j'ai le temps, je vais avec toi."},
  ],
  grammarTables:[
    { kind:"conj", title:"Le futur du subjonctif", pronouns:pronouns5,
      cols:[
        {name:"Falar", forms:["falar","falares","falar","falarmos","falarem"]},
        {name:"Ser / Ir", forms:["for","fores","for","formos","forem"]},
        {name:"Ter", forms:["tiver","tiveres","tiver","tivermos","tiverem"]},
        {name:"Poder", forms:["puder","puderes","puder","pudermos","puderem"]},
      ] },
    { kind:"simple", title:"La recette : 3ᵉ pers. pluriel du passé − « ram »", headers:["Infinitif","Passé 3pl","Futur du subj."],
      rows:[
        ["falar","falaram","falar"],["fazer","fizeram","fizer"],
        ["ser / ir","foram","for"],["ter","tiveram","tiver"],
        ["estar","estiveram","estiver"],["querer","quiseram","quiser"],
        ["dizer","disseram","disser"],["ver","viram","vir"],["vir","vieram","vier"],
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"« Quand tu arriveras » :", opts:["Quando chegas","Quando chegarás","Quando chegares","Quando chegue"], a:2},
    {type:"mcq", q:"« Si tu peux » (futur) :", opts:["Se podes","Se puderes","Se possas","Se poderás"], a:1},
    {type:"mcq", q:"Le futur du subjonctif de « ser » avec « eu » :", opts:["ser","seja","for","fosse"], a:2},
  ],
});

defineModule('b1-perfeito-composto', {
  level:'B1', title:"Le passé composé portugais", icon:"🪤",
  description:"Le faux-ami grammatical le plus dangereux pour un francophone.",
  intro:[
    "🪤 <b>Tenho falado</b> ressemble comme deux gouttes d'eau à « j'ai parlé ». Ce n'est pas du tout la même chose.",
    "Le portugais <b>tenho falado</b> signifie : « je parle <u>depuis quelque temps et ça continue</u> », « je n'arrête pas de parler ces derniers temps ». C'est un présent étendu vers le passé, pas un passé.",
    "Pour traduire le passé composé français, il faut le <b>pretérito perfeito simples</b> : « j'ai parlé » = <b>falei</b>.",
    "Comparez :<br>• <i>Ontem <b>falei</b> com ela</i> = hier j'ai parlé avec elle (fini)<br>• <i>Ultimamente <b>tenho falado</b> muito com ela</i> = ces derniers temps je parle beaucoup avec elle (ça dure)",
    "Il s'accompagne presque toujours de : <b>ultimamente, nestes últimos tempos, desde que, ultimamente, este mês</b>.",
  ],
  items:[
    ["🪤","tenho trabalhado","je travaille (depuis quelque temps)"],
    ["🪤","tenho estudado","j'étudie (ces derniers temps)"],
    ["🕐","ultimamente","ces derniers temps"],
    ["📆","nestes últimos meses","ces derniers mois"],
    ["🔁","desde que","depuis que"],
    ["📈","cada vez mais","de plus en plus"],
    ["🌧️","tem chovido","il pleut (ces temps-ci)"],
    ["😴","tenho dormido mal","je dors mal ces temps-ci"],
    ["💪","tenho feito","je fais (régulièrement)"],
    ["📖","tenho lido","je lis (ces temps-ci)"],
    ["🏃","tenho ido","je vais (régulièrement)"],
    ["⏳","até agora","jusqu'à présent"],
  ],
  phrases:[
    {pt:"Tenho trabalhado muito ultimamente", fr:"Je travaille beaucoup ces derniers temps"},
    {pt:"Ontem trabalhei até tarde", fr:"Hier j'ai travaillé jusqu'à tard"},
    {pt:"Tem chovido todos os dias", fr:"Il pleut tous les jours ces temps-ci"},
    {pt:"Desde que cheguei, tenho aprendido muito", fr:"Depuis que je suis arrivée, j'apprends beaucoup"},
  ],
  gaps:[
    {sentence:"Ontem ___ com a Ana. (falar) — action terminée", answer:"falei", hint:"passé simple", fr:"Hier j'ai parlé avec Ana."},
    {sentence:"Ultimamente ___ falado muito. (ter)", answer:"tenho", hint:"ter au présent", fr:"Ces derniers temps je parle beaucoup."},
    {sentence:"Este mês ___ chovido muito. (ter)", answer:"tem", hint:"ter, 3ᵉ personne", fr:"Ce mois-ci il a beaucoup plu."},
    {sentence:"Na semana passada ___ ao Porto. (ir, eu)", answer:"fui", hint:"passé simple", fr:"La semaine dernière je suis allé à Porto."},
  ],
  grammarTables:[
    { kind:"simple", title:"Le piège en une ligne", headers:["Français","Portugais","Pourquoi"],
      rows:[
        ["J'ai mangé (hier)","Comi","Action terminée → perfeito simples"],
        ["Je mange beaucoup ces temps-ci","Tenho comido muito","Action qui dure → perfeito composto"],
        ["Je suis allé au Portugal","Fui a Portugal","Terminé"],
        ["Je vais souvent au Portugal ces temps-ci","Tenho ido a Portugal","Répété et continu"],
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"« Hier j'ai mangé au restaurant » :", opts:["Ontem tenho comido","Ontem comi","Ontem comia","Ontem tinha comido"], a:1},
    {type:"mcq", q:"« Tenho trabalhado muito » veut dire :", opts:["J'ai travaillé (hier)","Je travaille beaucoup ces derniers temps","Je travaillerai","Je travaillais autrefois"], a:1},
  ],
});

defineModule('b1-futuro-condicional', {
  level:'B1', title:"Futur & conditionnel", icon:"🔭",
  description:"Le futur simple, le conditionnel, et leur usage surprenant pour exprimer le doute.",
  intro:[
    "Le futur simple s'obtient en ajoutant les terminaisons directement à l'infinitif : <i>falar<b>ei</b>, falar<b>ás</b>, falar<b>á</b>, falar<b>emos</b>, falar<b>ão</b></i>. Trois irréguliers seulement : <b>dizer → direi</b>, <b>fazer → farei</b>, <b>trazer → trarei</b>.",
    "⚠️ À l'oral, les Portugais utilisent surtout <b>ir + infinitif</b> (<i>vou falar</i>). Le futur simple appartient plutôt à l'écrit et au registre soutenu.",
    "Usage inattendu : le futur exprime aussi le <b>doute sur le présent</b>. <i>Será que ele vem?</i> = est-ce qu'il vient, je me demande ? <i>Ela gostará disto?</i> = est-ce qu'elle aimerait ça ?",
    "Le conditionnel sert à la politesse (<i>Poderia ajudar-me?</i>) et à l'hypothèse. Mais à l'oral, l'imparfait le remplace souvent : <i>Eu <b>ia</b> contigo</i> plutôt que <i>iria</i>.",
  ],
  items:[
    ["🔭","falarei","je parlerai"],["🔭","farei","je ferai"],["🔭","direi","je dirai"],
    ["🔭","trarei","j'apporterai"],["🤔","será que","est-ce que (je me demande)"],
    ["🙏","poderia","pourriez-vous"],["💭","gostaria","j'aimerais"],
    ["🎯","seria","ce serait"],["🚶","iria","j'irais"],
    ["📅","no futuro","à l'avenir"],["⏭️","daqui a um ano","dans un an"],
    ["🔮","provavelmente","probablement"],["❓","talvez","peut-être"],
    ["✨","de certeza","certainement"],
  ],
  phrases:[
    {pt:"Amanhã falarei com o diretor", fr:"Demain je parlerai avec le directeur"},
    {pt:"Será que ela vem hoje?", fr:"Est-ce qu'elle vient aujourd'hui, je me demande ?"},
    {pt:"Poderia ajudar-me, se faz favor?", fr:"Pourriez-vous m'aider, s'il vous plaît ?"},
    {pt:"Gostaria de visitar o Porto", fr:"J'aimerais visiter Porto"},
  ],
  gaps:[
    {sentence:"Amanhã eu ___ com ele. (falar, futur)", answer:"falarei", hint:"futur simple", fr:"Demain je parlerai avec lui."},
    {sentence:"Eu ___ isso amanhã. (fazer, futur)", answer:"farei", hint:"irrégulier", fr:"Je ferai ça demain."},
    {sentence:"___ que ela vem? (ser, futur de doute)", answer:"Será", fr:"Est-ce qu'elle vient ?"},
    {sentence:"___ ajudar-me? (poder, conditionnel)", answer:"Poderia", hint:"conditionnel poli", fr:"Pourriez-vous m'aider ?"},
  ],
  grammarTables:[
    { kind:"conj", title:"Futur simple & conditionnel", pronouns:pronouns5,
      cols:[
        {name:"Futur (falar)", forms:["falarei","falarás","falará","falaremos","falarão"]},
        {name:"Conditionnel (falar)", forms:["falaria","falarias","falaria","falaríamos","falariam"]},
      ] },
    { kind:"simple", title:"Les trois seuls irréguliers", headers:["Infinitif","Futur","Conditionnel"],
      rows:[["dizer","direi","diria"],["fazer","farei","faria"],["trazer","trarei","traria"]] },
  ],
  quizExtra:[
    {type:"mcq", q:"Le futur de « fazer » (eu) :", opts:["fazerei","farei","façarei","fazerá"], a:1},
    {type:"mcq", q:"« Será que ele vem? » exprime :", opts:["Une certitude","Un doute sur le présent","Un ordre","Un passé"], a:1},
  ],
});

defineModule('b1-cliticos-avancado', {
  level:'B1', title:"Les pronoms qui changent de forme", icon:"🧬",
  description:"Le point de grammaire pure le plus difficile de la langue. Personne n'y échappe.",
  intro:[
    "Quand le pronom <b>o, a, os, as</b> se colle à un verbe, il change de forme selon la terminaison du verbe. C'est mécanique, mais il faut l'automatiser.",
    "<b>Règle 1 — après -r, -s, -z :</b> la consonne finale <u>tombe</u> et le pronom devient <b>-lo, -la, -los, -las</b>.<br><i>fazer + o → <b>fazê-lo</b></i> · <i>comprar + as → <b>comprá-las</b></i> · <i>faz + o → <b>fá-lo</b></i> · <i>fazemos + o → <b>fazemo-lo</b></i>",
    "<b>Règle 2 — après une nasale (-ão, -õe, -am, -em) :</b> le pronom devient <b>-no, -na, -nos, -nas</b>.<br><i>põe + a → <b>põe-na</b></i> · <i>deram + o → <b>deram-no</b></i> · <i>fazem + o → <b>fazem-no</b></i>",
    "Notez l'accent qui apparaît : <i>fazer</i> perd son <i>r</i> mais garde l'accent tonique → <b>fazê-lo</b>.",
  ],
  items:[
    ["🧬","fazê-lo","le faire"],["🧬","comprá-la","l'acheter"],["🧬","vendê-los","les vendre"],
    ["🧬","parti-lo","le casser"],["🧬","fá-lo","fais-le"],["🧬","fê-lo","il l'a fait"],
    ["🧬","põe-na","il/elle la met"],["🧬","deram-no","ils l'ont donné"],
    ["🧬","fazem-no","ils le font"],["🧬","têm-nos","ils les ont"],
    ["📌","vamos fazê-lo","allons le faire"],["📌","quero vê-la","je veux la voir"],
    ["📌","posso ajudá-lo","je peux vous aider"],["📌","vou comprá-lo","je vais l'acheter"],
  ],
  phrases:[
    {pt:"Vamos fazê-lo amanhã", fr:"Nous allons le faire demain"},
    {pt:"Quero vê-la antes de partir", fr:"Je veux la voir avant de partir"},
    {pt:"Eles deram-no ao professor", fr:"Ils l'ont donné au professeur"},
    {pt:"Ela põe-na na mesa", fr:"Elle la met sur la table"},
  ],
  gaps:[
    {sentence:"Vamos faz___ amanhã. (fazer + o)", answer:"ê-lo", alt:["ê-lo","e-lo"], fr:"Nous allons le faire demain."},
    {sentence:"Quero v___ hoje. (ver + a)", answer:"ê-la", fr:"Je veux la voir aujourd'hui."},
    {sentence:"Eles deram-___ ao professor. (dar + o)", answer:"no", hint:"après une nasale", fr:"Ils l'ont donné au professeur."},
    {sentence:"Ela põe-___ na mesa. (pôr + a)", answer:"na", hint:"après une nasale", fr:"Elle la met sur la table."},
  ],
  grammarTables:[
    { kind:"simple", title:"Les deux règles", headers:["Le verbe finit par…","Le pronom devient","Exemple"],
      rows:[
        ["-r (fazer)","-lo / -la","fazer + o = fazê-lo"],
        ["-s (fazemos)","-lo / -la","fazemos + o = fazemo-lo"],
        ["-z (faz)","-lo / -la","faz + o = fá-lo"],
        ["-ão (dão)","-no / -na","dão + o = dão-no"],
        ["-am (deram)","-no / -na","deram + o = deram-no"],
        ["-em (fazem)","-no / -na","fazem + o = fazem-no"],
        ["-õe (põe)","-no / -na","põe + a = põe-na"],
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"« fazer » + « o » donne :", opts:["fazer-o","fazê-lo","faze-no","fazer-lo"], a:1},
    {type:"mcq", q:"« deram » + « o » donne :", opts:["deram-o","deram-lo","deram-no","derá-lo"], a:2},
  ],
});

defineModule('b1-trabalho', {
  level:'B1', title:"Travail & études", icon:"💼",
  description:"Parler de son métier, de sa formation, écrire un email professionnel.",
  items:[
    ["💼","o emprego","l'emploi"],["🏢","a empresa","l'entreprise"],["📋","o currículo","le CV"],
    ["🤝","a entrevista","l'entretien"],["💰","o salário","le salaire"],["📅","o horário","les horaires"],
    ["🏖️","as férias","les vacances"],["📈","a formação","la formation"],
    ["🎓","a licenciatura","la licence"],["📚","o mestrado","le master"],
    ["👔","o chefe","le chef"],["👥","o colega","le collègue"],["🤝","a reunião","la réunion"],
    ["📧","o email","l'email"],["📞","a chamada","l'appel"],["⏰","o prazo","le délai"],
    ["✍️","assinar","signer"],["📤","enviar","envoyer"],["🎯","o objetivo","l'objectif"],
    ["🧑‍💻","o teletrabalho","le télétravail"],["📝","a candidatura","la candidature"],
    ["⚖️","o contrato","le contrat"],["🏆","a experiência","l'expérience"],
  ],
  phrases:[
    {pt:"Trabalho numa empresa de informática", fr:"Je travaille dans une entreprise informatique"},
    {pt:"Tenho uma reunião às dez horas", fr:"J'ai une réunion à dix heures"},
    {pt:"Enviei a minha candidatura ontem", fr:"J'ai envoyé ma candidature hier"},
    {pt:"Gostaria de saber mais sobre o cargo", fr:"J'aimerais en savoir plus sur le poste"},
  ],
  gaps:[
    {sentence:"Trabalho numa ___ de informática. (entreprise)", answer:"empresa", fr:"Je travaille dans une entreprise informatique."},
    {sentence:"Enviei o meu ___ por email. (CV)", answer:"currículo", fr:"J'ai envoyé mon CV par email."},
    {sentence:"A ___ é às dez horas. (réunion)", answer:"reunião", fr:"La réunion est à dix heures."},
  ],
  reading:{
    title:"Um email profissional",
    source:"Registre formel — noter les formules d'ouverture et de clôture",
    text:`Exma. Senhora Doutora Marques,

Venho por este meio candidatar-me à vaga de tradutora que se encontra publicada no vosso sítio.

Sou licenciada em Línguas e Literaturas Modernas pela Universidade do Porto e tenho cinco anos de experiência em tradução técnica. Nos últimos dois anos, tenho colaborado com várias empresas do setor tecnológico, o que me permitiu desenvolver competências específicas nesta área.

Junto envio o meu currículo. Fico ao dispor para qualquer esclarecimento adicional e agradeço desde já a atenção dispensada.

Com os melhores cumprimentos,
Marie Dubois`,
    questions:[
      {q:"Quel est l'objectif de cet email ?", opts:["Demander une augmentation","Postuler à un poste","Démissionner","Demander des congés"], a:1},
      {q:"Où Marie a-t-elle obtenu son diplôme ?", opts:["Université de Lisbonne","Université de Coimbra","Université de Porto","En France"], a:2},
      {q:"« Tenho colaborado » indique une action :", opts:["Terminée il y a longtemps","Continue sur les deux dernières années","Future","Hypothétique"], a:1},
      {q:"« Fico ao dispor » signifie :", opts:["Je démissionne","Je reste à disposition","Je suis pressée","Je refuse"], a:1},
    ],
  },
  quizExtra:[
    {type:"mcq", q:"Une formule de clôture formelle en portugais :", opts:["Beijinhos","Com os melhores cumprimentos","Até já","Abraço"], a:1},
  ],
});

defineModule('b1-saude', {
  level:'B1', title:"Santé & sensations", icon:"🩺",
  description:"Décrire une douleur, aller chez le médecin — et la structure « Dói-me a cabeça ».",
  intro:[
    "⚠️ Pour les parties du corps, le portugais n'utilise <b>pas le possessif</b> mais l'article + un pronom : on dit <b>Dói-me a cabeça</b> (littéralement « la tête me fait mal »), jamais <i>Dói a minha cabeça</i>.",
    "C'est en fait la même logique que le français « j'ai mal <u>à la</u> tête » — le transfert joue en votre faveur ici.",
    "Même chose pour les vêtements et la famille : <i>Pôs <b>a</b> mão no bolso</i> (il mit sa main dans sa poche), <i>Não fala com <b>o</b> pai</i> (il ne parle pas à son père).",
  ],
  items:[
    ["🤕","dói-me a cabeça","j'ai mal à la tête"],["🩺","o médico","le médecin"],
    ["🏥","o hospital","l'hôpital"],["💊","o medicamento","le médicament"],
    ["🤒","a febre","la fièvre"],["🤧","a constipação","le rhume"],
    ["😷","a gripe","la grippe"],["🩹","a ferida","la blessure"],
    ["💉","a vacina","le vaccin"],["📋","a receita","l'ordonnance"],
    ["🫀","o coração","le cœur"],["🦴","o osso","l'os"],
    ["👁️","o olho","l'œil"],["👂","a orelha","l'oreille"],["🦷","o dente","la dent"],
    ["🤲","a mão","la main"],["🦵","a perna","la jambe"],["🦶","o pé","le pied"],
    ["😰","sentir-se mal","se sentir mal"],["😌","melhorar","aller mieux"],
    ["🆘","as urgências","les urgences"],["📅","a consulta","la consultation"],
  ],
  phrases:[
    {pt:"Dói-me muito a cabeça", fr:"J'ai très mal à la tête"},
    {pt:"Preciso de marcar uma consulta", fr:"J'ai besoin de prendre rendez-vous"},
    {pt:"Estou constipada, mas não é grave", fr:"Je suis enrhumée, mais ce n'est pas grave"},
    {pt:"Onde fica a farmácia mais próxima?", fr:"Où est la pharmacie la plus proche ?"},
  ],
  gaps:[
    {sentence:"Dói-___ a cabeça. (à moi)", answer:"me", fr:"J'ai mal à la tête."},
    {sentence:"Dói-me ___ cabeça. (article, pas possessif)", answer:"a", fr:"J'ai mal à la tête."},
    {sentence:"Preciso ___ marcar uma consulta.", answer:"de", hint:"precisar exige une préposition", fr:"J'ai besoin de prendre rendez-vous."},
    {sentence:"Ele partiu ___ perna. (article, pas possessif)", answer:"a", fr:"Il s'est cassé la jambe."},
  ],
  quizExtra:[
    {type:"mcq", q:"« J'ai mal à la tête » :", opts:["Dói a minha cabeça","Dói-me a cabeça","Tenho dor da cabeça","Minha cabeça dói"], a:1},
    {type:"mcq", q:"« Estou constipado » veut dire :", opts:["Je suis constipé","Je suis enrhumé","J'ai de la fièvre","Je suis fatigué"], a:1},
  ],
});

/* ============================================================
   B2 — VANTAGEM
   ============================================================ */

defineModule('b2-conjuntivo-imperfeito', {
  level:'B2', title:"L'imparfait du subjonctif", icon:"🌗",
  description:"L'hypothèse, l'irréel, le regret — et les phrases en « si ».",
  intro:[
    "Même recette que le futur du subjonctif : on part de la <b>3ᵉ personne du pluriel du passé simple</b>, on enlève <b>-ram</b>, on ajoute <b>-sse, -sses, -sse, -ssemos, -ssem</b>.<br><i>fala<u>ram</u> → fala<b>sse</b></i> · <i>fo<u>ram</u> → fo<b>sse</b></i> · <i>tive<u>ram</u> → tive<b>sse</b></i>",
    "Emploi principal : les <b>conditionnelles irréelles</b>. <i><b>Se</b> eu <b>tivesse</b> tempo, <b>ia</b> contigo</i> — si j'avais le temps, j'irais avec toi.<br>⚠️ À l'oral portugais, la principale est très souvent à l'<b>imparfait de l'indicatif</b> (<i>ia</i>), pas au conditionnel (<i>iria</i>). Les deux sont corrects, mais <i>ia</i> sonne bien plus naturel.",
    "Autres emplois : après <b>como se</b> (<i>Falava como se me conhecesse</i>), pour faire une proposition (<i>E se jantássemos juntos?</i>), et pour le regret (<i>Foi pena que não viesses</i>).",
  ],
  items:[
    ["🌗","se eu tivesse","si j'avais"],["🌗","se fosse","si c'était / si j'allais"],
    ["🌗","se pudesse","si je pouvais"],["🌗","se soubesse","si je savais"],
    ["🌗","se quisesse","si je voulais"],["🎭","como se","comme si"],
    ["💡","e se…?","et si… ?"],["😞","foi pena que","c'est dommage que"],
    ["🤞","oxalá","pourvu que"],["🎯","talvez fosse","ce serait peut-être"],
    ["💭","gostaria que","j'aimerais que"],["⚖️","caso","au cas où"],
    ["🚫","a não ser que","à moins que"],["🔀","ainda que","même si"],
  ],
  phrases:[
    {pt:"Se eu tivesse tempo, ia contigo", fr:"Si j'avais le temps, j'irais avec toi"},
    {pt:"Falava como se me conhecesse", fr:"Il parlait comme s'il me connaissait"},
    {pt:"E se jantássemos juntos na sexta?", fr:"Et si on dînait ensemble vendredi ?"},
    {pt:"Foi pena que não pudesses vir", fr:"C'est dommage que tu n'aies pas pu venir"},
  ],
  gaps:[
    {sentence:"Se eu ___ tempo, ia contigo. (ter)", answer:"tivesse", hint:"tive<u>ram</u> → tivesse", fr:"Si j'avais le temps, j'irais avec toi."},
    {sentence:"Se ela ___ rica, viajava mais. (ser)", answer:"fosse", hint:"fo<u>ram</u> → fosse", fr:"Si elle était riche, elle voyagerait plus."},
    {sentence:"Falava como se me ___ . (conhecer)", answer:"conhecesse", fr:"Il parlait comme s'il me connaissait."},
    {sentence:"E se nós ___ juntos? (jantar)", answer:"jantássemos", fr:"Et si on dînait ensemble ?"},
    {sentence:"Se tu ___ , dizias-me. (saber)", answer:"soubesses", hint:"soube<u>ram</u> → soubesse", fr:"Si tu savais, tu me le dirais."},
  ],
  grammarTables:[
    { kind:"conj", title:"L'imparfait du subjonctif", pronouns:pronouns5,
      cols:[
        {name:"Falar", forms:["falasse","falasses","falasse","falássemos","falassem"]},
        {name:"Ser / Ir", forms:["fosse","fosses","fosse","fôssemos","fossem"]},
        {name:"Ter", forms:["tivesse","tivesses","tivesse","tivéssemos","tivessem"]},
      ] },
    { kind:"simple", title:"Les trois types de « si »", headers:["Type","Structure","Exemple"],
      rows:[
        ["Réel (présent)","se + indicatif","Se tens tempo, vem"],
        ["Possible (futur)","se + futur du subj.","Se tiveres tempo, vem"],
        ["Irréel (hypothèse)","se + imparfait du subj.","Se tivesses tempo, vinhas"],
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"« Si j'avais de l'argent, je voyagerais » :", opts:["Se tenho dinheiro","Se tiver dinheiro","Se tivesse dinheiro","Se terei dinheiro"], a:2},
    {type:"mcq", q:"L'imparfait du subjonctif de « ser » :", opts:["seja","fosse","for","sesse"], a:1},
  ],
});

defineModule('b2-mesoclise', {
  level:'B2', title:"Mésoclise & pronoms fusionnés", icon:"🪢",
  description:"Quand le pronom se glisse AU MILIEU du verbe. Un phénomène unique au portugais.",
  intro:[
    "🪢 Au futur et au conditionnel, le pronom ne se met ni devant ni derrière : il s'insère <b>à l'intérieur</b> du verbe. C'est la <b>mésoclise</b>, et le portugais est pratiquement la seule langue à faire ça.<br><i>dar + te + ei → <b>dar-te-ei</b></i> (je te donnerai)<br><i>dizer + lhe + ia → <b>dir-lhe-ia</b></i> (je lui dirais)",
    "⚠️ À l'oral, personne ne dit ça. Les Portugais tournent la phrase autrement : <i>vou dar-te</i>, <i>ia dizer-lhe</i>. La mésoclise appartient à l'<b>écrit formel</b> : administration, presse, littérature. Sachez la reconnaître, pas nécessairement la produire.",
    "Autre point : quand deux pronoms se rencontrent, ils <b>fusionnent</b>.<br><i>me + o = <b>mo</b></i> · <i>te + a = <b>ta</b></i> · <i>lhe + os = <b>lhos</b></i><br><i>Ele deu-<b>mo</b></i> = il me l'a donné.",
  ],
  items:[
    ["🪢","dar-te-ei","je te donnerai"],["🪢","dir-lhe-ia","je lui dirais"],
    ["🪢","far-me-ia","il me ferait"],["🪢","informar-vos-emos","nous vous informerons"],
    ["🔗","mo","me le"],["🔗","ma","me la"],["🔗","to","te le"],
    ["🔗","lho","le lui"],["🔗","lha","la lui"],["🔗","lhos","les lui"],
    ["📌","deu-mo","il me l'a donné"],["📌","disse-lho","il le lui a dit"],
    ["📌","enviou-ma","il me l'a envoyée"],
  ],
  phrases:[
    {pt:"Ele deu-mo ontem", fr:"Il me l'a donné hier"},
    {pt:"Já lho disse muitas vezes", fr:"Je le lui ai déjà dit plusieurs fois"},
    {pt:"A empresa informar-vos-á por email", fr:"L'entreprise vous informera par email"},
    {pt:"Dir-lhe-ia a verdade, se pudesse", fr:"Je lui dirais la vérité, si je pouvais"},
  ],
  gaps:[
    {sentence:"Ele deu-___ ontem. (me + o)", answer:"mo", fr:"Il me l'a donné hier."},
    {sentence:"Já ___ disse. (lhe + o)", answer:"lho", fr:"Je le lui ai déjà dit."},
    {sentence:"A empresa informar-___-á. (vos)", answer:"vos", fr:"L'entreprise vous informera."},
  ],
  grammarTables:[
    { kind:"simple", title:"Les pronoms fusionnés", headers:["+ o","+ a","+ os","+ as"],
      rows:[
        ["me → mo","ma","mos","mas"],
        ["te → to","ta","tos","tas"],
        ["lhe → lho","lha","lhos","lhas"],
      ] },
  ],
  quizExtra:[
    {type:"mcq", q:"« Il me l'a donné » :", opts:["Ele deu-me-o","Ele deu-mo","Ele me deu o","Ele deu-lo-me"], a:1},
    {type:"mcq", q:"La mésoclise s'emploie surtout :", opts:["À l'oral courant","À l'écrit formel","Au passé","Jamais"], a:1},
  ],
});

defineModule('b2-passivas', {
  level:'B2', title:"La voix passive", icon:"🔄",
  description:"Trois passifs différents — dont un qui n'a aucun équivalent français.",
  intro:[
    "<b>1. Passif d'action</b> (ser + participe) : <i>Os poemas <b>foram escritos</b> por ele</i>. Le participe s'accorde avec le sujet.",
    "<b>2. Passif d'état</b> (estar + participe) : <i>As portas <b>estão fechadas</b></i>. Décrit un résultat, pas une action.",
    "⭐ <b>3. Passif réfléchi</b> (se + verbe) : la construction la plus courante à l'écrit portugais. <i><b>Vende-se</b> casa</i> (maison à vendre), <i><b>Vendem-se</b> casas</i> (maisons à vendre).<br>⚠️ Le verbe s'accorde avec ce qui est vendu, pas avec un « on » invisible. C'est l'erreur classique.",
    "Pour dire « on » de façon impersonnelle, deux options : <i><b>Diz-se</b> que…</i> ou <i><b>Dizem</b> que…</i>",
  ],
  items:[
    ["🔄","foi escrito","fut écrit"],["🔄","foram construídos","furent construits"],
    ["🏠","vende-se","à vendre"],["🏘️","vendem-se","à vendre (pluriel)"],
    ["📢","diz-se que","on dit que"],["👥","dizem que","on dit que"],
    ["🔒","está fechado","est fermé"],["🔓","está aberto","est ouvert"],
    ["🏗️","foi construído","fut construit"],["📖","é conhecido","est connu"],
    ["🎬","é produzido","est produit"],["📦","foi enviado","fut envoyé"],
    ["🧑‍⚖️","o agente","le complément d'agent"],["📌","por","par"],
  ],
  phrases:[
    {pt:"Este livro foi escrito por Saramago", fr:"Ce livre fut écrit par Saramago"},
    {pt:"Vendem-se apartamentos nesta rua", fr:"On vend des appartements dans cette rue"},
    {pt:"Diz-se que o restaurante é excelente", fr:"On dit que le restaurant est excellent"},
    {pt:"As lojas estão fechadas ao domingo", fr:"Les magasins sont fermés le dimanche"},
  ],
  gaps:[
    {sentence:"Este livro ___ escrito por Saramago. (ser, passé)", answer:"foi", fr:"Ce livre fut écrit par Saramago."},
    {sentence:"Vend___-se apartamentos. (pluriel)", answer:"em", fr:"On vend des appartements."},
    {sentence:"Diz-___ que é bom. (pronom impersonnel)", answer:"se", fr:"On dit que c'est bon."},
    {sentence:"As portas estão ___ . (fechar, féminin pluriel)", answer:"fechadas", fr:"Les portes sont fermées."},
  ],
  quizExtra:[
    {type:"mcq", q:"« On vend des maisons » :", opts:["Vende-se casas","Vendem-se casas","Se vende casas","É vendido casas"], a:1},
    {type:"mcq", q:"« Les portes sont fermées » (état) :", opts:["As portas são fechadas","As portas estão fechadas","As portas fecham-se","Fecha-se as portas"], a:1},
  ],
});

defineModule('b2-gerundio', {
  level:'B2', title:"Le gérondif", icon:"🔗",
  description:"En portugais européen, le gérondif ne sert PAS au progressif. Il sert à subordonner.",
  intro:[
    "⚠️ Rappel crucial : au Portugal, <b>estar a + infinitif</b> exprime le progressif. Le gérondif (<i>-ando, -endo, -indo</i>) a un tout autre rôle : il remplace une <b>subordonnée circonstancielle</b>.",
    "Il exprime :<br>• le <b>temps</b> : <i><b>Saindo</b> de casa, encontrei o João</i> (en sortant…)<br>• la <b>cause</b> : <i><b>Estando</b> doente, não foi trabalhar</i> (étant malade…)<br>• la <b>condition</b> : <i><b>Havendo</b> orçamento, contratamos mais gente</i> (s'il y a un budget…)<br>• la <b>manière</b> : <i>Respondeu <b>sorrindo</b></i>",
    "Le gérondif composé exprime l'antériorité : <i><b>Tendo terminado</b> o trabalho, saímos</i> (ayant terminé le travail, nous sommes sortis).",
  ],
  items:[
    ["🔗","falando","en parlant"],["🔗","comendo","en mangeant"],["🔗","partindo","en partant"],
    ["🔗","sendo","étant"],["🔗","estando","étant (état)"],["🔗","tendo","ayant"],
    ["🔗","havendo","s'il y a"],["🔗","sabendo","sachant"],
    ["⏱️","tendo terminado","ayant terminé"],["⏱️","tendo chegado","étant arrivé"],
    ["😊","sorrindo","en souriant"],["🏃","correndo","en courant"],
    ["📖","lendo","en lisant"],["👀","vendo","en voyant"],
  ],
  phrases:[
    {pt:"Saindo de casa, encontrei o João", fr:"En sortant de chez moi, j'ai rencontré João"},
    {pt:"Estando doente, não foi trabalhar", fr:"Étant malade, il n'est pas allé travailler"},
    {pt:"Tendo terminado o trabalho, saímos", fr:"Ayant terminé le travail, nous sommes sortis"},
    {pt:"Havendo tempo, visitamos o museu", fr:"S'il y a le temps, nous visiterons le musée"},
  ],
  gaps:[
    {sentence:"___ de casa, encontrei o João. (sair)", answer:"Saindo", fr:"En sortant de chez moi, j'ai rencontré João."},
    {sentence:"___ doente, ficou em casa. (estar)", answer:"Estando", fr:"Étant malade, il est resté à la maison."},
    {sentence:"___ terminado, saímos. (ter)", answer:"Tendo", fr:"Ayant terminé, nous sommes sortis."},
  ],
  quizExtra:[
    {type:"mcq", q:"Au Portugal, « je suis en train de manger » :", opts:["Estou comendo","Estou a comer","Estou de comer","Como agora"], a:1},
    {type:"mcq", q:"« Estando doente » exprime :", opts:["Le progressif","La cause","Le futur","L'ordre"], a:1},
  ],
});

defineModule('b2-discurso', {
  level:'B2', title:"Le discours rapporté", icon:"💬",
  description:"Rapporter les paroles de quelqu'un — et la concordance des temps.",
  intro:[
    "Quand on rapporte, les temps <b>reculent</b> d'un cran, exactement comme en français :<br>présent → imparfait · passé simple → plus-que-parfait · futur → conditionnel · impératif → subjonctif imparfait",
    "Pour rapporter une <b>question fermée</b>, on utilise <b>se</b> : <i>Perguntou-me <b>se</b> eu vinha</i>.<br>Pour une <b>question ouverte</b>, on garde le mot interrogatif : <i>Perguntou-me <b>onde</b> eu morava</i>.",
    "Les marqueurs de temps et de lieu changent aussi : <i>hoje → nesse dia</i>, <i>amanhã → no dia seguinte</i>, <i>aqui → ali</i>, <i>este → esse/aquele</i>.",
  ],
  items:[
    ["💬","disse que","il a dit que"],["❓","perguntou se","il a demandé si"],
    ["📢","afirmou que","il a affirmé que"],["🙏","pediu que","il a demandé que"],
    ["⚠️","avisou que","il a prévenu que"],["✅","respondeu que","il a répondu que"],
    ["🗓️","no dia seguinte","le lendemain"],["⏮️","na véspera","la veille"],
    ["📍","nesse dia","ce jour-là"],["🏠","ali","là-bas"],
    ["🔁","contou que","il a raconté que"],["💡","explicou que","il a expliqué que"],
    ["🎯","sugeriu que","il a suggéré que"],["🚫","negou que","il a nié que"],
  ],
  phrases:[
    {pt:"Ele disse que estava cansado", fr:"Il a dit qu'il était fatigué"},
    {pt:"Perguntou-me se eu vinha à festa", fr:"Il m'a demandé si je venais à la fête"},
    {pt:"Ela contou que tinha ido ao Porto", fr:"Elle a raconté qu'elle était allée à Porto"},
    {pt:"Pediu-me que fechasse a porta", fr:"Il m'a demandé de fermer la porte"},
  ],
  gaps:[
    {sentence:"Ele disse que ___ cansado. (estar, imparfait)", answer:"estava", fr:"Il a dit qu'il était fatigué."},
    {sentence:"Perguntou-me ___ eu vinha. (question fermée)", answer:"se", fr:"Il m'a demandé si je venais."},
    {sentence:"Ela contou que ___ ido ao Porto. (ter, imparfait)", answer:"tinha", fr:"Elle a raconté qu'elle était allée à Porto."},
    {sentence:"Pediu que eu ___ a porta. (fechar, subj. imparfait)", answer:"fechasse", fr:"Il a demandé que je ferme la porte."},
  ],
  quizExtra:[
    {type:"mcq", q:"« Il a dit : je suis fatigué » devient :", opts:["Disse que está cansado","Disse que estava cansado","Disse que estivesse cansado","Disse que seria cansado"], a:1},
    {type:"mcq", q:"Pour rapporter « Tu viens ? » :", opts:["Perguntou que eu vinha","Perguntou se eu vinha","Perguntou qual eu vinha","Perguntou eu vinha"], a:1},
  ],
});

defineModule('b2-atualidade', {
  level:'B2', title:"Médias & société", icon:"📰",
  description:"Comprendre la presse portugaise et parler de sujets de société.",
  items:[
    ["📰","o jornal","le journal"],["📺","o telejornal","le journal télévisé"],
    ["📻","a notícia","la nouvelle"],["✍️","o artigo","l'article"],
    ["🎙️","a entrevista","l'interview"],["📊","a sondagem","le sondage"],
    ["🗳️","as eleições","les élections"],["🏛️","o governo","le gouvernement"],
    ["⚖️","a lei","la loi"],["💶","a economia","l'économie"],
    ["🌍","o ambiente","l'environnement"],["♻️","a sustentabilidade","la durabilité"],
    ["🏥","a saúde pública","la santé publique"],["🎓","a educação","l'éducation"],
    ["🏘️","a habitação","le logement"],["👥","a sociedade","la société"],
    ["📈","o desemprego","le chômage"],["🚧","a greve","la grève"],
    ["💡","a opinião","l'opinion"],["🤔","o debate","le débat"],
  ],
  phrases:[
    {pt:"Li um artigo interessante sobre a habitação", fr:"J'ai lu un article intéressant sur le logement"},
    {pt:"Na minha opinião, o problema é mais complexo", fr:"À mon avis, le problème est plus complexe"},
    {pt:"Segundo a sondagem, a maioria discorda", fr:"D'après le sondage, la majorité n'est pas d'accord"},
  ],
  reading:{
    title:"A crise da habitação em Lisboa",
    source:"Article de presse — registre journalistique",
    text:`O preço das casas em Lisboa aumentou mais de sessenta por cento na última década, segundo dados divulgados esta semana pelo Instituto Nacional de Estatística. Trata-se do maior aumento registado entre as capitais europeias no mesmo período.

Vários fatores explicam esta subida. Por um lado, o turismo transformou bairros históricos como a Mouraria e a Alfama, onde muitos apartamentos passaram a ser arrendados a turistas. Por outro, a construção de habitação nova não acompanhou o crescimento da procura.

"Se não forem tomadas medidas rápidas, muitos jovens continuarão a sair da cidade", afirmou a investigadora Marta Ribeiro, que estuda o tema há vários anos. Segundo ela, seria necessário que o Estado interviesse de forma mais decidida no mercado do arrendamento.

O governo anunciou que irá apresentar um novo plano em setembro. Resta saber se será suficiente.`,
    questions:[
      {q:"De combien les prix ont-ils augmenté ?", opts:["Plus de 40%","Plus de 50%","Plus de 60%","Plus de 70%"], a:2},
      {q:"Quels quartiers sont cités ?", opts:["Belém et Ajuda","Mouraria et Alfama","Chiado et Bairro Alto","Benfica et Amadora"], a:1},
      {q:"« Se não forem tomadas medidas » utilise :", opts:["Le futur simple","Le futur du subjonctif au passif","L'imparfait","Le conditionnel"], a:1},
      {q:"Selon Marta Ribeiro, que faudrait-il ?", opts:["Plus de tourisme","Que l'État intervienne davantage","Moins de construction","Rien de particulier"], a:1},
      {q:"« Resta saber » signifie :", opts:["C'est certain","Il reste à savoir","C'est terminé","On sait déjà"], a:1},
    ],
  },
  quizExtra:[
    {type:"mcq", q:"« À mon avis » se dit :", opts:["Na minha opinião","Em minha opinião","Para mim opinião","À minha opinião"], a:0},
  ],
});

defineModule('b2-argumentar', {
  level:'B2', title:"Argumenter & nuancer", icon:"⚖️",
  description:"Défendre un point de vue, concéder, objecter — les connecteurs du débat.",
  intro:[
    "Argumenter en portugais repose sur un jeu de connecteurs très codifié. Les maîtriser fait immédiatement passer d'un niveau B1 à un niveau B2.",
    "Attention : <b>embora, ainda que, mesmo que, a menos que, para que, antes que</b> exigent tous le <b>subjonctif</b>.",
    "En revanche <b>porque, visto que, já que, dado que, portanto, no entanto</b> se construisent avec l'indicatif.",
  ],
  items:[
    ["1️⃣","em primeiro lugar","en premier lieu"],["➕","além disso","de plus"],
    ["🔀","por um lado… por outro","d'un côté… de l'autre"],
    ["⚖️","no entanto","cependant"],["🔄","contudo","toutefois"],
    ["🚫","apesar de","malgré"],["🌀","embora","bien que"],
    ["🎯","portanto","donc"],["💡","por conseguinte","par conséquent"],
    ["📌","visto que","étant donné que"],["📌","já que","puisque"],
    ["✅","de facto","en effet"],["🤔","na verdade","en réalité"],
    ["🔚","em suma","en somme"],["🏁","concluindo","pour conclure"],
    ["💬","do meu ponto de vista","de mon point de vue"],
    ["⚠️","é de salientar que","il faut souligner que"],
    ["🎭","por outro lado","d'un autre côté"],
  ],
  phrases:[
    {pt:"Embora seja difícil, vale a pena tentar", fr:"Bien que ce soit difficile, ça vaut la peine d'essayer"},
    {pt:"Por um lado é caro, por outro é de boa qualidade", fr:"D'un côté c'est cher, de l'autre c'est de bonne qualité"},
    {pt:"No entanto, é preciso considerar o custo", fr:"Cependant, il faut considérer le coût"},
    {pt:"Em suma, concordo com a proposta", fr:"En somme, je suis d'accord avec la proposition"},
  ],
  gaps:[
    {sentence:"Embora ___ difícil, vou tentar. (ser, subjonctif)", answer:"seja", hint:"embora exige le subjonctif", fr:"Bien que ce soit difficile, je vais essayer."},
    {sentence:"___ que é caro, vou comprar. (puisque)", answer:"Já", fr:"Puisque c'est cher, je vais l'acheter."},
    {sentence:"É caro; ___ , é de boa qualidade. (cependant)", answer:"no entanto", alt:["contudo","porém","todavia"], fr:"C'est cher ; cependant, c'est de bonne qualité."},
    {sentence:"Mesmo que ___ caro, compro. (ser, subjonctif)", answer:"seja", fr:"Même si c'est cher, je l'achète."},
  ],
  quizExtra:[
    {type:"mcq", q:"« Embora » se construit avec :", opts:["l'indicatif","le subjonctif","l'infinitif","le conditionnel"], a:1},
    {type:"mcq", q:"« Bien qu'il soit fatigué » :", opts:["Embora está cansado","Embora esteja cansado","Embora seja cansado","Embora estava cansado"], a:1},
  ],
});
