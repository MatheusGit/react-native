import {
  createStore,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import React from 'react';

import { middleware } from './src/utils/redux'
import appReducer from './src/reducers'
import AppWithNavigationState from './src/navigators/AppNavigator'

const store = createStore(
  appReducer,
  applyMiddleware(middleware),
);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}