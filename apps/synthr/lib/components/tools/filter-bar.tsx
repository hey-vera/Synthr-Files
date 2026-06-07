"use client";

import { Filter, ArrowUpDown } from "lucide-react";

interface FilterBarProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  freeOnly: boolean;
  onFreeOnlyChange: (value: boolean) => void;
  sortBy: "newest" | "trending" | "name";
  onSortChange: (sort: "newest" | "trending" | "name") => void;
  resultCount: number;
}

export function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  freeOnly,
  onFreeOnlyChange,
  sortBy,
  onSortChange,
  resultCount,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => onCategoryChange(null)}
          className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
            selectedCategory === null
              ? "bg-[#A855F7] text-white"
              : "bg-[#171717] text-[#A3A3A3] hover:text-[#F5F5F5] border border-[#262626]"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category === selectedCategory ? null : category)}
            className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-[#A855F7] text-white"
                : "bg-[#171717] text-[#A3A3A3] hover:text-[#F5F5F5] border border-[#262626]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-[#A3A3A3] cursor-pointer">
          <input
            type="checkbox"
            checked={freeOnly}
            onChange={(e) => onFreeOnlyChange(e.target.checked)}
            className="h-4 w-4 rounded border-[#262626] bg-[#171717] text-[#A855F7] focus:ring-[#A855F7]"
          />
          Free only
        </label>
        
        <div className="flex items-center gap-1">
          <ArrowUpDown className="h-4 w-4 text-[#737373]" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as "newest" | "trending" | "name")}
            className="h-8 rounded-lg border border-[#262626] bg-[#171717] px-2 text-sm text-[#F5F5F5] focus:border-[#A855F7] focus:outline-none"
          >
            <option value="newest">Newest</option>
            <option value="trending">Trending</option>
            <option value="name">Name</option>
          </select>
        </div>
        
        <span className="text-sm text-[#737373]">
          <Filter className="inline h-4 w-4 mr-1" />
          {resultCount} tools
        </span>
      </div>
    </div>
  );
}
