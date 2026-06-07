import Link from "next/link";
import { Globe, Code } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#262626] bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Synthr" className="h-6 w-6" />
              <span className="text-lg font-bold text-[#F5F5F5]">synthr</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-[#737373]">
              The curated directory of AI tools for designers. Discover, compare, and find the perfect tool for your creative workflow.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#F5F5F5]">Explore</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/tools/" className="text-sm text-[#737373] hover:text-[#A855F7] transition-colors">
                  All Tools
                </Link>
              </li>
              <li>
                <Link href="/best/" className="text-sm text-[#737373] hover:text-[#A855F7] transition-colors">
                  Best Of
                </Link>
              </li>
              <li>
                <Link href="/newsletter/" className="text-sm text-[#737373] hover:text-[#A855F7] transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/toolkit/" className="text-sm text-[#737373] hover:text-[#A855F7] transition-colors">
                  Toolkit
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#F5F5F5]">Contribute</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/submit/" className="text-sm text-[#737373] hover:text-[#A855F7] transition-colors">
                  Submit a Tool
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#F5F5F5]">Connect</h3>
            <div className="mt-4 flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#737373] hover:text-[#A855F7] transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#737373] hover:text-[#A855F7] transition-colors">
                <Code className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#262626] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#737373]">
            &copy; {new Date().getFullYear()} Synthr. All rights reserved.
          </p>
          <p className="text-sm text-[#737373]">
            Made with <span className="text-[#A855F7]">AI</span> and caffeine.
          </p>
        </div>
      </div>
    </footer>
  );
}
