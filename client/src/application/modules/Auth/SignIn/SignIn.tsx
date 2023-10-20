import Block from 'components/atoms/Block';
import Span from 'components/atoms/Span';
import { StyledAuthFormContainer } from '../style';
import InputText from 'components/inputs/InputText';
import InputPassword from 'components/inputs/InputPassword';
import Button from 'components/atoms/Button';
import { SignInProps } from './type';
import { buttons, labels } from './constants';
import { fieldsSignIn } from '../constants';

export const SignIn = (props: SignInProps) => {
  const { data, handleChange, isLoading, onCheckLoginUser, changeStep } = props;

  return (
    <>
      <Block margin="l" textAlign="center">
        <Span>{labels.sigIn}</Span>
      </Block>
      <StyledAuthFormContainer>
        <Block textAlign="center">
          <InputText
            id={fieldsSignIn.username}
            value={data.valuesSignIn[fieldsSignIn.username]}
            onChange={handleChange}
            label={labels.login}
          />
        </Block>
        <Block margin="m">
          <InputPassword
            id={fieldsSignIn.password}
            value={data.valuesSignIn[fieldsSignIn.password]}
            onChange={handleChange}
            visible
            label={labels.password}
            handleLogin={onCheckLoginUser}
          />
        </Block>
      </StyledAuthFormContainer>
      <Block textAlign="center">
        <Button id={buttons.buttonLogin.id} loading={isLoading} width={200} onClick={onCheckLoginUser}>
          {labels.enterButton}
        </Button>
        <Block margin="m">
          <Span>{labels.forgetPassword}</Span>
          <Block>
            <Span
              data-testid="reg"
              style={{ cursor: 'pointer' }}
              onClick={() => changeStep()}
              size="m"
              fontWeight="bold"
            >
              {labels.sigUp}
            </Span>
          </Block>
        </Block>
      </Block>
    </>
  );
};

export default SignIn;
