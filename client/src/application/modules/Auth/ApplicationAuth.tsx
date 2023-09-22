import { useEffect } from 'react';
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
import { fields, labels } from './constants';
import InputText from 'components/inputs/InputText';
import InputPassword from 'components/inputs/InputPassword';
import { useSendUserAuthDataMutation } from 'api/auth/store';

export default function ApplicationAuth(props: ComponentProps) {
  const { store, actions } = props;
  const { mounted, data } = store;
  const { mount, unmount, handleChange } = actions;

  const { block } = useTheme();
  const { generalColors, background } = block;

  const [sendUserAuthData, { isLoading }] = useSendUserAuthDataMutation();

  const onCheckLoginUser = async () => {
    await sendUserAuthData({ email: 'asd', password: 'asd' });
  };

  useEffect(() => {
    if (!mounted) mount();

    return () => {
      if (mounted) unmount();
    };
  }, [mounted]);

  if (!mounted) return null;

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
                <InputText
                  id={fields.username}
                  value={data.values[fields.username]}
                  onChange={handleChange}
                  label="Логин"
                />
              </Block>
              <Block margin="m">
                <InputPassword
                  id={fields.password}
                  value={data.values[fields.password]}
                  onChange={handleChange}
                  visible
                  label="Введите пароль"
                />
              </Block>
            </StyledAuthFormContainer>
        <button onClick={onCheckLoginUser}>фывфывфы</button>
          </Item>
        </Grid>

      </StyledContainer>
    </StyledAuthWrapper>
  );
}
