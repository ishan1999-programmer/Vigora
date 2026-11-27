"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "vigora-exhibition-popup-shown";
const VIEWED_KEY = "vigora-exhibition-popup-viewed";

export function ExhibitionPopup() {
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [viewed, setViewed] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const hasShown = sessionStorage.getItem(SESSION_KEY) === "true";
    const hasViewed = sessionStorage.getItem(VIEWED_KEY) === "true";
    setViewed(hasViewed);
    setShowButton(hasShown);

    if (hasShown) return;
    const timer = window.setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "true");
      setShowButton(true);
      setOpen(true);
    }, 2000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const reopen = () => {
    sessionStorage.setItem(SESSION_KEY, "true");
    sessionStorage.setItem(VIEWED_KEY, "true");
    setViewed(true);
    setShowButton(true);
    setOpen(true);
  };

  return (
    <>
      {showButton && (
        <button
          className="exhibition-trigger"
          type="button"
          onClick={reopen}
          aria-label="Open India ITME 2026 exhibition announcement"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3.5" y="5" width="17" height="16" rx="2" />
            <path d="M7.5 3v4M16.5 3v4M3.5 9.5h17M8 13h3m2 0h3M8 16.5h3" />
          </svg>
          <span>Exhibition</span>
          {!viewed && <i className="exhibition-dot" aria-label="New announcement" />}
        </button>
      )}
      {open && (
        <div
          className="exhibition-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <section
            className="exhibition-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="India ITME 2026 exhibition announcement"
          >
            <button
              ref={closeRef}
              className="exhibition-close"
              type="button"
              aria-label="Close exhibition announcement"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <Image
              src="/images/india-itme-2026-poster.jpeg"
              alt="Invitation to visit Vigora Machine Works at India ITME 2026, Hall 7, Stall H7L14, 4–9 December 2026 at India Exposition Mart Ltd, Greater Noida, Uttar Pradesh"
              width={1254}
              height={1254}
              priority
              sizes="(max-width: 700px) calc(100vw - 32px), min(80vh, 680px)"
            />
          </section>
        </div>
      )}
    </>
  );
}
