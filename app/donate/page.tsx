"use client";

import { GlassCheckoutCard } from "@/components/ui/glass-checkout-card-shadcnui";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useState } from "react";

const PRESET_AMOUNTS = [25, 50, 100, 250];

export default function DonatePage() {
  const [selected, setSelected] = useState<number>(50);
  const [custom, setCustom] = useState("");
  const [done, setDone] = useState(false);

  const amount = custom ? parseFloat(custom) || 0 : selected;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="border-b border-border/50 px-6 py-4 flex items-center gap-4">
        <a
          href="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </a>
        <span className="text-sm tracking-widest uppercase text-muted-foreground font-[family-name:var(--font-dm-mono)]">
          Locked Out of Care
        </span>
      </header>

      {/* Disclaimer banner */}
      <div className="bg-yellow-500/10 border-b border-yellow-500/30 px-6 py-3 text-center">
        <p className="text-xs text-yellow-400/90 leading-relaxed">
          <span className="font-semibold uppercase tracking-wider">Demo only.</span> This is not a real donation page. No payment is processed, no data is collected or saved, and no charge will occur. Enter any values to explore the interface.
        </p>
      </div>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-6 text-center max-w-sm"
            >
              <CheckCircle className="h-16 w-16 text-primary" />
              <div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)]">Thank you.</h2>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  Your ${amount.toFixed(2)} donation directly supports research
                  access and dissemination. Every dollar helps make the case for
                  federal MAT mandates in US correctional facilities.
                </p>
              </div>
              <button
                onClick={() => { setDone(false); setCustom(""); setSelected(50); }}
                className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
              >
                Make another donation
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-md flex flex-col gap-8"
            >
              {/* Pitch */}
              <div>
                <p className="text-xs tracking-widest uppercase text-primary mb-2 font-[family-name:var(--font-dm-mono)]">
                  One-Time Donation
                </p>
                <h1 className="text-4xl font-bold leading-tight font-[family-name:var(--font-playfair)]">
                  Fund the evidence.<br />Change the policy.
                </h1>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  This research will produce the first policy-ready comparative
                  study of MAT access in US and German correctional systems.
                  Your donation supports research access and direct dissemination
                  to policymakers.
                </p>
              </div>

              {/* Amount selector */}
              <div className="space-y-3">
                <p className="text-sm font-medium">Select an amount</p>
                <div className="grid grid-cols-4 gap-2">
                  {PRESET_AMOUNTS.map((a) => (
                    <button
                      key={a}
                      onClick={() => { setSelected(a); setCustom(""); }}
                      className={[
                        "h-11 rounded-lg border text-sm font-medium transition-all",
                        selected === a && !custom
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border/50 bg-card/30 text-muted-foreground hover:border-primary/50 hover:text-foreground",
                      ].join(" ")}
                    >
                      ${a}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">$</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Custom amount"
                    value={custom}
                    onChange={(e) => { setCustom(e.target.value); setSelected(0); }}
                    className="w-full h-11 rounded-lg border border-border/50 bg-card/30 pl-7 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Checkout card */}
              <GlassCheckoutCard
                amount={amount > 0 ? amount : 0}
                className="max-w-none w-full"
                onSuccess={() => setDone(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
