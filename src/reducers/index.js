import { combineReducers } from 'redux';
import { NavigationActions, createStackNavigator } from 'react-navigation';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { AppNavigator } from '../navigators/AppNavigator';

const navReducer = createNavigationReducer(AppNavigator);

const initialAuthState = { msg: 'Abrir Drawer' };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const appReducer = combineReducers({
  nav: navReducer, 
  auth
});

export default appReducer;
