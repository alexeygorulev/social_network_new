import SignIn from '../SignIn';
import { fieldsSignUp } from '../../SignUp/constants';
import { buttons, fieldsSignIn } from '../constants';
import { renderWithTheme } from 'utilsTests';
import { fireEvent, screen } from '@testing-library/react';

describe('Signing.tsx: ', () => {
  const mountMock = jest.fn();
  const unmountMock = jest.fn();
  const onCheckLoginUserMock = jest.fn();
  const changeStepMock = jest.fn();
  const handleChangeMock = jest.fn();
  const signUpStepMock = jest.fn();

  const valuesSignUp = Object.values(fieldsSignUp).reduce((result, item) => ({ ...result, [item]: '' }), {});

  const setUp = () => ({
    mount: mountMock,
    unmount: unmountMock,
    data: { valuesSignIn: { username: '', password: '' }, valuesSignUp },
    handleChange: handleChangeMock,
    isLoading: false,
    onCheckLoginUser: onCheckLoginUserMock,
    changeStep: changeStepMock,
    signUpStep: signUpStepMock,
  });

  afterEach(() => {
    handleChangeMock.mockClear();
    onCheckLoginUserMock.mockClear();
    changeStepMock.mockClear();
  });

  it('should match the snapshot', () => {
    const { data, signUpStep, handleChange, onCheckLoginUser, isLoading } = setUp();
    const { asFragment } = renderWithTheme(
      <SignIn
        data={data}
        changeStep={signUpStep}
        handleChange={handleChange}
        onCheckLoginUser={onCheckLoginUser}
        isLoading={isLoading}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('testing handleChange', () => {
    const { data, signUpStep, handleChange, onCheckLoginUser, isLoading } = setUp();

    renderWithTheme(
      <SignIn
        data={data}
        changeStep={signUpStep}
        handleChange={handleChange}
        onCheckLoginUser={onCheckLoginUser}
        isLoading={isLoading}
      />,
    );

    const usernameInput = screen.getByTestId(fieldsSignIn.username) as HTMLInputElement;
    fireEvent.change(usernameInput, { target: { value: 'asd' } });
    expect(handleChangeMock).toHaveBeenCalledWith({
      id: fieldsSignIn.username,
      value: 'asd',
      formattedValue: 'asd',
    });

    const passwordInput = screen.getByTestId(fieldsSignIn.password) as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: 'asd' } });
    expect(handleChangeMock).toHaveBeenCalledWith({
      id: fieldsSignIn.password,
      value: 'asd',
      formattedValue: 'asd',
    });
  });

  it('testing button click', () => {
    const { data, signUpStep, handleChange, onCheckLoginUser, isLoading } = setUp();

    renderWithTheme(
      <SignIn
        data={data}
        changeStep={signUpStep}
        handleChange={handleChange}
        onCheckLoginUser={onCheckLoginUser}
        isLoading={isLoading}
      />,
    );

    const buttonClick = screen.getByTestId(buttons.buttonLogin.id) as HTMLInputElement;
    fireEvent.click(buttonClick);
    expect(onCheckLoginUser).toHaveBeenCalledTimes(1);
  });

  it('should call changeStep when Span with cursor pointer is clicked', () => {
    const { data, signUpStep, handleChange, onCheckLoginUser, isLoading } = setUp();

    renderWithTheme(
      <SignIn
        data={data}
        changeStep={signUpStep}
        handleChange={handleChange}
        onCheckLoginUser={onCheckLoginUser}
        isLoading={isLoading}
      />,
    );

    const spanClick = screen.getByTestId('reg') as HTMLInputElement;
    fireEvent.click(spanClick);
    expect(signUpStep).toHaveBeenCalledTimes(1);
  });
});
