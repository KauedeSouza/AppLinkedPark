
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Routes from '../../componentes/menu/routes';
import {useNavigation} from '@react-navigation/native';
import styles from './style'



export default function Favoritos(){ 
    const navigation = useNavigation();

      return(
        <View style= {{flex:1, backgroundColor: '#FFF'}}>
            <TouchableOpacity style={styles.botaopular} onPress={ () => navigation.navigate('TelaInicial')} >
                <Text style={{color: '#000',fontSize: 35, left: 30, marginTop: 60}}><Icon name="leftcircle" size={40} color='#17A558'/>  Favoritos</Text>
            </TouchableOpacity>


            <View
            style={{
              backgroundColor: '#B1D3C1',
              marginTop: 10,
              borderRadius: 35,
              width: 340,
              height: 150,
              marginLeft: 9,
            }}
          ></View>


            <Routes></Routes>
        </View>
        
      );
      
}

