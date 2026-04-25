"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Calendar, CreditCard, Lock } from "lucide-react";
import { useState } from "react";

interface GlassCheckoutCardProps {
  amount?: number;
  className?: string;
  onSuccess?: () => void;
}

export function GlassCheckoutCard({
  amount = 85.8,
  className,
  onSuccess,
}: GlassCheckoutCardProps) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);

  function handlePay() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess?.();
    }, 1800);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("w-full max-w-[400px]", className)}
    >
      <Card className="group relative overflow-hidden rounded-2xl border-border/50 bg-card/30 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">
              Payment Details
            </h3>
            <p className="text-sm text-muted-foreground">
              Complete your donation securely
            </p>
          </div>

          {/* Payment Methods */}
          <div className="mb-6 grid grid-cols-3 gap-2">
            {["card", "googlepay", "apple"].map((method) => (
              <button
                key={method}
                onClick={() => setPaymentMethod(method)}
                className={cn(
                  "flex h-12 items-center justify-center rounded-lg border border-border/50 bg-background/50 transition-all hover:bg-background/80",
                  paymentMethod === method &&
                    "border-primary bg-primary/10 text-primary"
                )}
              >
                {method === "card" && <CreditCard className="h-5 w-5" />}
                {method === "googlepay" && (
                  <svg viewBox="0 0 50 20" className="h-5 w-auto" aria-label="Google Pay">
                    <text x="0" y="16" fontFamily="Arial,sans-serif" fontSize="14" fontWeight="bold">
                      <tspan fill="#4285F4">G</tspan>
                      <tspan fill="#EA4335">o</tspan>
                      <tspan fill="#FBBC05">o</tspan>
                      <tspan fill="#4285F4">g</tspan>
                      <tspan fill="#34A853">l</tspan>
                      <tspan fill="#EA4335">e</tspan>
                      <tspan fill="currentColor" fontSize="13"> Pay</tspan>
                    </text>
                  </svg>
                )}
                {method === "apple" && (
                  <svg viewBox="0 0 50 20" className="h-5 w-auto fill-current" aria-label="Apple Pay">
                    <text x="0" y="16" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontSize="14" fontWeight="500" fill="currentColor"> Pay</text>
                    <path d="M2 4.5C2.8 3.5 3.9 2.8 5 2.9c.1 1.2-.3 2.3-1 3.1-.7.8-1.7 1.4-2.8 1.3C1.1 6.1 1.2 5.4 2 4.5z" fill="currentColor"/>
                  </svg>
                )}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <div className="relative">
                <Input
                  id="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  className="border-border/50 bg-background/50 pl-10 backdrop-blur-sm focus:border-primary/50 focus:bg-background/80"
                />
                <CreditCard className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <div className="relative">
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    className="border-border/50 bg-background/50 pl-10 backdrop-blur-sm focus:border-primary/50 focus:bg-background/80"
                  />
                  <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <div className="relative">
                  <Input
                    id="cvc"
                    placeholder="123"
                    className="border-border/50 bg-background/50 pl-10 backdrop-blur-sm focus:border-primary/50 focus:bg-background/80"
                  />
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Cardholder Name</Label>
              <Input
                id="name"
                placeholder="Full name"
                className="border-border/50 bg-background/50 backdrop-blur-sm focus:border-primary/50 focus:bg-background/80"
              />
            </div>
          </div>

          <Button
            onClick={handlePay}
            disabled={loading}
            className="mt-6 w-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 disabled:opacity-60"
          >
            {loading ? "Processing…" : `Donate $${amount.toFixed(2)}`}
          </Button>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            <Lock className="inline-block h-3 w-3 mr-1" />
            Payments are secure and encrypted
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
