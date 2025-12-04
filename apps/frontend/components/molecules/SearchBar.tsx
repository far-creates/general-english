/**
 * SearchBar Component (Molecule)
 * Search input with icon and clear button
 */

import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  onClear?: () => void;
  defaultValue?: string;
  fullWidth?: boolean;
  className?: string;
}

export default function SearchBar({
  placeholder = "Search...",
  onSearch,
  onClear,
  defaultValue = "",
  fullWidth = false,
  className = "",
}: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery("");
    if (onClear) {
      onClear();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center gap-2 ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {/* Search Input Container */}
      <div className="relative flex-1">
        {/* Search Icon */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Input */}
        <Input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="pl-10 pr-10"
          fullWidth
        />

        {/* Clear Button */}
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Search Button */}
      <Button type="submit" variant="primary">
        Search
      </Button>
    </form>
  );
}
