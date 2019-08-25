import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import GlobalStyles from './styles/global';

import Routes from './routes/index';
import history from './services/history';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />

        <GlobalStyles />
      </Router>
    </Provider>
  );
}

export default App;
