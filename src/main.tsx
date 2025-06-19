
import App from './App';
import './assets/styles/global.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);