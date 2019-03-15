import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';

import { AppContainer } from './App';

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.querySelector('#app')
);
