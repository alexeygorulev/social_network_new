import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Application from 'application';
import { createReduxStore } from 'utils/createReduxStore';

const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>;

const root = document.getElementById('root')!;
const app = (
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>
);

const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(app);
