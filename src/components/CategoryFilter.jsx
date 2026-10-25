import { categories } from "../data/samplePosts";
export default function CategoryFilter({ value, onChange }) {
  return (
    <select
      aria-label="Filter posts by category"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="field w-full sm:w-52"
    >
      <option value="">All Categories</option>
      {categories.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
