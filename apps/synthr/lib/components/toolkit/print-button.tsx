"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg bg-[#A855F7] px-6 py-3 text-sm font-medium text-white hover:bg-[#9333EA] transition-colors"
    >
      <Printer className="h-4 w-4" />
      Print / Save as PDF
    </button>
  );
}
