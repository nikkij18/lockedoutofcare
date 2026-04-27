"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const PEOPLE = [
  "Antoin Quarles",
  "Haywood Miles",
  "Reverend Simons",
  "Mark Lougney",
  "Dr. Sinclair",
  "Shannon Sisney",
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

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 max-w-2xl mx-auto w-full text-center">

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
            marginBottom: "1rem",
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
            marginBottom: "3.5rem",
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
            marginBottom: "4rem",
            textAlign: "left",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              lineHeight: 1.8,
              color: "rgba(240,234,216,0.85)",
            }}
          >
            To the brave prison justice advocates and organizers that welcomed
            me into their communities, showing me what it takes to dream in a
            nightmare.
          </p>
        </blockquote>

        {/* Photos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            width: "100%",
            marginBottom: "3.5rem",
          }}
        >
          <div style={{ borderRadius: "6px", overflow: "hidden", aspectRatio: "4/3" }}>
            <Image
              src="/Acknowledgements/IMG_1514.jpg"
              alt="Community gathering"
              width={600}
              height={450}
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.9)" }}
            />
          </div>
          <div style={{ borderRadius: "6px", overflow: "hidden", aspectRatio: "4/3" }}>
            <Image
              src="/Acknowledgements/IMG_5784.JPEG"
              alt="Community gathering"
              width={600}
              height={450}
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.9)" }}
            />
          </div>
        </div>

        {/* Names */}
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1rem",
            lineHeight: 2,
            color: "rgba(240,234,216,0.6)",
            marginBottom: "3rem",
          }}
        >
          {PEOPLE.join(", ")}
        </p>

        {/* Sign-off */}
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            color: "#c8a96e",
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
