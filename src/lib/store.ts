// lib/store.ts
/* eslint-disable @typescript-eslint/no-explicit-any */

import { configureStore } from "@reduxjs/toolkit";
import { apiSlices } from "./apiSlices";

export const store = configureStore({
  reducer: apiSlices.reduce((acc, api) => {
    acc[api.reducerPath] = api.reducer;
    return acc;
  }, {} as any),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlices.map((api) => api.middleware)),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
