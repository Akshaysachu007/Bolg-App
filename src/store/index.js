import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import { savePosts } from "../utils/storage";
export const store = configureStore
({ 
    reducer: { posts: postsReducer } 
})
;
store.subscribe(() => savePosts(store.getState().posts.items));
