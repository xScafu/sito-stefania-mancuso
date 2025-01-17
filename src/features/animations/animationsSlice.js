import { createSlice } from "@reduxjs/toolkit";

const animationsSlice = createSlice({
  name: "animationsSlice",
  initialState: { navbarAnimationEnded: false },
  reducers: {
    toggleNavbarAnimation: (state) => {
      state.navbarAnimationEnded = !state.navbarAnimationEnded;
    },
  },
});

export const { toggleNavbarAnimation } = animationsSlice.actions;
export default animationsSlice.reducer;
