import { Link } from "react-router-dom";
import { BookX } from "lucide-react";
export default function MissingPost() {
  return (
    <div className="panel mx-auto max-w-xl px-6 py-20 text-center">
      <BookX size={50} className="mx-auto mb-5 text-[#b9896f]" />
      <h1 className="font-serif text-4xl">Post not found</h1>
      <p className="mt-3 text-sm text-[#8d8c80]">
        This story may have been removed or the link is incorrect.
      </p>
      <Link className="primary-btn mt-7" to="/">
        Back to Home
      </Link>
    </div>
  );
}
