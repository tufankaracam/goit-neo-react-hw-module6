import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsSlice from "./contactsSlice";
import filtersSlice from "./filtersSlice";

const persistConfig = {
  key: "contacts",
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsSlice);

const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
