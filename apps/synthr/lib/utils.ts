import Fuse from "fuse.js";
import tools from "@/data/tools.json";
import { Tool } from "@/types/tool";

export function getAllTools(): Tool[] {
  return tools;
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.id === slug);
}

export function getAllCategories(): string[] {
  const categories = new Set(tools.map((tool) => tool.category));
  return Array.from(categories).sort();
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((tool) => tool.featured);
}

export function getTrendingTools(): Tool[] {
  return tools.filter((tool) => tool.trending);
}

export function searchTools(query: string): Tool[] {
  if (!query.trim()) return tools;
  
  const fuse = new Fuse(tools, {
    keys: ["name", "tagline", "description", "category", "tags"],
    threshold: 0.4,
  });
  
  return fuse.search(query).map((result) => result.item);
}

export function filterTools(
  tools: Tool[],
  category: string | null,
  freeOnly: boolean,
  sortBy: "newest" | "trending" | "name"
): Tool[] {
  let filtered = [...tools];
  
  if (category && category !== "All") {
    filtered = filtered.filter((tool) => tool.category === category);
  }
  
  if (freeOnly) {
    filtered = filtered.filter((tool) => 
      tool.tags.includes("free") || tool.tags.includes("freemium")
    );
  }
  
  if (sortBy === "newest") {
    filtered.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
  } else if (sortBy === "trending") {
    filtered.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
  } else if (sortBy === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  return filtered;
}

export function getAllToolIds(): string[] {
  return tools.map((tool) => tool.id);
}
