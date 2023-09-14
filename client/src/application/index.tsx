import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import Component from './Application';
import themes, { THEMES } from 'components/_themes';

const Application: React.FC = () => {
  return (
    <BrowserRouter>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <ThemeProvider theme={themes[THEMES.LIGHT]}>
          <Component />
        </ThemeProvider>
      </StyleSheetManager>
    </BrowserRouter>
  );
};

export default Application;
