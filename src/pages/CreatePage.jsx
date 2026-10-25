import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../store/postsSlice";
import { useUI } from "../context/UIContext";
import BlogForm from "../components/BlogForm";
export default function CreatePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { notify } = useUI();
  function save(values) {
    const id =
      typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : String(Date.now());
    dispatch(
      addPost({
        ...values,
        id,
        createdAt: new Date().toISOString().slice(0, 10),
      }),
    );
    notify("Your story was published!");
    navigate("/");
  }
  return (
    <div className="mx-auto max-w-3xl">
      <BlogForm onSubmit={save} />
    </div>
  );
}
