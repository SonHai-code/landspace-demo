"use client";

import { Search, X } from "lucide-react";

export function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative flex items-center border-b border-ink/30 py-3">
      <Search size={19} className="mr-3 text-muted" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Search hotels"
        placeholder="Search by hotel or destination"
        className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
      />
      {value && (
        <button aria-label="Clear search" onClick={() => onChange("")}>
          <X size={17} />
        </button>
      )}
    </div>
  );
}
