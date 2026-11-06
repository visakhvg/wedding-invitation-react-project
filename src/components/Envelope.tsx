import { useState } from "react";

type Props = {
  names: string;
  tagline: string;
  date: string;
  envelopeTagline: string;
  onOpen: () => void;
  onStart: () => void
};

export function Envelope({
  names,
  date,
  envelopeTagline,
  onOpen,
  onStart
}: Props) {
  const [opening, setOpening] = useState(false);

  function open() {
    if (opening) return;
    setOpening(true);
    onStart(); // Start music immediately when animation begins
    window.setTimeout(onOpen, 2200);
  }

  return (
    <div
      className={`gate ${opening ? "gate-opening" : ""}`}
      role="dialog"
      aria-label="Wedding invitation envelope"
    >
      <div className="gate-ornament ornament-one">✦</div>
      <div className="gate-ornament ornament-two">✧</div>
      <div className="envelope">
        <div className="envelope-back" />
        <div className="envelope-card">
          <p className="eyebrow">{envelopeTagline}</p>
          <p className="gate-quote">
            “Together with our loved ones, we invite you to celebrate.”
          </p>
          <h1>{names}</h1>
          <p className="date-label">{date}</p>
        </div>
        <div className="envelope-front" />
        <div className="envelope-flap" />
        <button
          className="wax-seal"
          onClick={open}
          aria-label="Open invitation"
          disabled={opening}
        >
          V ♥ A
        </button>
      </div>
      <p className="gate-hint">
        {opening
          ? "With love, opening your invitation…"
          : "Tap the seal to open"}
      </p>
    </div>
  );
}
