import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // bookmarks: localStorage.getItem("bookmarks")
  //   ? JSON.parse(localStorage.getItem("bookmarks"))
  //   : [],
  bookmarks: (() => {
    try {
      const storedBookmarks = localStorage.getItem("bookmarks");
      return storedBookmarks ? JSON.parse(storedBookmarks) : [];
    } catch (error) {
      console.error("Failed to parse bookmarks from localStorage:", error);
      return [];
    }
  })(),
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addToBookmark: (state, action) => {
      const item = action.payload;
      if (!Array.isArray(state.bookmarks)) {
        state.bookmarks = [];
      }
      const bookmarkExists = state.bookmarks.find(
        (bookmark) => bookmark.id === item.id
      );
      if (!bookmarkExists) {
        state.bookmarks.push(item);
        localStorage.setItem("bookmarks", JSON.stringify([...state.bookmarks]));
      }
    },
    removeFromBookmark: (state, action) => {
      const item = action.payload;
      state.bookmarks = state.bookmarks.filter(
        (bookmark) => bookmark.id !== item.id
      );
      localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
    },
  },
});

export default bookmarkSlice.reducer;
export const { addToBookmark, removeFromBookmark } = bookmarkSlice.actions;
