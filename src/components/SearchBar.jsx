import { Search, X } from "lucide-react";
export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative flex-1">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e9289]"
      />
      <input
        aria-label="Search posts by title"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search posts by title..."
        className="field py-3 pl-11 pr-10"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7e8179]"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
