import React,{useState} from 'react';
import {View, Image, TouchableOpacity, Text, TextInput, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import Routes from '../../componentes/menu/routes';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconsss from 'react-native-vector-icons/MaterialCommunityIcons';
import Stars from 'react-native-stars';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function TelaDetalhes({ route }){
    const navigation = useNavigation();
  console.log(route.params)

   
      const [text, setText] = useState('');
    

      const maps = () =>{
        InAppBrowser.open('https://www.google.com')
      }

      const handleTextInputChange = (inputText) => {
        setText(inputText);
      };
    
      const handleButtonPress = () => {
        console.log(text);
      };
      var redirect 
    if( route.params.categoria == "lazer"){
        redirect = "TelaLazer"
    }else{
      redirect = "TelaParques"

    }

    async function favoritos(data) {
      console.log("oi")
        try {
          // Obtém o token de AsyncStorage
          const token = await AsyncStorage.getItem("token");
          const idUsuario = await AsyncStorage.getItem("id");


            
        
          if (token) {
            const headers = {
              'Content-type': 'application/json; charset=UTF-8',
              'Authorization': `Bearer ${token}`
            };
            const dados = {
              "usuario": {
              "idUsuario": idUsuario,
              "idLazer": data.idLazer
              }
            }
      
            // Faça a solicitação usando o cabeçalho personalizado
            const response = await fetch('https://tcc-production-e100.up.railway.app/api/favorito', {
              method: 'POST', // ou outro método HTTP
              headers: headers,
              body: dados
            });
      
            if (response.status === 200) {
              const data = await response.json();
              console.log("Dados da resposta:", data);
              setDados(data)
            } else {
              console.error("Erro na solicitação:", response.status);
            }
          } else {
            console.log("Token não encontrado em AsyncStorage.");
          }
        } catch (error) {
          console.error("Erro ao fazer a solicitação:", error);
        }
      }
    
 
    return(
        <View style= {{flex:1, backgroundColor: '#FFF'}}>
          <ScrollView>
            <TouchableOpacity style={styles.botaopular} onPress={ () => navigation.navigate(redirect)} >
                <Text style={{color: '#000',fontSize: 25, left: 30, marginTop: 60}}><Icon name="leftcircle" size={37} color='#17A558'/> {route.params.nome}</Text>
            </TouchableOpacity>

            <View>
                <Image source={{uri: route.params.imagem}}
                    style={{
                    width: 386,
                    height: 170,
                    marginTop: 9,
                    marginLeft: 13,
                    borderRadius: 7
                    }}

                    />
                    <Text style={{fontSize: 25, marginLeft: 20}}>{route.params.nome}</Text>
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

                <TouchableOpacity onPress={ () => favoritos(route.params)}><Icon name="hearto" size={27} style={{marginTop: -26, left: 320}}/></TouchableOpacity>
                </View>

                

                <View
            style={{
              backgroundColor: '#B1D3C1',
              marginTop: 15,
              borderRadius: 35,
              width: 335,
              height: 130,
              marginLeft: 11,
            }}
          >

            <Text
              style={{
                marginLeft: 20,
                marginTop: 15,
                fontSize: 15,
              }}
            >{route.params.descricao}
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#B1D3C1',
              marginTop: 8,
              borderRadius: 35,
              width: 335,
              height: 80,
              marginLeft: 11,
            }}
          ><Text 
          style={{
            marginLeft: 20,
            marginTop: 15,
            fontSize: 15,
          }}
          >Digite sua opnião:</Text>
                    <TextInput style={{marginLeft: 20, marginTop: 7, width: 90}} placeholder= 'Escreva aqui' onChangeText={handleTextInputChange} alue={text}/>
          <TouchableOpacity onPress={handleButtonPress}><Icon name="rightcircle"size={30}color='#17A558' style={{marginLeft: 290,marginTop: -40}}/></TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#B1D3C1',
              marginTop: 10,
              borderRadius: 35,
              width: 335,
              height: 230,
              marginLeft: 11
            }}
          >
            <Text 
          style={{
            marginLeft: 120,
            marginTop: 15,
            fontSize: 25,
          }}
          >Avaliações</Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#17A558',
              marginTop: 8,
              borderRadius: 35,
              width: 135,
              height: 60,
              marginLeft: 110
            }}

            onPress={maps}
          >
            <Text 
          style={{
            marginLeft: 20,
            marginTop: 18,
            fontSize: 18,
            color: '#fff'
          }}
          >Ir agora</Text>

          <Icon name="rightcircle"
          size={25}color='#fff'
           style=
           {{marginLeft: 90,
           marginTop: -20}}
           />



          </TouchableOpacity>

  

          </ScrollView>
                 <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
                 <Text>{'\n'}</Text>

          <Routes></Routes>

        </View>
                

                        

    )
}