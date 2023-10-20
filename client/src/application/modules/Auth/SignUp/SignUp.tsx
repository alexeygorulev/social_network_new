import Block from 'components/atoms/Block';
import InputText from 'components/inputs/InputText';
import { InputItem, SignUpProps } from './type';
import { labels, titles } from './constants';
import { StyledAuthFormContainer } from '../style';
import Button from 'components/atoms/Button';
import IconArrowLeft from 'components/icons/IconArrowLeft';
import { StyledBackToAuthIcon } from './styles';
import { fieldsSignUp } from '../constants';

const SignUp = (props: SignUpProps) => {
  const { handleChange, data, handleSubscribe, changeStep } = props;
  const inputArray = Object.keys(fieldsSignUp).reduce(
    (result, item) => [...result, { id: item, label: labels[item], value: data.valuesSignUp[item] }],
    [],
  );

  return (
    <StyledAuthFormContainer registration>
      <StyledBackToAuthIcon data-testid="auth" onClick={() => changeStep()}>
        <IconArrowLeft />
      </StyledBackToAuthIcon>
      <Block textAlign="center">{titles.main}</Block>
      {inputArray.map((input: InputItem) => (
        <Block key={input.id} margin="s">
          <InputText id={input.id} label={input.label} value={input.value} onChange={handleChange} />
        </Block>
      ))}
      <Block margin="l" textAlign="center">
        <Button id="submit" onClick={handleSubscribe}>
          {titles.button}
        </Button>
      </Block>
    </StyledAuthFormContainer>
  );
};

export default SignUp;
