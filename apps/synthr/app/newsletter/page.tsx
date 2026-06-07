import { Metadata } from "next";
import { NewsletterForm } from "@/lib/components/newsletter/newsletter-form";
import { Badge } from "@/lib/components/ui/badge";
import { Mail, ArrowRight, Zap, Check, Download, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsletter — Weekly AI Design Picks | Synthr",
  description: "Join 1,000+ designers receiving our curated selection of the best AI tools, tips, and tutorials every week.",
};

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center rounded-full border border-[#A855F7]/20 bg-[#A855F7]/10 px-3 py-1 text-sm font-medium text-[#A855F7]">
          <Mail className="mr-2 h-4 w-4" />
          Weekly newsletter
        </div>
        
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#F5F5F5] sm:text-5xl">
          Get the best AI design tools delivered to your inbox
        </h1>
        
        <p className="mt-6 text-lg text-[#A3A3A3]">
          Join 1,000+ designers receiving our curated selection of the best AI tools, honest reviews, and workflow tips every week.
        </p>
      </div>
      
      <div className="mx-auto mt-12 max-w-xl">
        <div className="rounded-2xl border border-[#262626] bg-[#171717] p-8">
          <NewsletterForm />
        </div>
      </div>
      
      <div className="mx-auto mt-16 max-w-3xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center rounded-xl border border-[#262626] bg-[#171717] p-6 text-center">
            <Zap className="h-8 w-8 text-[#A855F7]" />
            <h3 className="mt-4 font-semibold text-[#F5F5F5]">Curated Picks</h3>
            <p className="mt-2 text-sm text-[#737373]">
              5 hand-picked AI tools every week with honest reviews
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-[#262626] bg-[#171717] p-6 text-center">
            <Check className="h-8 w-8 text-green-500" />
            <h3 className="mt-4 font-semibold text-[#F5F5F5]">Tested & Verified</h3>
            <p className="mt-2 text-sm text-[#737373]">
              Every tool is tested by our team before we recommend it
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-[#262626] bg-[#171717] p-6 text-center">
            <Badge variant="accent" className="mb-2">Free</Badge>
            <h3 className="mt-2 font-semibold text-[#F5F5F5]">No Cost</h3>
            <p className="mt-2 text-sm text-[#737373]">
              The newsletter is completely free, forever
            </p>
          </div>
        </div>
      </div>
      
      <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-[#262626] bg-[#171717] p-8 text-center">
        <BookOpen className="mx-auto h-10 w-10 text-[#A855F7]" />
        <h2 className="mt-4 text-2xl font-bold text-[#F5F5F5]">
          Download: The AI Design Toolkit
        </h2>
        <p className="mt-4 text-[#A3A3A3]">
          Get our free guide with all 15 essential AI design tools, complete with pricing, use cases, and direct links. Perfect for your bookmarks.
        </p>
        <Link
          href="/toolkit/"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[#A855F7] px-6 py-3 text-sm font-medium text-white hover:bg-[#9333EA] transition-colors"
        >
          <Download className="h-4 w-4" />
          View Toolkit
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
