import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/bookmarks",
});

export const getBookmarks = () => API.get("/");
export const createBookmark = (data) => API.post("/", data);
export const updateBookmark = (id, data) => API.put(`/${id}/`, data);
export const deleteBookmark = (id) => API.delete(`/${id}/`);
