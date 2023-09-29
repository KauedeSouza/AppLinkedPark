import React,{useState} from 'react';
import {View, Image, TouchableOpacity, Text, TextInput, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import Routes from '../../componentes/menu/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconsss from 'react-native-vector-icons/MaterialCommunityIcons';
import Stars from 'react-native-stars';

export default function Usuario(){
    const navigation = useNavigation();


    return(
        <View style= {{flex:1, backgroundColor: '#FFF'}}>
          <ScrollView>
            <TouchableOpacity style={styles.botaopular} onPress={ () => navigation.navigate('TelaInicial')} >
                <Text style={{color: '#000',fontSize: 35, left: 30, marginTop: 60}}><Icon name="leftcircle" size={40} color='#17A558'/>  Usuário</Text>
            </TouchableOpacity>


        <View
            style={{
              backgroundColor: '#B1D3C1',
              marginTop: 35,
              borderRadius: 35,
              marginLeft: 20,
              flex:4
            }}
            
          >
            <Image source= {require('../../Imagens/perfilimg.jpg')} style={styles.Imagem} />
            <Text style={{marginTop:-100, marginLeft:130, fontSize:35}}>Rafael Satírio</Text>
            <Text style={{marginTop:5, marginLeft:130, fontSize:20}}>rafaelsatirio@gmail.com</Text>
          </View>

          <View
            style={{
              backgroundColor: '#B1D3C1',
              marginTop: 30,
              borderRadius: 35,
              marginLeft: 20,
              marginRight: 20,
              flex:4
            }}
          >
            <TouchableOpacity><Text style={{marginTop:10, marginLeft:30, fontSize:20}}>Mudar foto</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{marginTop:20, marginLeft:30, fontSize:20}}>Alterar senha</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{marginTop:20, marginLeft:30, fontSize:20}}>Apagar conta</Text></TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#B1D3C1',
              marginTop: 20,
              borderRadius: 35,
              marginLeft: 20,
              marginRight: 20,
              flex:5
            }}
          >
            <TouchableOpacity><Text style={{marginTop:10, marginLeft:30, fontSize:20}}>Fale conosco</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{marginTop:20, marginLeft:30, fontSize:20}}>Quem é UP?</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{marginTop:20, marginLeft:30, fontSize:20}}>Favoritos</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{marginTop:20, marginLeft:30, fontSize:20}}>Sobre App</Text></TouchableOpacity>
            <TouchableOpacity onPress={ () => navigation.navigate('iniciar')}><Text style={{marginTop:15, marginLeft:30, fontSize:20}}>Sair</Text></TouchableOpacity>
          </View>

          </ScrollView>
          

          <Routes></Routes>

        </View>
                

                        

    )
}