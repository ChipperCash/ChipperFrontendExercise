import React from 'react';
import {Provider} from 'react-redux';
import {App} from './App';

import {store} from './store';

export const Entry = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
