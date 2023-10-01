import ApplicationAuth from '../ApplicationAuth';
import { renderWithTheme } from 'utilsTests';
import { createReduxStore } from 'utils/createReduxStore';
import { fieldsSignIn } from '../SignIn/constants';
import { fireEvent, screen } from '@testing-library/dom';
import { renderHook } from '@testing-library/react';
import { useAuthLogic } from 'application/hooks/useAuthLogic';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import * as authStore from 'api/auth/store';
import { authSteps } from '../constants';
import { titles } from '../SignUp/constants';

const mockData = {
  valuesSignIn: {
    username: 'test',
    password: 'password',
  },
  valuesSignUp: {
    username: 'test',
    email: 'test@email.com',
    password: 'password',
  },
};

describe('ApplicationAuth.tsx', () => {
  beforeEach(() => {
    jest
      .spyOn(authStore, 'useSendUserAuthDataMutation')
      .mockImplementation(() => [
        jest.fn().mockResolvedValue({ data: 'fake_token' }),
        { isLoading: false, reset: jest.fn() },
      ]);
    jest
      .spyOn(authStore, 'useSubscribeUserMutation')
      .mockImplementation(() => [
        jest.fn().mockResolvedValue({ data: 'fake_token' }),
        { isLoading: false, reset: jest.fn() },
      ]);
  });
  it('renders without crashing', () => {
    const store = createReduxStore();
    const { asFragment } = renderWithTheme(<ApplicationAuth />, store);
    expect(store.getState().authReducer.mounted).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });

  it('testing handleChange login ', () => {
    const store = createReduxStore();
    renderWithTheme(<ApplicationAuth />, store);

    const usernameInput = screen.getByTestId(fieldsSignIn.username) as HTMLInputElement;
    fireEvent.change(usernameInput, { target: { value: 'asd' } });
    const { authReducer } = store.getState();
    expect(authReducer.data.valuesSignIn.username).toBe('asd');
    expect(authReducer.data.valuesSignIn.password).toBe('');
  });

  it('testing handleChange password ', () => {
    const store = createReduxStore();
    renderWithTheme(<ApplicationAuth />, store);

    const passwordInput = screen.getByTestId(fieldsSignIn.password) as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: 'asd' } });
    const { authReducer } = store.getState();

    expect(authReducer.data.valuesSignIn.password).toBe('asd');
    expect(authReducer.data.valuesSignIn.username).toBe('');
  });
  it('useAuthLogic', async () => {
    const store = createReduxStore();
    const wrapper = ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>;

    const { result } = renderHook(() => useAuthLogic(mockData), { wrapper });
    await act(async () => {
      await result.current.onCheckLoginUser();
    });

    expect(result.current.token).toBe('fake_token');
  });

  it('testing change page', () => {
    const store = createReduxStore();
    renderWithTheme(<ApplicationAuth />, store);
    act(() => fireEvent.click(screen.getByTestId('reg')));
    expect(store.getState().authReducer.step).toBe(authSteps.signUp);
    expect(screen.getByText(titles.main)).toBeInTheDocument();
  });
});
