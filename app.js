/**
 * SMALLVILLE RETRO FAN PAGE - JAVASCRIPT PRINCIPAL (EDIÇÃO SUPREMA)
 * Inclui:
 * 1. Guia das 7 Kryptonitas de Smallville com propriedades e efeitos
 * 2. Linha do Tempo 1989-2018 com fotos históricas em cada marco
 * 3. Pôsteres oficiais das 10 temporadas
 * 4. Player Winamp v2.91 com a música oficial Remy Zero - Save Me
 * 5. Partículas de meteoros em canvas e modo Kryptonita Vermelha
 */
 
// =============================================================================
// 1. BANCO DE DADOS: AS 7 KRYPTONITAS DE SMALLVILLE
// =============================================================================
const kryptonStonesData = [
  {
    id: "green",
    name: "Kryptonita Verde",
    scientific: "Isótopo Padrão de Kryptonita (Rocha de Meteoro)",
    color: "#00ff66",
    kalElEffect: "Causa dor física excruciante, náuseas extremas, perda imediata de todos os superpoderes e fraqueza progressiva. A exposição prolongada corrói as veias e leva Kal-El à morte.",
    humanEffect: "A radiação altera o DNA de seres humanos comuns, concedendo habilidades metahumanas bizarras (os 'Mutantes de Meteoros' ou Freaks of the Week de Smallville).",
    episodes: "Presente desde o episódio 'Pilot' (o colar de Lana Lang) até a 10ª temporada."
  },
  {
    id: "red",
    name: "Kryptonita Vermelha",
    scientific: "Composto Desinibidor Neural de Krypton",
    color: "#ff2233",
    gem: "❤️",
    kalElEffect: "Elimina instantaneamente todas as inibições morais, o autocontrole e a timidez de Clark. Ele assume uma personalidade arrogante, sedutora, rebelde e perigosa ('Kal'), agindo apenas por puro impulso egoísta.",
    humanEffect: "Não possui efeito biológico direto em humanos normais.",
    episodes: "S02E04 ('Red' - o anel de formatura da turma), S03E01/E02 ('Exile/Phoenix' em Metrópolis), S06E13 ('Crimson')."
  },
  {
    id: "blue",
    name: "Kryptonita Azul",
    scientific: "Supressor de Fisiologia Solar de Krypton",
    color: "#0088ff",
    gem: "💙",
    kalElEffect: "Enquanto estiver em contato direto com a pele de Clark, cancela 100% de seus poderes alienígenas, tornando-o biologicamente vulnerável como um ser humano comum. Em clones corrompidos (como o Bizarro), a sobrecarga celular causa combustão e morte instantânea.",
    humanEffect: "Nenhum efeito registrado em humanos comuns.",
    episodes: "S07E08 ('Blue' - o anel do cientista Dax-Ur), S07E10 ('Persona' - destruição de Bizarro), S09E21 ('Salvation' - a adaga contra Zod)."
  },
  {
    id: "black",
    name: "Kryptonita Preta",
    scientific: "Fragmento de Separação de Entidades",
    color: "#ffffff",
    hazard: "DIVISÃO DE NATUREZAS",
    gem: "🖤",
    kalElEffect: "Resultante do superaquecimento da Kryptonita Verde por visão de calor ou tecnologia. É capaz de separar duas metades ou personalidades de um mesmo hospedeiro em dois corpos físicos distintos.",
    humanEffect: "Pode separar a consciência humana da sua contraparte sombria ou monstruosa.",
    episodes: "S04E01 ('Crusade' - Martha separa Kal-El de Clark), S04E17 ('Onyx' - Lex dividido em bom e mau), S08E22 ('Doomsday' - separação de Davis e a besta)."
  },
  {
    id: "gold",
    name: "Kryptonita Dourada",
    scientific: "Radiação Anti-Celular Irreversível",
    color: "#ffcc00",
    hazard: "PERDA PERMANENTE E DEFINITIVA DE PODERES",
    gem: "💛",
    kalElEffect: "A mais perigosa ameaça cósmica: a exposição ou corte por Kryptonita Dourada destrói de forma permanente e irreversível a habilidade das células de Kal-El de absorver luz solar amarela. Além disso, deixa cicatrizes físicas incorrigíveis em sua carne invulnerável.",
    humanEffect: "Não afeta humanos.",
    episodes: "S10E01 ('Lazarus'), S10E21/E22 ('Finale' - forjada pelos discípulos de Darkseid na aliança de casamento de Clark)."
  },
  {
    id: "silver",
    name: "Kryptonita Prata",
    scientific: "Liga Nanotecnológica Forjada por Brainiac",
    color: "#d0d7de",
    hazard: "DELÍRIO PSICÓTICO E PARANÓIA AGUDA",
    gem: "🤍",
    kalElEffect: "Mineral metálico artificial criado por Milton Fine (Brainiac). Ao liberar nano-compostos na corrente sanguínea de Clark, provoca alucinações visuais e auditivas aterrorizantes, fazendo-o acreditar que seus pais, Chloe e Lana planejam assassiná-lo.",
    humanEffect: "Sem efeito conhecido em humanos.",
    episodes: "S05E07 ('Splinter' - Clark infectado no celeiro e resgatado pelo vírus de Milton Fine)."
  },
  {
    id: "gemstone",
    name: "Kryptonita Joia (Gemstone)",
    scientific: "Cristal Mineral de Indução Hipnótica",
    color: "#e6f7ff",
    hazard: "SUGESTÃO MENTAL / CONTROLE DE VONTADE",
    gem: "💎",
    kalElEffect: "Descoberta em uma pedreira de Smallville, confere a Clark o poder temporário de hipnose verbal compulsiva: qualquer desejo ou comando falado em voz alta por Clark força as pessoas ao redor a realizá-lo cegamente, gerando consequências cômicas e perigosas.",
    humanEffect: "Torna os humanos imediatamente submissos às ordens de quem estiver irradiado pela pedra.",
    episodes: "S09E14 ('Persuasion' - Lois quer se casar imediatamente e Chloe tenta matar Tess Mercer por ordem indireta de Clark)."
  }
];
 
// =============================================================================
// 3. BANCO DE DADOS: TEMPORADAS 1 A 10 (COM PÔSTERES OFICIAIS)
// =============================================================================
const seasonsData = [
  {
    season: 1,
    years: "2001 - 2002",
    poster: "https://media.themoviedb.org/t/p/w500/8dZVKFytdZAT0B5dMNrHxbZ9NrO.jpg",
    summary: "O primeiro ano no colégio Smallville High. Clark Kent descobre sua invulnerabilidade após ser atropelado pelo Porsche de Lex Luthor na ponte Loewen. Ele começa a investigar os mutantes por kryptonita ('Freaks of the Week') com a ajuda do jornal escolar 'A Tocha'.",
    moments: [
      {
        title: "O Resgate na Ponte Loewen",
        episode: "S01E01 - 'Pilot'",
        desc: "Lex Luthor perde o controle do carro a 100 km/h e atinge Clark, que cai no rio sem um único arranhão e arranca o teto do carro para salvar Lex, dando início à amizade mais complexa da TV."
      },
      {
        title: "A Visão do Destino na Casa Branca",
        episode: "S01E06 - 'Hourglass'",
        desc: "A vidente cega Cassandra vê o futuro de Clark cercado por amigos e uma capa vermelha. Já na mente de Lex, ela vê um campo de ossos, chuva de sangue e ele como Presidente dos EUA deflagrando o apocalipse nuclear."
      },
      {
        title: "O Mega Tornado em Smallville",
        episode: "S01E21 - 'Tempest'",
        desc: "No baile de formatura, três gigantescos tornados atingem a cidade. Clark corre para salvar Lana Lang no epicentro do furacão e desafia as leis da gravidade pela primeira vez."
      }
    ]
  },
  {
    season: 2,
    years: "2002 - 2003",
    poster: "https://media.themoviedb.org/t/p/w500/uSr3nf44jkWSswhNnToln9t1dLB.jpg",
    summary: "A expansão da mitologia kryptoniana. Clark descobre as Cavernas Kawatche e os símbolos alienígenas. É o ano da apresentação oficial do legado de Krypton e do primeiro contato com a Kryptonita Vermelha.",
    moments: [
      {
        title: "Encontro Histórico com o Dr. Virgil Swann",
        episode: "S02E17 - 'Rosetta'",
        desc: "Participação lendária de Christopher Reeve como Dr. Swann, que decodifica os sinais da nave e revela ao jovem Clark seu nome de nascimento: 'Kal-El', e o destino de seu planeta de origem, Krypton."
      },
      {
        title: "O Primeiro Contato com Kryptonita Vermelha",
        episode: "S02E04 - 'Red'",
        desc: "Ao usar o anel de formatura com pedra vermelha, todas as inibições de Clark desaparecem. Ele adota a postura de bad-boy, compra uma moto e revela sua atração sem filtros."
      },
      {
        title: "A Destruição da Nave e Fuga para Metrópolis",
        episode: "S02E23 - 'Exodus'",
        desc: "Para evitar a convocação de Jor-El, Clark explode a nave kryptoniana com a chave octogonal. A onda de choque causa o acidente dos Kent e a perda do bebê de Martha, levando Clark, culpado, a fugir com o anel vermelho."
      }
    ]
  },
  {
    season: 3,
    years: "2003 - 2004",
    poster: "https://media.themoviedb.org/t/p/w500/f60xCocHvSKZE3hNh7JrlqVKg9V.jpg",
    summary: "Uma temporada mais sombria e psicológica. Clark vive temporariamente no submundo de Metrópolis como 'Kal', a sanidade de Lex é posta à prova pelo próprio pai e as maquinações de Lionel Luthor se intensificam.",
    moments: [
      {
        title: "O Retorno e a Batalha em Metrópolis",
        episode: "S03E01/E02 - 'Exile / Phoenix'",
        desc: "Jonathan Kent faz um pacto com Jor-El e recebe temporariamente superpoderes kryptonianos para enfrentar e resgatar Clark, que vivia assaltando bancos sob o efeito da Kryptonita Vermelha."
      },
      {
        title: "A Tragédia Oculta da Família Luthor",
        episode: "S03E19 - 'Memoria'",
        desc: "Através da tecnologia de recuperação de memória da Summerholt, Lex revive a trágica morte de seu irmãozinho Julian, revelando que foi sua mãe quem cometeu o ato e que Lex assumiu a culpa para protegê-la."
      },
      {
        title: "O Aprisionamento de Lionel e o Chamado de Jor-El",
        episode: "S03E22 - 'Covenant'",
        desc: "Chloe e Clark conseguem finalmente levar Lionel Luthor a julgamento. Porém, a falsa Kara surge, Jonathan fica em coma e Clark é sugado para a sala de Jor-El nas cavernas para ser 'reprogramado'."
      }
    ]
  },
  {
    season: 4,
    years: "2004 - 2005",
    poster: "https://media.themoviedb.org/t/p/w500/aVi3L1r9ZWOOSacAXvpIdoNCfWW.jpg",
    summary: "O último ano do ensino médio em Smallville High. A estreia marcante de Lois Lane, a busca pelas Três Pedras do Conhecimento de Krypton e a segunda e devastadora chuva de meteoros.",
    moments: [
      {
        title: "A Chegada de Lois Lane e o Voo de Kal-El",
        episode: "S04E01 - 'Crusade'",
        desc: "Lois Lane atropela Clark (nu e sem memória no milharal). Reprogramado como Kal-El, ele voa até o avião de Lex para recuperar a primeira Pedra de Krypton em uma das sequências de voo mais marcantes da série."
      },
      {
        title: "A Troca de Corpos entre Clark e Lionel",
        episode: "S04E06 - 'Transference'",
        desc: "Ao tocar a Pedra da Água, a mente de Lionel Luthor vai para o corpo de Clark, dando ao vilão acesso total aos superpoderes no celeiro, enquanto Clark é trancado na prisão de Belle Reve."
      },
      {
        title: "Segunda Chuva de Meteoros e a Pedra Angular",
        episode: "S04E22 - 'Commencement'",
        desc: "Durante a colação de grau, uma nova chuva de meteoros dizima Smallville. Clark reúne as três pedras no templo sagrado e as arremessa no Ártico para erguer a mítica Fortaleza da Solidão."
      }
    ]
  },
  {
    season: 5,
    years: "2005 - 2006",
    poster: "https://media.themoviedb.org/t/p/w500/ssd1X4oehoyv7AU75hwoGGX75nS.jpg",
    summary: "A era da Fortaleza da Solidão e a faculdade em Metrópolis. A chegada de Milton Fine (Brainiac), o trágico 100º episódio e o renascimento do General Zod através de Lex Luthor.",
    moments: [
      {
        title: "A Criação da Fortaleza da Solidão",
        episode: "S05E01 - 'Arrival'",
        desc: "Clark finca o Cristal do Conhecimento no gelo do Ártico, fazendo emergir as imponentes estruturas de cristal kryptoniano e iniciando seu treinamento formal com a consciência de Jor-El."
      },
      {
        title: "O Preço do Tempo: A Morte de Jonathan Kent",
        episode: "S05E12 - 'Reckoning' (Episódio 100)",
        desc: "Após Lana morrer num acidente, Clark implora a Jor-El para voltar no tempo. Ele a salva, mas as leis do universo cobram o equilíbrio: seu pai, Jonathan Kent, sofre um ataque cardíaco fatal na neve."
      },
      {
        title: "A Libertação de Zod e o Apagão Global",
        episode: "S05E22 - 'Vessel'",
        desc: "Brainiac infecta a rede elétrica mundial com um vírus global e transfere o espírito do General Zod para o corpo de Lex Luthor, que aprisiona Clark dentro da Zona Fantasma."
      }
    ]
  },
  {
    season: 6,
    years: "2006 - 2007",
    poster: "https://media.themoviedb.org/t/p/w500/r8xOSL0V4srx6KrWjgYY0ZqZfFS.jpg",
    summary: "A caça aos fugitivos da Zona Fantasma, a ascensão do Arqueiro Verde e a formação da primeira Liga da Justiça, além dos experimentos mutantes da LuthorCorp no Nível 33.1.",
    moments: [
      {
        title: "A Reunião da Liga da Justiça",
        episode: "S06E11 - 'Justice'",
        desc: "Oliver Queen (Arqueiro Verde), Bart Allen (Impulso), Arthur Curry (Aquaman) e Victor Stone (Cyborg) unem forças com Clark para destruir a base secreta de bio-armas 33.1 de Lex Luthor."
      },
      {
        title: "O Casamento Trágico de Lex e Lana",
        episode: "S06E16 - 'Promise'",
        desc: "Lana descobre o segredo de Clark espionando-o pelo celeiro, mas é chantageada por Lionel a prosseguir com o casamento com Lex para proteger a vida do jovem Kent."
      },
      {
        title: "O Nascimento do Bizarro",
        episode: "S06E22 - 'Phantom'",
        desc: "Um dos fugitivos da Zona Fantasma replica o DNA de Clark, tornando-se o seu clone imperfeito: Bizarro, cujos poderes são alimentados por kryptonita e enfraquecidos pela luz solar amarela."
      }
    ]
  },
  {
    season: 7,
    years: "2007 - 2008",
    poster: "https://media.themoviedb.org/t/p/w500/6lGHd6lBbpEkoq5pgI8XDRy2WYB.jpg",
    summary: "A chegada da prima kryptoniana Kara Zor-El (Supergirl), a morte brutal de Lionel Luthor nas mãos do filho e a queda final da Fortaleza sobre Clark e Lex.",
    moments: [
      {
        title: "A Chegada de Kara Zor-El",
        episode: "S07E02 - 'Kara'",
        desc: "Clark descobre sua prima biológica de Krypton, que já sabe voar naturalmente e o ajuda a entender as divisões do Conselho Científico de seu mundo natal."
      },
      {
        title: "O Assassinato de Lionel Luthor",
        episode: "S07E16 - 'Descent'",
        desc: "Lex atinge o ápice de sua vilania: em uma discussão tensa na torre da LuthorCorp, ele empurra o próprio pai de uma janela de vidro para a morte, roubando a chave do 'Viajante'."
      },
      {
        title: "Colapso no Ártico: Lex Descobre a Verdade",
        episode: "S07E20 - 'Arctic'",
        desc: "Lex chega à Fortaleza da Solidão, confronta Clark com o dispositivo de controle e diz: 'Eu te amava como a um irmão'. O orbe é ativado e a Fortaleza desaba sobre os dois."
      }
    ]
  },
  {
    season: 8,
    years: "2008 - 2009",
    poster: "https://media.themoviedb.org/t/p/w500/jqEDADJiQbdtLMLSoXVulSiQkfh.jpg",
    summary: "Clark veste o terno e começa a trabalhar no Planeta Diário ao lado de Lois Lane. Nasce a lenda urbana do 'Borrão Vermelho e Azul' e a ameaça implacável do monstro Doomsday.",
    moments: [
      {
        title: "Clark Kent Entra no Planeta Diário",
        episode: "S08E01 - 'Odyssey'",
        desc: "Clark aceita que não pode mais se esconder na fazenda. Ele assume a mesa em frente à de Lois Lane no Daily Planet, usando o jornalismo como radar para salvar pessoas."
      },
      {
        title: "A Primeira Chamada na Cabine Telefônica",
        episode: "S08E17 - 'Hex'",
        desc: "Clark passa a se comunicar com Lois através da cabine telefônica pública sob a identidade do 'Borrão', criando a cumplicidade mítica entre a repórter e o herói."
      },
      {
        title: "O Confronto com Doomsday e o Sacrifício de Jimmy",
        episode: "S08E22 - 'Doomsday'",
        desc: "Com o auxílio da Kryptonita Preta, Clark separa a consciência de Davis Bloome da fera assassina Doomsday, enterrando o monstro nas profundezas geotérmicas da Terra."
      }
    ]
  },
  {
    season: 9,
    years: "2009 - 2010",
    poster: "https://media.themoviedb.org/t/p/w500/sxfkMgX4aEqvMQhDicf8LcbBWs3.jpg",
    summary: "A era do 'Borrão' com uniforme preto e a marca da Casa de El no peito. A vinda dos kandorianos liderados pelo implacável Major Zod e a grandiosa reunião com a Sociedade da Justiça da América.",
    moments: [
      {
        title: "O Filme Especial: Sociedade da Justiça",
        episode: "S09E11 - 'Absolute Justice'",
        desc: "Escrito por Geoff Johns, Clark e a Liga conhecem a geração de ouro dos heróis: Gavião Negro (Hawkman), Senhor Destino (Doctor Fate) e Stargirl, abrindo os olhos de Clark para seu papel como líder mundial."
      },
      {
        title: "O Primeiro Beijo no Daily Planet",
        episode: "S09E09 - 'Pandora'",
        desc: "Ao recuperar suas memórias do futuro devastado, Lois percebe seus sentimentos por Clark e eles finalmente assumem o romance definitivo da série."
      },
      {
        title: "A Batalha na Chuva contra o Major Zod",
        episode: "S09E21 - 'Salvation'",
        desc: "Em um duelo sob a tempestade no topo de um arranha-céu, Clark crava em si mesmo a adaga de Kryptonita Azul para ser sugado junto com Zod para o Livro de Rao, salvando a Terra de vez."
      }
    ]
  },
  {
    season: 10,
    years: "2010 - 2011",
    poster: "https://media.themoviedb.org/t/p/w500/nUiw76eCg1uT8uz5Ibtu6FWYlgX.jpg",
    summary: "A temporada de despedida. Clark aceita suas raízes, supera a culpa pela morte do pai, se casa com Lois Lane, enfrenta a escuridão de Darkseid e finalmente veste o uniforme do Superman para alçar voo.",
    moments: [
      {
        title: "Brainiac 5 e a Viagem ao Futuro",
        episode: "S10E04 - 'Homecoming' (Episódio 200)",
        desc: "A Legião dos Super-Heróis traz Brainiac 5, que leva Clark a 2017: ele se vê usando óculos, salvando Lois em um helicóptero no topo do Planeta Diário e voando com plena confiança."
      },
      {
        title: "Lois Descobre o Segredo no Baile",
        episode: "S10E05 - 'Isis'",
        desc: "Clark decide parar de mentir e confessa: 'Eu sou o Borrão'. Lois pula em seus braços em uma das cenas românticas mais celebradas pelos fãs."
      },
      {
        title: "O Voo Definitivo e o Afastamento de Apokolips",
        episode: "S10E21/E22 - 'Finale (Partes 1 & 2)'",
        desc: "Jonathan e Jor-El entregam o traje sagrado. Clark aprende a voar na Fortaleza, resgata a Força Aérea Um, empurra o planeta Apokolips de volta ao espaço sideral e surge no Daily Planet abrindo a camisa com o 'S'."
      }
    ]
  }
];
 
// =============================================================================
// 4. BANCO DE DADOS: DOSSIÊ DE PERSONAGENS (COM A FOTO ENVIADA DO CLARK)
// =============================================================================
const charactersData = [
  // --- HERÓIS ---
  {
    type: "hero",
    name: "Clark Kent",
    codename: "Kal-El / O Borrão / Superman",
    actor: "Tom Welling",
    photo: "assets/images/tom welling.jpg", // Foto oficial enviada pelo usuário
    powers: "Superforça, invulnerabilidade, supervelocidade, visão de calor e raio-x",
    bio: "Enviado de Krypton ainda bebê durante a destruição de seu mundo, foi acolhido pelos amorosos Jonathan e Martha Kent. Durante uma década, resistiu ao fardo de seu destino até abraçar o manto do protetor supremo da Terra."
  },
  {
    type: "hero",
    name: "Chloe Sullivan",
    codename: "Torre de Vigilância (Watchtower)",
    actor: "Allison Mack",
    photo: "assets/images/cloe.jpg",
    powers: "Mestre em computação, espionagem digital e arquivamento 'Muro das Esquisitices'",
    bio: "Editora-chefe do jornal estudantil 'A Tocha' e primeira amiga a descobrir e guardar o segredo de Clark por lealdade genuína. Transformou-se no cérebro tático e coordenadora da Liga da Justiça sob a identidade da Watchtower."
  },
  {
    type: "hero",
    name: "Lois Lane",
    codename: "A Repórter Estrela do Planeta Diário",
    actor: "Erica Durance",
    photo: "assets/images/lois.jpg",
    powers: "Investigação destemida, combate corpo a corpo militar (filha de General)",
    bio: "Entrou na vida de Clark na 4ª temporada procurando pela prima Chloe. Com sua personalidade sarcástica e coragem inabalável, tornou-se a parceira de redação, a maior defensora do Borrão e o grande amor da vida de Clark."
  },

    {
    type: "hero",
    name: "Kara Zor-El",
    codename: "Supergirl / Linda Danvers",
    actor: "Laura Vandervoort",
    photo: "assets/images/kara.jpg",
    powers: "Fisiologia kryptoniana idêntica à de Clark, com habilidade inata de voo livre",
    bio: "Filha de Zor-El e prima direta de Kal-El. Enviada com a missão de zelar pelo bebê Kal-El, sua nave ficou presa em estase por 18 anos. Ao acordar, ajudou Clark a entender costumes de Krypton e a voar."
  },

  {
    type: "hero",
    name: "Jonathan Kent",
    codename: "O Guardião Moral do Kansas",
    actor: "John Schneider",
    photo: "assets/images/jonathan.jpeg",
    powers: "Sabedoria humana, integridade indomável, amor incondicional",
    bio: "O pilar da formação do maior herói do mundo. Jonathan ensinou Clark sobre honra, controle e sacrifício, protegendo o segredo do filho até o último batimento cardíaco."
  },
  {
    type: "hero",
    name: "Martha Kent",
    codename: "A Mãe / Senadora Vermelha",
    actor: "Annette O'Toole",
    photo: "assets/images/martha.jpg",
    powers: "Compaixão incondicional, diplomacia e liderança política no Senado",
    bio: "A base afetuosa de Clark, responsável por costurar sua primeira capa e guiá-lo com calor humano. Mais tarde, assumiu o mandato no Senado de Washington usando sua influência para proteger os meta-humanos."
  },

    {
    type: "hero",
    name: "Oliver Queen",
    codename: "Arqueiro Verde (Green Arrow)",
    actor: "Justin Hartley",
    photo: "assets/images/oliver.webp",
    powers: "Arqueirismo incomparável, bilionário filantropo, combate tático e arsenal tecnológico",
    bio: "Herdeiro das Indústrias Queen de Star City. Foi o catalisador que ensinou Clark a enxergar além dos limites do Kansas, fundando a Liga da Justiça para desmantelar os laboratórios secretos da LuthorCorp."
  },

      {
    type: "hero",
    name: "Bart Allen",
    codename: "Impulse / Flash",
    actor: "Kyle Gallner",
    photo: "assets/images/flash.jpg",
    powers: "Supervelocidade, reflexos acelerados, agilidade sobre-humana e capacidade de correr sobre a água",
    bio: "Um jovem velocista que sobrevivia usando seus poderes para cometer pequenos furtos. Após conhecer Clark, passou a direcionar suas habilidades para o heroísmo e integrou a Liga da Justiça de Oliver Queen sob o codinome Impulse."
  },

  {
    type: "hero",
    name: "Arthur Curry",
    codename: "Aquaman",
    actor: "Alan Ritchson",
    photo: "assets/images/aqua.jpg",
    powers: "Força sobre-humana, respiração subaquática, natação em alta velocidade e comunicação com a vida marinha",
    bio: "Um defensor dos oceanos com origem atlante, Arthur conheceu Clark ao tentar impedir um projeto da LuthorCorp que ameaçava a vida marinha. Mais tarde, tornou-se Aquaman e passou a integrar a Liga da Justiça."
  },
  {
    type: "hero",
    name: "Victor Stone",
    codename: "Ciborgue (Cyborg)",
    actor: "Lee Thompson Young",
    photo: "assets/images/c.webp",
    powers: "Força sobre-humana, resistência elevada, sistemas cibernéticos avançados e interface com computadores",
    bio: "Após sofrer um grave acidente, Victor foi reconstruído com implantes cibernéticos experimentais pela SynTechnics. Com a ajuda de Clark, recuperou sua liberdade e posteriormente entrou para a Liga da Justiça de Oliver Queen."
  },

 
  // --- VILÕES ---
  {
    type: "villain",
    name: "Lex Luthor",
    codename: "O Maior Arqui-Inimigo da Humanidade",
    actor: "Michael Rosenbaum",
    photo: "assets/images/lex.jpg",
    powers: "Intelecto de nível gênio, recursos bélicos globais, obsessão calculista",
    bio: "Salvo por Clark na ponte no episódio piloto, iniciou uma genuína amizade que foi gradualmente destruída pela paranóia, pelas mentiras do segredo e pela herança nefasta de seu pai, tornando-se o nêmesis definitivo do Superman."
  },
  {
    type: "villain",
    name: "Lionel Luthor",
    codename: "O Magnata Magnífico / O Emissário",
    actor: "John Glover",
    photo: "assets/images/lionel.jpg",
    powers: "Manipulação corporativa implacável, conexão mística involuntária com Jor-El",
    bio: "Fundador impiedoso da LuthorCorp que moldou Lex com frieza calculada. Após o contato com os cristais das Cavernas Kawatche, tornou-se o receptáculo de Jor-El, tentando se redimir até ser executado pelo próprio filho."
  },
  {
    type: "villain",
    name: "Milton Fine",
    codename: "Brainiac / Construto Interativo de Krypton",
    actor: "James Marsters",
    photo: "assets/images/fine.jpg",
    powers: "Nanotecnologia viva, replicação celular infinita, manipulação psíquica",
    bio: "Um sofisticado construto tecnológico artificial criado em Krypton. Apresentou-se como professor de história universitária de Clark para manipulá-lo a libertar o General Zod e devastar os sistemas da Terra."
  },
  {
    type: "villain",
    name: "Davis Bloome",
    codename: "Doomsday (A Besta Apocalíptica)",
    actor: "Sam Witwer",
    photo: "assets/images/davis.jpg",
    powers: "Adaptação genética reativa a qualquer golpe letal, força bruta esmagadora",
    bio: "Criado a partir da engenharia genética mais temível de Krypton e lançado na esteira da nave de Kal-El. Um paramédico bondoso que se transformava inconscientemente na aberração indestrutível destinada a matar Clark."
  },
  {
    type: "villain",
    name: "Major Zod",
    codename: "O General Tirano de Kandor",
    actor: "Callum Blue",
    photo: "assets/images/zod.jpg",
    powers: "Liderança militar impiedosa, poderes sob o sol amarelo, domínio do Livro de Rao",
    bio: "Versão jovem e clonada do líder militar kandoriano. Seduziu os refugiados alienígenas a construir a Torre Solar e tentou escravizar a raça humana antes de ser derrotado no épico duelo na chuva com Clark."
  },
  {
    type: "villain",
    name: "Bizarro",
    codename: "O Reflexo Distorcido do Homem de Aço",
    actor: "Tom Welling (Clone)",
    photo: "assets/images/bug.jpg",
    isBizarro: true,
    powers: "Poderes invertidos: energizado por Kryptonita verde e enfraquecido pelo sol amarelo",
    bio: "Fruto da fusão de um espectro da Zona Fantasma com o DNA imperfeito de Clark. Com um rosto rochoso quando exposto à luz solar, usurpou a vida e o amor de Lana Lang até ser evaporado pela Kryptonita Azul."
  }
];
 
// =============================================================================
// 5. BANCO DE DADOS: LINHA DO TEMPO CRONOLÓGICA (COM FOTOS HISTÓRICAS)
// =============================================================================
const timelineData = [
  {
    year: "1989",
    title: "A Primeira Chuva de Meteoros em Smallville",
    photo: "https://media.themoviedb.org/t/p/w500/heUgGLtT5urhzdpnBHScMUQY3zI.jpg",
    desc: "O planeta Krypton explode. Uma nave contendo o bebê Kal-El atinge os campos da fazenda Kent durante uma violenta chuva de rochas verdes de meteoros. Jonathan e Martha encontram o menino e decidem criá-lo como seu filho adotivo."
  },
  {
    year: "2001",
    title: "O Primeiro Dia em Smallville High & O Acidente na Ponte",
    photo: "https://media.themoviedb.org/t/p/w500/e9EMQca40VSMP3547VLPJUyy3Zg.jpg",
    desc: "Com 14 anos, Clark Kent descobre sua invulnerabilidade ao ser atropelado pelo Porsche de Lex Luthor na ponte de Smallville. Ele salva Lex da morte e os dois formam uma amizade que mudará o rumo da história da Terra."
  },
  {
    year: "2003",
    title: "A Revelação de Kal-El nas Cavernas Kawatche",
    photo: "https://media.themoviedb.org/t/p/w500/A0frUO2bfudbWQTVjNC5mELu8YM.jpg",
    desc: "Com a ajuda das pesquisas do Dr. Virgil Swann (Christopher Reeve) e das inscrições nas Cavernas sagradas dos índios Kawatche, Clark toma consciência formal de sua ascendência kryptoniana e ouve pela primeira vez a voz de Jor-El."
  },
  {
    year: "2005",
    title: "A Segunda Chuva de Meteoros e a Fundação da Fortaleza",
    photo: "https://media.themoviedb.org/t/p/w500/vilKmoGohkVVVKIjhtsOpEscpjP.jpg",
    desc: "No dia da formatura do ensino médio, uma nova chuva de meteoros bombardeia o Kansas. Clark reúne as Três Pedras do Conhecimento e atira a chave no Ártico, erguendo a majestosa Fortaleza da Solidão."
  },
  {
    year: "2006",
    title: "A Perda da Bússola Moral: Adeus a Jonathan Kent",
    photo: "https://media.themoviedb.org/t/p/w500/5CnVeGXT1ycZIqYqtferhxj5Q8i.jpg",
    desc: "Para evitar a morte de Lana Lang, Clark força Jor-El a voltar o tempo, mas o preço cósmico é cobrado: Jonathan Kent morre nos braços de Martha e Clark após um ataque cardíaco no 100º episódio."
  },
  {
    year: "2007",
    title: "A Primeira Operação Conjunta da Liga da Justiça",
    photo: "https://media.themoviedb.org/t/p/w500/qgL8D7ALFvB82k6BsutrwWrOZts.jpg",
    desc: "Oliver Queen (Arqueiro Verde), Bart Allen (Flash/Impulso), Arthur Curry (Aquaman) e Victor Stone (Cyborg) unem poderes a Clark Kent e marcham contra as instalações clandestinas do Nível 33.1 da LuthorCorp."
  },
  {
    year: "2008",
    title: "A Destruição da Fortaleza e o Ingresso no Planeta Diário",
    photo: "https://media.themoviedb.org/t/p/w500/snRUqVYnNaPqaw3HpPH1IGbdvpB.jpg",
    desc: "Lex Luthor descobre que Clark é o 'Viajante' extraterrestre e desaba a Fortaleza no Ártico. Após sobreviver, Clark muda-se definitivamente para Metrópolis e aceita o emprego de repórter ao lado de Lois Lane."
  },
  {
    year: "2009",
    title: "A Era do Borrão e a Batalha contra Doomsday",
    photo: "https://media.themoviedb.org/t/p/w500/iZCTA7XdxgoZflm4W1PLBXFZa7k.jpg",
    desc: "Clark adota o visual noturno de sobretudo com o brasão do 'S' no peito, tornando-se a lenda protetora de Metrópolis ('The Blur') enquanto arquiteta o plano para aprisionar o monstro Doomsday no núcleo da Terra."
  },
  {
    year: "2010",
    title: "A Visão de 2017 e a Confissão a Lois Lane",
    photo: "https://media.themoviedb.org/t/p/w500/s6QNFv8e6aIytq56FuCVh84oykH.jpg",
    desc: "No episódio 200 ('Homecoming'), Brainiac 5 mostra a Clark seu glorioso futuro com óculos e uniforme. Confiante no amor, Clark finalmente revela a Lois Lane que ele é o Borrão, e eles ficam noivos."
  },
  {
    year: "2011",
    title: "O Voo Supremo, Apokolips Afastada e a Revelação do Superman",
    photo: "https://media.themoviedb.org/t/p/w500/uoGLuuFujBzWRuvhT553LZZUNit.jpg",
    desc: "Com o planeta demoníaco Apokolips de Darkseid prestes a esmagar a órbita terrestre, Clark recebe a bênção de Jonathan e Jor-El na Fortaleza, aprende a voar livremente, coloca o icônico uniforme azul e vermelho e empurra Apokolips de volta para o cosmos."
  },
  {
    year: "2018",
    title: "Epílogo Futurista: O Presidente Luthor e o Homem de Aço",
    photo: "https://media.themoviedb.org/t/p/w500/dKtmNx6L9HwtubUkXrmEbXwWBmB.jpg",
    desc: "Sete anos após a queda de Apokolips, Lex Luthor é eleito Presidente dos Estados Unidos. No terraço do Planeta Diário, Lois entrega as abotoadeiras a Clark Kent, que corre, sobe ao telhado e abre a camisa revelando o símbolo da Casa de El sob o tema triunfante de John Williams."
  }
];
 
// =============================================================================
// 6. MENSAGENS INICIAIS DO LIVRO DE VISITAS RETRÔ (GUESTBOOK)
// =============================================================================
const initialGuestbookEntries = [
  {
    author: "Torch_Editor_Chloe",
    location: "Smallville, KS",
    date: "18/10/2001",
    message: "Bem-vindos ao arquivo não-oficial de fenômenos de meteoros! Quem mais viu aquele carro caindo da ponte Loewen sem matar o motorista?!"
  },
  {
    author: "LexCorp_Insider",
    location: "Metropolis, NY",
    date: "26/01/2006",
    message: "Acabei de assistir ao episódio 100... Não consigo parar de chorar com o funeral do Sr. Kent. Smallville nunca mais será a mesma!"
  },
  {
    author: "DailyPlanet_Intern",
    location: "Metropolis Tower",
    date: "13/05/2011",
    message: "EU VI O HOMEM DE AZUL E VERMELHO VOANDO NO CÉU! Alguém me belisca! O final da série foi a coisa mais emocionante de todas as dez temporadas!"
  }
];
 
// =============================================================================
// 7. GERENCIADOR DO PLAYER WINAMP COM A MÚSICA OFICIAL (REMY ZERO - SAVE ME)
// =============================================================================
class WinampRealPlayer {
  constructor() {
    this.audio = document.getElementById("themeAudio");
    this.btnPlay = document.getElementById("btnPlay");
    this.btnStop = document.getElementById("btnStop");
    this.btnPrev = document.getElementById("btnPrev");
    this.btnNext = document.getElementById("btnNext");
    this.timeDisplay = document.getElementById("winampTime");
    this.eqBars = document.getElementById("eqBars");
    this.volSlider = document.getElementById("volSlider");
 
    this.isPlaying = false;
    this.bindEvents();
    // Se a música do Clark começar, o tema da abertura pausa
    document.addEventListener("clark:play", () => { if (this.isPlaying) this.pause(); });
  }
 
  bindEvents() {
    if (this.audio) {
      this.audio.volume = this.volSlider.value / 100;
 
      this.audio.addEventListener("timeupdate", () => {
        const cur = Math.floor(this.audio.currentTime);
        const mins = String(Math.floor(cur / 60)).padStart(2, "0");
        const secs = String(cur % 60).padStart(2, "0");
        this.timeDisplay.textContent = `${mins}:${secs}`;
      });
 
      this.audio.addEventListener("ended", () => {
        this.stop();
      });
    }
 
    this.btnPlay.addEventListener("click", () => this.togglePlay());
    this.btnStop.addEventListener("click", () => this.stop());
    this.btnPrev.addEventListener("click", () => this.rewind());
    this.btnNext.addEventListener("click", () => this.forward());
 
    this.volSlider.addEventListener("input", (e) => {
      if (this.audio) {
        this.audio.volume = e.target.value / 100;
      }
    });
  }
 
  togglePlay() {
    if (!this.audio) return;
 
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }
 
  play() {
    if (!this.audio) return;
    this.audio.play().then(() => {
      this.isPlaying = true;
      document.dispatchEvent(new CustomEvent("winamp:play"));
      this.btnPlay.textContent = "❚❚ Pausar";
      this.eqBars.classList.add("playing");
    }).catch(err => {
      console.warn("Autoplay bloqueado pelo navegador, aguardando clique do usuário:", err);
    });
  }
 
  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
    this.btnPlay.textContent = "▶ Tocar Abertura";
    this.eqBars.classList.remove("playing");
  }
 
  stop() {
    if (!this.audio) return;
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlaying = false;
    this.btnPlay.textContent = "▶ Tocar Abertura";
    this.eqBars.classList.remove("playing");
    this.timeDisplay.textContent = "00:00";
  }
 
  rewind() {
    if (!this.audio) return;
    this.audio.currentTime = Math.max(0, this.audio.currentTime - 5);
  }
 
  forward() {
    if (!this.audio) return;
    this.audio.currentTime = Math.min(this.audio.duration || 999, this.audio.currentTime + 5);
  }
}
 
// =============================================================================
// 7b. MÚSICA DO CLARK: clique na foto (no "S" do canto) toca "Resiliente Nordista"
// =============================================================================
function initClarkSong() {
  const frame = document.getElementById("clarkSongTrigger");
  const audio = document.getElementById("clarkAudio");
  const hint = document.getElementById("clarkSongHint");
  if (!frame || !audio || !hint) return;
 
  const IDLE = "";
  const PLAYING = "♪ Tocando: Resiliente Nordista";
  const MISSING = "Arquivo não encontrado: coloque resiliente-nordista.mp3 em assets/audio/";
 
  let failed = false;
 
  function setPlaying(on) {
    if (on) failed = false;
    frame.classList.toggle("playing", on);
    frame.setAttribute("aria-pressed", String(on));
    hint.textContent = on ? PLAYING : (failed ? MISSING : IDLE);
  }
 
  function fail() {
    failed = true;
    setPlaying(false);
  }
 
  function toggle() {
    if (!audio.paused) {
      audio.pause();
      return;
    }
    document.dispatchEvent(new CustomEvent("clark:play"));
    audio.play().catch(fail);
  }
 
  audio.addEventListener("play", () => setPlaying(true));
  audio.addEventListener("pause", () => setPlaying(false));
  audio.addEventListener("ended", () => setPlaying(false));
  audio.addEventListener("error", fail);
  document.addEventListener("winamp:play", () => { if (!audio.paused) audio.pause(); });
 
  frame.addEventListener("click", toggle);
  frame.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
  });
  setPlaying(false);
}
 
// =============================================================================
// 8. CANVAS DE PARTÍCULAS DE KRYPTONITA / METEOROS NO FUNDO
// =============================================================================
function initMeteorParticles() {
  const canvas = document.getElementById("meteorCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
 
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);
 
  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });
 
  const particles = [];
  const particleCount = 45;
 
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: Math.random() * 0.6 + 0.2,
      opacity: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * 0.05
    });
  }
 
  function animate() {
    ctx.clearRect(0, 0, w, h);
 
    const isRedMode = document.body.classList.contains("red-kryptonite-mode");
    const pColor = isRedMode ? "255, 34, 51" : "0, 255, 102";
 
    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
 
      if (p.y > h) {
        p.y = -5;
        p.x = Math.random() * w;
      }
      if (p.x > w) p.x = 0;
      if (p.x < 0) p.x = w;
 
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${pColor}, ${p.opacity})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgb(${pColor})`;
      ctx.fill();
    });
 
    requestAnimationFrame(animate);
  }
 
  animate();
}
 
// =============================================================================
// 9. RENDERIZADOR DAS KRYPTONITAS
// =============================================================================
 
// Renderiza a navegação e detalhes das 7 Kryptonitas
function renderKryptonStones() {
  const nav = document.getElementById("kryptonStonesNav");
  const display = document.getElementById("kryptonStoneDisplay");
  if (!nav || !display) return;
 
  nav.innerHTML = kryptonStonesData.map((k, index) => `
    <button class="stone-nav-btn ${index === 0 ? 'active' : ''}" data-id="${k.id}">
      <img class="stone-thumb" src="assets/Kalel/${k.id}.png" alt="" width="28" height="28" style="filter: drop-shadow(0 0 4px ${k.color});">
      <span>${k.name}</span>
    </button>
  `).join("");
 
  function showStone(id) {
    const stone = kryptonStonesData.find(s => s.id === id) || kryptonStonesData[0];
    display.innerHTML = `
      <div class="stone-detail-grid">
        <div class="stone-crystal-preview">
          <img class="crystal-img" src="assets/Kalel/${stone.id}.png" alt="${stone.name}" width="220" height="220">
        </div>
        <div class="stone-info-content">
          <h3 style="color: ${stone.color}; text-shadow: 0 0 10px ${stone.color};">${stone.name}</h3>
          <span class="stone-scientific-name">Nomenclatura: ${stone.scientific}</span>
          
          <div class="stone-effects-list">
            <div class="stone-effect-box">
              <strong style="color: #66b2ff;">Efeito em Kal-El (Kryptonianos):</strong>
              <p>${stone.kalElEffect}</p>
            </div>
            <div class="stone-effect-box">
              <strong style="color: #ffbb33;">Efeito em Humanos / Mutantes:</strong>
              <p>${stone.humanEffect}</p>
            </div>
            <div class="stone-effect-box">
              <strong style="color: var(--krypton-green);">Aparições Marcantes na Série:</strong>
              <p>${stone.episodes}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
 
  showStone("green");
 
  nav.querySelectorAll(".stone-nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      nav.querySelectorAll(".stone-nav-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      showStone(btn.getAttribute("data-id"));
    });
  });
}
 
// =============================================================================
// 10. RENDERIZADORES DE CONTEÚDO (TEMPORADAS, PERSONAGENS E TIMELINE COM FOTOS)
// =============================================================================
 
// Renderiza a temporada selecionada com pôster oficial e ficha detalhada
function renderSeason(seasonNum) {
  const container = document.getElementById("seasonContentArea");
  const data = seasonsData.find(s => s.season === Number(seasonNum));
 
  if (!data) return;
 
  const momentsHtml = data.moments.map(m => `
    <div class="moment-card">
      <div class="moment-title">${m.title}</div>
      <span class="moment-episode">${m.episode}</span>
      <p class="moment-text">${m.desc}</p>
    </div>
  `).join("");
 
  container.innerHTML = `
    <div class="season-detail-card">
      <div class="season-main-flex">
        <div class="season-poster-frame">
          <img src="${data.poster}" alt="Pôster Oficial da Temporada ${data.season}" class="season-poster-img" loading="lazy">
        </div>
        <div class="season-info-col">
          <div class="season-header-row">
            <h3 class="season-title-large">TEMPORADA ${data.season}</h3>
            <span class="season-years-tag">EXIBIÇÃO: ${data.years}</span>
          </div>
          <p class="season-summary">${data.summary}</p>
        </div>
      </div>
      <div class="season-episodes-heading">⚡ 3 MOMENTOS MAIS MARCANTES DA TEMPORADA:</div>
      <div class="season-moments-grid">
        ${momentsHtml}
      </div>
    </div>
  `;
}
 
// --- Fotos dos personagens -------------------------------------------------
// Ordem de tentativa para cada foto:
//   1) assets/images/cast/<nome-do-personagem>.jpg  (foto da época da série, se você colocar)
//   2) a foto remota do TMDB em alta resolução (h632 em vez de w300)
//   3) um bloco com as iniciais, se nada carregar
function slugify(name) {
  return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
 
function characterPhotoSources(c) {
  if (!/^https?:/.test(c.photo)) return [c.photo]; // foto local (Clark): usa direto
  const hiRes = c.photo.replace("/w300/", "/h632/");
  return [`assets/images/cast/${slugify(c.name)}.jpg`, hiRes];
}
 
function initialsOf(name) {
  return name.split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase();
}
 
function attachPhotoFallbacks(container) {
  container.querySelectorAll("img.char-photo").forEach(img => {
    const srcs = JSON.parse(img.dataset.srcs);
    let i = 0;
    img.addEventListener("error", () => {
      i++;
      if (i < srcs.length) {
        img.src = srcs[i];
      } else {
        const ph = document.createElement("div");
        ph.className = "char-initials";
        ph.textContent = initialsOf(img.dataset.name);
        img.replaceWith(ph);
      }
    });
  });
}
 
// Renderiza o dossiê de personagens com fotos do elenco
function renderCharacters(filterType = "hero") {
  const container = document.getElementById("charactersGrid");
  const filtered = charactersData.filter(c => c.type === filterType);
 
  container.innerHTML = filtered.map(c => `
    <div class="char-card">
      <div class="char-header">
        <div class="char-portrait-frame">
          <img src="${characterPhotoSources(c)[0]}" data-srcs='${JSON.stringify(characterPhotoSources(c))}' data-name="${c.name}" alt="${c.name} (${c.actor})" class="char-photo ${c.isBizarro ? 'bizarro-fx' : ''}" loading="lazy" decoding="async">
        </div>
        <div class="char-meta">
          <h4>${c.name}</h4>
          <span class="char-codename">${c.codename}</span>
          <span class="char-actor-name">Intérprete: ${c.actor}</span>
          <span class="char-tag ${c.type === 'hero' ? 'tag-hero' : 'tag-villain'}">
            ${c.type === 'hero' ? '★ LIGA DA JUSTIÇA' : '☣ NÍVEL 33.1 / AMEAÇA'}
          </span>
        </div>
      </div>
      <div class="char-power-row">
        <strong>Habilidades:</strong> ${c.powers}
      </div>
      <p class="char-bio">${c.bio}</p>
    </div>
  `).join("");
 
  attachPhotoFallbacks(container);
}
 
// Renderiza a linha do tempo cronológica com fotos históricas
function renderTimeline() {
  const container = document.getElementById("timelineContainer");
  container.innerHTML = timelineData.map(item => `
    <div class="timeline-item">
      <div class="timeline-node"></div>
      <span class="timeline-year-badge">${item.year}</span>
      <h4 class="timeline-title">${item.title}</h4>
      <div class="timeline-card-inner">
        <div class="timeline-photo-frame">
          <img src="${item.photo}" alt="${item.title}" class="timeline-photo" loading="lazy">
        </div>
        <div class="timeline-text-col">
          <div class="timeline-desc">${item.desc}</div>
        </div>
      </div>
    </div>
  `).join("");
}
 
// =============================================================================
// 11. GERENCIADOR DO LIVRO DE VISITAS (GUESTBOOK) COM LOCALSTORAGE
// =============================================================================
function initGuestbook() {
  const form = document.getElementById("guestbookForm");
  const btnReset = document.getElementById("btnResetGb");
  const entriesContainer = document.getElementById("guestbookEntries");
 
  let entries = JSON.parse(localStorage.getItem("smallville_guestbook_entries"));
  if (!entries || entries.length === 0) {
    entries = initialGuestbookEntries;
    localStorage.setItem("smallville_guestbook_entries", JSON.stringify(entries));
  }
 
  function renderEntries() {
    entriesContainer.innerHTML = entries.map(e => `
      <div class="gb-entry-card">
        <div class="gb-entry-header">
          <span class="gb-author">${escapeHtml(e.author)}</span>
          <span class="gb-location">📍 ${escapeHtml(e.location)}</span>
          <span class="gb-date">${escapeHtml(e.date)}</span>
        </div>
        <p class="gb-text">"${escapeHtml(e.message)}"</p>
      </div>
    `).join("");
  }
 
  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
 
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const author = document.getElementById("gbAuthor").value.trim();
    const location = document.getElementById("gbLocation").value.trim();
    const message = document.getElementById("gbMessage").value.trim();
 
    if (!author || !message) return;
 
    const today = new Date();
    const dateFormatted = `${String(today.getDate()).padStart(2, "0")}/${String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`;
 
    const newEntry = { author, location: location || "Terra", date: dateFormatted, message };
    entries.unshift(newEntry);
    localStorage.setItem("smallville_guestbook_entries", JSON.stringify(entries));
 
    form.reset();
    renderEntries();
 
    alert("★ Mensagem recebida! Sua assinatura foi gravada nos arquivos do portal!");
  });
 
  btnReset.addEventListener("click", () => form.reset());
  renderEntries();
}
 
// =============================================================================
// 12. CONTADOR DE VISITAS & MODO KRYPTONITA VERMELHA
// =============================================================================
function initVisitorCounter() {
  const counterElement = document.getElementById("visitCounter");
  let visits = Number(localStorage.getItem("smallville_visits_count")) || 98540;
  visits++;
  localStorage.setItem("smallville_visits_count", visits);
 
  const formattedStr = String(visits).padStart(6, "0");
  counterElement.innerHTML = formattedStr.split("").map(d => `<span class="digit">${d}</span>`).join("");
}
 
function initRedKryptoniteMode() {
  const btnRedK = document.getElementById("btnRedK");
  const redKText = document.getElementById("redKText");
 
  btnRedK.addEventListener("click", () => {
    document.body.classList.toggle("red-kryptonite-mode");
    const isRed = document.body.classList.contains("red-kryptonite-mode");
 
    if (isRed) {
      redKText.textContent = "Desativar Kryptonita Vermelha!";
      alert("ALERTA: Modo Red Chad foi Ativado!");
    } else {
      redKText.textContent = "Ativar Kryptonita Vermelha!";
      alert("O efeito Red Chad foi Desativado!");
    }
  });
}
 
function initDateDisplay() {
  const dateElement = document.getElementById("currentDate");
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  if (dateElement) {
    dateElement.textContent = `${day}/${month}/${year}`;
  }
}
 
// =============================================================================
// 13. INICIALIZAÇÃO GERAL DO APLICATIVO
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Inicializar Player Winamp e a música do Clark
  new WinampRealPlayer();
  initClarkSong();
 
  // 2. Partículas flutuantes de meteoros
  initMeteorParticles();
 
  // 3. Guia das 7 Kryptonitas
  renderKryptonStones();
 
  // 5. Temporadas: Botões e Render inicial
  const seasonBtns = document.querySelectorAll(".season-btn");
  seasonBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      seasonBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderSeason(btn.getAttribute("data-season"));
    });
  });
  renderSeason(1);
 
  // 6. Personagens: Abas de Heróis vs. Vilões com fotos reais
  const tabHeroes = document.getElementById("tabHeroes");
  const tabVillains = document.getElementById("tabVillains");
 
  tabHeroes.addEventListener("click", () => {
    tabHeroes.classList.add("active");
    tabVillains.classList.remove("active");
    renderCharacters("hero");
  });
 
  tabVillains.addEventListener("click", () => {
    tabVillains.classList.add("active");
    tabHeroes.classList.remove("active");
    renderCharacters("villain");
  });
  renderCharacters("hero");
 
  // 7. Linha do Tempo Cronológica com Fotos
  renderTimeline();
 
  // 8. Livro de Visitas, Contador e Kryptonita Vermelha
  initGuestbook();
  initVisitorCounter();
  initRedKryptoniteMode();
  initDateDisplay();
 
  // 9. Navegação suave entre abas do menu
  const navLinks = document.querySelectorAll(".nav-tab");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});