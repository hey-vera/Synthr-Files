import { Tool } from "@/types/tool";
import { ToolCard } from "./tool-card";

interface ToolGridProps {
  tools: Tool[];
  emptyMessage?: string;
}

export function ToolGrid({ tools, emptyMessage = "No tools found matching your criteria." }: ToolGridProps) {
  if (tools.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg text-[#737373]">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}
