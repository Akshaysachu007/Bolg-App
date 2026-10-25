import { createSlice } from "@reduxjs/toolkit";
import { loadPosts } from "../utils/storage";
const postsSlice = createSlice({
  name: "posts",
  initialState: { items: loadPosts() },
  reducers: {
    addPost(state, action) {
      state.items.unshift(action.payload);
    },
    updatePost(state, action) {
      const index = state.items.findIndex(
        (post) => post.id === action.payload.id,
      );
      if (index !== -1) state.items[index] = action.payload;
    },
    deletePost(state, action) {
      state.items = state.items.filter((post) => post.id !== action.payload);
    },
  },
});
export const { addPost, updatePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
