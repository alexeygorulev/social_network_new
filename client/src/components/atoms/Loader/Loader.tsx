import React from 'react';

import { LoaderProps } from './types';
import { StyledLoaderWrapper, StyledLoader, StyledLoaderCircle, StyledLoaderDots } from './style';
import { useTheme } from 'styled-components';

const Loader: React.FC<LoaderProps> = (props) => {
  const { size = 'm', display = 'block', type = 'circle', centered } = props;

  const { loader } = useTheme();

  const renderLoaderCircle = () => (
    <StyledLoaderCircle theme={loader}>
      <div />
    </StyledLoaderCircle>
  );

  const renderLoaderDots = () => (
    <StyledLoaderDots theme={loader}>
      <div />
      <div />
      <div />
      <div />
    </StyledLoaderDots>
  );

  if (centered) {
    return (
      <StyledLoaderWrapper>
        <StyledLoader theme={loader} data-component="Loader" sSize={size} sType={type} sDisplay={display}>
          {type === 'circle' && renderLoaderCircle()}
          {type === 'dots' && renderLoaderDots()}
        </StyledLoader>
      </StyledLoaderWrapper>
    );
  }

  return (
    <StyledLoader theme={loader} data-component="Loader" sSize={size} sType={type} sDisplay={display}>
      {type === 'circle' && renderLoaderCircle()}
      {type === 'dots' && renderLoaderDots()}
    </StyledLoader>
  );
};

export default Loader;
