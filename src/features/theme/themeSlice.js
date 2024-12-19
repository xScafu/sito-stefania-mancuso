import { createSlice } from "@reduxjs/toolkit";

let darkMode = JSON.parse(localStorage.getItem("theme")) || false;

const themeSlice = createSlice({
  name: "theme",
  initialState: { darkMode: darkMode },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("theme", JSON.stringify(state.darkMode));
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
