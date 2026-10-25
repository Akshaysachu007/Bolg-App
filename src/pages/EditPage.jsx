import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../store/postsSlice";
import { useUI } from "../context/UIContext";
import BlogForm from "../components/BlogForm";
import MissingPost from "../components/MissingPost";
export default function EditPage() {
  const { id } = useParams();
  const post = useSelector((s) => s.posts.items.find((p) => p.id === id));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { notify } = useUI();
  if (!post) return <MissingPost />;
  function save(values) {
    dispatch(updatePost({ ...post, ...values }));
    notify("Your story was updated!");
    navigate(`/blog/${id}`);
  }
  return (
    <div className="mx-auto max-w-3xl">
      <BlogForm key={id} editing initialValues={post} onSubmit={save} />
    </div>
  );
}
