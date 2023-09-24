import { createSlice } from '@reduxjs/toolkit';
import { IAuthInitialState } from './types';
import { authSteps } from './constants';
import { fieldsSignIn } from './SignIn/constants';
import { fieldsSignUp } from './SignUp/constants';

const valuesSignIn = Object.values(fieldsSignIn).reduce((result, item) => ({ ...result, [item]: '' }), {});

const valuesSignUp = Object.values(fieldsSignUp).reduce((result, item) => ({ ...result, [item]: '' }), {});

const initialState: IAuthInitialState = {
  mounted: false,
  data: { valuesSignIn, valuesSignUp },
  step: 'signIn',
};

export const authReducer = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    mount: (state) => {
      state.mounted = true;
    },
    unmount: (state) => {
      state.mounted = false;
    },

    signInStep: (state) => {
      state.step = authSteps.signIn;
    },

    signUpStep: (state) => {
      state.step = authSteps.signUp;
    },

    handleChange: (state, actions) => {
      const { id, value } = actions.payload;
      if (!id) return;

      if (fieldsSignIn[id]) state.data.valuesSignIn[id] = value;
      if (fieldsSignUp[id]) state.data.valuesSignUp[id] = value;
    },
  },
});

export const { mount, unmount, handleChange, signInStep, signUpStep } = authReducer.actions;
export default authReducer.reducer;
