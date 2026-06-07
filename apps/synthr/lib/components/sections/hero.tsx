import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#A855F7]/10 blur-[100px]" />
      </div>
      
      <div className="relative flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border border-[#A855F7]/20 bg-[#A855F7]/10 px-3 py-1 text-sm font-medium text-[#A855F7]">
          Curated for designers
        </div>
        
        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-6xl">
          Discover AI tools that{" "}
          <span className="text-[#A855F7]">supercharge</span> your design workflow
        </h1>
        
        <p className="mt-6 max-w-2xl text-lg text-[#A3A3A3]">
          Hand-picked AI design tools with honest reviews, real pricing, and direct links. No fluff. No spam. Just the tools that actually work.
        </p>
        
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/tools/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#A855F7] px-6 py-3 text-sm font-medium text-white hover:bg-[#9333EA] transition-colors"
          >
            <Search className="h-4 w-4" />
            Browse Directory
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/newsletter/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#262626] bg-[#171717] px-6 py-3 text-sm font-medium text-[#F5F5F5] hover:bg-[#262626] transition-colors"
          >
            Get Weekly Picks
          </Link>
        </div>
        
        <div className="mt-12 flex items-center gap-6 text-sm text-[#737373]">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            5+ tools curated
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#A855F7]" />
            Weekly updates
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Free forever
          </span>
        </div>
      </div>
    </section>
  );
}
