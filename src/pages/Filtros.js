import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

type Props = {};
export default class Filtros extends Component<Props> {
  constructor(Props) {
    super(Props);
    this.state = {nombre: '', apellido: '', correo: '', holi: false};
  }
  render() {
      return (
        <View style={styles.container}>
          <TextInput style={styles.inputBox}
            placeholder='Nombre'
            placeholderTextColor='white'
            onSubmitEditing={() => this.apellido.focus()}
            onChangeText={(nombre) => this.setState({nombre})}
            value={this.state.nombre}
          />
          <TextInput style={styles.inputBox}
            placeholder='Apellido'
            placeholderTextColor='white'
            ref={(input) => this.apellido = input}
            onSubmitEditing={() => this.correo.focus()}
            onChangeText={(apellido) => this.setState({apellido})}
            value={this.state.apellido}
          />
          <TextInput style={styles.inputBox}
            placeholder='correo'
            placeholderTextColor='white'
            ref={(input) => this.correo = input}
            onChangeText={(correo) => this.setState({correo})}
            value={this.state.correo}
          />
          <TouchableOpacity onPress={this.search} style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      );
    }

    search = () => {
      alert("holi")

    }



  }







const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 18,
    paddingHorizontal: 26,
    fontSize: 20,
    color: 'white',
    marginVertical: 16
  },
  button: {
    width: 300,
    backgroundColor: '#0069c0',
    borderRadius: 18,
    marginVertical: 16,
    paddingVertical: 16,
    borderColor: 'white',
    borderWidth: 3
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center'
  }
});
