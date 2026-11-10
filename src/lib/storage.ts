"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

const EVENT = "saesonkalender-storage";

function read(key: string) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(EVENT, callback);
  };
}

/**
 * State der huskes i browseren (localStorage). `fallback` skal være en
 * konstant, så den ikke skifter mellem renders.
 */
export function useStoredState<T>(key: string, fallback: T) {
  const raw = useSyncExternalStore(
    subscribe,
    () => read(key),
    () => null,
  );

  const value = useMemo<T>(() => {
    if (raw == null) return fallback;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return fallback;
    }
  }, [raw, fallback]);

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      const prevRaw = read(key);
      let prev = fallback;
      try {
        if (prevRaw != null) prev = JSON.parse(prevRaw) as T;
      } catch {}
      const resolved =
        typeof next === "function" ? (next as (p: T) => T)(prev) : next;
      try {
        window.localStorage.setItem(key, JSON.stringify(resolved));
      } catch {}
      window.dispatchEvent(new Event(EVENT));
    },
    [key, fallback],
  );

  return [value, setValue] as const;
}

const noop = () => () => {};

/** Dagens dato – `null` under server-rendering, så der ikke opstår hydration-fejl */
export function useToday() {
  const key = useSyncExternalStore(
    noop,
    () => new Date().toDateString(),
    () => null,
  );
  return useMemo(() => (key ? new Date(key) : null), [key]);
}
