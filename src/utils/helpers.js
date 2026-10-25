export const formatDate = (value) =>
  new Date(value + "T12:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
export const readingTime = (content) =>
  Math.max(
    1,
    Math.ceil(content.trim().split(/\s+/).filter(Boolean).length / 200),
  );
export const getImage = (post) => post.image || "/images/workspace.jpg";
