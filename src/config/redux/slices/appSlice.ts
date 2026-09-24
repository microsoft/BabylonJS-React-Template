import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { VIEW, type ViewType } from "../constants/view";

interface AppState {
    view: ViewType;
}

const initialState: AppState = {
    view: VIEW.HOME,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<ViewType>) => {
            state.view = action.payload;
        },
    },
});

export const { setView } = appSlice.actions;

export default appSlice.reducer;
