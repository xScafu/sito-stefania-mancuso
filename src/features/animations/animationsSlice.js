import { createSlice } from "@reduxjs/toolkit";

const animationsSlice = createSlice({
  name: "animationsSlice",
  initialState: {
    navbarAnimationEnded: false,
    menuAnimationEnded: true,
    scrollAnimationStarted: false,
  },
  reducers: {
    toggleNavbarAnimation: (state) => {
      state.navbarAnimationEnded = !state.navbarAnimationEnded;
    },
    toggleMenuAnimationEnded: (state) => {
      state.menuAnimationEnded = !state.menuAnimationEnded;
    },
    scrollAnimationStarted: (state) => {
      state.scrollAnimationStarted = !state.scrollAnimationStarted;
    },
  },
});

export const {
  toggleNavbarAnimation,
  toggleMenuAnimationEnded,
  scrollAnimationStarted,
} = animationsSlice.actions;
export default animationsSlice.reducer;
