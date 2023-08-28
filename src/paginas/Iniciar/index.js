import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import styles from './style';


export default function iniciar(){ 
    const navigation = useNavigation();


      return(
        <View style= {{flex:1, backgroundColor: '#2F4F4F'}}>
          <Image source= {require('../../Imagens/arvoresdefundo.png')} style={{right: 110, marginTop: -40}} />
          <Image source= {require('../../Imagens/logoarvore.png')} style={{left: 120, marginTop: -35}} />
          <Text style={{fontSize: 45, left:110, color: '#FFF' }}>Linked Park</Text>
          <Text style={{fontSize: 20, left:127, color: '#FFF'}}>O lazer ligado a você</Text>
          <TouchableOpacity style={styles.Botao}  onPress={ () => navigation.navigate('Login') }>
            <Text style={{color: '#FFF'}}>Fazer login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Segundobotao} onPress={ () => navigation.navigate('Cadastro') }>
            <Text style={{color: '#2F4F4F'}}>Não tem conta? - Cadastre-se</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaopular}>
            <Text style={{color: '#FFF', fontSize: 25}}>Pular  <Icon name="rightcircle" size={30} color='#FFF'/></Text>
          </TouchableOpacity>
        </View>
        
      );
}

