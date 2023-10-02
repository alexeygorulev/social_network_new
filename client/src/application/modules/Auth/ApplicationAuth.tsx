import { useEffect, useMemo } from 'react';
import { StyledAuthWrapper, StyledContainer, StyledImageAuthForm, StyledImageContainer } from './style';
import { useTheme } from 'styled-components';
import Grid, { Item } from 'components/atoms/Grid';
import { authSteps } from './constants';
import { mount, unmount, handleChange, signInStep, signUpStep } from './store';
import { isMobile } from 'utils/isMobile';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useSelector } from 'react-redux';
import { useActions } from 'application/hooks/useActions';
import { RootState } from 'main';
import { useAuthLogic } from '../../hooks/useAuthLogic';

export default function ApplicationAuth() {
  const { mounted, data, step } = useSelector((state: RootState) => state?.authReducer) || {};
  const actions = useActions({ mount, unmount, handleChange, signInStep, signUpStep });

  const { block } = useTheme();
  const { generalColors, background } = block ?? {};

  const { token, onCheckLoginUser, isLoadingAuth, onSubscribeUser } = useAuthLogic(data);

  const mobileScreen = isMobile.screenSize();

  const shouldRenderSignIn = useMemo(() => step === authSteps.signIn, [step]);
  const shouldRenderSignUp = useMemo(() => step === authSteps.signUp, [step]);

  useEffect(() => {
    if (!mounted) actions.mount();

    return () => {
      if (mounted) actions.unmount();
    };
  }, [mounted]);

  if (!mounted || !!token) return null;

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
            {shouldRenderSignIn && (
              <SignIn
                data={data}
                changeStep={actions.signUpStep}
                handleChange={actions.handleChange}
                onCheckLoginUser={onCheckLoginUser}
                isLoading={isLoadingAuth}
              />
            )}
            {shouldRenderSignUp && (
              <SignUp
                handleSubscribe={onSubscribeUser}
                changeStep={actions.signInStep}
                data={data}
                handleChange={actions.handleChange}
              />
            )}
          </Item>
        </Grid>
      </StyledContainer>
    </StyledAuthWrapper>
  );
}
