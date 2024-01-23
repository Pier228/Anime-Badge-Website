import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BadgeState {
  id: string;
  isHidden: boolean;
}

const initialState: BadgeState[] = [
  { id: "calendar", isHidden: false },
  { id: "weather", isHidden: false },
  { id: "console", isHidden: false },
  { id: "danceFloor", isHidden: false },
];

const badgeSlice = createSlice({
  name: "badge",
  initialState,
  reducers: {
    toggleVisibility: (state, action: PayloadAction<string>) => {
      const badge = state.find((b) => b.id === action.payload);
      if (badge) {
        badge.isHidden = !badge.isHidden;
      }
    },
  },
});

export const { toggleVisibility } = badgeSlice.actions;
export default badgeSlice.reducer;
