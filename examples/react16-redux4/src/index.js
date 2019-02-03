import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import KeplerGl from 'kepler.gl';

ReactDOM.render(
  (
    <Provider store={store}>
      <KeplerGl id='map' />
    </Provider>
  ),
  document.getElementById('app')
);

module.hot.accept();
