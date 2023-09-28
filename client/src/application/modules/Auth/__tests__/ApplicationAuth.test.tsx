import { apiSlice } from 'api/auth/store';
import ApplicationAuth from '../ApplicationAuth';
import authReducer from '../store';
import { configureStore } from '@reduxjs/toolkit';
import { renderWithTheme } from 'utilsTests';

const store = configureStore({
  reducer: {
    authReducer: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

describe('ApplicationAuth.tsx', () => {
  it('renders without crashing', () => {
    renderWithTheme(<ApplicationAuth />, store);
  });
});
