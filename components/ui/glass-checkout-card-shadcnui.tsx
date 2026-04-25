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
                  <svg viewBox="0 0 60 24" className="h-5 w-auto" aria-label="Google Pay">
                    {/* Google G icon */}
                    <path fill="#4285F4" d="M19.6 10.23h-7.4v2.54h4.25c-.42 2.48-2.58 3.77-4.25 3.77A4.63 4.63 0 0 1 7.5 12a4.63 4.63 0 0 1 4.7-4.54c1.12 0 2.13.39 2.93 1.03l1.85-1.85A7.27 7.27 0 0 0 12.2 5C8.26 5 5 8.13 5 12s3.26 7 7.2 7c4.16 0 6.91-2.93 6.91-7.06 0-.58-.07-1.13-.19-1.63-.08.01-.22-.08-.32-.08z"/>
                    <path fill="#34A853" d="M12.2 19c2.12 0 3.91-.7 5.21-1.9l-2.54-1.97c-.7.47-1.61.77-2.67.77a4.36 4.36 0 0 1-4.12-3H5.77v2.03A7.21 7.21 0 0 0 12.2 19z"/>
                    <path fill="#FBBC05" d="M8.08 12.9A4.37 4.37 0 0 1 7.88 12c0-.31.04-.62.1-.9V9.07H5.77A7.22 7.22 0 0 0 5 12c0 1.16.28 2.26.77 3.23L8.08 12.9z"/>
                    <path fill="#EA4335" d="M12.2 7.46c1.19 0 2.26.41 3.1 1.21l2.33-2.33A7.28 7.28 0 0 0 12.2 5a7.21 7.21 0 0 0-6.43 4.07l2.31 1.93a4.36 4.36 0 0 1 4.12-3.54z"/>
                    {/* Pay text */}
                    <text x="24" y="17" fontFamily="-apple-system,Arial,sans-serif" fontSize="11" fontWeight="500" fill="currentColor">Pay</text>
                  </svg>
                )}
                {method === "apple" && (
                  <svg viewBox="0 0 46 24" className="h-5 w-auto" aria-label="Apple Pay">
                    {/* Apple logo */}
                    <path fill="currentColor" d="M11.7 6.6c.6-.8 1-1.8.9-2.9-1 .1-2.1.6-2.8 1.5-.6.8-1.1 1.8-1 2.8 1.1.1 2.2-.5 2.9-1.4z"/>
                    <path fill="currentColor" d="M12.6 8c-1.6-.1-3 .9-3.7.9-.8 0-1.9-.8-3.2-.8-1.6 0-3.2 1-4 2.5-1.7 3-.5 7.4 1.2 9.8.8 1.2 1.8 2.5 3.1 2.5 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.7 0-2.3 1.9-3.4 2-3.5-.8-1.2-2-2.4-3.5-2.5z"/>
                    {/* Pay text */}
                    <text x="20" y="17" fontFamily="-apple-system,Arial,sans-serif" fontSize="11" fontWeight="500" fill="currentColor">Pay</text>
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
