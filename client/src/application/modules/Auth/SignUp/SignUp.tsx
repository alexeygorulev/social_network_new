import Block from 'components/atoms/Block';
import InputText from 'components/inputs/InputText';
import { InputItem, SignUpProps } from './type';
import { fieldsSignUp, labels, titles } from './constants';
import { StyledAuthFormContainer } from '../style';
import Button from 'components/atoms/Button';

const SignUp = (props: SignUpProps) => {
  const { handleChange, data, handleSubscribe } = props;
  const inputArray = Object.keys(fieldsSignUp).reduce(
    (result, item) => [...result, { id: item, label: labels[item], value: data.valuesSignUp[item] }],
    [],
  );

  return (
    <StyledAuthFormContainer registration>
      <Block textAlign="center">{titles.main}</Block>
      {inputArray.map((input: InputItem) => (
        <Block key={input.id} margin="s">
          <InputText id={input.id} label={input.label} value={input.value} onChange={handleChange} />
        </Block>
      ))}
      <Block margin="l" textAlign="center">
        <Button onClick={handleSubscribe}>{titles.button}</Button>
      </Block>
    </StyledAuthFormContainer>
  );
};

export default SignUp;
