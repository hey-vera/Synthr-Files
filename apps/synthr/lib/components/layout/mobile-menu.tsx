"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center rounded-lg border border-[#262626] bg-[#171717] p-2 text-[#F5F5F5] hover:bg-[#262626] transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 border-b border-[#262626] bg-[#0A0A0A]/95 backdrop-blur-md p-4 shadow-xl">
          <nav className="flex flex-col gap-2">
            <Link
              href="/tools/"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-[#A3A3A3] hover:bg-[#171717] hover:text-[#F5F5F5] transition-colors"
            >
              Directory
            </Link>
            <Link
              href="/newsletter/"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-[#A3A3A3] hover:bg-[#171717] hover:text-[#F5F5F5] transition-colors"
            >
              Newsletter
            </Link>
            <Link
              href="/submit/"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-[#A3A3A3] hover:bg-[#171717] hover:text-[#F5F5F5] transition-colors"
            >
              Submit a Tool
            </Link>
            <Link
              href="/toolkit/"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-[#A3A3A3] hover:bg-[#171717] hover:text-[#F5F5F5] transition-colors"
            >
              Toolkit
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
