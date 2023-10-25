import React,{useState} from 'react';
import {View, Image, TouchableOpacity, Text, TextInput, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import Routes from '../../componentes/menu/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconsss from 'react-native-vector-icons/MaterialCommunityIcons';
import Stars from 'react-native-stars';

export default function TelaDetalhes({ route }){
    const navigation = useNavigation();
  console.log(route.params)

   
      const [text, setText] = useState('');
    
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
                </View>

                

                <View
            style={{
              backgroundColor: '#B1D3C1',
              marginTop: 15,
              borderRadius: 35,
              width: 335,
              height: 130,
              marginLeft: 13,
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
              marginLeft: 13,
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

          <View
            style={{
              backgroundColor: '#B1D3C1',
              marginTop: 23,
              borderRadius: 35,
              width: 335,
              height: 230,
            }}
          >
            <Text 
          style={{
            marginLeft: 20,
            marginTop: 15,
            fontSize: 25,
          }}
          >Avaliações</Text>
          </View>

        </View>

          </ScrollView>
                 <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>

          <Routes></Routes>

        </View>
                

                        

    )
}