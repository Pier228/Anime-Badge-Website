import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BadgeState {
    id: string;
    isHidden: boolean;
    icon: string;
}

const initialState: BadgeState[] = [
    { id: "calendar", isHidden: false, icon: "/images/calendar.png" },
    { id: "weather", isHidden: false, icon: "/images/weather.png" },
    { id: "console", isHidden: false, icon: "/images/console.png" },
    { id: "danceFloor", isHidden: false, icon: "/images/danceFloor.svg" },
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
