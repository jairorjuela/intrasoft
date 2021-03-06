import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Logo from './Logo';
import Filtros from '../pages/Filtros'


// Formulario de Logeo
type Props = {};
export default class Form extends Component<Props> {
  render() {
    if(this.state.holi === false){
      return (
        <View style={styles.container}>
        <Logo/>
          <TextInput style={styles.inputBox}
            placeholder='Correo Electronico'
            placeholderTextColor='white'
            textContentType='emailAddress'
            onSubmitEditing={() => this.password.focus()}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
          <TextInput style={styles.inputBox}
            placeholder='Contraseña'
            placeholderTextColor='white'
            secureTextEntry={true}
            ref={(input) => this.password = input}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <TouchableOpacity onPress={this.login} style={styles.button}>
            <Text style={styles.buttonText}>Ingresa</Text>
          </TouchableOpacity>
        </View>
      );
    }else{
      return(
        <View style={styles.container}>
          <Filtros />
        </View>
      );
    }
  }
  constructor(Props) {
    super(Props);
    this.state = {
      username: '',
      password: '',
      holi: false,
      user: []
    };
  }

// Funcion para realizar la peticion PUT
  login = () => {
    fetch('http://3.82.243.220:8000/api/loginUsuarioSistema', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        correo: this.state.username,
        claveSeguridad: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData.status === 400){
        alert("Error")
      }else{
        this.setState({
          holi: true,
          user: this.state.user.concat(String(responseData.nombre) + " " + String(responseData.apellido))
        })
        alert(
           "Bienvenido  " + this.state.user
        )
      }
    })
    .done();
  }

}
// Fin de la funcion



// Estilos
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
