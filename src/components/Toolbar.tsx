"use client";

import { useSyncExternalStore } from "react";

function subscribeFullscreen(cb: () => void) {
  document.addEventListener("fullscreenchange", cb);
  return () => document.removeEventListener("fullscreenchange", cb);
}

export function FullscreenButton() {
  const isFullscreen = useSyncExternalStore(
    subscribeFullscreen,
    () => !!document.fullscreenElement,
    () => false,
  );

  function toggle() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  }

  return (
    <button type="button" className="btn" onClick={toggle}>
      {isFullscreen ? "↙️ Luk fuldskærm" : "⛶ Fuldskærm"}
    </button>
  );
}

export function Toolbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="toolbar">
      {children}
      <FullscreenButton />
    </div>
  );
}
