import type { Season } from "./types";

export const paaske: Season = {
  id: "paaske",
  name: "Påskeæggejagt",
  backLabel: "æggejagten",
  emoji: "🐣",
  tagline: "Find de gemte påskeæg i haven – hvert æg gemmer en påske-fact",
  layout: "eggHunt",
  frontStyle: "egg",
  countdownLabel: "til påskedag",
  coloring: "/malebilleder/paaskeaeg.svg",
  items: [
    {
      slug: "paaskeharen",
      label: "Æg 1",
      emoji: "🐰",
      title: "Påskeharen",
      fact: "I mange lande siger man, at påskeharen gemmer chokoladeæg i haven, som børnene skal finde påskedag.",
      position: { x: 12, y: 62 },
      more: {
        text: [
          "Påskeharen hopper rundt om natten og gemmer æg under buske, bag blomsterpotter og i det høje græs.",
          "Om morgenen tager børnene en kurv og går på æggejagt.",
        ],
        talk: ["Hvor ville du gemme et påskeæg?", "Har du været på æggejagt?"],
        tasks: ["Gem et papiræg i klassen, som en anden skal finde.", "Tegn påskeharen med sin kurv."],
      },
    },
    {
      slug: "gaekkebrev",
      label: "Æg 2",
      emoji: "✂️",
      title: "Gækkebrev",
      fact: "Et gækkebrev er et klippet brev med et lille vers. Man skriver ikke sit navn, men sætter prikker – én for hvert bogstav.",
      position: { x: 31, y: 78 },
      more: {
        text: [
          "Den, der får gækkebrevet, skal gætte, hvem det er fra. Gætter man forkert, skal man give et påskeæg!",
          "Gætter man rigtigt, er det afsenderen, der skal give et påskeæg.",
        ],
        talk: ["Hvem vil du sende et gækkebrev til?", "Hvor mange prikker skal der til dit navn?"],
        tasks: ["Fold et papir og klip et mønster – lav dit eget gækkebrev.", "Sæt én prik for hvert bogstav i dit navn."],
        links: [{ label: "Gækkebrev på Wikipedia (til læreren)", url: "https://da.wikipedia.org/wiki/G%C3%A6kkebrev" }],
      },
    },
    {
      slug: "vintergaek",
      label: "Æg 3",
      emoji: "🌱",
      title: "Vintergækken",
      fact: "Vintergækken er en lille hvid blomst og en af de allerførste blomster om foråret. Man lægger den tit i gækkebrevet.",
      position: { x: 52, y: 66 },
      more: {
        text: [
          "Vintergækken kan komme op gennem sneen, selvom det stadig er koldt.",
          "Den hænger med hovedet, som en lille hvid klokke.",
        ],
        talk: ["Hvilke blomster kommer først om foråret?", "Hvorfor tror du, den hedder vintergæk?"],
        tasks: ["Gå ud og se, om I kan finde vintergækker.", "Tegn en vintergæk med tre hvide kronblade."],
      },
    },
    {
      slug: "farvede-aeg",
      label: "Æg 4",
      emoji: "🥚",
      title: "Farvede æg",
      fact: "Til påske maler og farver mange æg. Man kan farve dem med løgskaller, rødbeder eller maling.",
      position: { x: 74, y: 80 },
      more: {
        text: [
          "Løgskaller giver brune og orange æg, rødbeder giver lyserøde æg.",
          "Man kan også puste æg ud, så kun skallen er tilbage, og hænge dem op på en påskegren.",
        ],
        talk: ["Hvilken farve vil du male dit æg?", "Hvad bor der inden i et æg?"],
        tasks: ["Mal et papiræg med prikker og striber.", "Sortér påskeæg efter farve."],
      },
    },
    {
      slug: "kyllinger",
      label: "Æg 5",
      emoji: "🐣",
      title: "Kyllinger",
      fact: "Kyllinger kommer ud af et æg. Det tager cirka 21 dage, fra hønen begynder at ruge, til kyllingen pikker sig ud.",
      position: { x: 88, y: 58 },
      more: {
        text: [
          "Hønen sidder på æggene og holder dem varme. Det kaldes at ruge.",
          "Kyllingen har en lille 'æggetand' på næbbet, som den bruger til at hakke hul i skallen.",
        ],
        talk: ["Hvilke andre dyr kommer ud af et æg?", "Hvordan lyder en kylling?"],
        tasks: ["Tæl 21 dage på kalenderen.", "Tegn en kylling, der kigger ud af ægget."],
      },
    },
    {
      slug: "paaskelilje",
      label: "Æg 6",
      emoji: "🌼",
      title: "Påskeliljen",
      fact: "Påskeliljen er gul og blomstrer tit omkring påske – derfor har den fået sit navn.",
      position: { x: 42, y: 88 },
      more: {
        text: [
          "Påskeliljer vokser op af et løg, som man lægger i jorden om efteråret.",
          "Gul er påskens farve – ligesom kyllinger, sol og æggeblommer.",
        ],
        talk: ["Hvad er ellers gult om foråret?", "Hvad har en blomst brug for for at vokse?"],
        tasks: ["Find fem gule ting i klassen.", "Tegn en påskelilje."],
      },
    },
    {
      slug: "hvorfor-paaske",
      label: "Æg 7",
      emoji: "🌅",
      title: "Hvorfor holder vi påske?",
      fact: "Påske er en kristen højtid. Man fejrer, at Jesus ifølge Bibelen stod op fra de døde påskemorgen.",
      position: { x: 63, y: 55 },
      more: {
        text: [
          "Påsken er også en fejring af foråret – alt begynder at gro og leve igen.",
          "Mange har fri fra skole i påskeferien og holder påskefrokost med familien.",
        ],
        talk: ["Hvad laver du i påskeferien?", "Hvad er tegn på, at det bliver forår?"],
        tasks: ["Tegn noget, der er nyt om foråret.", "Lav en påskepynt til klassen."],
      },
    },
    {
      slug: "paasken-flytter-sig",
      label: "Æg 8",
      emoji: "🌕",
      title: "Påsken flytter sig",
      fact: "Påsken ligger ikke på samme dato hvert år. Påskedag er altid søndagen efter første fuldmåne i foråret.",
      position: { x: 21, y: 90 },
      more: {
        text: [
          "Derfor kan påsken ligge i marts det ene år og i april det næste.",
          "Fuldmåne er, når månen er helt rund og lyser hele natten.",
        ],
        talk: ["Har du set en fuldmåne?", "Hvilke andre højtider har fast dato?"],
        tasks: ["Tegn månen som fuldmåne og som halvmåne.", "Find påskedag i kalenderen."],
      },
    },
    {
      slug: "honen",
      label: "Æg 9",
      emoji: "🐔",
      title: "Hønen",
      fact: "En høne kan lægge næsten ét æg hver dag. Æggene kan være hvide, brune og endda lyseblå!",
      position: { x: 81, y: 90 },
      more: {
        text: [
          "Hønens farve bestemmer tit, hvilken farve æggene får.",
          "Høns kan lide at skrabe i jorden efter orme og korn.",
        ],
        talk: ["Hvad kan man lave af æg?", "Hvordan lyder en høne?"],
        tasks: ["Hvis en høne lægger ét æg om dagen, hvor mange æg har den så lagt på en uge?", "Tegn en høne og dens æg."],
      },
    },
    {
      slug: "foraar",
      label: "Æg 10",
      emoji: "🌳",
      title: "Foråret er her",
      fact: "Om foråret bliver dagene længere og varmere, og træerne får nye grønne blade.",
      position: { x: 5, y: 84 },
      more: {
        text: [
          "Fuglene kommer tilbage fra de varme lande og begynder at bygge rede.",
          "Man kan se små knopper på træerne, som springer ud til blade.",
        ],
        talk: ["Hvad kan du lide ved foråret?", "Hvilke dyr ser man om foråret?"],
        tasks: ["Gå en tur og find tre tegn på forår.", "Tegn et træ med nye blade."],
      },
    },
  ],
};
