import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getToolBySlug, getAllToolIds, getAllTools } from "@/lib/utils";
import { Badge } from "@/lib/components/ui/badge";
import { ToolCard } from "@/lib/components/tools/tool-card";
import { ArrowUpRight, Check, X, Star, Calendar, Tag, ExternalLink } from "lucide-react";

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const ids = getAllToolIds();
  return ids.map((id) => ({ slug: id }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Tool Not Found" };
  
  return {
    title: `${tool.name} — ${tool.tagline} | Synthr`,
    description: tool.description,
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  
  if (!tool) {
    notFound();
  }
  
  const relatedTools = getAllTools()
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#262626] text-2xl font-bold text-[#A855F7]">
              {tool.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl font-bold text-[#F5F5F5]">{tool.name}</h1>
                {tool.trending && (
                  <Badge variant="accent">
                    <Star className="mr-1 h-3 w-3" />
                    Trending
                  </Badge>
                )}
              </div>
              <p className="mt-1 text-lg text-[#A3A3A3]">{tool.tagline}</p>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="default">{tool.category}</Badge>
            {tool.tags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
          
          <div className="mt-8 rounded-xl border border-[#262626] bg-[#171717] p-6">
            <h2 className="text-lg font-semibold text-[#F5F5F5]">About</h2>
            <p className="mt-3 text-[#A3A3A3] leading-relaxed">{tool.description}</p>
          </div>
          
          <div className="mt-6 rounded-xl border border-[#262626] bg-[#171717] p-6">
            <h2 className="text-lg font-semibold text-[#F5F5F5]">Key Features</h2>
            <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {tool.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-[#A3A3A3]">
                  <Check className="h-4 w-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-[#262626] bg-[#171717] p-6">
              <h2 className="text-lg font-semibold text-[#F5F5F5]">Pros</h2>
              <ul className="mt-3 space-y-3">
                {tool.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-[#A3A3A3]">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#262626] bg-[#171717] p-6">
              <h2 className="text-lg font-semibold text-[#F5F5F5]">Cons</h2>
              <ul className="mt-3 space-y-3">
                {tool.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-[#A3A3A3]">
                    <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-xl border border-[#262626] bg-[#171717] p-6">
            <div className="flex items-center gap-2 text-sm text-[#737373]">
              <Tag className="h-4 w-4" />
              Pricing
            </div>
            <p className="mt-2 text-xl font-semibold text-[#F5F5F5]">{tool.pricing}</p>
            
            <div className="mt-4 flex items-center gap-2 text-sm text-[#737373]">
              <Calendar className="h-4 w-4" />
              Added {new Date(tool.dateAdded).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </div>
          </div>
          
          <div className="rounded-xl border border-[#262626] bg-[#171717] p-6 space-y-3">
            <a
              href={tool.affiliateUrl || tool.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#A855F7] px-4 py-3 text-sm font-medium text-white hover:bg-[#9333EA] transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Visit Website
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={tool.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#262626] bg-transparent px-4 py-3 text-sm font-medium text-[#A3A3A3] hover:bg-[#262626] transition-colors"
            >
              Direct Link
            </a>
          </div>
          
          {relatedTools.length > 0 && (
            <div className="rounded-xl border border-[#262626] bg-[#171717] p-6">
              <h3 className="text-sm font-semibold text-[#F5F5F5]">Related Tools</h3>
              <div className="mt-4 space-y-4">
                {relatedTools.map((relatedTool) => (
                  <ToolCard key={relatedTool.id} tool={relatedTool} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
