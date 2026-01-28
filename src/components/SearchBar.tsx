"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-light-textMuted dark:text-dark-textMuted"
      />
      <input
        type="text"
        placeholder="I want to see..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full pl-10 pr-4 py-2 rounded-lg
          bg-light-bg dark:bg-dark-bg
          border border-light-border dark:border-dark-border
          text-sm text-light-text dark:text-dark-text
          placeholder:text-light-textMuted dark:placeholder:text-dark-textMuted
          focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
          transition-all duration-200
        "
      />
    </div>
  );
}
