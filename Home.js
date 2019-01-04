/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from './src/pages/Login';


type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#0069c0"
          barStyle="light-content"
        />
        <Login/>
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
