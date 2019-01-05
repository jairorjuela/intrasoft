import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale';
import CheckBox from 'react-native-check-box'
import LinearGradient from 'react-native-linear-gradient'



// Constantes para realizar las peticiones
const API = 'http://3.82.243.220:8000/api/filtrar/usuarios?nombre=';
const APII = 'http://3.82.243.220:8000/api/filtrar/usuarios?apellido=';
const APIII = 'http://3.82.243.220:8000/api/filtrar/usuarios?numeroDocumento=';


type Props = {};

export default class Filtros extends Component<Props> {
  constructor(Props) {
    super(Props);
    this.state = {
      nombre: '',
      apellido: '',
      documento: '',
      holi: false,
      arr: [],
      isChecked: true,
      isChecked1: true
    }
    this.search = this.search.bind(this);
  }


// Funcion para realizar la busqueda
  search() {
    const arr = this.state.arr;
    const nombre = this.state.nombre;
    const apellido = this.state.apellido;
    const documento = this.state.documento;
    const otorgante = this.state.isChecked;
    if(nombre !== '' && apellido === '' && documento === ''){
      this.setState({
        arr: [],
        nombre: this.state.nombre
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
    }else if(nombre === '' && apellido !== '' && documento === ''){
      this.setState({
        arr: [],
        apellido: this.state.apellido
      });
      const NOM = this.state.apellido;
      fetch(APII + NOM)
      .then((response) => response.json())
      .then((responseData) => {
        if(responseData.status === 400){
          alert("Error")
        }else{
          this.setState({
            holi: !this.state.holi,
            arr: this.state.arr.concat(responseData),
            apellido: ''
          });
        }
      })
      .done();
    }else if(nombre === '' && apellido === '' && documento !== ''){
      this.setState({
        arr: [],
        documento: this.state.documento
      });
      const NOM = this.state.documento;
      fetch(APIII + NOM)
      .then((response) => response.json())
      .then((responseData) => {
        if(responseData.status === 400){
          alert("Error")
        }else{
          this.setState({
            holi: !this.state.holi,
            arr: this.state.arr.concat(responseData),
            documento: ''
          });
        }
      })
      .done();
    }else if(nombre !== '' || apellido !== '' || documento !== ''){
      this.setState({
        arr: [],
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        documento: this.state.documento
      });
      const NOM = this.state.nombre;
      const NOM1 = this.state.apellido;
      const NOM2 = this.state.documento;
      fetch(API+ NOM + '&apellido=' + NOM1 + '&numero Documento=' + NOM2)
      .then((response) => response.json())
      .then((responseData) => {
        if(responseData.status === 400){
          alert("Error")
        }else{
          this.setState({
            holi: !this.state.holi,
            arr: this.state.arr.concat(responseData),
            nombre: '',
            apellido: '',
            documento: ''
          });
        }
      })
      .done();
    }else if(nombre === '' && apellido === '' && documento === ''){
      this.setState({
        holi: !this.state.holi
      });
    }
  }


  render() {
// Variable que guarda el JSON de la respuesta del servidor
    var lista = this.state.arr;
// Validacion que permite mostrar el formulario de busqueda
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
        <CheckBox
          onClick={()=>{
            this.setState({
              isChecked:!this.state.isChecked
            })
          }}
          isChecked={this.state.isChecked}
        />
        <Text style={{marginTop: 5}}>Solicitante</Text>
        <CheckBox
          onClick={()=>{
            this.setState({
              isChecked1:!this.state.isChecked1
            })
          }}
          isChecked={this.state.isChecked1}
        />
        <Text style={{marginTop: 5}}>Otorgante</Text>
        <TouchableOpacity onPress={this.search} style={styles.button}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    );
  }else{
// Validacion que permite ocultar el formulario de busqueda
    return(
      <View style={styles.container}>
      <TouchableOpacity onPress={this.search} style={styles.button}>
        <Text style={styles.buttonText}>Busca de Nuevo</Text>
      </TouchableOpacity>
      {
        lista.map((l, i) => (
          <ListItem style={styles.item}
            key={i}
            leftAvatar={{ source: { uri: l.fotoPerfil } }}
            title={`Nombre: ${l.nombre} ${l.apellido}`}
            subtitle={`Numero de documento: ${l.numeroDocumento} Rol: ${l.rolUsuario}`}
            chevron
          />
        ))
      }
      </View>
    );
  }
  }
}


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
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30
    },
});
