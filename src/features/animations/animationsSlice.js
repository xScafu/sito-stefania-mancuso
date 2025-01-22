import { createSlice } from "@reduxjs/toolkit";

const animationsSlice = createSlice({
  name: "animationsSlice",
  initialState: { navbarAnimationEnded: false, menuAnimationEnded: true },
  reducers: {
    toggleNavbarAnimation: (state) => {
      state.navbarAnimationEnded = !state.navbarAnimationEnded;
    },
    toggleMenuAnimationEnded: (state) => {
      state.menuAnimationEnded = !state.menuAnimationEnded;
    },
  },
});

export const { toggleNavbarAnimation, toggleMenuAnimationEnded } =
  animationsSlice.actions;
export default animationsSlice.reducer;
