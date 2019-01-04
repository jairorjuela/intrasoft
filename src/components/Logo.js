import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

type Props = {};
export default class Logo extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 390, height: 150}}
          source={require('../img/logo.png')}
        />
        <Text style={styles.logoText}>Welcome to Search App</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)'
  }
});
