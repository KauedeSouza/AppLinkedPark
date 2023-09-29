import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function iniciar(){ 
    const navigation = useNavigation();

AsyncStorage.clear.apply


      return(
        <View style= {{flex:1, backgroundColor: '#2F4F4F'}}>
          <Image source= {require('../../Imagens/arvoresdefundo.png')} style={{right: 110, marginTop: -40}} />
          <Image source= {require('../../Imagens/logoarvore.png')} style={{left: 97, marginTop: -60}} />
          <Text style={{fontSize: 45, left:86, color: '#FFF' }}>Linked Park</Text>
          <Text style={{fontSize: 20, left:105, color: '#FFF'}}>O lazer ligado a você</Text>
          <TouchableOpacity style={styles.Botao}  onPress={ () => navigation.navigate('Login') }>
            <Text style={{color: '#FFF'}}>Fazer login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Segundobotao} onPress={ () => navigation.navigate('Cadastro') }>
            <Text style={{color: '#2F4F4F'}}>Não tem conta? - Cadastre-se</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaopular} onPress={ () => navigation.navigate('TelaInicial') }>
            <Text style={{color: '#FFF', fontSize: 25}}>Pular  <Icon name="rightcircle" size={30} color='#FFF'/></Text>
          </TouchableOpacity>
        </View>
        
      );
}

