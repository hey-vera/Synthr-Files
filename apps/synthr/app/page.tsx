import { Hero } from "@/lib/components/sections/hero";
import { FeaturedTools } from "@/lib/components/sections/featured-tools";
import { getFeaturedTools, getTrendingTools } from "@/lib/utils";
import { ToolCard } from "@/lib/components/tools/tool-card";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Home() {
  const featuredTools = getFeaturedTools();
  const trendingTools = getTrendingTools();

  return (
    <div className="flex flex-col">
      <Hero />
      
      <FeaturedTools tools={featuredTools} />
      
      {trendingTools.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[#262626]">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#A855F7]" />
              <h2 className="text-2xl font-bold tracking-tight text-[#F5F5F5]">
                Trending Now
              </h2>
            </div>
            <Link
              href="/tools/"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#A855F7] hover:text-[#9333EA] transition-colors"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trendingTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      )}
      
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-[#262626]">
        <div className="rounded-2xl border border-[#262626] bg-[#171717] p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl">
            Get weekly AI design picks
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-[#A3A3A3]">
            Join 1,000+ designers receiving our curated selection of the best AI tools, tips, and tutorials every week.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter/"
              className="inline-flex items-center justify-center rounded-lg bg-[#A855F7] px-6 py-3 text-sm font-medium text-white hover:bg-[#9333EA] transition-colors"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
