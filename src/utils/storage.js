import { samplePosts } from "../data/samplePosts";
const KEY = "inkspire-posts-v1";
export function loadPosts() {
  try {
    const saved = localStorage.getItem(KEY);
    if (!saved) return samplePosts;
    const value = JSON.parse(saved);
    return Array.isArray(value) ? value : samplePosts;
  } catch {
    return samplePosts;
  }
}
export function savePosts(posts) {
  try {
    localStorage.setItem(KEY, JSON.stringify(posts));
  } catch {
    /* App still works when browser storage is unavailable. */
  }
}
