import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Teste extends Component {
  static navigationOptions = {
    title: 'Details',
  };
  componentDidMount() {
    console.log(this.props.navigation)
  }
  render() {
    return (
        <View style={ styles.button } >
            <Button onPress={() => this.props.navigation.openDrawer() } title={this.props.msg} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

const mapStateToProps = state => ({
  msg: state.auth.msg,
});

export default connect(mapStateToProps)(Teste);
