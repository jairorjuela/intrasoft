import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Form from '../components/Form';


type Props = {};
export default class Login extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Form/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196f3',
  }
});
