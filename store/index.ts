import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import assetReducer from "./slices/assetSlice";
import searchReducer from "./slices/searchSlice";
import roleReducer from "./slices/roleSlice";

export const store = configureStore({
  reducer: {
    assets: assetReducer,
    search: searchReducer,
    roles: roleReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
