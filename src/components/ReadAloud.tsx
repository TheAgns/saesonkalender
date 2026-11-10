"use client";

import { useEffect, useState } from "react";

/** Foretrækker naturlige/forbedrede stemmer (Edge "Natural", macOS "Premium"/"Enhanced") frem for standardstemmen */
function pickDanishVoice(voices: SpeechSynthesisVoice[]) {
  const danish = voices.filter((v) => v.lang.toLowerCase().startsWith("da"));
  const score = (v: SpeechSynthesisVoice) =>
    /natural|neural/i.test(v.name) ? 3 : /premium/i.test(v.name) ? 2 : /enhanced|forbedret/i.test(v.name) ? 1 : 0;
  return danish.sort((a, b) => score(b) - score(a))[0];
}

/** Læser teksten højt med browserens danske stemme */
export function ReadAloud({ text, className = "" }: { text: string; className?: string }) {
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    const synth = window.speechSynthesis;
    // Chrome indlæser stemmer asynkront – trigger indlæsning, så de er klar ved klik
    synth?.getVoices();
    return () => synth?.cancel();
  }, []);

  function toggle() {
    const synth = window.speechSynthesis;
    if (!synth) return;
    if (speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "da-DK";
    utterance.rate = 0.85;
    const voice = pickDanishVoice(synth.getVoices());
    if (voice) utterance.voice = voice;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    synth.speak(utterance);
    setSpeaking(true);
  }

  return (
    <button type="button" onClick={toggle} className={`btn btn-read ${className}`} aria-pressed={speaking}>
      <span aria-hidden>{speaking ? "⏹️" : "🔊"}</span>
      {speaking ? "Stop" : "Læs højt"}
    </button>
  );
}
