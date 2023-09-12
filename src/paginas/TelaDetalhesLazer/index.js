import React,{useState} from 'react';
import {View, Image, TouchableOpacity, Text, TextInput, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import Routes from '../../componentes/menu/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconsss from 'react-native-vector-icons/MaterialCommunityIcons';
import Stars from 'react-native-stars';

export default function TelaDetalhes(){
    const navigation = useNavigation();


    return(
        <View style= {{flex:1, backgroundColor: '#FFF'}}>
            <TouchableOpacity style={styles.botaopular} onPress={ () => navigation.navigate('TelaLazer')} >
                <Text style={{color: '#000',fontSize: 35, left: 30, marginTop: 60}}><Icon name="leftcircle" size={40} color='#17A558'/>  Detalhes do Lazer</Text>
            </TouchableOpacity>

            <View>
                <Image source= {require('../../Imagens/CENTROC.jpg')} 
                    style={{
                    width: 386,
                    height: 170,
                    marginTop: 9,
                    marginLeft: 13,
                    borderRadius: 7
                    }}

                    />
                    <Text style={{fontSize: 25, marginLeft: 56}}>Centro Cultural Cidade Tiradentes</Text>
            </View>
                


                <View style = {styles.container}>
                            <Stars
                    default={2.5}
                    count={5}
                    half={true}
                    starSize={30} 
                    fullStar={<Iconsss name={'star'} style={[styles.myStarStyle]}/>}
                    emptyStar={<Iconsss name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                    halfStar={<Iconsss name={'star-half'} style={[styles.myStarStyle]}/>}
                />
                </View>

                

                <View
            style={{
              backgroundColor: '#B1D3C1',
              marginTop: 15,
              borderRadius: 35,
              width: 375,
              height: 130,
              marginLeft: 17,
            }}
          >

            <Text
              style={{
                marginLeft: 20,
                marginTop: 15,
                fontSize: 15,
              }}
            >Nesse espaço são realizadas oficinas de dança, música, teatro,
             artes plásticas, fotografia, leitura, dentre outras atividades
              que visem aproximar as pessoas à cultura.
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#B1D3C1',
              marginTop: 8,
              borderRadius: 35,
              width: 375,
              height: 80,
              marginLeft: 17,
            }}
          ><Text 
          style={{
            marginLeft: 20,
            marginTop: 15,
            fontSize: 15,
          }}
          >Digite sua opnião:</Text>
          <TextInput style={{marginLeft: 20, marginTop: 7}} placeholder= 'Pesquisar'/>

          <View
            style={{
              backgroundColor: '#B1D3C1',
              marginTop: 23,
              borderRadius: 35,
              width: 375,
              height: 230,
              marginLeft: -1,
            }}
          >
            <Text 
          style={{
            marginLeft: 20,
            marginTop: 15,
            fontSize: 25,
          }}
          >                       Avaliações:</Text>
          </View>

          </View>

          <Routes></Routes>

        </View>
                

                        

    )
}