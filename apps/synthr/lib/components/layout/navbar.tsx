import Link from "next/link";
import { Search } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#262626] bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Synthr" className="h-7 w-7" />
            <span className="text-xl font-bold tracking-tight text-[#F5F5F5]">
              synthr
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/tools/"
              className="text-sm font-medium text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
            >
              Directory
            </Link>
            <Link
              href="/newsletter/"
              className="text-sm font-medium text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
            >
              Newsletter
            </Link>
            <Link
              href="/submit/"
              className="text-sm font-medium text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
            >
              Submit
            </Link>
            <Link
              href="/toolkit/"
              className="text-sm font-medium text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
            >
              Toolkit
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/tools/"
            className="hidden sm:flex items-center gap-2 rounded-full border border-[#262626] bg-[#171717] px-4 py-2 text-sm text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
          >
            <Search className="h-4 w-4" />
            <span>Search tools...</span>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
