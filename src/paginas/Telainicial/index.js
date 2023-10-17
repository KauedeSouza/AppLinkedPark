import React from 'react';
import {View, Image, TextInput, TouchableOpacity, Text, Alert, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/FontAwesome';
import Iconsss from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import Routes from '../../componentes/menu/routes';
import Carrosel from '../../componentes/carrosel'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function TelaInicial({ route }){ 
  const navigation = useNavigation();
  /*
if(route.params == null ){
  Alert.alert("Atenção!","você está entrando em um modo com limitações para usar o app com todos os recursos faça o login")
}else if(AsyncStorage.getItem("logado")== "logado"){
  AsyncStorage.setItem("logado","logado")
}else{
  AsyncStorage.setItem("logado","logado")

}
*/


      return(
        <View style= {{flex:1, backgroundColor: '#FFF'}}>
          <ScrollView>
          <View style={styles.view}>
                <TouchableOpacity onPress={ () => navigation.navigate('Usuario')}><Image source= {require('../../Imagens/perfilimg.jpg')} style={styles.Imagem} /></TouchableOpacity>
                <TextInput style={styles.Input} placeholder= 'Pesquisar'/>
            </View>
            <Carrosel></Carrosel>
  

            <View style={styles.views}>
            <TouchableOpacity style={{backgroundColor: '#B1D3C1', width: 60, height: 55, marginLeft: 25, marginTop: 25, borderRadius: 30}} onPress={ () => navigation.navigate('TelaParques') }><Iconsss name="tree-outline" size={40} color='#526856' style={{marginLeft: 10, marginTop: 5}}/></TouchableOpacity> 
            <TouchableOpacity style={{backgroundColor: '#B1D3C1', width: 60, height: 55, marginLeft: 50, marginTop: 25, borderRadius: 30}} onPress={ () => navigation.navigate('TelaLazer') }><Iconss name="bicycle" size={40} color='#526856' style={{marginLeft: 4, marginTop: 6}}/></TouchableOpacity> 
            <TouchableOpacity style={{backgroundColor: '#B1D3C1', width: 60, height: 55, marginLeft: 50, marginTop: 25, borderRadius: 30}} onPress={ () => navigation.navigate('TelaCalendario') }><Iconsss name="calendar-month" size={40} color='#526856' style={{marginLeft: 10, marginTop: 7}}/></TouchableOpacity>
            </View>

            <View style={styles.vieww}>
              <Text style={{marginLeft: 22}}>Parques</Text>
              <Text style={{marginLeft: 74}}>Lazer</Text>
              <Text style={{marginLeft: 67}}>Calendário</Text>
            </View>

            <Text style={{fontSize:30, marginTop: 30, marginLeft: 25}}>Parque Recomendado</Text>
  

            <TouchableOpacity style={{height: 160}} >
            <View style={{backgroundColor: '#B1D3C1', marginTop: 25, borderRadius: 35, width: 315, height: 150, marginLeft: 20}}>
                        <Image source= {require('../../Imagens/PQDC.jpg')} style={styles.Imagens} />
                        <Text style={{
                              marginLeft: 140,
                              marginTop: -140,
                              fontSize: 18
                            }}>Parque da Consciência Negra
                        </Text>

                        <Text style={{
                          marginLeft: 140,
                          marginTop: 15,
                            fontSize: 12
                            }}>Localizado na Cidade Tiradentes,
                          Zona Leste da capital paulista e foi criado para preservar as nascentes do Córrego Itaquera.
                        </Text>

                        </View>

                        <Icon name="rightcircle"
                        size={30}
                        color='#17A558' 
                        style={{
                            marginLeft: 360,
                            marginTop: -85
                        }}/>
                        
            </TouchableOpacity>
            
            <TouchableOpacity style={{color: '#B1D3C1'}}></TouchableOpacity>
            <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        

            </ScrollView>
            
            <Routes></Routes>
        </View>
      );
}

