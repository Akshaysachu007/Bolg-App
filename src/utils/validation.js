export function validatePost(values) {
  const errors = {};
  if (!values.title.trim()) errors.title = "Please enter a title.";
  else if (values.title.trim().length < 5)
    errors.title = "Title must have at least 5 characters.";
  else if (values.title.trim().length > 100)
    errors.title = "Title must be 100 characters or less.";
  if (!values.author.trim()) errors.author = "Please enter the author name.";
  else if (values.author.trim().length < 2)
    errors.author = "Author name must have at least 2 characters.";
  if (!values.category) errors.category = "Please select a category.";
  if (!values.description.trim())
    errors.description = "Please enter a short description.";
  else if (values.description.trim().length < 10)
    errors.description = "Description must have at least 10 characters.";
  else if (values.description.trim().length > 220)
    errors.description = "Description must be 220 characters or less.";
  if (!values.content.trim())
    errors.content = "Please write your blog content.";
  else if (values.content.trim().length < 20)
    errors.content = "Content must have at least 20 characters.";
  return errors;
}
