import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

import { StyledInput, StyledInputLabel, StyledInputIcon } from 'components/inputs/style';
import { getCaretPosition } from 'components/inputs/utils';
import { formatTextValue, deformatTextValue } from 'components/inputs/InputText/utils';

import IconEyeOpen from 'components/icons/IconEyeOpen';
import IconEyeClosed from 'components/icons/IconEyeClosed';

import { InputPasswordProps } from './types';
import { StyledInputPassword } from './style';
import { useTheme } from 'styled-components';

const InputPassword: React.FC<InputPasswordProps> = (props) => {
  const {
    id,
    size = 'm',
    error = false,
    disabled = false,
    onFocus = () => null,
    onBlur = () => null,
    onChange = () => null,
    handleLogin = () => null,
    value,
    label,
    width = '100%',
    autoFocus = false,
    textAlign = 'left',
    autoComplete = false,
    maxLength,
    format = formatTextValue,
    deformat = deformatTextValue,
    visible = false,
  } = props;

  const [focused, setFocused] = useState(false);
  const [prevValue, setPrevValue] = useState(null);
  const [formattedValue, setFormattedValue] = useState('');
  const [caretPosition, setCaretPosition] = useState(null);
  const [disallowBlurFlag, setDisallowBlurFlag] = useState(false);
  const [hidden, setHidden] = useState(true);

  const inputNode = useRef(null);
  const { input } = useTheme();

  const handleFocus = () => {
    setFocused(true);
    onFocus({ id, value, formattedValue });
  };

  const handleBlur = useCallback(() => {
    if (disallowBlurFlag) return;
    setFocused(false);
    setCaretPosition(null);
    onBlur({ id, value, formattedValue });
  }, [disallowBlurFlag, formattedValue, id, onBlur, value]);

  const handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
    const eValue = e.currentTarget.value;

    const fValue = format(eValue, maxLength);
    const dfValue = deformat(fValue);

    const beforeCaretPosValue = deformat(eValue.substring(0, e.currentTarget.selectionEnd));
    setCaretPosition(getCaretPosition(fValue, beforeCaretPosValue, 0));
    setPrevValue(dfValue);
    setFormattedValue(fValue);

    onChange({ id, value: dfValue, formattedValue: fValue });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
    setCaretPosition(null);
  };

  const disallowBlur = () => {
    setDisallowBlurFlag(true);
  };

  const allowBlur = () => {
    if (disallowBlurFlag) {
      setDisallowBlurFlag(false);
      inputNode.current.focus();
    }
  };

  const handleToggleHidden = () => {
    if (!disabled) setHidden(!hidden);
  };

  useEffect(() => {
    if (autoFocus) inputNode.current.focus();
  }, [autoFocus]);

  useEffect(() => {
    if (disabled && focused) handleBlur();
  }, [disabled, focused, handleBlur]);

  useEffect(() => {
    if (value !== prevValue) {
      setFormattedValue(format(value, maxLength));
      setPrevValue(value);
    }
  }, [format, maxLength, prevValue, value]);

  useEffect(() => {
    if (caretPosition !== null) {
      inputNode.current.setSelectionRange(caretPosition, caretPosition);
    }
  });

  const smallLabel = useMemo(() => focused || !!value, [focused, value]);
  const withIcon = useMemo(() => visible && !disabled, [visible, disabled]);

  return (
    <StyledInput sWidth={width}>
      <StyledInputPassword
        ref={inputNode}
        as="input"
        id={id}
        data-testid={id}
        value={formattedValue}
        maxLength={maxLength}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        sSize={size}
        sTextAlign={textAlign}
        sAutoComplete={autoComplete}
        sDisabled={disabled}
        sFocused={focused}
        sError={error}
        sWithLabel={!!label && smallLabel}
        sWithIcon={withIcon}
        sHidden={hidden || disabled}
        theme={input}
      />
      {label && (
        <StyledInputLabel
          theme={input}
          sSize={size}
          sSmall={smallLabel}
          sError={error}
          sDisabled={disabled}
          sFocused={focused}
        >
          {label}
        </StyledInputLabel>
      )}
      {withIcon && (
        <StyledInputIcon
          sSize={size}
          sClickable
          sDisabled={disabled}
          onMouseDown={disallowBlur}
          onMouseUp={allowBlur}
          onClick={handleToggleHidden}
        >
          {hidden && <IconEyeClosed display="block" size={size} />}
          {!hidden && <IconEyeOpen display="block" size={size} />}
        </StyledInputIcon>
      )}
    </StyledInput>
  );
};

export default InputPassword;
