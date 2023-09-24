import React from 'react';

import { SpanProps } from './types';
import { StyledSpan } from './style';
import { useTheme } from 'styled-components';

const Span: React.FC<SpanProps> = (props) => {
  const { size, font, color, fontWeight, fontStyle, digital, children, ...rest } = props;
  const { span } = useTheme();

  return (
    <StyledSpan
      data-component="Span"
      {...rest}
      sSize={size}
      sFont={font}
      sColor={color}
      sFontWeight={fontWeight}
      sFontStyle={fontStyle}
      sDigital={digital}
      theme={span}
    >
      {children}
    </StyledSpan>
  );
};

export default Span;
