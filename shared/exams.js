/* ============================================================
   Português do Zero — shared/exams.js
   The six official CAPLE exams, reproduced faithfully.

   CAPLE (Centro de Avaliação e Certificação de Português Língua
   Estrangeira, Universidade de Lisboa) is the only body that
   certifies European Portuguese. Structure, durations, section
   weightings and the grading scale below are taken from the
   official exam pages at caple.letras.ulisboa.pt.

   Grading is identical at every level:
     Muito Bom     85–100%
     Bom           70–84%
     Suficiente    55–69%     ← pass mark is 55% overall
     Insuficiente  below 55%

   NOTE ON DURATIONS: the official durations are shown to the
   learner as reference, but the practice version runs a
   proportionally shortened timer, because a faithful DUPLE
   reading paper is 70 items over 2 hours. The structure, the
   weighting and the grading are exact; only the volume is scaled.
   ============================================================ */

const CAPLE_GRADES = [
  { min:85, label:'Muito Bom',    fr:'Très bien',   cls:'accent' },
  { min:70, label:'Bom',          fr:'Bien',        cls:'accent' },
  { min:55, label:'Suficiente',   fr:'Suffisant',   cls:'amber'  },
  { min:0,  label:'Insuficiente', fr:'Insuffisant', cls:'rose'   },
];
const CAPLE_PASS = 55;

function capleGrade(pct){
  return CAPLE_GRADES.find(g => pct >= g.min) || CAPLE_GRADES[CAPLE_GRADES.length-1];
}

/* Section type keys:
     reading   — texts + multiple choice
     listening — synthesised audio + multiple choice
     writing   — open task, checked on word count + self-assessment
     speaking  — mic task, scored by speech recognition
*/

const CAPLE_EXAMS = {

/* ---------------------------------------------------------- */
acesso: {
  code:'ACESSO', level:'A1', fullName:'Acesso',
  subtitle:"Le tout premier palier officiel — prouve que vous vous débrouillez dans les situations les plus simples.",
  fee:'€60', officialTotal:'≈ 1h15',
  sections:[
    { key:'cl', type:'reading', name:'Compreensão da Leitura', fr:'Compréhension écrite',
      officialMinutes:20, weight:20, practiceMinutes:8,
      texts:[
        { title:"Numa montra", source:"Panneau de magasin",
          text:`SALDOS
Todos os artigos com 30% de desconto.
Aberto de segunda a sábado, das 10h às 19h.
Encerrado ao domingo.`,
          questions:[
            {q:"Quel jour le magasin est-il fermé ?", opts:["Samedi","Dimanche","Lundi","Jamais"], a:1},
            {q:"À quelle heure ouvre-t-il ?", opts:["9h","10h","11h","19h"], a:1},
            {q:"Quelle est la réduction ?", opts:["13%","30%","33%","3%"], a:1},
          ]},
        { title:"Uma mensagem", source:"SMS",
          text:`Olá Ana! Estou no café da Praça. Chego às 15h. Trazes o livro? Beijinhos, Rui`,
          questions:[
            {q:"Où est Rui ?", opts:["À la maison","Au café de la place","À la gare","Au travail"], a:1},
            {q:"Que demande-t-il à Ana ?", opts:["D'apporter un livre","D'apporter un café","De téléphoner","De venir à 14h"], a:0},
          ]},
      ]},
    { key:'co', type:'listening', name:'Compreensão do Oral', fr:'Compréhension orale',
      officialMinutes:25, weight:35, practiceMinutes:8,
      items:[
        {audio:"Bom dia! Queria um café, se faz favor.", q:"Que demande cette personne ?", opts:["Un thé","Un café","Un gâteau","L'addition"], a:1},
        {audio:"Onde fica a estação de comboios?", q:"Que cherche cette personne ?", opts:["La gare","L'aéroport","L'hôtel","La pharmacie"], a:0},
        {audio:"São dez euros e cinquenta.", q:"Quel est le prix ?", opts:["10,15 €","10,50 €","15,10 €","50,10 €"], a:1},
        {audio:"Chamo-me Marta e sou professora.", q:"Quel est le métier de Marta ?", opts:["Médecin","Professeure","Étudiante","Serveuse"], a:1},
        {audio:"A minha irmã mora no Porto.", q:"Qui habite à Porto ?", opts:["Sa mère","Sa sœur","Son frère","Elle-même"], a:1},
        {audio:"Hoje está muito frio.", q:"De quoi parle-t-on ?", opts:["Du temps qu'il fait","De la nourriture","Du travail","Du transport"], a:0},
      ]},
    { key:'pie', type:'writing', name:'Produção e Interação Escritas', fr:'Production écrite',
      officialMinutes:20, weight:15, practiceMinutes:10,
      tasks:[
        { prompt:"Preencha a sua identificação para uma inscrição num curso de português. Escreva o seu nome, nacionalidade, idade e profissão.",
          fr:"Remplissez votre identification pour une inscription à un cours de portugais : nom, nationalité, âge, profession.",
          minWords:15, maxWords:25,
          model:"Chamo-me Marie Dubois. Sou francesa e tenho vinte e cinco anos. Sou estudante e moro em Lisboa.",
          checklist:["J'ai écrit mon nom","J'ai indiqué ma nationalité","J'ai indiqué mon âge","J'ai indiqué ma profession"] },
      ]},
    { key:'pio', type:'speaking', name:'Produção e Interação Orais', fr:'Production orale',
      officialMinutes:'8–10', weight:30, practiceMinutes:5,
      tasks:[
        {prompt:"Apresente-se: diga o seu nome e de onde é.", fr:"Présentez-vous : dites votre nom et d'où vous venez.", model:"Chamo-me Marie e sou francesa"},
        {prompt:"Cumprimente e peça um café.", fr:"Saluez et commandez un café.", model:"Bom dia, um café se faz favor"},
      ]},
  ],
},

/* ---------------------------------------------------------- */
ciple: {
  code:'CIPLE', level:'A2', fullName:'Certificado Inicial de Português Língua Estrangeira',
  subtitle:"Le niveau exigé pour la nationalité portugaise. À ce stade, la lecture et l'écriture sont encore évaluées ensemble.",
  fee:'€95', officialTotal:'≈ 2h', flagship:"Requis pour la nationalité portugaise",
  sections:[
    { key:'clpie', type:'reading', name:'Compreensão da Leitura e Produção e Interação Escritas', fr:'Compréhension écrite (partie 1)',
      officialMinutes:75, weight:45, practiceMinutes:12,
      note:"Au niveau CIPLE, cette épreuve combine lecture ET écriture. La partie écrite suit.",
      texts:[
        { title:"Anúncio de arrendamento", source:"Petite annonce",
          text:`ARRENDA-SE T2 em Alfama, totalmente mobilado, com vista para o rio.
600 € por mês, despesas incluídas.
Não se aceitam animais.
Disponível a partir de 1 de setembro.
Contactar: 912 345 678 (depois das 18h).`,
          questions:[
            {q:"Combien de chambres a l'appartement ?", opts:["Une","Deux","Trois","Non précisé"], a:1},
            {q:"Les charges sont-elles comprises ?", opts:["Oui","Non","En partie","Non précisé"], a:0},
            {q:"Peut-on avoir un chat ?", opts:["Oui","Non","Sur demande","Non précisé"], a:1},
            {q:"Quand peut-on appeler ?", opts:["Le matin","Avant 18h","Après 18h","À toute heure"], a:2},
          ]},
        { title:"Um email de desculpas", source:"Email personnel",
          text:`Olá Pedro,

Desculpa não ter ido ao teu aniversário no sábado. Estive doente toda a semana e o médico disse-me para ficar em casa.

Já estou melhor. Podemos jantar juntos na próxima sexta? Escolhe tu o restaurante.

Um abraço,
Marie`,
          questions:[
            {q:"Pourquoi Marie s'excuse-t-elle ?", opts:["Elle est arrivée en retard","Elle n'est pas allée à l'anniversaire","Elle a oublié le cadeau","Elle est partie tôt"], a:1},
            {q:"Quelle était la raison ?", opts:["Un voyage","Le travail","La maladie","Un autre rendez-vous"], a:2},
            {q:"Que propose-t-elle ?", opts:["Un dîner vendredi","Un déjeuner samedi","Un café demain","Rien"], a:0},
          ]},
      ]},
    { key:'pie', type:'writing', name:'Produção e Interação Escritas', fr:'Production écrite (partie 2)',
      officialMinutes:0, weight:0, practiceMinutes:14, partOf:'clpie',
      tasks:[
        { prompt:"Responda à mensagem de uns amigos que o convidaram para jantar.",
          fr:"Répondez au message d'amis qui vous ont invité à dîner.", minWords:25, maxWords:35,
          model:"Olá! Obrigada pelo convite. Adorava ir jantar convosco na sexta-feira. A que horas nos encontramos? Digam-me onde é o restaurante. Beijinhos!",
          checklist:["J'ai remercié","J'ai accepté ou refusé clairement","J'ai posé une question","J'ai utilisé une formule de clôture"] },
        { prompt:"Escreva um email a amigos portugueses a explicar por que não pôde ir a um evento. Comece por: « Peço desculpa, mas… »",
          fr:"Écrivez un email à des amis portugais expliquant pourquoi vous n'avez pas pu venir. Commencez par « Peço desculpa, mas… »", minWords:60, maxWords:80,
          model:"Peço desculpa, mas não pude ir à festa no sábado. Nessa semana estive doente e o médico aconselhou-me a ficar em casa a descansar. Fiquei muito triste por não vos ver, porque estava mesmo a contar ir. Espero que tenham gostado da festa. Podemos combinar um jantar em breve? Gostava muito de vos rever. Um beijinho grande para todos.",
          checklist:["J'ai commencé par la formule imposée","J'ai expliqué une raison","J'ai utilisé un temps du passé","J'ai proposé une alternative","J'ai clôturé poliment"] },
      ]},
    { key:'co', type:'listening', name:'Compreensão do Oral', fr:'Compréhension orale',
      officialMinutes:30, weight:30, practiceMinutes:10,
      officialItems:25,
      items:[
        {audio:"Ontem fui ao médico porque estava com febre.", q:"Pourquoi cette personne est-elle allée chez le médecin ?", opts:["Mal de tête","Fièvre","Mal au dos","Contrôle de routine"], a:1},
        {audio:"O comboio para o Porto parte da linha três às catorze e vinte.", q:"De quel quai part le train ?", opts:["Quai 2","Quai 3","Quai 14","Quai 20"], a:1},
        {audio:"Queria trocar esta camisola. É demasiado pequena.", q:"Quel est le problème ?", opts:["Trop grand","Trop petit","Mauvaise couleur","Trop cher"], a:1},
        {audio:"A reunião foi adiada para a próxima terça-feira.", q:"Qu'est-il arrivé à la réunion ?", opts:["Annulée","Reportée à mardi","Avancée","Confirmée"], a:1},
        {audio:"Quando era pequena, vivia numa aldeia perto de Coimbra.", q:"Où vivait-elle enfant ?", opts:["À Coimbra","Dans un village près de Coimbra","À Lisbonne","À Porto"], a:1},
        {audio:"Se faz favor, pode dizer-me onde fica a paragem do autocarro?", q:"Que cherche cette personne ?", opts:["L'arrêt de bus","La gare","Le métro","Un taxi"], a:0},
        {audio:"Já comprei os bilhetes, mas ainda não reservei o hotel.", q:"Qu'est-ce qui n'est PAS fait ?", opts:["Les billets","L'hôtel","Le passeport","Rien"], a:1},
      ]},
    { key:'pio', type:'speaking', name:'Produção e Interação Orais', fr:'Production orale',
      officialMinutes:15, weight:25, practiceMinutes:6,
      note:"En conditions réelles, cette épreuve se déroule en binôme, face à deux examinateurs.",
      tasks:[
        {prompt:"Parte I — Identificação pessoal: fale de si, da sua família e do sítio onde vive.", fr:"Partie I — Parlez de vous, de votre famille et de l'endroit où vous vivez.", model:"Chamo-me Marie, sou francesa e moro em Lisboa com a minha família"},
        {prompt:"Parte II — Simulação: peça informações numa estação de comboios.", fr:"Partie II — Demandez des informations dans une gare.", model:"Se faz favor, a que horas parte o comboio para o Porto"},
        {prompt:"Parte III — Fale sobre o que costuma fazer ao fim de semana.", fr:"Partie III — Parlez de ce que vous faites habituellement le week-end.", model:"Ao fim de semana costumo passear e visitar amigos"},
      ]},
  ],
},

/* ---------------------------------------------------------- */
deple: {
  code:'DEPLE', level:'B1', fullName:'Diploma Elementar de Português Língua Estrangeira',
  subtitle:"Le premier vrai diplôme. À partir d'ici, les quatre compétences sont évaluées séparément, à 25% chacune.",
  fee:'€115', officialTotal:'≈ 2h30',
  sections:[
    { key:'cl', type:'reading', name:'Compreensão da Leitura', fr:'Compréhension écrite',
      officialMinutes:30, weight:25, practiceMinutes:12, officialItems:20,
      texts:[
        { title:"Regulamento da biblioteca", source:"Règlement affiché",
          text:`BIBLIOTECA MUNICIPAL — NORMAS DE UTILIZAÇÃO

1. O empréstimo de livros é gratuito para residentes no concelho. Os não residentes pagam uma taxa anual de 15 €.

2. Cada leitor pode requisitar até cinco obras em simultâneo, por um período máximo de três semanas, renovável uma única vez, desde que não haja pedidos pendentes de outros leitores.

3. O atraso na devolução implica uma multa de 0,50 € por dia e por obra. Ultrapassados trinta dias, o leitor fica impedido de requisitar durante seis meses.

4. As obras de referência e os periódicos só podem ser consultados no local.`,
          questions:[
            {q:"Combien paie un non-résident ?", opts:["Rien","15 € par an","0,50 € par livre","Cinq euros"], a:1},
            {q:"Combien d'ouvrages peut-on emprunter à la fois ?", opts:["Trois","Cinq","Six","Dix"], a:1},
            {q:"Le renouvellement est possible :", opts:["Autant de fois qu'on veut","Une seule fois, sous condition","Jamais","Deux fois"], a:1},
            {q:"Après trente jours de retard :", opts:["L'amende double","Le lecteur est suspendu six mois","Rien ne change","Le livre est offert"], a:1},
            {q:"Les périodiques :", opts:["S'empruntent une semaine","Se consultent sur place uniquement","Sont gratuits","Sont interdits"], a:1},
          ]},
      ]},
    { key:'pie', type:'writing', name:'Produção e Interação Escritas', fr:'Production écrite',
      officialMinutes:60, weight:25, practiceMinutes:18,
      tasks:[
        { prompt:"Escreva um email a um amigo a contar como foi o seu fim de semana. Comece por: « Olá! Tenho tantas novidades para te contar… »",
          fr:"Écrivez un email à un ami racontant votre week-end. Commencez par la phrase donnée.", minWords:110, maxWords:130,
          model:"Olá! Tenho tantas novidades para te contar. No sábado fui até Sintra com a Ana. Apanhámos o comboio de manhã cedo e, quando chegámos, ainda estava nevoeiro, o que tornou tudo ainda mais bonito. Visitámos o Palácio da Pena e almoçámos num restaurante pequenino no centro histórico. À tarde caminhámos imenso e acabámos exaustos. No domingo descansei em casa, li um livro que me tinhas recomendado e adorei. Ainda bem que insististe! Quando é que vens cá para fazermos um passeio juntos? Diz-me qualquer coisa. Um abraço grande!",
          checklist:["J'ai utilisé la phrase de départ imposée","J'ai raconté au passé (perfeito et imperfeito)","J'ai donné des détails concrets","J'ai posé une question à mon correspondant","Je suis dans la fourchette de mots"] },
        { prompt:"Escreva uma mensagem a organizar um jantar de reencontro. Indique: a data, o local e o que cada um deve levar.",
          fr:"Écrivez un message pour organiser un dîner de retrouvailles. Indiquez : la date, le lieu, et ce que chacun doit apporter.", minWords:50, maxWords:70,
          model:"Olá a todos! Que tal jantarmos juntos no próximo sábado, dia 12, lá em casa por volta das oito? Já não nos vemos há imenso tempo. Eu trato do prato principal e da sobremesa. Se puderem, tragam bebidas e alguma entrada. Digam-me até quinta se contam vir, para eu saber quantos somos. Beijinhos!",
          checklist:["J'ai indiqué une date","J'ai indiqué un lieu","J'ai précisé ce que chacun apporte","J'ai demandé une confirmation"] },
      ]},
    { key:'co', type:'listening', name:'Compreensão do Oral', fr:'Compréhension orale',
      officialMinutes:40, weight:25, practiceMinutes:12, officialItems:25,
      items:[
        {audio:"O museu está aberto de terça a domingo, das dez às dezoito horas. Às segundas encerra para manutenção.", q:"Quand le musée est-il fermé ?", opts:["Le dimanche","Le lundi","Le mardi","Jamais"], a:1},
        {audio:"Se tiveres tempo amanhã, passa por minha casa antes das sete.", q:"Quelle condition est posée ?", opts:["S'il fait beau","S'il a le temps","S'il a une voiture","S'il est invité"], a:1},
        {audio:"Ultimamente tenho dormido muito mal, acho que é do stress do trabalho.", q:"Depuis quand dort-il mal ?", opts:["Depuis hier","Ces derniers temps","Depuis un an","Depuis l'enfance"], a:1},
        {audio:"Embora seja caro, vale a pena visitar esse restaurante pelo menos uma vez.", q:"Quelle est l'opinion exprimée ?", opts:["C'est trop cher, à éviter","C'est cher mais ça vaut le coup","C'est bon marché","C'est mauvais"], a:1},
        {audio:"Pediram-me que enviasse o relatório até sexta-feira.", q:"Quelle est la demande ?", opts:["Envoyer un rapport avant vendredi","Écrire un email lundi","Venir vendredi","Appeler le directeur"], a:0},
        {audio:"Quando cheguei ao aeroporto, o avião já tinha partido.", q:"Que s'est-il passé ?", opts:["Il a pris l'avion","L'avion était déjà parti","L'avion était en retard","Il a annulé"], a:1},
      ]},
    { key:'pio', type:'speaking', name:'Produção e Interação Orais', fr:'Production orale',
      officialMinutes:20, weight:25, practiceMinutes:8,
      tasks:[
        {prompt:"Descreva a sua rotina diária e o que gostaria de mudar nela.", fr:"Décrivez votre routine et ce que vous aimeriez y changer.", model:"Todos os dias acordo cedo e vou trabalhar, mas gostaria de ter mais tempo livre"},
        {prompt:"Simulação: telefone a um hotel para fazer uma reserva e peça informações.", fr:"Simulation : téléphonez à un hôtel pour réserver.", model:"Boa tarde, queria fazer uma reserva para duas noites, se faz favor"},
        {prompt:"Dê a sua opinião: é melhor viver na cidade ou no campo? Justifique.", fr:"Donnez votre avis : vaut-il mieux vivre en ville ou à la campagne ?", model:"Na minha opinião é melhor viver na cidade porque há mais oportunidades"},
      ]},
  ],
},

/* ---------------------------------------------------------- */
diple: {
  code:'DIPLE', level:'B2', fullName:'Diploma Intermédio de Português Língua Estrangeira',
  subtitle:"Le niveau demandé par les universités portugaises pour suivre une licence.",
  fee:'€135', officialTotal:'≈ 3h30', flagship:"Requis pour entrer à l'université portugaise",
  sections:[
    { key:'cl', type:'reading', name:'Compreensão da Leitura', fr:'Compréhension écrite',
      officialMinutes:75, weight:25, practiceMinutes:15, officialItems:55,
      texts:[
        { title:"O regresso ao escritório", source:"Article de presse — registre journalistique",
          text:`Três anos depois de o teletrabalho se ter generalizado, as empresas portuguesas parecem hesitar. Um inquérito recente revela que, embora setenta por cento dos trabalhadores prefiram manter pelo menos dois dias de trabalho remoto por semana, quase metade das empresas já exigiu o regresso presencial a tempo inteiro.

Os argumentos de parte a parte são conhecidos. Do lado das chefias, invoca-se a dificuldade em integrar os mais novos e a erosão daquilo a que se chama, com alguma vaguidade, "cultura de empresa". Do lado dos trabalhadores, aponta-se a poupança de tempo e dinheiro nas deslocações, além de uma autonomia que muitos consideram irreversível.

O que os dados sugerem, porém, é que a discussão está mal colocada. Não se trata de decidir entre presença e distância, mas de perceber que tipo de trabalho beneficia de cada regime. Tarefas que exigem concentração individual progridem melhor em casa; as que dependem de negociação e improviso ganham com a presença física.

Se as empresas continuarem a tratar a questão como uma escolha binária, arriscam-se a perder talento sem ganhar produtividade. Seria bom que o debate amadurecesse antes de as posições se tornarem irreconciliáveis.`,
          questions:[
            {q:"Quelle proportion de travailleurs veut garder du télétravail ?", opts:["50%","70%","Presque la moitié","Trois quarts"], a:1},
            {q:"Quel argument est avancé par les directions ?", opts:["Le coût des bureaux","La difficulté d'intégrer les jeunes","La productivité mesurable","Les transports"], a:1},
            {q:"Selon l'auteur, le débat est :", opts:["Bien posé","Mal posé","Terminé","Sans importance"], a:1},
            {q:"Quel type de tâche gagne à être fait en présentiel ?", opts:["La concentration individuelle","La négociation et l'improvisation","La rédaction","La comptabilité"], a:1},
            {q:"« Se as empresas continuarem » emploie :", opts:["Le futur simple","Le futur du subjonctif","L'imparfait","Le conditionnel"], a:1},
            {q:"Le ton de la conclusion est :", opts:["Optimiste et catégorique","Prudemment critique","Indifférent","Humoristique"], a:1},
          ]},
      ]},
    { key:'pie', type:'writing', name:'Produção e Interação Escritas', fr:'Production écrite',
      officialMinutes:75, weight:25, practiceMinutes:22,
      tasks:[
        { prompt:"Escreva uma carta ao diretor de um jornal a reagir a um artigo sobre o teletrabalho, apresentando a sua posição.",
          fr:"Écrivez une lettre au directeur d'un journal réagissant à un article sur le télétravail, en défendant votre position.", minWords:160, maxWords:180,
          model:"Exmo. Senhor Diretor,\n\nLi com interesse o artigo publicado na passada semana sobre o regresso ao trabalho presencial e gostaria de acrescentar alguns elementos ao debate.\n\nConcordo que a questão tem sido mal colocada. No entanto, parece-me que o texto subestima um aspeto essencial: o impacto do teletrabalho na vida das famílias. Para quem tem filhos pequenos, poder trabalhar em casa dois dias por semana não é um privilégio, mas uma condição de equilíbrio.\n\nEmbora compreenda as preocupações das empresas quanto à integração dos mais jovens, considero que existem soluções intermédias que não obrigam a escolher. Bastaria, por exemplo, concentrar os dias presenciais nas atividades que exigem colaboração.\n\nSeria lamentável que, por falta de imaginação, se voltasse simplesmente ao modelo anterior.\n\nCom os melhores cumprimentos,",
          checklist:["J'ai utilisé une formule d'ouverture formelle","J'ai exprimé une position claire","J'ai concédé un point à la partie adverse","J'ai utilisé au moins un subjonctif","J'ai conclu avec une formule adéquate","Je suis dans la fourchette de mots"] },
      ]},
    { key:'co', type:'listening', name:'Compreensão do Oral', fr:'Compréhension orale',
      officialMinutes:40, weight:25, practiceMinutes:12, officialItems:25,
      items:[
        {audio:"Caso o comboio se atrase mais de uma hora, os passageiros têm direito a reembolso parcial.", q:"Quelle est la condition du remboursement ?", opts:["Tout retard","Plus d'une heure de retard","L'annulation","Aucune"], a:1},
        {audio:"Se tivéssemos saído mais cedo, teríamos evitado o trânsito todo.", q:"Que regrette la personne ?", opts:["Ne pas être partie plus tôt","D'être partie trop tôt","D'avoir pris la voiture","Le mauvais temps"], a:0},
        {audio:"Vendem-se apartamentos remodelados no centro histórico, com financiamento disponível.", q:"De quoi s'agit-il ?", opts:["Une location","Une vente d'appartements","Une rénovation gratuite","Un prêt bancaire"], a:1},
        {audio:"Apesar de ter estudado imenso, não conseguiu a nota que esperava.", q:"Que s'est-il passé ?", opts:["Il n'a pas étudié","Il a étudié mais n'a pas eu la note voulue","Il a réussi brillamment","Il n'a pas passé l'examen"], a:1},
        {audio:"Tendo em conta o exposto, a comissão decidiu adiar a votação.", q:"Quelle décision a été prise ?", opts:["Voter immédiatement","Reporter le vote","Annuler le projet","Approuver"], a:1},
        {audio:"Diz-se que o novo museu abrirá ainda este ano, mas nada foi confirmado.", q:"Quel est le statut de l'information ?", opts:["Confirmée officiellement","Une rumeur non confirmée","Démentie","Ancienne"], a:1},
      ]},
    { key:'pio', type:'speaking', name:'Produção e Interação Orais', fr:'Production orale',
      officialMinutes:20, weight:25, practiceMinutes:9,
      tasks:[
        {prompt:"Apresente e justifique a sua posição sobre o teletrabalho.", fr:"Présentez et justifiez votre position sur le télétravail.", model:"Na minha opinião o teletrabalho traz vantagens mas exige disciplina"},
        {prompt:"Negoceie com o seu interlocutor a organização de um evento com orçamento limitado.", fr:"Négociez l'organisation d'un événement à budget limité.", model:"Podíamos reduzir os custos se escolhêssemos um local mais pequeno"},
        {prompt:"Reaja a esta afirmação: « As redes sociais prejudicam mais do que ajudam. »", fr:"Réagissez à : « Les réseaux sociaux nuisent plus qu'ils n'aident. »", model:"Embora reconheça os riscos, não concordo inteiramente com essa afirmação"},
      ]},
  ],
},

/* ---------------------------------------------------------- */
daple: {
  code:'DAPLE', level:'C1', fullName:'Diploma Avançado de Português Língua Estrangeira',
  subtitle:"Un portugais autonome et nuancé, capable de soutenir un discours complexe sans chercher ses mots.",
  fee:'€155', officialTotal:'≈ 4h',
  sections:[
    { key:'cl', type:'reading', name:'Compreensão da Leitura', fr:'Compréhension écrite',
      officialMinutes:90, weight:25, practiceMinutes:18, officialItems:60,
      texts:[
        { title:"A língua que emigra", source:"Essai — registre académique",
          text:`Poucas línguas europeias terão conhecido uma dispersão geográfica tão desproporcionada em relação à dimensão do país de origem. O português é hoje falado por mais de duzentos e cinquenta milhões de pessoas, das quais menos de cinco por cento vivem em Portugal. Este desequilíbrio, que noutras circunstâncias poderia ter conduzido à fragmentação, produziu antes um fenómeno curioso: a norma europeia manteve-se como referência formal em vários contextos, ao passo que a variedade brasileira se impôs largamente no espaço mediático.

Não se trata de hierarquizar variedades — questão que a linguística moderna considera, com razão, mal formulada. Trata-se antes de observar como se articulam prestígio institucional e peso demográfico, duas forças que raramente coincidem.

Há quem defenda que a divergência entre as normas se acentuará até ao ponto de comprometer a intercompreensão. A hipótese, embora não seja absurda, parece exagerada: as diferenças, ainda que numerosas, incidem sobretudo no léxico e na fonética, domínios que a exposição regular atenua com rapidez.

Mais interessante seria perguntar o que perde uma língua quando deixa de ser corrigida por quem a fala fora das instituições. Tivesse o português permanecido confinado ao seu território de origem, e teria seguramente empobrecido. Que continue a ser disputado é, paradoxalmente, o melhor indício da sua vitalidade.`,
          questions:[
            {q:"Quelle proportion de lusophones vit au Portugal ?", opts:["Moins de 5%","Environ 10%","Un quart","La moitié"], a:0},
            {q:"Selon l'auteur, la question de hiérarchiser les variétés est :", opts:["Essentielle","Mal formulée","Résolue","Politique"], a:1},
            {q:"L'hypothèse d'une perte d'intercompréhension est jugée :", opts:["Certaine","Absurde","Exagérée mais pas absurde","Prouvée"], a:2},
            {q:"Les différences portent surtout sur :", opts:["La syntaxe","Le lexique et la phonétique","La morphologie verbale","L'orthographe seule"], a:1},
            {q:"« Tivesse o português permanecido » est :", opts:["Un passé composé","Une conditionnelle irréelle sans conjonction","Un futur antérieur","Un impératif"], a:1},
            {q:"La conclusion de l'auteur est que la dispute autour de la langue est :", opts:["Un signe de déclin","Un signe de vitalité","Sans importance","Un problème politique"], a:1},
          ]},
      ]},
    { key:'pie', type:'writing', name:'Produção e Interação Escritas', fr:'Production écrite',
      officialMinutes:90, weight:25, practiceMinutes:25,
      tasks:[
        { prompt:"Escreva um texto argumentativo sobre o seguinte tema: « A aprendizagem de línguas estrangeiras deveria ser obrigatória até ao fim do ensino secundário. »",
          fr:"Rédigez un texte argumentatif sur : « L'apprentissage des langues étrangères devrait être obligatoire jusqu'à la fin du secondaire. »", minWords:200, maxWords:230,
          model:"A questão de saber se a aprendizagem de línguas estrangeiras deve manter-se obrigatória até ao final do ensino secundário divide-se, habitualmente, entre argumentos de natureza económica e argumentos de natureza formativa.\n\nDo ponto de vista utilitário, é inegável que o domínio de uma segunda língua amplia as oportunidades profissionais. Contudo, reduzir a questão a este aspeto seria empobrecê-la. Aprender uma língua não consiste apenas em adquirir um instrumento: implica confrontar-se com outra forma de organizar o pensamento, o que dificilmente se obtém por outra via.\n\nOs opositores alegam, não sem alguma razão, que a obrigatoriedade gera desmotivação e que os resultados escolares não justificam o investimento. Convém, porém, distinguir entre o princípio e a sua aplicação: que o ensino de línguas esteja mal concebido não constitui argumento contra a sua existência, mas contra os métodos empregues.\n\nTivesse este debate sido conduzido com mais serenidade, e talvez já se tivessem encontrado soluções intermédias. Em suma, defendo a manutenção da obrigatoriedade, desde que acompanhada de uma revisão profunda das práticas pedagógicas.",
          checklist:["J'ai structuré en introduction, développement, conclusion","J'ai présenté au moins un contre-argument","J'ai employé des connecteurs variés (contudo, porém, em suma…)","J'ai utilisé au moins deux temps du subjonctif","J'ai maintenu un registre soutenu constant","Je suis dans la fourchette de mots"] },
      ]},
    { key:'co', type:'listening', name:'Compreensão do Oral', fr:'Compréhension orale',
      officialMinutes:40, weight:25, practiceMinutes:12, officialItems:25,
      items:[
        {audio:"Não fosse a intervenção atempada dos bombeiros, o incêndio ter-se-ia propagado a toda a encosta.", q:"Que s'est-il passé ?", opts:["L'incendie s'est propagé","Les pompiers ont évité la propagation","Il n'y a pas eu d'incendie","La colline a brûlé"], a:1},
        {audio:"Ainda que o relatório tenha sido aprovado por unanimidade, subsistem dúvidas quanto à sua aplicação.", q:"Quel est le statut du rapport ?", opts:["Rejeté","Approuvé mais son application fait débat","En cours de rédaction","Retiré"], a:1},
        {audio:"Quando cheguei à reunião, já ela terminara há mais de meia hora.", q:"Quel temps est employé pour « terminar » ?", opts:["Passé simple","Plus-que-parfait simple","Futur","Imparfait"], a:1},
        {audio:"Terminada a apresentação, abriu-se um período de perguntas que se prolongou por quase uma hora.", q:"Qu'est-il arrivé après la présentation ?", opts:["Tout le monde est parti","Une longue séance de questions","Une pause","Un vote"], a:1},
        {audio:"Estamos em crer que a proposta reúne condições para ser aprovada na próxima sessão.", q:"Le registre employé est :", opts:["Familier","Formel","Argotique","Neutre oral"], a:1},
        {audio:"Pudera! Com aquele orçamento, era impossível fazer melhor.", q:"Que signifie « Pudera ! » ici ?", opts:["Quelle surprise !","Évidemment !","Impossible !","Dommage !"], a:1},
      ]},
    { key:'pio', type:'speaking', name:'Produção e Interação Orais', fr:'Production orale',
      officialMinutes:25, weight:25, practiceMinutes:10,
      tasks:[
        {prompt:"Exponha o seu ponto de vista sobre o papel das línguas minoritárias na Europa.", fr:"Exposez votre point de vue sur le rôle des langues minoritaires en Europe.", model:"Considero que as línguas minoritárias representam um património que importa preservar"},
        {prompt:"Comente esta afirmação: « A inteligência artificial tornará a tradução humana obsoleta. »", fr:"Commentez : « L'IA rendra la traduction humaine obsolète. »", model:"Embora a tecnologia tenha avançado imenso, duvido que substitua completamente o tradutor humano"},
      ]},
  ],
},

/* ---------------------------------------------------------- */
duple: {
  code:'DUPLE', level:'C2', fullName:'Diploma Universitário de Português Língua Estrangeira',
  subtitle:"Le sommet officiel : une maîtrise comparable à celle d'un locuteur natif cultivé.",
  fee:'€170', officialTotal:'≈ 4h50',
  sections:[
    { key:'cl', type:'reading', name:'Compreensão da Leitura', fr:'Compréhension écrite',
      officialMinutes:120, weight:25, practiceMinutes:20, officialItems:70,
      texts:[
        { title:"Do elogio da lentidão", source:"Chronique littéraire — registre soutenu",
          text:`Convém desconfiar dos elogios da lentidão feitos por quem nunca teve de esperar por nada. Multiplicaram-se, nos últimos anos, os manifestos em favor de um ritmo mais humano, quase sempre escritos por autores cuja subsistência não depende de produzir depressa. Há nisto uma ironia que raramente se assinala.

Não que a crítica à aceleração careça de fundamento. Carece, isso sim, de destinatário. Dizer a alguém que trabalha por turnos que deveria contemplar mais demoradamente o pôr do sol é, no mínimo, uma impertinência. A lentidão, tal como a paciência, é hoje um bem posicional: vale precisamente porque nem todos lhe podem aceder.

Dir-se-ia que o problema não está na velocidade, mas na sua distribuição. Uns aceleram para que outros possam abrandar. Enquanto esta assimetria não for reconhecida, todo o discurso sobre o tempo continuará a soar a conselho de quem já chegou.

Tivessem os defensores da lentidão começado por aqui, e o argumento teria ganho em consistência o que perdeu em elegância.`,
          questions:[
            {q:"Quelle ironie l'auteur relève-t-il ?", opts:["Les manifestes sont trop courts","Ils sont écrits par ceux qui n'ont pas à produire vite","Ils sont trop lents à lire","Ils sont anciens"], a:1},
            {q:"« Carece, isso sim, de destinatário » signifie que la critique :", opts:["N'a aucun fondement","Manque de destinataire pertinent","Est trop connue","Est trop violente"], a:1},
            {q:"Un « bem posicional » est un bien qui vaut :", opts:["Par son prix","Parce que tous n'y ont pas accès","Par sa rareté naturelle","Par sa position géographique"], a:1},
            {q:"Selon l'auteur, le vrai problème est :", opts:["La vitesse elle-même","La distribution de la vitesse","Le manque de temps","La technologie"], a:1},
            {q:"« Dir-se-ia » est un exemple de :", opts:["Enclise","Proclise","Mésoclise","Infinitif personnel"], a:2},
            {q:"Le ton général du texte est :", opts:["Enthousiaste","Ironique et critique","Neutre et descriptif","Nostalgique"], a:1},
            {q:"« Tivessem os defensores… começado » est :", opts:["Un passé simple","Une conditionnelle irréelle par inversion","Un futur antérieur","Un participe absolu"], a:1},
          ]},
      ]},
    { key:'pie', type:'writing', name:'Produção e Interação Escritas', fr:'Production écrite',
      officialMinutes:105, weight:25, practiceMinutes:28,
      tasks:[
        { prompt:"Escreva uma crónica de opinião sobre o seguinte tema: « O direito a desligar. »",
          fr:"Rédigez une chronique d'opinion sur : « Le droit à la déconnexion. »", minWords:250, maxWords:280,
          model:"Há expressões que se impõem antes de terem sido pensadas. \"Direito a desligar\" é uma delas. Formulada com a solenidade das grandes conquistas laborais, sugere que o problema se resolveria por decreto, bastando proibir o envio de mensagens para lá de determinada hora.\n\nConvém, porém, desconfiar da facilidade. O que torna difícil desligar não é a existência técnica do telemóvel, mas a economia de expectativas que se construiu à sua volta. Quem responde depressa é visto como empenhado; quem demora, como desinteressado. Enquanto esta gramática implícita não for alterada, nenhuma proibição terá efeito duradouro — limitar-se-á a deslocar a ansiedade para o dia seguinte.\n\nAcresce que a fronteira entre disponibilidade e servidão nem sempre é nítida. Para muitos profissionais autónomos, estar contactável não constitui uma imposição externa, mas a própria condição do trabalho. Legislar sem distinguir situações seria, neste caso, proteger uns à custa de outros.\n\nNada disto invalida a intenção. Invalida, quando muito, a ilusão de que se trata de um problema simples. Tivesse o debate começado pelas expectativas em vez de pelos horários, e talvez já tivéssemos avançado mais.\n\nO direito a desligar existirá verdadeiramente no dia em que ninguém tiver de o invocar.",
          checklist:["J'ai adopté un registre de chronique (ni familier, ni administratif)","J'ai nuancé plutôt qu'affirmé frontalement","J'ai employé au moins une construction absolue ou une conditionnelle par inversion","J'ai varié les connecteurs argumentatifs","Ma conclusion apporte un déplacement, pas un résumé","Je suis dans la fourchette de mots"] },
      ]},
    { key:'co', type:'listening', name:'Compreensão do Oral', fr:'Compréhension orale',
      officialMinutes:40, weight:25, practiceMinutes:13, officialItems:25,
      items:[
        {audio:"Em chegando os resultados definitivos, comunicá-los-emos a todos os interessados.", q:"Quelle structure est employée dans « comunicá-los-emos » ?", opts:["Enclise","Proclise","Mésoclise","Gérondif"], a:2},
        {audio:"Não obstante as reservas manifestadas, o parecer foi favorável.", q:"Quel est le sens de « não obstante » ?", opts:["Par conséquent","Malgré","À cause de","Pendant"], a:1},
        {audio:"A boca abriu-se-lhe de espanto quando ouviu a notícia.", q:"Quelle particularité présente « abriu-se-lhe » ?", opts:["Une mésoclise","Deux clitiques non fusionnés","Un infinitif personnel","Un participe absolu"], a:1},
        {audio:"Está um bocadinho caro, não achas? Só custa três vezes mais do que o normal.", q:"Quel procédé est employé ?", opts:["Une litote ironique","Une exagération sincère","Un compliment","Une question réelle"], a:0},
        {audio:"Findo o prazo de candidatura, não serão aceites quaisquer documentos adicionais.", q:"« Findo o prazo » est :", opts:["Un gérondif","Un participe absolu","Un futur","Un impératif"], a:1},
        {audio:"Quem me dera ter tido essa oportunidade quando era mais novo.", q:"Que exprime cette phrase ?", opts:["Une certitude","Un regret","Un ordre","Une menace"], a:1},
      ]},
    { key:'pio', type:'speaking', name:'Produção e Interação Orais', fr:'Production orale',
      officialMinutes:25, weight:25, practiceMinutes:11,
      tasks:[
        {prompt:"Monólogo: exponha, com nuance, a sua posição sobre o lugar da cultura na política pública.", fr:"Monologue : exposez avec nuance votre position sur la place de la culture dans la politique publique.", model:"A questão do financiamento público da cultura raramente se coloca nos termos adequados"},
        {prompt:"Comente ironicamente esta afirmação: « Antigamente é que era bom. »", fr:"Commentez avec ironie : « C'était mieux avant. »", model:"Convém desconfiar das memórias que melhoram com o tempo"},
      ]},
  ],
},

};

const CAPLE_ORDER = ['acesso','ciple','deple','diple','daple','duple'];

/* ============================================================
   ADAPTIVE PLACEMENT TEST
   Questions are tagged by level. The test starts at A1 and
   climbs: pass a level's block, move up; fail it, stop and place
   the learner there. This finds the ceiling in ~20 questions
   instead of asking 60.
   ============================================================ */

const PLACEMENT_BANK = {
  A1: [
    {q:"Comment dit-on « Bonjour » (le matin) ?", opts:["Boa noite","Bom dia","Adeus","Obrigado"], a:1},
    {q:"« La maison » se dit :", opts:["o casa","a casa","um casa","el casa"], a:1},
    {q:"Une femme dit merci. Elle dit :", opts:["Obrigado","Obrigada","Obrigados","Obrigade"], a:1},
    {q:"Combien fait « cinco » ?", opts:["3","4","5","6"], a:2},
    {q:"« Je m'appelle Ana » au Portugal :", opts:["Me chamo Ana","Chamo-me Ana","Eu me chamo Ana","Sou chamo Ana"], a:1},
    {type:"listen", q:"Écoute et choisis la bonne traduction :", audio:"Obrigado", opts:["Bonjour","Merci","Pardon","Au revoir"], a:1},
  ],
  A2: [
    {q:"« Je suis fatiguée » (aujourd'hui) :", opts:["Sou cansada","Estou cansada","Tenho cansada","Fico cansada"], a:1},
    {q:"« Hier je suis allé au cinéma » :", opts:["Ontem vou ao cinema","Ontem fui ao cinema","Ontem tenho ido ao cinema","Ontem ia ao cinema"], a:1},
    {q:"Pour commander poliment un café :", opts:["Quero um café","Queria um café","Quererei um café","Quis um café"], a:1},
    {q:"« Je suis en train de manger » au Portugal :", opts:["Estou comendo","Estou a comer","Estou de comer","Vou comer"], a:1},
    {q:"« Ne parle pas ! » (à un ami) :", opts:["Não fala!","Não fales!","Não falas!","Não falar!"], a:1},
    {type:"listen", q:"Écoute : que demande cette phrase ?", audio:"Onde fica a estação?", opts:["L'heure","Où est la gare","Le prix","Un nom"], a:1},
  ],
  B1: [
    {q:"« Il vaut mieux que nous parlions demain » :", opts:["É melhor falamos amanhã","É melhor falarmos amanhã","É melhor falemos amanhã","É melhor falar amanhã"], a:1},
    {q:"« Quand tu arriveras, appelle-moi » :", opts:["Quando chegas, liga-me","Quando chegares, liga-me","Quando chegarás, liga-me","Quando chegues, liga-me"], a:1},
    {q:"« Tenho trabalhado muito » veut dire :", opts:["J'ai travaillé hier","Je travaille beaucoup ces derniers temps","Je travaillerai","Je travaillais autrefois"], a:1},
    {q:"« J'espère que tu vas bien » :", opts:["Espero que estás bem","Espero que estejas bem","Espero que sejas bem","Espero que estarás bem"], a:1},
    {q:"« fazer » + le pronom « o » donne :", opts:["fazer-o","fazê-lo","faze-no","fazer-lo"], a:1},
    {type:"listen", q:"Écoute : quelle condition est posée ?", audio:"Se tiveres tempo, passa por minha casa.", opts:["S'il fait beau","S'il a le temps","S'il est libre demain","S'il veut"], a:1},
  ],
  B2: [
    {q:"« Si j'avais de l'argent, je voyagerais » :", opts:["Se tenho dinheiro","Se tiver dinheiro","Se tivesse dinheiro","Se terei dinheiro"], a:2},
    {q:"« On vend des maisons » :", opts:["Vende-se casas","Vendem-se casas","Se vende casas","É vendido casas"], a:1},
    {q:"« Bien qu'il soit fatigué » :", opts:["Embora está cansado","Embora esteja cansado","Embora seja cansado","Embora estava cansado"], a:1},
    {q:"« Ele deu-mo » signifie :", opts:["Il me l'a donné","Il le lui a donné","Il te l'a donné","Il nous l'a donné"], a:0},
    {q:"« Estando doente, ficou em casa » — le gérondif exprime ici :", opts:["Le progressif","La cause","Le futur","L'ordre"], a:1},
    {type:"listen", q:"Écoute : que regrette la personne ?", audio:"Se tivéssemos saído mais cedo, teríamos evitado o trânsito.", opts:["D'être partie trop tôt","De ne pas être partie plus tôt","D'avoir pris le train","Le mauvais temps"], a:1},
  ],
  C1: [
    {q:"« Ele partira » équivaut à :", opts:["Ele partiu","Ele tinha partido","Ele partirá","Ele partia"], a:1},
    {q:"« Je te remercie d'être venu » :", opts:["por ter vindo","por teres vindo","por tiveres vindo","por vieres"], a:1},
    {q:"« Terminada a reunião » équivaut à :", opts:["Quand la réunion finira","Une fois la réunion terminée","Si la réunion finit","Pour finir la réunion"], a:1},
    {q:"« Quem me dera! » signifie :", opts:["Qui me donne ?","Si seulement !","Donne-moi !","Qui m'a donné ?"], a:1},
    {q:"« Duvido que ele tenha dito isso » emploie :", opts:["L'indicatif","Le subjonctif passé","Le conditionnel","Le futur"], a:1},
    {type:"listen", q:"Écoute : quel temps est employé pour « terminar » ?", audio:"Quando cheguei, já ela terminara.", opts:["Passé simple","Plus-que-parfait simple","Futur","Imparfait"], a:1},
  ],
  C2: [
    {q:"« Em chegando o João » signifie :", opts:["João part","Dès que João arrive","João est arrivé","João arrivait"], a:1},
    {q:"« Dir-se-ia » est un exemple de :", opts:["Enclise","Proclise","Mésoclise","Infinitif personnel"], a:2},
    {q:"« O ele ter ido » est :", opts:["Un impératif","Un infinitif nominalisé","Un participe","Un gérondif"], a:1},
    {q:"« Está um bocadinho caro » est le plus souvent :", opts:["Une description neutre","Une litote ironique","Une erreur","Un compliment"], a:1},
    {q:"« Tivessem eles trazido os cães… » est :", opts:["Un passé","Une conditionnelle sans conjonction","Un ordre","Une question"], a:1},
    {type:"listen", q:"Écoute : quelle particularité présente « abriu-se-lhe » ?", audio:"A boca abriu-se-lhe de espanto.", opts:["Une mésoclise","Deux clitiques non fusionnés","Un infinitif personnel","Un participe absolu"], a:1},
  ],
};

/* A level is "passed" in the placement test at 4 correct out of 6. */
const PLACEMENT_THRESHOLD = 4;
const PLACEMENT_LEVELS = ['A1','A2','B1','B2','C1','C2'];
