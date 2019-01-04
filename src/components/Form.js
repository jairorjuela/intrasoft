import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

type Props = {};
export default class Form extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
          placeholder='Email'
          placeholderTextColor='white'
          textContentType='emailAddress'
          onSubmitEditing={() => this.password.focus()}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <TextInput style={styles.inputBox}
          placeholder='Password'
          placeholderTextColor='white'
          secureTextEntry={true}
          ref={(input) => this.password = input}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity onPress={this.login} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  constructor(Props) {
    super(Props);
    this.state = {username: '', password: ''};
  }

  login = () => {
    fetch('http://3.82.243.220:8000/api/loginUsuarioSistema', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        correo: this.state.username,
        claveSeguridad: this.state.password
      }),
    }).then((response) => response.json())
        .then((res) => {
          if (res.success === true){
            console.log(res.message);
          }else{
            alert(res.message)
          }
    });
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
