import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from 'api/auth/store';
import authReducer from 'application/modules/Auth/store';

export const createReduxStore = () =>
  configureStore({
    reducer: {
      authReducer: authReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  });
