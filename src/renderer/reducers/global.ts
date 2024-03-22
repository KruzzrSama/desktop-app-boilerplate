import { createSlice } from "@reduxjs/toolkit";

const global = createSlice({
    name: "global",
    initialState: {
        test: "test"
    },
    reducers: {},
});

export const { } = global.actions;
export default global.reducer;