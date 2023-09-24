import React from 'react';

import { ButtonType, Display } from 'components/_themes/light/types';

export type Type = 'primary' | 'secondary' | 'outline' | 'link' | 'danger' | 'onPrimary';

export type Size = 's' | 'm' | 'l';

export type ButtonClickEventParams = Readonly<{
  id?: string;
}>;

export type ButtonProps = Readonly<{
  id?: string;
  type?: Type;
  size?: Size;
  width?: number | string;
  display?: Display;
  disabled?: boolean;
  loading?: boolean;
  rounded?: boolean;
  onClick?: (params: ButtonClickEventParams) => void;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type StyledButtonProps = Readonly<{
  theme: ButtonType;
  sType: Type;
  sSize: Size;
  sDisplay: Display;
  sWidth?: number | string;
  sDisabled?: boolean;
  sRounded?: boolean;
  sFocused?: boolean;
}>;

export type StyledButtonInnerProps = Readonly<{
  sLoading?: boolean;
}>;
