import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { addListener } from '../utils/redux';
import { createDrawerNavigator } from 'react-navigation';

import Teste from '../components/Teste'

export const AppNavigator = createDrawerNavigator({
  Teste: {
    screen: Teste
  },
});

class AppWithNavigationState extends React.Component {
  render() {
    return (
      <AppNavigator navigation={{
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      }} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
