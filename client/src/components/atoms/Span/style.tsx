import styled from 'styled-components';

import { StyledSpanProps } from './types';
import { media, mediaSizes } from 'components/_themes/constants';

function getFontFamily(props: StyledSpanProps) {
  const { theme } = props;
  if (!props.sFont) return 'inherit';
  return theme.font[props.sFont];
}

function getColor(props: StyledSpanProps) {
  const { theme } = props;
  if (!props.sColor) return 'inherit';
  return theme.color[props.sColor];
}

function getFontSize(props: StyledSpanProps, mediaSize: string) {
  const { theme } = props;
  if (!props.sSize) return 'inherit';
  return `${theme.size[mediaSize][props.sSize]}px`;
}

function getLineHeight(props: StyledSpanProps, mediaSize: string) {
  const { theme } = props;
  if (!props.sSize) return 'inherit';
  return `${theme.lineHeight[mediaSize][props.sSize]}px`;
}

function getFontWeight(props: StyledSpanProps) {
  const { theme } = props;
  if (!props.sFontWeight) return 'inherit';
  return theme.fontWeight[props.sFontWeight];
}

function getFontStyle(props: StyledSpanProps) {
  const { theme } = props;
  if (!props.sFontStyle) return 'inherit';
  return theme.fontStyle[props.sFontStyle];
}

export const StyledSpan = styled.span<StyledSpanProps>`
  font-family: ${(props) => getFontFamily(props)};
  color: ${(props) => getColor(props)};
  font-style: ${(props) => getFontStyle(props)};
  font-weight: ${(props) => getFontWeight(props)};
  font-size: ${(props) => getFontSize(props, mediaSizes.s)};
  line-height: ${(props) => getLineHeight(props, mediaSizes.s)};
  font-variant-numeric: ${(props) => (props.sDigital ? 'tabular-nums' : 'inherit')};

  @media (${media.tablet}) {
    font-size: ${(props) => getFontSize(props, mediaSizes.m)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    font-size: ${(props) => getFontSize(props, mediaSizes.l)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.l)};
  }
`;
