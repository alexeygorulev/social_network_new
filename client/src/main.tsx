import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import someReducer from 'application/store';
import { Provider } from 'react-redux';
import App from 'application/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = configureStore({
  reducer: {
    someReducer: someReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
