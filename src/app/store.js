import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import menuReducer from "../features/menu/menuSlice";
import animationsReducer from "../features/animations/animationsSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
    animations: animationsReducer,
  },
});
