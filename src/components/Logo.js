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
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
