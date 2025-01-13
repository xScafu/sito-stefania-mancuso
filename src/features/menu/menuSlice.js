import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menuSlice",
  initialState: { isOpen: false },
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
