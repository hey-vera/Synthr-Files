import { Metadata } from "next";
import { getAllTools } from "@/lib/utils";
import { Badge } from "@/lib/components/ui/badge";
import { ArrowLeft, ExternalLink, Check, X } from "lucide-react";
import { PrintButton } from "@/lib/components/toolkit/print-button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The AI Design Toolkit — Free Download | Synthr",
  description: "Download our free guide with 15 essential AI design tools, complete with pricing, use cases, and direct links.",
};

export default function ToolkitPage() {
  const tools = getAllTools();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-4">
        <Link
          href="/newsletter/"
          className="inline-flex items-center gap-1 text-sm font-medium text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Newsletter
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#F5F5F5] sm:text-5xl">
          The AI Design Toolkit
        </h1>
        <p className="mt-4 text-lg text-[#A3A3A3]">
          15 essential AI design tools with pricing, use cases, and honest reviews.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <PrintButton />
        </div>
        <p className="mt-3 text-xs text-[#737373]">
          Pro tip: Use Ctrl+P (or Cmd+P) to save this page as a PDF.
        </p>
      </div>

      <div className="space-y-8">
        {tools.map((tool, index) => (
          <div
            key={tool.id}
            className="rounded-xl border border-[#262626] bg-[#171717] p-6 break-inside-avoid"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#262626] text-lg font-bold text-[#A855F7]">
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#F5F5F5]">{tool.name}</h2>
                  <p className="text-sm text-[#A3A3A3]">{tool.tagline}</p>
                </div>
              </div>
              <Badge variant="default">{tool.category}</Badge>
            </div>

            <p className="mt-4 text-[#A3A3A3]">{tool.description}</p>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-[#F5F5F5]">Key Features</h3>
                <ul className="mt-2 space-y-1">
                  {tool.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#A3A3A3]">
                      <Check className="h-3.5 w-3.5 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#F5F5F5]">Pros & Cons</h3>
                <ul className="mt-2 space-y-1">
                  {tool.pros.slice(0, 2).map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-[#A3A3A3]">
                      <Check className="h-3.5 w-3.5 text-green-500" />
                      {p}
                    </li>
                  ))}
                  {tool.cons.slice(0, 2).map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-[#A3A3A3]">
                      <X className="h-3.5 w-3.5 text-red-500" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#262626] pt-4">
              <div>
                <span className="text-sm font-medium text-[#F5F5F5]">{tool.pricing}</span>
                <div className="mt-1 flex gap-2">
                  {tool.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <a
                href={tool.affiliateUrl || tool.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg bg-[#A855F7] px-4 py-2 text-sm font-medium text-white hover:bg-[#9333EA] transition-colors"
              >
                Visit
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-[#737373]">
          Brought to you by{" "}
          <Link href="/" className="text-[#A855F7] hover:underline">
            synthr.online
          </Link>
        </p>
      </div>
    </div>
  );
}
