import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { combineReducers } from '@reduxjs/toolkit';
// import { sliceContact } from './slice/sliceContact';
// import { sliceFilter } from './slice/sliceFilter';

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice/sliceContact';
import { filterReducer } from './slice/sliceFilter';
import { authReducer } from './slice/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  // blacklist: ['filter'],
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// const rootReducer = combineReducers({
//   contact: sliceContact.reducer,
//   filter: sliceFilter.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const persistor = persistStore(store);
