import { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import { getToolBySlug } from "@/lib/utils";
import { Badge } from "@/lib/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Of — AI Design Tool Guides | Synthr",
  description: "In-depth comparisons and guides to the best AI design tools for every use case.",
};

export default function BestOfPage() {
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-[#F5F5F5] sm:text-5xl">
          Best Of
        </h1>
        <p className="mt-4 text-lg text-[#A3A3A3]">
          In-depth comparisons and guides to the best AI design tools for every use case.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/best/${article.id}/`}
            className="group flex flex-col rounded-xl border border-[#262626] bg-[#171717] p-6 transition-all hover:border-[#A855F7]/30"
          >
            <div className="flex items-center gap-2 text-sm text-[#737373]">
              <Calendar className="h-4 w-4" />
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <h2 className="mt-3 text-xl font-semibold text-[#F5F5F5] group-hover:text-[#A855F7] transition-colors">
              {article.title}
            </h2>
            <p className="mt-2 text-sm text-[#A3A3A3]">{article.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="default">{article.category}</Badge>
              {article.tools.slice(0, 2).map((toolId) => {
                const tool = getToolBySlug(toolId);
                return tool ? (
                  <Badge key={toolId} variant="outline">
                    {tool.name}
                  </Badge>
                ) : null;
              })}
            </div>
            <div className="mt-auto pt-4 flex items-center gap-1 text-sm font-medium text-[#A855F7]">
              Read guide
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
