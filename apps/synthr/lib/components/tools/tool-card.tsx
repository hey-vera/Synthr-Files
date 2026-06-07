import Link from "next/link";
import { Tool } from "@/types/tool";
import { Badge } from "@/lib/components/ui/badge";
import { ArrowUpRight, Star } from "lucide-react";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="group relative flex flex-col rounded-xl border border-[#262626] bg-[#171717] p-5 transition-all hover:border-[#A855F7]/30 hover:shadow-lg hover:shadow-[#A855F7]/5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#262626] text-lg font-bold text-[#A855F7]">
            {tool.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-[#F5F5F5] group-hover:text-[#A855F7] transition-colors">
              {tool.name}
            </h3>
            <p className="text-xs text-[#737373]">{tool.category}</p>
          </div>
        </div>
        {tool.trending && (
          <Badge variant="accent">
            <Star className="mr-1 h-3 w-3" />
            Trending
          </Badge>
        )}
      </div>
      
      <p className="mt-3 text-sm text-[#A3A3A3] line-clamp-2">
        {tool.tagline}
      </p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {tool.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
      
      <div className="mt-4 flex items-center justify-between pt-4 border-t border-[#262626]">
        <span className="text-sm font-medium text-[#737373]">{tool.pricing}</span>
        <div className="flex gap-2">
          <Link
            href={`/tool/${tool.id}/`}
            className="inline-flex items-center text-sm font-medium text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
          >
            Details
          </Link>
          <a
            href={tool.affiliateUrl || tool.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg bg-[#A855F7] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#9333EA] transition-colors"
          >
            Visit
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
