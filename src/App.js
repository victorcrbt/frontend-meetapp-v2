import React from 'react';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalStyles from './styles/global';

import Routes from './routes/index';
import history from './services/history';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />

          <GlobalStyles />
          <ToastContainer autoClose={3000} position="top-center" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
