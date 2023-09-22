import styled from 'styled-components';

import getBrowser from 'utils/getBrowser';
import { StyledInputElement } from 'components/inputs/style';

import { StyledInputPasswordProps } from './types';

export function getInputPasswordType(hidden: boolean, autoComplete: boolean) {
  const browser = getBrowser();
  if (hidden && autoComplete) return 'password';
  if (!hidden) return 'text';
  if (['Safari', 'Chrome'].includes(browser)) return 'text';
  return 'password';
}

export function getInputPasswordAutoComplete(hidden: boolean, autoComplete: boolean) {
  if (autoComplete) return 'on';
  return hidden ? 'new-password' : 'off';
}

export const StyledInputPassword = styled(StyledInputElement).attrs<StyledInputPasswordProps>(
  (props: StyledInputPasswordProps) => ({
    type: getInputPasswordType(props.sHidden, props.sAutoComplete),
    autoComplete: getInputPasswordAutoComplete(props.sHidden, props.sAutoComplete),
    spellCheck: 'false',
    autoCorrect: 'off',
  }),
)<StyledInputPasswordProps>`
  -webkit-text-security: ${(props) => (props.sHidden ? 'disc' : 'none')};
`;
