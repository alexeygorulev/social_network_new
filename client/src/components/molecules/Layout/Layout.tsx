import React, { useState, useMemo } from 'react';

import { LayoutProps } from './types';
import { StyledLayout } from './style';
import { LayoutContext } from './context';

import LayoutSide from './_internal/LayoutSide';
import LayoutMain from './_internal/LayoutMain';
import LayoutNavModal from './_internal/LayoutNavModal';
import { useTheme } from 'styled-components';

const Layout: React.FC<LayoutProps> = (props) => {
  const { navigation, children } = props;
  const theme = useTheme();

  //   const context = useMemo(
  //     () => ({
  //       home: navigation.home,
  //       auth: navigation.auth,
  //     }),
  //     [navigation.home, navigation.auth],
  //   );

  return (
    <StyledLayout theme={theme} auth={true} data-component="Layout">
      <LayoutContext.Provider value={''}>
        <LayoutMain>{children}</LayoutMain>
      </LayoutContext.Provider>
    </StyledLayout>
  );
};

export default Layout;
