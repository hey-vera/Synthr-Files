import Link from "next/link";
import { Tool } from "@/types/tool";
import { ToolCard } from "@/lib/components/tools/tool-card";
import { ArrowRight } from "lucide-react";

interface FeaturedToolsProps {
  tools: Tool[];
}

export function FeaturedTools({ tools }: FeaturedToolsProps) {
  if (tools.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#F5F5F5]">
            Featured Tools
          </h2>
          <p className="mt-1 text-sm text-[#737373]">
            The best AI design tools we have tested and recommend
          </p>
        </div>
        <Link
          href="/tools/"
          className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[#A855F7] hover:text-[#9333EA] transition-colors"
        >
          View all
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
      
      <div className="mt-8 flex justify-center sm:hidden">
        <Link
          href="/tools/"
          className="inline-flex items-center gap-1 text-sm font-medium text-[#A855F7] hover:text-[#9333EA] transition-colors"
        >
          View all tools
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
