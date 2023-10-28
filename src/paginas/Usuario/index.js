import React,{useState, useEffect} from 'react';
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
    const [email, setEmail] = useState('');

    useEffect(() => {
      async function fetchUserData() {
        try {
          const storedEmail = await AsyncStorage.getItem('email');
          if (storedEmail) {
            setEmail(storedEmail);
          } else {
            // Trate o caso em que o email não está no AsyncStorage
            console.warn('Email não encontrado no AsyncStorage.');
          }
        } catch (error) {
          console.error('Erro ao obter dados do AsyncStorage:', error);
        }
      }
  
      fetchUserData();
    }, []);

    return(
        <View style= {{flex:1, backgroundColor: '#FFF'}}>
<<<<<<< Updated upstream
             <ScrollView>

<TouchableOpacity style={styles.botaopular} onPress={ () => navigation.navigate('TelaInicial')} >
=======
          <ScrollView>
            <TouchableOpacity style={styles.botaopular} onPress={ () => navigation.navigate('TelaInicial')} >
>>>>>>> Stashed changes
                <Text style={{color: '#000',fontSize: 35, left: 30, marginTop: 60}}><Icon name="leftcircle" size={40} color='#17A558'/>  Usuário</Text>
            </TouchableOpacity>


        <View
            style={{
              marginTop: 35,
<<<<<<< Updated upstream
              borderRadius: 60,
              width: 335,
              height: 100,
              marginLeft: 13,
=======
              borderRadius: 35,
              marginLeft: 20,
              flex:4
>>>>>>> Stashed changes
            }}
            
          >
            <Image source= {require('../../Imagens/perfilimg.jpg')} style={styles.Imagem} />
            <Text style={{marginTop:-65, marginLeft:115, fontSize:20}}>{email}</Text>
          </View>

          <View
            style={{
              backgroundColor: '#B1D3C1',
              marginTop: 30,
<<<<<<< Updated upstream
              borderRadius: 20,
              width: 330,
              height: 145,
              marginLeft: 13,
            }}
          >
             <TouchableOpacity><Text style={{marginTop:20, marginLeft:30, fontSize:20}}>Mudar foto</Text></TouchableOpacity>
=======
              borderRadius: 35,
              marginLeft: 20,
              marginRight: 20,
              flex:4
            }}
          >
            <TouchableOpacity><Text style={{marginTop:10, marginLeft:30, fontSize:20}}>Mudar foto</Text></TouchableOpacity>
>>>>>>> Stashed changes
            <TouchableOpacity><Text style={{marginTop:20, marginLeft:30, fontSize:20}}>Alterar senha</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{marginTop:20, marginLeft:30, fontSize:20}}>Apagar conta</Text></TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#B1D3C1',
<<<<<<< Updated upstream
              marginTop: 15,
              borderRadius: 20,
              width: 330,
              height: 120,
              marginLeft: 13,
            }}
          >

            <TouchableOpacity onPress={ () => navigation.navigate('TelaSobreoApp')}><Text style={{marginTop:20, marginLeft:30, fontSize:20}}>Sobre App</Text></TouchableOpacity>
            <TouchableOpacity onPress={ () => navigation.navigate('iniciar')}><Text style={{marginTop:20, marginLeft:30, fontSize:20}}>Sair</Text></TouchableOpacity>
=======
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
>>>>>>> Stashed changes
          </View>

          </ScrollView>
          

          <Routes></Routes>

        </View>
                

                        

    )
}