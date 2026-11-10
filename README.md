# Sæsonkalender – 0. klasse

Et website til undervisning i 0. klasse. Der er en sæson for hver del af skoleåret:

| Sæson | Side | Hvad sker der |
| --- | --- | --- |
| 🎃 Halloween | `/halloween` | Græskar der vender |
| 🎄 Julekalender | `/jul` | 24 låger (blandet rækkefølge), valgfri "lås til dato" |
| 🎭 Fastelavn | `/fastelavn` | Slå 3 gange på en tønde for at åbne den |
| 🐣 Påske | `/paaske` | Æggejagt i en have |
| ☀️ Sommer | `/sommer` | Stor nedtælling + sol-kort |

Når en låge åbnes, vender den og viser et stort kort med fact og **Læs højt**.
**Læs mere** fører til en side (fx `/jul/5`) med tekst, snakkespørgsmål, opgaver,
links, video og malebillede, der kan printes.

## Kom i gang

```bash
npm install
npm run dev     # http://localhost:3000
```

## Ret indhold

Alt indhold ligger i `src/content/` – én fil pr. sæson (`jul.ts`, `paaske.ts` osv.).
Hver låge ser sådan ud:

```ts
{
  emoji: "🍪",
  title: "Pebernødder",
  fact: "Kort tekst på bagsiden af lågen.",
  image: "/billeder/pebernodder.jpg", // valgfri – læg filen i public/billeder/
  more: {
    text: ["Afsnit til Læs mere-siden"],
    talk: ["Snakkespørgsmål"],
    tasks: ["Opgave 1", "Opgave 2"],
    links: [{ label: "Link-tekst", url: "https://..." }],
    video: "https://www.youtube.com/watch?v=...", // vises indlejret
    coloring: "/malebilleder/mit-billede.svg",     // ellers bruges sæsonens standard
  },
}
```

- **Påskeæg** kan flyttes med `position: { x, y }` (procent af haven).
- **Sommerferiens dato** sættes i `src/lib/dates.ts` (`SOMMERFERIE_START`). Ellers bruges sidste lørdag i juni.
- Påske og fastelavn udregnes automatisk hvert år.
- Hvilke låger der er åbnet, huskes i browseren. Tryk **Luk alle** for at starte forfra.

## Deploy til Vercel (gratis)

1. Læg projektet på GitHub.
2. Gå til [vercel.com/new](https://vercel.com/new), vælg repoet og tryk **Deploy** – ingen indstillinger nødvendige.
3. Hver gang du pusher til `main`, opdateres siden automatisk.
