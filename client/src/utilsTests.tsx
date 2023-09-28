import React from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import themes, { THEMES } from 'components/_themes';
import { render } from '@testing-library/react';
import isPropValid from '@emotion/is-prop-valid';
import { Provider } from 'react-redux';
import authReducer from 'application/modules/Auth/store';
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from 'api/auth/store';

const defaultStore = configureStore({
  reducer: {
    authReducer: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export const renderWithTheme = (children: React.ReactNode, store = defaultStore, theme = themes[THEMES.LIGHT]) =>
  render(
    <Provider store={store}>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyleSheetManager>
    </Provider>,
  );
