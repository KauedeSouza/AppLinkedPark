import React from 'react';
import {View, Image, TextInput, TouchableOpacity, Text, Alert, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import Routes from '../../componentes/menu/routes';
import BannerParks from '../../componentes/bannerParks';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function TelaInicial({ route }){ 
  
if(route.params == null ){
  Alert.alert("Atenção!","você está entrando em um modo com limitações para usar o app com todos os recursos faça o login")
}else{
  AsyncStorage.setItem("logado","true")
}



      return(
        <View style= {{flex:1, backgroundColor: '#FFF'}}>
          <ScrollView>
          <View style={styles.view}>
                <Image source= {require('../../Imagens/perfilimg.jpg')} style={styles.Imagem} />
                <TextInput style={styles.Input} placeholder= 'Pesquisar'/>
                <TouchableOpacity><Icon name="wechat" size={40} color='#17A558'/></TouchableOpacity>
            </View>

            <BannerParks></BannerParks>  

            <View style={styles.views}>
            <TouchableOpacity style={{backgroundColor: '#B1D3C1', width: 55, height: 49, marginLeft: 50, marginTop: 25, borderRadius: 10}}><Iconss name="tree" size={40} color='#526856' style={{marginLeft: 10, marginTop: 4}}/></TouchableOpacity> 
            <TouchableOpacity style={{backgroundColor: '#B1D3C1', width: 55, height: 49, marginLeft: 50, marginTop: 25, borderRadius: 10}}><Iconss name="bicycle" size={40} color='#526856' style={{marginLeft: 2, marginTop: 4}}/></TouchableOpacity> 
            <TouchableOpacity style={{backgroundColor: '#B1D3C1', width: 55, height: 49, marginLeft: 50, marginTop: 25, borderRadius: 10}}><Icons name="calendar" size={40} color='#526856' style={{marginLeft: 8, marginTop: 4}}/></TouchableOpacity>
            </View>

            <View style={styles.vieww}>
              <Text style={{marginLeft: 45}}>Parques</Text>
              <Text style={{marginLeft: 70}}>Lazer</Text>
              <Text style={{marginLeft: 62}}>Calendário</Text>
            </View>

            <Text style={{fontSize:30, marginTop: 20, marginLeft: 75}}>Parque Recomendado</Text>

            <BannerParks></BannerParks>  

            <View style={{backgroundColor: '#B1D3C1', marginTop: 15, borderRadius: 35, width: 355, height: 150, marginLeft: 20}}>
            <Image source= {require('../../Imagens/PQDC.jpg')} style={styles.Imagens} />
            </View>
            
            <TouchableOpacity style={{color: '#B1D3C1'}}></TouchableOpacity>
         <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        

            </ScrollView>
            
            <Routes></Routes>
        </View>
      );
}

