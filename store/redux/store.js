import { configureStore } from "@reduxjs/toolkit";
import favoritesRaducer from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesRaducer,
  },
});
