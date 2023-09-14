import { createSlice } from '@reduxjs/toolkit';
import { IAuthInitialState } from './types';

const initialState: IAuthInitialState = { mounted: false };

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
  },
});

export const { mount, unmount } = authReducer.actions;
export default authReducer.reducer;
