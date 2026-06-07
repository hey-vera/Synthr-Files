"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/lib/components/ui/button";
import { Mail, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    // For now, store in localStorage and show success
    // In production, replace this with a POST to your newsletter provider
    try {
      const subscribers = JSON.parse(localStorage.getItem("synthr_subscribers") || "[]");
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem("synthr_subscribers", JSON.stringify(subscribers));
      }
      setStatus("success");
      setMessage("You have been subscribed! Check your inbox for confirmation.");
      setEmail("");

      // Optionally redirect to Beehiiv with email pre-filled
      // window.open(`${BEEHIIV_SIGNUP_URL}?email=${encodeURIComponent(email)}`, "_blank");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rounded-lg border border-[#262626] bg-[#0A0A0A] px-4 py-3 focus-within:border-[#A855F7] focus-within:ring-1 focus-within:ring-[#A855F7]">
        <Mail className="h-5 w-5 text-[#737373]" />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          className="flex-1 bg-transparent text-sm text-[#F5F5F5] placeholder:text-[#737373] focus:outline-none"
          required
        />
      </div>
      <Button type="submit" variant="accent" className="w-full">
        Subscribe Now
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <p className="text-center text-xs text-[#737373]">
        No spam. Unsubscribe anytime.
      </p>
      {status === "success" && (
        <div className="flex items-center gap-2 rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-3 text-sm text-green-400">
          <CheckCircle className="h-4 w-4" />
          {message}
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
          <AlertCircle className="h-4 w-4" />
          {message}
        </div>
      )}
    </form>
  );
}
