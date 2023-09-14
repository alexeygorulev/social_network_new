import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import someReducer from 'application/store';
import { Provider } from 'react-redux';
import Application from 'application';
import authReducer from 'application/modules/Auth/store';

const store = configureStore({
  reducer: {
    someReducer: someReducer,
    authReducer: authReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>,
);
