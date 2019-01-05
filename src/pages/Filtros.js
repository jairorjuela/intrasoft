import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity} from 'react-native';

const API = 'http://3.82.243.220:8000/api/filtrar/usuarios?nombre=';

type Props = {};

export default class Filtros extends Component<Props> {
  constructor(Props) {
    super(Props);
    this.state = {
      nombre: '',
      apellido: '',
      documento: '',
      holi: false,
      arr: []
    }
    this.search = this.search.bind(this);
  }

  search() {
    const arr = this.state.arr
    this.setState({
      nombre: this.state.nombre,
    });
    const NOM = this.state.nombre;
    fetch(API + NOM)
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData.status === 400){
        alert("Error")
      }else{
        this.setState({
          holi: !this.state.holi,
          arr: this.state.arr.concat(responseData),
          nombre: ''
        });
      }
    })
    .done();
  }



  render() {
    var lista = this.state.obj;
    if(this.state.holi === false){
      return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          placeholder='Nombre'
          placeholderTextColor='white'
          onSubmitEditing={() => this.apellido.focus()}
          onChangeText={(nombre) => this.setState({nombre})}
          value={this.state.nombre}
        />
        <TextInput
          style={styles.inputBox}
          placeholder='Apellido'
          placeholderTextColor='white'
          ref={(input) => this.apellido = input}
          onSubmitEditing={() => this.documento.focus()}
          onChangeText={(apellido) => this.setState({apellido})}
          value={this.state.apellido}
        />
        <TextInput
          style={styles.inputBox}
          placeholder='documento'
          placeholderTextColor='white'
          ref={(input) => this.documento = input}
          onChangeText={(documento) => this.setState({documento})}
          value={this.state.documento}
        />
        <TouchableOpacity onPress={this.search} style={styles.button}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    );
  }else{
    return(
      <View style={styles.container}>
      <FlatList
        data={this.state.arr}
        renderItem={
          ({item}) =>
            <Text style={styles.item}>
              {`Nombre: ${item.nombre} ${item.apellido}, Id de Usuario:  ${item.idUsuario}, Numero de documento: ${item.numeroDocumento}`}
            </Text>
        }
        keyExtractor={item => item.idUsuario}
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeader}
      />
      <TouchableOpacity onPress={this.search} style={styles.button}>
        <Text style={styles.buttonText}>Busca de Nuevo</Text>
      </TouchableOpacity>
      </View>
    );
  }
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
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30
    },
});
