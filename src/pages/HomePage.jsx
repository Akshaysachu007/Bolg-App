import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";
import ConfirmDialog from "../components/ConfirmDialog";
import { deletePost } from "../store/postsSlice";
import { useUI } from "../context/UIContext";
export default function HomePage() {
  const posts = useSelector((s) => s.posts.items);
  const dispatch = useDispatch();
  const { notify } = useUI();
  const [params, setParams] = useSearchParams();
  const search = params.get("search") || "";
  const category = params.get("category") || "";
  const [pending, setPending] = useState(null);
  const filtered = useMemo(
    () =>
      posts.filter(
        (post) =>
          post.title.toLowerCase().includes(search.trim().toLowerCase()) &&
          (!category || post.category === category),
      ),
    [posts, search, category],
  );
  function update(key, value) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next);
  }
  function clear() {
    setParams({});
  }
  function remove() {
    dispatch(deletePost(pending.id));
    notify("Post deleted successfully.");
    setPending(null);
  }
  return (
    <div className="mx-auto max-w-[1300px] space-y-9">
      <Hero />
      <div className="flex flex-col gap-3 sm:flex-row">
        <SearchBar
          value={search}
          onChange={(value) => update("search", value)}
        />
        <CategoryFilter
          value={category}
          onChange={(value) => update("category", value)}
        />
      </div>
      <section>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[.22em] text-[#b58267]">
              Explore the journal
            </p>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              {search || category ? "Stories for you" : "Latest Posts"}
            </h2>
          </div>
          <p className="hidden items-center gap-2 text-sm font-medium text-[#7d8276] sm:flex">
            {filtered.length} {filtered.length === 1 ? "story" : "stories"}{" "}
            <ArrowRight size={16} />
          </p>
        </div>
        {filtered.length ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {filtered.map((post) => (
              <BlogCard key={post.id} post={post} onDelete={setPending} />
            ))}
          </div>
        ) : (
          <EmptyState filtered={!!(search || category)} onClear={clear} />
        )}
      </section>
      {pending && (
        <ConfirmDialog
          title={pending.title}
          onCancel={() => setPending(null)}
          onConfirm={remove}
        />
      )}
    </div>
  );
}
