import React,{useEffect,useState} from 'react';
import {View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Routes from '../../componentes/menu/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelaParques(){


    const navigation = useNavigation();
    const [dados, setDados] = useState([]);


    async function fazerSolicitacaoComToken(token) {
        try {
          // Obtém o token de AsyncStorage
          const token = await AsyncStorage.getItem("token");
            
        
          if (token) {
            // Construa o cabeçalho Authorization
            const headers = {
              'Content-type': 'application/json; charset=UTF-8',
              'Authorization': `Bearer ${token}`
            };
      
            // Faça a solicitação usando o cabeçalho personalizado
            const response = await fetch('https://tcc-production-e100.up.railway.app/api/lazer', {
              method: 'GET', // ou outro método HTTP
              headers: headers
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
      

      fazerSolicitacaoComToken();
    return(
            <View>
                <ScrollView>
                <TouchableOpacity style={styles.botaopular} onPress={ () => navigation.navigate('TelaInicial')} >
                <Text style={{color: '#000',fontSize: 35, left: 30, marginTop: 60}}><Icon name="leftcircle" size={40} color='#17A558'/>  Parques</Text>
            </TouchableOpacity>

            {dados.map((item, index) => (
        <TouchableOpacity
          key={item.idLazer}
          style={{ height: 160 }}
        >
          <View
            style={{
              backgroundColor: '#B1D3C1',
              marginTop: 45,
              borderRadius: 35,
              width: 355,
              height: 150,
              marginLeft: 20,
            }}
          >
             <Image source= {require(`../../Imagens/${item.imagem}`)} style={styles.Imagens} />
            <Text
              style={{
                marginLeft: 140,
                marginTop: -115,
                fontSize: 18,
              }}
            >
              {item.nome}
            </Text>

            <Text
              style={{
                marginLeft: 140,
                marginTop: 15,
                fontSize: 12,
              }}
            >
              {item.descricao}
            </Text>
          </View>

          <Icon
            name="rightcircle"
            size={30}
            color='#17A558'
            style={{
              marginLeft: 360,
              marginTop: -85,
            }}
          />
        </TouchableOpacity>
      ))}


    
                    <TouchableOpacity style={{color: '#B1D3C1'}}></TouchableOpacity>
                    <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>

                    <TouchableOpacity style={{color: '#B1D3C1'}}></TouchableOpacity>
                    <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>

                    <TouchableOpacity style={{color: '#B1D3C1'}}></TouchableOpacity>
                    <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>

                    <TouchableOpacity style={{color: '#B1D3C1'}}></TouchableOpacity>
                    <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>

                </ScrollView>
            
        <Routes></Routes>
        </View>
        
    )
}