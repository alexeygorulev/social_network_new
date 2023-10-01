import { authSteps } from '../constants';
import authReducer, { mount, unmount, handleChange, signInStep, signUpStep } from '../store';
import { IAuthInitialState } from '../types';

const initialState: IAuthInitialState = {
  mounted: false,
  data: {
    valuesSignIn: {
      email: '',
      password: '',
    },
    valuesSignUp: {
      username: '',
      email: '',
      password: '',
    },
  },
  step: authSteps.signIn,
};

describe('authReducer', () => {
  it('should handle mount', () => {
    const action = mount();
    const state = authReducer(initialState, action);
    expect(state.mounted).toBe(true);
  });

  it('should handle unmount', () => {
    const action = unmount();
    const state = authReducer(initialState, action);
    expect(state.mounted).toBe(false);
  });

  it('should handle signInStep', () => {
    const action = signInStep();
    const state = authReducer(initialState, action);
    expect(state.step).toBe('signIn');
  });

  it('should handle signUpStep', () => {
    const action = signUpStep();
    const state = authReducer(initialState, action);
    expect(state.step).toBe('signUp');
  });

  it('should handle handleChange for signUp', () => {
    const action = handleChange({ id: 'email', value: 'test@email.com' });
    const state = authReducer(initialState, action);
    expect(state.data.valuesSignUp.email).toBe('test@email.com');
  });

  it('should handle handleChange for signIn', () => {
    const action = handleChange({ id: 'username', value: 'testuser' });
    const state = authReducer(initialState, action);
    expect(state.data.valuesSignIn.username).toBe('testuser');
  });
});
