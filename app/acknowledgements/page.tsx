"use client";

import { ArrowLeft } from "lucide-react";

const PEOPLE = [
  { name: "Antoin Quarles" },
  { name: "Haywood Miles" },
  { name: "Reverend Simons" },
  { name: "Mark Lougney" },
  { name: "Dr. Sinclair" },
  { name: "Shannon Sisney" },
];

export default function AcknowledgementsPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#0a0a0a", color: "#f0ead8" }}
    >
      {/* Header */}
      <header
        className="px-8 py-5 flex items-center gap-4"
        style={{ borderBottom: "1px solid rgba(240,234,216,0.08)" }}
      >
        <a
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-60"
          style={{ color: "#9a8f7e", fontSize: "0.875rem" }}
        >
          <ArrowLeft className="h-4 w-4" />
        </a>
        <span
          style={{
            fontFamily: "var(--font-dm-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#9a8f7e",
          }}
        >
          Locked Out of Care
        </span>
      </header>

      <main className="flex-1 flex flex-col items-center px-6 py-20 max-w-4xl mx-auto w-full">

        {/* Label */}
        <p
          style={{
            fontFamily: "var(--font-dm-mono)",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c8a96e",
            marginBottom: "2rem",
          }}
        >
          Acknowledgements
        </p>

        {/* Documentary callout */}
        <p
          style={{
            fontFamily: "var(--font-dm-mono)",
            fontSize: "0.72rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(240,234,216,0.4)",
            marginBottom: "1.25rem",
            textAlign: "center",
          }}
        >
          Inspired by the Oscar-Nominated Documentary
        </p>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            textAlign: "center",
            marginBottom: "3rem",
            color: "#f0ead8",
          }}
        >
          The Alabama Solution
        </h1>

        {/* Quote */}
        <blockquote
          style={{
            borderLeft: "2px solid #c8a96e",
            paddingLeft: "1.75rem",
            marginBottom: "5rem",
            maxWidth: "640px",
            width: "100%",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              lineHeight: 1.75,
              color: "rgba(240,234,216,0.85)",
            }}
          >
            To the brave prison justice advocates and organizers that welcomed
            me into their communities, showing me what it takes to dream in a
            nightmare.
          </p>
        </blockquote>

        {/* People grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2.5rem",
            width: "100%",
            marginBottom: "5rem",
          }}
        >
          {PEOPLE.map((person) => (
            <div
              key={person.name}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {/* Image placeholder */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3 / 4",
                  border: "1px dashed rgba(200,169,110,0.35)",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {/* Placeholder icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(200,169,110,0.3)"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(200,169,110,0.35)",
                  }}
                >
                  Add photo
                </span>
              </div>

              {/* Name */}
              <p
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  color: "#f0ead8",
                  textAlign: "center",
                }}
              >
                {person.name}
              </p>
            </div>
          ))}
        </div>

        {/* Sign-off */}
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            color: "#c8a96e",
            textAlign: "center",
          }}
        >
          Thank you.
        </p>
      </main>

      {/* Footer */}
      <footer
        className="px-8 py-6 text-center"
        style={{ borderTop: "1px solid rgba(240,234,216,0.08)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-mono)",
            fontSize: "0.7rem",
            color: "rgba(240,234,216,0.3)",
            letterSpacing: "0.08em",
          }}
        >
          Locked Out of Care &copy; 2026
        </p>
      </footer>
    </div>
  );
}
