import React from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import themes, { THEMES } from 'components/_themes';
import { render } from '@testing-library/react';
import isPropValid from '@emotion/is-prop-valid';
import { Provider } from 'react-redux';
import { createReduxStore } from 'utils/createReduxStore';

const defaultStore = createReduxStore();

export const renderWithTheme = (children: React.ReactNode, store = defaultStore, theme = themes[THEMES.LIGHT]) =>
  render(
    <Provider store={store}>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyleSheetManager>
    </Provider>,
  );
