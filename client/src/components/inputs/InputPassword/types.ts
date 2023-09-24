import { TextAlign } from 'components/_themes/light/types';
import { InputProps } from 'components/inputs/types';

export type InputPasswordProps = Readonly<{
  value?: string;
  label?: string;
  width?: number | string;
  autoFocus?: boolean;
  success?: boolean;
  clearable?: boolean;
  textAlign?: TextAlign;
  autoComplete?: boolean;
  maxLength?: number;
  format?: (value?: string, maxLength?: number) => string;
  deformat?: (value?: string) => string;
  handleLogin: () => void;
  autosize?: boolean;
  visible?: boolean;
}> &
  InputProps;

export type StyledInputPasswordProps = Readonly<{
  sAutoComplete?: boolean;
  sHidden?: boolean;
}>;
