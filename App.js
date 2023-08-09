import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class App extends Component {
    render() {
      return(
        <View style= {{flex:1, backgroundColor: '#2F4F4F'}}>
          <Image source= {require('./Imagens/arvoresdefundo.png')} style={{right: 110, marginTop: -40}} />
          <Image source= {require('./Imagens/logoarvore.png')} style={{left: 120, marginTop: -35}} />
          <Text style={{fontSize: 45, left:110, color: '#FFF' }}>Linked Park</Text>
          <Text style={{fontSize: 20, left:127, color: '#FFF'}}>O lazer ligado a você</Text>
          <TouchableOpacity style={styles.Botao}>
            <Text style={{color: '#FFF'}}>Fazer login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Segundobotao}>
            <Text style={{color: '#2F4F4F'}}>Não tem conta? - Cadastre-se</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaopular}>
            <Text style={{color: '#FFF', fontSize: 25}}>Pular  <Icon name="rightcircle" size={30} color='#FFF'/></Text>
          </TouchableOpacity>
          
        </View>
      );
    }
}

const styles = StyleSheet.create({
  Botao: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#17A558',
    width: 250,
    height: 50,
    left: 75,
    borderRadius: 50
  },
  Segundobotao:{
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B1D3C1',
    width: 250,
    height: 50,
    left: 75,
    borderRadius: 50
  },
  botaopular:{
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    left: 75,
    borderRadius: 50,
  }
})
export default App;