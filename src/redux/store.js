import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import authSlice from "./auth/slice";
import { postsSlice } from "./posts/slice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice.reducer),
    posts: postsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
