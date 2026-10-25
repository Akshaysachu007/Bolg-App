import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Save, ImagePlus } from "lucide-react";
import { categories } from "../data/samplePosts";
import { validatePost } from "../utils/validation";
const blank = {
  title: "",
  author: "",
  category: "",
  description: "",
  content: "",
};
const FieldError = ({ children }) =>
  children ? (
    <p role="alert" className="mt-1 text-xs font-medium text-[#bf493a]">
      {children}
    </p>
  ) : null;
export default function BlogForm({
  initialValues = blank,
  onSubmit,
  editing = false,
}) {
  const [values, setValues] = useState(() => ({ ...blank, ...initialValues }));
  const [errors, setErrors] = useState({});
  function change(e) {
    const { name, value } = e.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name])
      setErrors((current) => ({ ...current, [name]: undefined }));
  }
  function submit(e) {
    e.preventDefault();
    const found = validatePost(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    onSubmit(
      Object.fromEntries(
        Object.entries(values).map(([key, value]) => [key, value.trim()]),
      ),
    );
    if (!editing) setValues(blank);
  }
  return (
    <form onSubmit={submit} noValidate className="panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#eee7df] bg-[#f8f1e9] px-6 py-6 dark:border-[#425047] dark:bg-[#354438] sm:px-9">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#ad8167]">
            Your creative corner
          </p>
          <h1 className="font-serif text-3xl font-semibold">
            {editing ? "Edit Your Story" : "Create a New Post"}
          </h1>
          <p className="mt-2 text-sm text-[#8b8c81]">
            {editing
              ? "Update your post details below."
              : "Share your thoughts with the world."}
          </p>
        </div>
        <BookOpen size={43} className="hidden text-[#b9a38e] sm:block" />
      </div>
      <div className="grid gap-6 p-6 sm:p-9">
        <div>
          <label htmlFor="title" className="label">
            Title <span className="text-[#c9654c]">*</span>
          </label>
          <input
            id="title"
            name="title"
            value={values.title}
            onChange={change}
            maxLength={101}
            placeholder="Enter a catchy title..."
            aria-invalid={!!errors.title}
            className="field"
          />
          <FieldError>{errors.title}</FieldError>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="author" className="label">
              Author <span className="text-[#c9654c]">*</span>
            </label>
            <input
              id="author"
              name="author"
              value={values.author}
              onChange={change}
              placeholder="Your name"
              aria-invalid={!!errors.author}
              className="field"
            />
            <FieldError>{errors.author}</FieldError>
          </div>
          <div>
            <label htmlFor="category" className="label">
              Category <span className="text-[#c9654c]">*</span>
            </label>
            <select
              id="category"
              name="category"
              value={values.category}
              onChange={change}
              aria-invalid={!!errors.category}
              className="field"
            >
              <option value="">Select a category</option>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <FieldError>{errors.category}</FieldError>
          </div>
        </div>
        <div>
          <label htmlFor="description" className="label">
            Short Description <span className="text-[#c9654c]">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={values.description}
            onChange={change}
            rows="3"
            maxLength={221}
            placeholder="Write a brief description..."
            aria-invalid={!!errors.description}
            className="field resize-y"
          />
          <div className="flex justify-between">
            <FieldError>{errors.description}</FieldError>
            <span className="ml-auto text-xs text-[#a6a399]">
              {values.description.length}/220
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="content" className="label">
            Content <span className="text-[#c9654c]">*</span>
          </label>
          <div className="mb-2 flex items-center gap-2 rounded-t-xl border border-[#e5ded5] bg-[#f8f3ed] px-4 py-3 text-xs text-[#858378] dark:border-[#526057] dark:bg-[#354438]">
            <BookOpen size={16} /> Your writing space{" "}
            <span className="ml-auto">Plain text editor</span>
          </div>
          <textarea
            id="content"
            name="content"
            value={values.content}
            onChange={change}
            rows="11"
            placeholder="Start writing your blog post here..."
            aria-invalid={!!errors.content}
            className="field -mt-2 rounded-t-none leading-7"
          />
          <FieldError>{errors.content}</FieldError>
        </div>
        <div className="rounded-xl border border-dashed border-[#e3d7cb] bg-[#faf6f0] px-5 py-4 text-sm text-[#8b8a7d] dark:border-[#526057] dark:bg-[#354438]">
          <div className="flex items-center gap-3">
            <ImagePlus size={22} />
            <div>
              <p className="font-semibold">Cover image</p>
              <p className="mt-1 text-xs">
                For this beginner-friendly version, posts use a matching
                built-in image. No upload or backend needed.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-end gap-3 border-t border-[#ece6df] pt-5 dark:border-[#425047]">
          <Link to="/" className="secondary-btn">
            Cancel
          </Link>
          <button type="submit" className="primary-btn">
            <Save size={17} />
            {editing ? "Update Post" : "Publish Post"}
          </button>
        </div>
      </div>
    </form>
  );
}
