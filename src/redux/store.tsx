import { configureStore } from "@reduxjs/toolkit";
import { JapanApi } from './api/JapanApi'

export const store = configureStore({
    reducer: {
        [JapanApi.reducerPath]: JapanApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(JapanApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch