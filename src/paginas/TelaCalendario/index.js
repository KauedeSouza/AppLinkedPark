import React,{useState} from 'react';
import {View,TouchableOpacity, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../componentes/menu/routes';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';

export default function TelaCalendario(){
    const navigation = useNavigation();
    
    return(
      <View style= {{flex:1, backgroundColor: '#FFF'}}>
      <ScrollView>
                <TouchableOpacity style={styles.botaopular} onPress={ () => navigation.navigate('TelaInicial')} >
                <Text style={{color: '#000',fontSize: 35, left: 30, marginTop: 60}}><Icon name="leftcircle" size={40} color='#17A558'/>  Calendário</Text>
            </TouchableOpacity>



                </ScrollView>
                 <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>

            
        <Routes></Routes>
        </View>
        
    )
}