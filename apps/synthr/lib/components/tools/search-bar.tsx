"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialValue?: string;
}

export function SearchBar({ onSearch, initialValue = "" }: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#737373]" />
      <input
        type="text"
        placeholder="Search tools..."
        value={query}
        onChange={handleChange}
        className="h-10 w-full rounded-lg border border-[#262626] bg-[#171717] pl-10 pr-10 text-sm text-[#F5F5F5] placeholder:text-[#737373] focus:border-[#A855F7] focus:outline-none focus:ring-1 focus:ring-[#A855F7]"
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] hover:text-[#F5F5F5]"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
