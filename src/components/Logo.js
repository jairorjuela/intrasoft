import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

// Clase que Incluye el logo y un texto de saludo
type Props = {};
export default class Logo extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 390, height: 150}}
          source={require('../img/logo.png')}
        />
        <Text style={styles.logoText}>Bienvenido a tu App de Busqueda</Text>
      </View>
    );
  }
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    fontSize: 25,
    color: 'rgba(255, 255, 255, 0.7)'
  }
});
