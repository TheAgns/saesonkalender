"use client";

import { useState, useSyncExternalStore, type FormEvent, type ReactNode } from "react";
import { LOGIN_HASH, hashLogin } from "@/lib/auth";
import { useStoredState } from "@/lib/storage";

const noop = () => () => {};

/** Viser en login-skærm, indtil man har logget ind én gang i denne browser */
export function LoginGate({ children }: { children: ReactNode }) {
  const mounted = useSyncExternalStore(noop, () => true, () => false);
  const [token, setToken] = useStoredState<string | null>("saesonkalender-login", null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  // Vis intet før browseren har tjekket login – så indholdet ikke blinker frem
  if (!mounted) return null;
  if (token === LOGIN_HASH) return <>{children}</>;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    const hash = await hashLogin(username, password);
    setBusy(false);
    if (hash === LOGIN_HASH) {
      setToken(hash);
    } else {
      setError(true);
      setPassword("");
    }
  }

  return (
    <main className="login">
      <form className="login-card" onSubmit={onSubmit}>
        <div className="login-emoji" aria-hidden>
          🗓️
        </div>
        <h1>Sæsonkalender</h1>
        <p className="login-intro">Log ind for at åbne kalenderen</p>

        <label className="login-field">
          <span>Brugernavn</span>
          <input
            type="text"
            autoComplete="username"
            autoCapitalize="none"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError(false);
            }}
            required
            autoFocus
          />
        </label>

        <label className="login-field">
          <span>Kodeord</span>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            required
          />
        </label>

        {error && (
          <p className="login-error" role="alert">
            Forkert brugernavn eller kodeord
          </p>
        )}

        <button type="submit" className="btn btn-primary btn-lg" disabled={busy}>
          🔓 Log ind
        </button>
      </form>
    </main>
  );
}
