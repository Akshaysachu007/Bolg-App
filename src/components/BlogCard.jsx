import { Link } from "react-router-dom";
import { Pencil, Trash2, ArrowUpRight } from "lucide-react";
import { formatDate, getImage } from "../utils/helpers";
export default function BlogCard({ post, onDelete }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#ebe5db] bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg dark:border-[#425047] dark:bg-[#29362e]">
      <Link to={`/blog/${post.id}`} className="block overflow-hidden">
        <img
          src={getImage(post)}
          alt=""
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="relative flex flex-1 flex-col p-5">
        <span className="tag -mt-9 mb-4 w-fit border-[3px] border-white dark:border-[#29362e]">
          {post.category}
        </span>
        <Link to={`/blog/${post.id}`} className="group/title">
          <h3 className="font-serif text-xl font-semibold leading-snug group-hover/title:text-[#a96a50]">
            {post.title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#7c7e75] dark:text-[#d4d7cd]">
          {post.description}
        </p>
        <div className="mt-auto pt-6">
          <p className="text-xs font-semibold">{post.author}</p>
          <p className="mt-1 text-xs text-[#999a91]">
            {formatDate(post.createdAt)}
          </p>
          <div className="mt-4 flex items-center justify-between border-t border-[#eee9e1] pt-3 dark:border-[#425047]">
            <Link
              to={`/blog/${post.id}`}
              className="flex items-center gap-1 text-xs font-bold text-forest dark:text-[#c8dec9]"
            >
              Read More <ArrowUpRight size={15} />
            </Link>
            <div className="flex gap-2">
              <Link
                to={`/edit/${post.id}`}
                aria-label={`Edit ${post.title}`}
                title="Edit post"
                className="rounded-lg p-2 text-[#69796d] hover:bg-[#f4efe8]"
              >
                <Pencil size={16} />
              </Link>
              <button
                onClick={() => onDelete(post)}
                aria-label={`Delete ${post.title}`}
                title="Delete post"
                className="rounded-lg p-2 text-[#b96e5d] hover:bg-[#fff0e9]"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
