import { configureStore } from "@reduxjs/toolkit";
import badgeReducer from "./reducers/badgeReducer";

export const makeStore = () => {
    return configureStore({
        reducer: {
            badge: badgeReducer,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
