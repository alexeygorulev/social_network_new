import SignUp from '../SignUp';
import { fieldsSignUp } from '../constants';
import { renderWithTheme } from 'utilsTests';
import { fireEvent, screen } from '@testing-library/react';

describe('SignUp.tsx: ', () => {
  const mountMock = jest.fn();
  const unmountMock = jest.fn();
  const onCheckLoginUserMock = jest.fn();
  const onSubscribeUserMock = jest.fn();
  const changeStepMock = jest.fn();
  const handleChangeMock = jest.fn();
  const signUpStepMock = jest.fn();
  const signInStepMock = jest.fn();

  const valuesSignUp = Object.values(fieldsSignUp).reduce((result, item) => ({ ...result, [item]: '' }), {});

  const setUp = () => ({
    mount: mountMock,
    unmount: unmountMock,
    data: { valuesSignIn: { username: '', password: '' }, valuesSignUp },
    handleChange: handleChangeMock,
    isLoading: false,
    onCheckLoginUser: onCheckLoginUserMock,
    onSubscribeUser: onSubscribeUserMock,
    changeStep: changeStepMock,
    signUpStep: signUpStepMock,
    signInStep: signInStepMock,
  });

  afterEach(() => {
    handleChangeMock.mockClear();
    onCheckLoginUserMock.mockClear();
    changeStepMock.mockClear();
  });

  it('should match the snapshot', () => {
    const { data, signUpStep, handleChange, onSubscribeUser } = setUp();
    const { asFragment } = renderWithTheme(
      <SignUp data={data} changeStep={signUpStep} handleChange={handleChange} handleSubscribe={onSubscribeUser} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('testing handleChange', () => {
    const { data, signUpStep, handleChange, onSubscribeUser } = setUp();

    renderWithTheme(
      <SignUp data={data} changeStep={signUpStep} handleChange={handleChange} handleSubscribe={onSubscribeUser} />,
    );

    const emailInput = screen.getByTestId(fieldsSignUp.email) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'asd' } });
    expect(handleChangeMock).toHaveBeenCalledWith({
      id: fieldsSignUp.email,
      value: 'asd',
      formattedValue: 'asd',
    });
  });

  it('testing button click', () => {
    const { data, signUpStep, handleChange, onSubscribeUser } = setUp();

    renderWithTheme(
      <SignUp data={data} changeStep={signUpStep} handleChange={handleChange} handleSubscribe={onSubscribeUser} />,
    );

    const buttonClick = screen.getByTestId('submit') as HTMLInputElement;
    fireEvent.click(buttonClick);
    expect(onSubscribeUser).toHaveBeenCalledTimes(1);
  });

  it('should call changeStep when Span with cursor pointer is clicked', () => {
    const { data, signInStep, handleChange, onSubscribeUser } = setUp();

    renderWithTheme(
      <SignUp data={data} changeStep={signInStep} handleChange={handleChange} handleSubscribe={onSubscribeUser} />,
    );

    const spanClick = screen.getByTestId('auth') as HTMLInputElement;
    fireEvent.click(spanClick);
    expect(signInStep).toHaveBeenCalledTimes(1);
  });
});
