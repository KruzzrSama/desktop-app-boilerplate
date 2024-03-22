import { configureStore } from '@reduxjs/toolkit'
import global from "./global";
export const store = configureStore({
    reducer: {
        global,
        // test
    },
    middleware: (m) => m({
        serializableCheck: false
    })
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;