import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticleIds } from "@/lib/articles";
import { getToolBySlug } from "@/lib/utils";
import { Badge } from "@/lib/components/ui/badge";
import { ToolCard } from "@/lib/components/tools/tool-card";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const ids = getAllArticleIds();
  return ids.map((id) => ({ slug: id }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Synthr`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedTools = article.tools
    .map((toolId) => getToolBySlug(toolId))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link
          href="/best/"
          className="inline-flex items-center gap-1 text-sm font-medium text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Best Of
        </Link>
      </div>

      <article>
        <div className="flex items-center gap-2 text-sm text-[#737373]">
          <Calendar className="h-4 w-4" />
          {new Date(article.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
          <span className="mx-2">|</span>
          <Badge variant="accent">{article.category}</Badge>
        </div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#F5F5F5] sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-xl text-[#A3A3A3]">{article.description}</p>

        <div className="mt-10 space-y-6">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-[#A3A3A3]">
              {paragraph}
            </p>
          ))}
        </div>

        {relatedTools.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#F5F5F5]">Tools Mentioned</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {relatedTools.map((tool) =>
                tool ? <ToolCard key={tool.id} tool={tool} /> : null
              )}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
