import React from 'react';
import "./assets/styles/global.scss";
import ReactDOM from 'react-dom/client';
import App from './App'
import { Provider } from 'react-redux';
import { store,persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
