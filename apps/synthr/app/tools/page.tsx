"use client";

import { useState, useMemo } from "react";
import { getAllTools, getAllCategories, searchTools, filterTools } from "@/lib/utils";
import { ToolGrid } from "@/lib/components/tools/tool-grid";
import { SearchBar } from "@/lib/components/tools/search-bar";
import { FilterBar } from "@/lib/components/tools/filter-bar";

export default function ToolsPage() {
  const allTools = getAllTools();
  const categories = getAllCategories();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [freeOnly, setFreeOnly] = useState(false);
  const [sortBy, setSortBy] = useState<"newest" | "trending" | "name">("newest");
  
  const filteredTools = useMemo(() => {
    const tools = searchQuery ? searchTools(searchQuery) : allTools;
    return filterTools(tools, selectedCategory, freeOnly, sortBy);
  }, [searchQuery, selectedCategory, freeOnly, sortBy, allTools]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl">
          Tool Directory
        </h1>
        <p className="mt-2 text-lg text-[#A3A3A3]">
          Browse all AI design tools curated by our team
        </p>
      </div>
      
      <div className="mb-6">
        <SearchBar onSearch={setSearchQuery} />
      </div>
      
      <div className="mb-8">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          freeOnly={freeOnly}
          onFreeOnlyChange={setFreeOnly}
          sortBy={sortBy}
          onSortChange={setSortBy}
          resultCount={filteredTools.length}
        />
      </div>
      
      <ToolGrid tools={filteredTools} />
    </div>
  );
}
