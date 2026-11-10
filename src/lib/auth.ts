/**
 * Simpel login-skærm til GitHub Pages. Det er IKKE rigtig sikkerhed – siden er
 * statisk, så alt indhold kan stadig findes af en teknisk person. Den holder
 * bare tilfældige besøgende ude.
 *
 * LOGIN_HASH er SHA-256 af "brugernavn:kodeord". Lav en ny med:
 *   npm run login-hash -- brugernavn kodeord
 */
export const LOGIN_HASH = "a201b77512c71eb55fbe226435b50ff791acfe80b3c40de27eb0c898f4adf224";

export async function hashLogin(username: string, password: string) {
  const data = new TextEncoder().encode(`${username.trim().toLowerCase()}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}
