import { useEffect } from 'react';
import { ComponentProps } from './types';
import { StyledAuthWrapper, StyledContainer, StyledImageAuthForm, StyledImageContainer } from './style';
import { useTheme } from 'styled-components';
import Grid, { Item } from 'components/atoms/Grid';
import { authSteps } from './constants';
import { useSendUserAuthDataMutation, useSubscribeUserMutation } from 'api/auth/store';
import { isMobile } from 'utils/isMobile';
import SignIn from './SignIn';
import { fieldsSignIn } from './SignIn/constants';
import SignUp from './SignUp';
import { fieldsSignUp } from './SignUp/constants';

export default function ApplicationAuth(props: ComponentProps) {
  const { store, actions } = props;
  const { mounted, data, step } = store;
  const { mount, unmount, handleChange, signInStep, signUpStep } = actions;

  const { block } = useTheme();
  const { generalColors, background } = block;

  const [sendUserAuthData, { isLoading: isLoadingAuth }] = useSendUserAuthDataMutation();

  const [subscribeUser, { isLoading: isLoadingReg }] = useSubscribeUserMutation();

  const onCheckLoginUser = async () => {
    await sendUserAuthData({
      login: data.valuesSignIn[fieldsSignIn.username],
      password: data.valuesSignIn[fieldsSignIn.password],
    });
  };

  const onSubscribeUser = async () => {
    const userData = Object.keys(fieldsSignUp).reduce(
      (prev, item) => ({ ...prev, [item]: data.valuesSignUp[item] }),
      {},
    );
    console.log(userData);

    await subscribeUser(userData);
  };

  const mobileScreen = isMobile.screenSize();
  const visible = {
    signIn: step === authSteps.signIn,
    signUp: step === authSteps.signUp,
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
      <StyledContainer mobileScreen={mobileScreen} colors={generalColors}>
        <Grid spacing="s" size={12} noWrap>
          {!mobileScreen && (
            <Item size={6}>
              <StyledImageContainer>
                <StyledImageAuthForm src={background.authFormBackground}></StyledImageAuthForm>
              </StyledImageContainer>
            </Item>
          )}
          <Item size={mobileScreen ? 12 : 6}>
            {visible.signIn && (
              <SignIn
                data={data}
                changeStep={signUpStep}
                handleChange={handleChange}
                onCheckLoginUser={onCheckLoginUser}
                isLoading={isLoadingAuth}
              />
            )}
            {visible.signUp && <SignUp handleSubscribe={onSubscribeUser} data={data} handleChange={handleChange} />}
          </Item>
        </Grid>
      </StyledContainer>
    </StyledAuthWrapper>
  );
}
