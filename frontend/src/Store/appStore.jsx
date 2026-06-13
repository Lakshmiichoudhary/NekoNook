import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import { combineReducers } from "redux";

import useReducer from "./UserSlice";
import toggleReducer from "./Toggle";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";

// 1. Combine all your reducers
const rootReducer = combineReducers({
  user: useReducer,
  arrow: toggleReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});

// 2. Configure persistence settings
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist"], // ONLY persist cart and wishlist. Add "user" here if needed.
};

// 3. Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure the store with middleware setup to prevent serialization errors
const appStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(appStore);
export default appStore;