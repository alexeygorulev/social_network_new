import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

import { StyledInput, StyledInputLabel } from 'components/inputs/style';
import { getCaretPosition } from 'components/inputs/utils';

import { InputTextProps } from './types';
import { formatTextValue, deformatTextValue } from './utils';
import { StyledInputText } from './style';
import { useTheme } from 'styled-components';

const InputText: React.FC<InputTextProps> = (props) => {
  const {
    id,
    size = 'm',
    error = false,
    disabled = false,
    onFocus = () => null,
    onBlur = () => null,
    onChange = () => null,
    value,
    label,
    width = '100%',
    autoFocus = false,
    success = false,
    clearable = false,
    textAlign = 'left',
    autoComplete = false,
    maxLength,
    format = formatTextValue,
    deformat = deformatTextValue,
    autosize = false,
    inputMode = 'text',
  } = props;

  const [focused, setFocused] = useState(false);
  const [prevValue, setPrevValue] = useState(null);
  const [formattedValue, setFormattedValue] = useState('');
  const [caretPosition, setCaretPosition] = useState(null);

  const inputNode = useRef(null);
  const { input } = useTheme();
  const handleFocus = () => {
    setFocused(true);
    onFocus({ id, value, formattedValue });
  };

  const handleBlur = useCallback(() => {
    setFocused(false);
    setCaretPosition(null);
    onBlur({ id, value, formattedValue });
  }, [formattedValue, id, onBlur, value]);

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

  const handleKeyDown = () => {
    setCaretPosition(null);
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
  const successIcon = useMemo(() => success && !disabled && !focused, [success, disabled, focused]);
  const clearableIcon = useMemo(
    () => clearable && !!value && focused && !disabled,
    [clearable, value, focused, disabled],
  );
  const withIcon = useMemo(() => successIcon || clearableIcon, [successIcon, clearableIcon]);

  return (
    <StyledInput sWidth={width}>
      {!autosize && (
        <StyledInputText
          ref={inputNode}
          as="input"
          inputMode={inputMode}
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
          theme={input}
        />
      )}

      {label && (
        <StyledInputLabel
          sSize={size}
          sSmall={smallLabel}
          sError={error}
          sDisabled={disabled}
          sFocused={focused}
          theme={input}
        >
          {label}
        </StyledInputLabel>
      )}
    </StyledInput>
  );
};

export default InputText;
