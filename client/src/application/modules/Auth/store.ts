import { createSlice } from '@reduxjs/toolkit';
import { IAuthInitialState } from './types';
import { fields } from './constants';

const values = Object.values(fields).reduce((result, item) => ({ ...result, [item]: '' }), {});

const initialState: IAuthInitialState = { mounted: false, data: { values } };

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
    handleChange: (state, actions) => {
      const { id, value } = actions.payload;
      if (!id) return;
      state.data.values[id] = value;
    },
  },
});

export const { mount, unmount, handleChange } = authReducer.actions;
export default authReducer.reducer;
