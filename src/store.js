import { configureStore } from "@reduxjs/toolkit";
import bookMarkReducer from "./features/bookmark/bookmarkSlice";

export const store = configureStore({
  reducer: {
    bookmarkState: bookMarkReducer,
  },
});
