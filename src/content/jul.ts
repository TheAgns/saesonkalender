import type { Item, Season } from "./types";

type Door = Omit<Item, "slug" | "label" | "date">;

// Én låge pr. dag – rækkefølgen er 1.–24. december.
const doors: Door[] = [
  {
    emoji: "🕯️",
    title: "Adventskransen",
    fact: "I december tænder mange et lys i adventskransen hver søndag op til jul. Der er fire lys – ét for hver søndag.",
    more: {
      text: [
        "Advent betyder 'at komme' – vi venter på, at julen kommer. Den første søndag tænder man ét lys, den næste søndag to lys, og sådan fortsætter det, til alle fire lys brænder.",
        "Mange har også et kalenderlys med 24 streger. Hver dag brænder man lyset ned til den næste streg.",
      ],
      talk: [
        "Har I en adventskrans derhjemme?",
        "Hvor mange lys brænder der, når det er tredje søndag i advent?",
      ],
      tasks: [
        "Tegn en adventskrans med fire lys. Farv de lys, der skal være tændt i dag.",
        "Tæl sammen: Hvor mange dage er der til juleaften?",
      ],
      links: [{ label: "Advent på Wikipedia (til læreren)", url: "https://da.wikipedia.org/wiki/Advent" }],
    },
  },
  {
    emoji: "🥣",
    title: "Nissen",
    fact: "Ifølge de gamle historier bor nissen på loftet eller i laden. Får han risengrød med smør juleaften, er han i godt humør.",
    more: {
      text: [
        "Nissen er lille, har gråt tøj og en rød hue. I gamle dage troede man, at nissen passede på gården og dyrene.",
        "Hvis man glemte at give nissen sin grød, kunne han finde på at lave drillerier – fx gemme ting eller binde køernes haler sammen!",
      ],
      talk: ["Hvad tror du, nissen laver, når vi sover?", "Har du nogensinde set spor efter en nisse?"],
      tasks: [
        "Tegn nissens hjem på loftet.",
        "Find på et drilleri, nissen kunne lave i klassen.",
      ],
      links: [{ label: "Nisse på Wikipedia (til læreren)", url: "https://da.wikipedia.org/wiki/Nisse" }],
    },
  },
  {
    emoji: "🎄",
    title: "Juletræet",
    fact: "Juletræet er et grantræ. Det har nåle i stedet for blade og er grønt hele vinteren – også når de andre træer har tabt bladene.",
    more: {
      text: [
        "Grantræer vokser i skoven i mange år, før de er store nok til at blive juletræer.",
        "Før i tiden pyntede man juletræet med rigtige levende lys, flag og hjemmelavet pynt. I dag bruger de fleste elektriske lyskæder.",
      ],
      talk: ["Hvad pynter I juletræet med derhjemme?", "Hvorfor tror du, at granen kan holde sine nåle om vinteren?"],
      tasks: ["Tegn og pynt dit eget juletræ.", "Tæl hvor mange kugler, der er på klassens juletræ."],
    },
  },
  {
    emoji: "❤️",
    title: "Julehjerter",
    fact: "Flettede julehjerter er en dansk tradition. Eventyrforfatteren H.C. Andersen har lavet et af de ældste flettede julehjerter, man kender.",
    more: {
      text: [
        "Man fletter julehjerter af to stykker papir i forskellige farver – tit rød og hvid, ligesom det danske flag.",
        "Julehjerterne kan hænges på juletræet, og man kan putte små overraskelser i dem.",
      ],
      talk: ["Har du prøvet at flette et julehjerte?", "Hvilke farver ville du bruge?"],
      tasks: ["Flet et julehjerte med to farver papir.", "Tegn et mønster på et hjerte."],
    },
  },
  {
    emoji: "🍪",
    title: "Pebernødder",
    fact: "Pebernødder er små, runde småkager med julekrydderier som kanel og ingefær. Man kan bage rigtig mange på én plade!",
    more: {
      text: [
        "Dejen rulles til lange pølser, som skæres i små stykker. Så triller man stykkerne til kugler og bager dem i ovnen.",
        "Nogle leger pebernøddeleg, hvor man skal gætte, hvor mange pebernødder der er i en skål.",
      ],
      talk: ["Hvilke småkager bager I til jul?", "Hvordan dufter det, når der bages julekager?"],
      tasks: ["Gæt hvor mange pebernødder der er i skålen – og tæl dem bagefter.", "Del 10 pebernødder ligeligt mellem to."],
    },
  },
  {
    emoji: "❄️",
    title: "Snefnug",
    fact: "Alle snefnug har seks arme eller takker. Og man siger, at to snefnug aldrig er helt ens!",
    more: {
      text: [
        "Snefnug bliver lavet højt oppe i skyerne, når det er meget koldt. Små vanddråber fryser til is og vokser til smukke stjerner.",
        "Når sneen falder, kan man fange snefnug på en mørk vante og se dem med en lup.",
      ],
      talk: ["Hvad kan man lave, når der ligger sne?", "Hvorfor smelter sneen, når man tager den med ind?"],
      tasks: ["Klip et snefnug af et foldet stykke papir.", "Tæl armene på dit snefnug – er der seks?"],
    },
  },
  {
    emoji: "🦌",
    title: "Rensdyr",
    fact: "Rensdyr lever, hvor der er koldt, fx i Lapland og på Grønland. Både hanner og hunner har gevir – det har andre hjorte ikke.",
    more: {
      text: [
        "Rensdyr har tyk pels og brede klove, så de ikke synker ned i sneen.",
        "De spiser mos og laver, som de graver frem under sneen. I historierne trækker rensdyrene julemandens kane.",
      ],
      talk: ["Kan du huske navnet på rensdyret med den røde næse?", "Hvorfor tror du, rensdyr har så tyk en pels?"],
      tasks: ["Tegn et rensdyr med et stort gevir.", "Gå som et rensdyr gennem sneen!"],
    },
  },
  {
    emoji: "🎅",
    title: "Julemanden",
    fact: "I Danmark siger man, at julemanden bor i Grønland. Han kører i kane trukket af rensdyr og har travlt juleaften.",
    more: {
      text: [
        "Julemanden har rødt tøj, langt hvidt skæg og en stor sæk med gaver.",
        "Andre lande siger, at han bor i Finland eller på Nordpolen – men i Danmark siger vi Grønland.",
      ],
      talk: ["Hvad ville du ønske dig af julemanden?", "Hvordan kan julemanden nå rundt til alle børn?"],
      tasks: ["Skriv eller tegn et brev til julemanden.", "Find Grønland på et kort eller en globus."],
      links: [{ label: "Julemanden på Wikipedia (til læreren)", url: "https://da.wikipedia.org/wiki/Julemanden" }],
    },
  },
  {
    emoji: "💌",
    title: "Julemærket",
    fact: "Julemærket blev opfundet i Danmark i 1904 af en mand fra posten, der hed Einar Holbøll. Pengene hjælper børn, der har det svært.",
    more: {
      text: [
        "Et julemærke er et lille klistermærke, som man sætter på julekort og breve ved siden af frimærket.",
        "Der kommer et nyt julemærke hvert år, og mange samler på dem.",
      ],
      talk: ["Hvordan kan man hjælpe andre til jul?", "Hvad ville du tegne på et julemærke?"],
      tasks: ["Tegn dit eget julemærke i en lille firkant.", "Sammenlign to julemærker: Hvad er ens, og hvad er forskelligt?"],
    },
  },
  {
    emoji: "⭐",
    title: "Julestjernen",
    fact: "Mange sætter en stjerne i toppen af juletræet. Den minder om stjernen i juleevangeliet, som viste vej til stalden i Betlehem, hvor Jesus blev født.",
    more: {
      text: [
        "I juleevangeliet fulgte tre vise mænd en stor, lysende stjerne på himlen.",
        "Stjernen førte dem til en lille stald, hvor Jesus lå i en krybbe.",
      ],
      talk: ["Hvad sætter I i toppen af jeres juletræ?", "Hvornår kan man se stjerner på himlen?"],
      tasks: ["Klip en stjerne af gult papir.", "Hvor mange spidser har din stjerne?"],
    },
  },
  {
    emoji: "✂️",
    title: "Kravlenisser",
    fact: "Kravlenisser er nisser af papir, som man klipper ud og sætter op, så det ser ud, som om de kravler rundt på væggen, lampen og reolen.",
    more: {
      text: [
        "Kravlenisser er en dansk juletradition. Nisserne klatrer, gynger og hænger i de sjoveste stillinger.",
        "Man kan farvelægge dem selv, før man klipper dem ud.",
      ],
      talk: ["Hvor i klassen skal kravlenisserne bo?", "Hvad laver din kravlenisse?"],
      tasks: ["Farv og klip en kravlenisse ud.", "Find et godt sted at hænge den op."],
    },
  },
  {
    emoji: "🍚",
    title: "Risalamande",
    fact: "Juleaften spiser mange risalamande med kirsebærsauce. Der er gemt én hel mandel i skålen – den, der finder den, vinder mandelgaven!",
    more: {
      text: [
        "Risalamande laves af risengrød, flødeskum og hakkede mandler.",
        "Mandelgaven er tit en marcipangris. Nogle gemmer mandlen i munden længe, så de andre bliver ved med at lede!",
      ],
      talk: ["Hvad spiser I til dessert juleaften?", "Har du nogensinde fundet mandlen?"],
      tasks: ["Tegn den mandelgave, du gerne vil vinde.", "Leg 'find mandlen': Gem en ting i klassen, som de andre skal finde."],
    },
  },
  {
    emoji: "👑",
    title: "Luciadag",
    fact: "Den 13. december er det Luciadag. Børn går i optog i hvide kjoler med lys og synger Luciasangen for at bringe lys i mørket.",
    more: {
      text: [
        "Lucia går forrest med en krone af lys på hovedet. Bagefter følger de andre med lys i hænderne.",
        "Luciadag er midt i den mørke tid, og lysene skal minde os om, at lyset kommer tilbage.",
      ],
      talk: ["Har du set et Luciaoptog?", "Hvorfor tror du, man synger om lys, når det er mørkt?"],
      tasks: ["Lav en Luciakrone af papir.", "Syng Luciasangen sammen."],
    },
  },
  {
    emoji: "🥞",
    title: "Æbleskiver",
    fact: "Æbleskiver er runde, bløde kugler, som bages på en særlig pande med huller. Man spiser dem med syltetøj og flormelis.",
    more: {
      text: [
        "Før i tiden kom der tit et lille stykke æble i – derfor hedder de æbleskiver.",
        "Man vender æbleskiverne med en strikkepind eller en gaffel, så de bliver runde.",
      ],
      talk: ["Kan du lide æbleskiver?", "Hvad kan man ellers putte på æbleskiver?"],
      tasks: ["Tegn en æbleskivepande med 7 huller – og tegn en æbleskive i hvert hul.", "Hvis hver har 3 æbleskiver, hvor mange skal 4 børn så have?"],
    },
  },
  {
    emoji: "✉️",
    title: "Julekort",
    fact: "Før i tiden sendte næsten alle julekort med posten til familie og venner. I dag sender mange også julehilsner på telefonen.",
    more: {
      text: [
        "På et julekort er der tit en tegning af sne, nisser eller juletræer. Indeni skriver man 'Glædelig jul'.",
        "Det er dejligt at få post, som nogen har lavet i hånden.",
      ],
      talk: ["Hvem vil du sende et julekort til?", "Hvad skal der stå på et julekort?"],
      tasks: ["Lav et julekort til en, du holder af.", "Skriv 'GLÆDELIG JUL' – eller dit navn – på kortet."],
    },
  },
  {
    emoji: "🎲",
    title: "Pakkeleg",
    fact: "Til pakkeleg slår man med en terning. Slår man en sekser, må man tage en gave fra bunken. Når tiden løber ud, må man beholde de pakker, man har.",
    more: {
      text: [
        "I anden runde må man stjæle pakker fra hinanden, når man slår en sekser.",
        "Pakkerne er tit små og sjove – fx et viskelæder, en klementin eller en lille figur.",
      ],
      talk: ["Har du prøvet at lege pakkeleg?", "Hvad er den sjoveste pakke, du har fået?"],
      tasks: ["Slå med terningen: Hvor mange gange skal du slå, før du får en sekser?", "Tegn prikkerne på alle seks sider af en terning."],
    },
  },
  {
    emoji: "✨",
    title: "Julekugler",
    fact: "Julekugler af glas blev første gang lavet i Tyskland for over 150 år siden. I dag findes de i alle farver.",
    more: {
      text: [
        "Glaskugler bliver blæst, ligesom når man puster en ballon op – bare med varmt, blødt glas.",
        "Julekugler spejler lyset fra lyskæden, så juletræet glimter.",
      ],
      talk: ["Hvilken farve julekugler kan du bedst lide?", "Hvad kan man ellers hænge på juletræet?"],
      tasks: ["Tegn tre julekugler med hvert sit mønster.", "Sortér julepynt efter farve eller størrelse."],
    },
  },
  {
    emoji: "🧦",
    title: "Jul i andre lande",
    fact: "I England og USA hænger børn en strømpe op, som julemanden fylder med gaver. Mange åbner først gaverne om morgenen den 25. december.",
    more: {
      text: [
        "Jul bliver fejret på mange forskellige måder rundt om i verden.",
        "I Danmark holder vi jul om aftenen den 24. december, men i mange andre lande er det store julemåltid den 25.",
      ],
      talk: ["Kender du nogen, der holder jul på en anden måde?", "Hvordan siger man 'glædelig jul' på andre sprog?"],
      tasks: ["Tegn og pynt din egen julestrømpe.", "Lær at sige 'Merry Christmas' på engelsk."],
    },
  },
  {
    emoji: "🍽️",
    title: "Julemaden",
    fact: "Juleaften spiser mange danskere flæskesteg eller and med brune kartofler, rødkål og sovs.",
    more: {
      text: [
        "Brune kartofler er små kartofler, der bliver vendt i smeltet sukker og smør.",
        "Nogle familier spiser noget helt andet – fx fisk eller vegetarmad. Det vigtigste er at være sammen.",
      ],
      talk: ["Hvad er din yndlingsmad til jul?", "Hvem spiser du juleaftensmad sammen med?"],
      tasks: ["Tegn en tallerken med din yndlingsjulemad.", "Dæk bord: Hvor mange gafler skal der bruges til 5 personer?"],
    },
  },
  {
    emoji: "🎶",
    title: "Dans om juletræet",
    fact: "Juleaften danser mange rundt om juletræet, mens de holder hinanden i hånden og synger julesange som 'Højt fra træets grønne top'.",
    more: {
      text: [
        "Man danser i en stor ring rundt om træet. Nogle gange går man også rundt i hele huset – en 'kædedans'.",
        "Der findes mange julesange. Nogle er glade og hurtige, andre er stille og rolige.",
      ],
      talk: ["Hvilken julesang kan du bedst lide?", "Danser I om juletræet derhjemme?"],
      tasks: ["Dans rundt om klassens juletræ – eller en stol – og syng en julesang.", "Klap rytmen til en julesang."],
    },
  },
  {
    emoji: "🌙",
    title: "Årets korteste dag",
    fact: "Omkring den 21. december er årets korteste dag og længste nat. Derefter bliver dagene lidt længere igen – lyset kommer tilbage!",
    more: {
      text: [
        "Det hedder vintersolhverv. Solen står op sent og går tidligt ned.",
        "Fra nu af får vi lidt mere lys hver eneste dag, helt frem til sommer.",
      ],
      talk: ["Er det mørkt, når du går i skole om morgenen?", "Hvad kan man lave, når det er mørkt udenfor?"],
      tasks: ["Tegn en dag og en nat – hvad er forskellen?", "Kig ud af vinduet: Er det lyst eller mørkt lige nu?"],
    },
  },
  {
    emoji: "🌌",
    title: "Mørketid i Grønland",
    fact: "I det nordlige Grønland kommer solen slet ikke op i december. Det kaldes mørketid – så lyser nordlyset på himlen.",
    more: {
      text: [
        "Nordlys er grønne, lilla og røde lysbånd, der danser på himlen.",
        "Om sommeren er det omvendt i Grønland – så går solen slet ikke ned om natten.",
      ],
      talk: ["Hvordan ville det være, hvis solen aldrig kom op?", "Hvilke farver har nordlyset?"],
      tasks: ["Tegn nordlys med farvekridt på sort papir.", "Find Grønland og Danmark på et kort."],
    },
  },
  {
    emoji: "🎁",
    title: "Lillejuleaften",
    fact: "Den 23. december hedder lillejuleaften. Mange familier pynter juletræet og pakker de sidste gaver ind.",
    more: {
      text: [
        "Nu er der kun én nat til juleaften!",
        "Mange hygger sig med æbleskiver, julefilm og at lave de sidste forberedelser.",
      ],
      talk: ["Hvad laver I lillejuleaften?", "Hvordan har du det, når der kun er én dag til jul?"],
      tasks: ["Pak en ting ind i papir – som en rigtig julegave.", "Tegn gaven, du selv vil give til nogen."],
    },
  },
  {
    emoji: "🎉",
    title: "Juleaften",
    fact: "I dag er det juleaften! I Danmark fejrer vi jul om aftenen den 24. december. Glædelig jul!",
    more: {
      text: [
        "Juleaften spiser man god mad, danser om juletræet og åbner gaver.",
        "Tak fordi I har åbnet julekalenderen hver dag. Glædelig jul og godt nytår!",
      ],
      talk: ["Hvad glæder du dig mest til juleaften?", "Hvilken låge i kalenderen var den bedste?"],
      tasks: ["Tegn din juleaften.", "Sig 'glædelig jul' til alle i klassen."],
    },
  },
];

// Sjove klip pr. låge (1.–24. december) – mindst 5 minutter i alt pr. låge.
// Vises på "Læs mere"-siden.
const videos: string[][] = [
  ["https://www.youtube.com/watch?v=Gs8STbKTHQI"],
  ["https://www.youtube.com/watch?v=P68v2fO8HbA", "https://www.youtube.com/watch?v=H4koFtXN26U"],
  ["https://www.youtube.com/watch?v=n0V4HRZ-x50", "https://www.youtube.com/watch?v=d3WjZgKcQuo"],
  ["https://www.youtube.com/watch?v=wnYGtLxXRcc"],
  ["https://www.youtube.com/watch?v=fQ3aJAECMLU", "https://www.youtube.com/watch?v=snMcuVNByeA"],
  ["https://www.youtube.com/watch?v=p_qyjgIcDFs", "https://www.youtube.com/watch?v=ebcCgSRobc4", "https://www.youtube.com/watch?v=GlZ64MwCWLo"],
  ["https://www.youtube.com/watch?v=23jHfpeBVc8", "https://www.youtube.com/watch?v=KS4tqnNhuuw", "https://www.youtube.com/watch?v=dwJAOvx5Z-M"],
  ["https://www.youtube.com/watch?v=RnQ5TTJE7n0", "https://www.youtube.com/watch?v=cLWkB18v0LA"],
  ["https://www.youtube.com/watch?v=DFZ2HZrtK7Q", "https://www.youtube.com/watch?v=i_n5TDFznDs", "https://www.youtube.com/watch?v=uV2J1uTZrIE", "https://www.youtube.com/watch?v=4yNgIlSitAA"],
  ["https://www.youtube.com/watch?v=m1HTvddSJNA", "https://www.youtube.com/watch?v=aGUUIdIDyR0", "https://www.youtube.com/watch?v=JaWEW7a0BWc", "https://www.youtube.com/watch?v=k670z073bpc"],
  ["https://www.youtube.com/watch?v=uKJF49DFVLE"],
  ["https://www.youtube.com/watch?v=r0ooMb1f4vI", "https://www.youtube.com/watch?v=Z1IsXoZ1omY", "https://www.youtube.com/watch?v=MAJ0zgJd4p0"],
  ["https://www.youtube.com/watch?v=Lx0P5LFg9zM", "https://www.youtube.com/watch?v=Jey6cAHlRXU", "https://www.youtube.com/watch?v=NcdKPW_pBIk", "https://www.youtube.com/watch?v=M82PKccJBog"],
  ["https://www.youtube.com/watch?v=RBogaxNXkZY", "https://www.youtube.com/watch?v=5S2W8gZwVMc"],
  ["https://www.youtube.com/watch?v=0r5XUZKJuos", "https://www.youtube.com/watch?v=-ZEax8a_o6M", "https://www.youtube.com/watch?v=t7NFJjYWpwo", "https://www.youtube.com/watch?v=JubqU0Ab99o"],
  ["https://www.youtube.com/watch?v=Fs0s6ER3-YM", "https://www.youtube.com/watch?v=n6OHkuC9vsE"],
  ["https://www.youtube.com/watch?v=FILyrwqZSic"],
  ["https://www.youtube.com/watch?v=eDkIrR-eqU8", "https://www.youtube.com/watch?v=iLSB3Nx2IKE"],
  ["https://www.youtube.com/watch?v=eD82yY1wUDo", "https://www.youtube.com/watch?v=3z49eYh6yaE", "https://www.youtube.com/watch?v=_nR90W5lL7U", "https://www.youtube.com/watch?v=NGT4T7ytgO8"],
  ["https://www.youtube.com/watch?v=XxPN0E25vpM"],
  ["https://www.youtube.com/watch?v=rJrjGYmPLgw", "https://www.youtube.com/watch?v=FWakBPc0_Ag"],
  ["https://www.youtube.com/watch?v=7v51B8-s_2o", "https://www.youtube.com/watch?v=LjgkUe3yXIU", "https://www.youtube.com/watch?v=6fMbTmbTuZ8"],
  ["https://www.youtube.com/watch?v=NvVNt-Aq6ew", "https://www.youtube.com/watch?v=qJ9xuTPj_Cg"],
  ["https://www.youtube.com/watch?v=CJRWXkAxt9k", "https://www.youtube.com/watch?v=WFYT30D9MfM"],
];

export const jul: Season = {
  id: "jul",
  name: "Julekalender",
  backLabel: "julekalenderen",
  emoji: "🎄",
  tagline: "24 låger med jule-facts – én for hver dag i december",
  layout: "cards",
  frontStyle: "door",
  shuffle: true,
  countdownLabel: "til juleaften",
  items: doors.map((door, i) => ({
    ...door,
    more: { ...door.more, videos: videos[i] },
    slug: String(i + 1),
    label: `${i + 1}. december`,
    date: `12-${String(i + 1).padStart(2, "0")}`,
  })),
};
