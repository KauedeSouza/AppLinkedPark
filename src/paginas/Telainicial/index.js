import React from 'react';
import {View, Image, TextInput, TouchableOpacity, Text, Alert, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/FontAwesome';
import Iconsss from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import Routes from '../../componentes/menu/routes';
import BannerParks from '../../componentes/bannerParks';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function TelaInicial({ route }){ 
  const navigation = useNavigation();

if(route.params == null ){
  Alert.alert("Atenção!","você está entrando em um modo com limitações para usar o app com todos os recursos faça o login")
}else if(AsyncStorage.getItem("logado")== "logado"){
  AsyncStorage.setItem("logado","logado")
}else{
  AsyncStorage.setItem("logado","logado")

}



      return(
        <View style= {{flex:1, backgroundColor: '#FFF'}}>
          <ScrollView>
          <View style={styles.view}>
                <TouchableOpacity onPress={ () => navigation.navigate('Usuario')}><Image source= {require('../../Imagens/perfilimg.jpg')} style={styles.Imagem} /></TouchableOpacity>
                <TextInput style={styles.Input} placeholder= 'Pesquisar'/>
                <TouchableOpacity><Icons name="chat" size={40} color='#17A558'/></TouchableOpacity>
            </View>

            <BannerParks></BannerParks>  

            <View style={styles.views}>
            <TouchableOpacity style={{backgroundColor: '#B1D3C1', width: 60, height: 55, marginLeft: 50, marginTop: 25, borderRadius: 17, flex:1}} onPress={ () => navigation.navigate('TelaParques') }><Iconsss name="tree-outline" size={40} color='#526856' style={{marginLeft: 10, marginTop: 5}}/><Text style={{marginTop: 25, marginLeft: 5, flex: 1}}>Parques</Text></TouchableOpacity> 
            <TouchableOpacity style={{backgroundColor: '#B1D3C1', width: 60, height: 55, marginLeft: 50, marginTop: 25, borderRadius: 17, flex:1}} onPress={ () => navigation.navigate('TelaLazer') }><Iconss name="bicycle" size={40} color='#526856' style={{marginLeft: 4, marginTop: 6}}/><Text style={{marginTop: 25, marginLeft: 15, flex: 1}}>Lazer</Text></TouchableOpacity> 
            <TouchableOpacity style={{backgroundColor: '#B1D3C1', width: 60, height: 55, marginLeft: 50, marginTop: 25, borderRadius: 17, flex:1}}><Iconsss name="calendar-month" size={40} color='#526856' style={{marginLeft: 11, marginTop: 7}}/><Text style={{marginTop: 25, marginLeft: 8, flex: 1}}>Calendário</Text></TouchableOpacity>

            </View>

            

            <Text style={{fontSize:30, marginTop: 20, marginLeft: 25}}>Parque Recomendado</Text>

            <BannerParks></BannerParks>  

            <TouchableOpacity style={{backgroundColor: '#B1D3C1', marginTop: 15, borderRadius: 35, marginLeft: 20, marginRight: 20, padding:20, flex:1}} >
            
                        <Image source= {require('../../Imagens/PQDC.jpg')} style={styles.Imagens} />
                        <Text style={{
                              marginLeft: 130,
                              marginTop: -100,
                              fontSize: 18
                            }}>Parque da Consciência Negra
                        </Text>

                        <Text style={{
                          marginLeft: 130,
                          marginTop: 15,
                            fontSize: 12
                            }}>Localizado na Cidade Tiradentes,
                          Zona Leste da capital paulista e foi criado para preservar as nascentes do Córrego Itaquera.
                        </Text>
                        
            </TouchableOpacity>
            
            <TouchableOpacity style={{color: '#B1D3C1'}}></TouchableOpacity>
            <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        

            </ScrollView>
            
            <Routes></Routes>
        </View>
      );
}

