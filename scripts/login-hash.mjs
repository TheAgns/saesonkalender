// Brug: npm run login-hash -- brugernavn kodeord
// Skriver den nye hash direkte ind i src/lib/auth.ts
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

const [username, password] = process.argv.slice(2);
if (!username || !password) {
  console.error("Brug: npm run login-hash -- brugernavn kodeord");
  process.exit(1);
}
const hash = createHash("sha256").update(`${username.trim().toLowerCase()}:${password}`).digest("hex");
const file = new URL("../src/lib/auth.ts", import.meta.url);
writeFileSync(file, readFileSync(file, "utf8").replace(/LOGIN_HASH = "[^"]*"/, `LOGIN_HASH = "${hash}"`));
console.log(`Login opdateret for brugernavn "${username.trim().toLowerCase()}".`);
