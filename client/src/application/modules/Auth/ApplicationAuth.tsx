import React, { useEffect } from 'react';
import { ComponentProps } from './types';
import Block from 'components/atoms/Block';
import {
  StyledAuthFormContainer,
  StyledAuthWrapper,
  StyledContainer,
  StyledImageAuthForm,
  StyledImageContainer,
} from './style';
import { useTheme } from 'styled-components';
import Grid, { Item } from 'components/atoms/Grid';
import { labels } from './constants';
import InputText from 'components/inputs/InputText';

export default function ApplicationAuth(props: ComponentProps) {
  const { store, actions } = props;
  const { mounted } = store;
  const { mount, unmount } = actions;

  const { block } = useTheme();
  const { generalColors, gradients, background } = block;

  useEffect(() => {
    if (!mounted) mount();

    return () => {
      if (mounted) unmount();
    };
  }, [mounted, mount, unmount]);

  if (!mounted) return null;
  console.log(background);

  return (
    <StyledAuthWrapper>
      <StyledContainer colors={generalColors}>
        <Grid spacing="s" size={12} noWrap>
          <Item size={6}>
            <StyledImageContainer>
              <StyledImageAuthForm src={background.authFormBackground}></StyledImageAuthForm>
            </StyledImageContainer>
          </Item>
          <Item size={6}>
            <Block margin="l" textAlign="center">
              {labels.logIn}
            </Block>
            <StyledAuthFormContainer>
              <Block textAlign="center">
                <InputText label="Логин" />
              </Block>
              <Block margin="m">
                <InputText label="Введите пароль" />
              </Block>
            </StyledAuthFormContainer>
          </Item>
        </Grid>
      </StyledContainer>
    </StyledAuthWrapper>
  );
}
