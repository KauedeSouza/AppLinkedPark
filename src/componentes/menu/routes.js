import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../../paginas/Telainicial/style';


export default function Routes(){ 

      return(
        <View style= {{  
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#B1D3C1',
        right: 0,
        padding: 10,
        alignItems: 'center',
        margin: 0, 
        }}>
            <View style={styles.viewmax}>
                <TouchableOpacity>
                    <View 
                    style={{
                            marginRight:20, 
                            marginTop: 25,
                            marginLeft: 5 , 
                            backgroundColor: '#17A558',
                            borderRadius: 20,
                            width: 120,
                            height: 35,
                            }}>
                        <Icon name="home" size={27} color='#fff'/>

                        <Text style={{marginTop: -19, marginLeft: 35, fontSize: 16, color: '#fff'}}>Inicio</Text>

                            </View>
                           </TouchableOpacity>

                <TouchableOpacity>
                    <Icon name="search1"
                        size={27}
                        color='#fff' 
                        style={{
                            marginRight:20,
                            marginTop: 25,
                            marginLeft: -5,
                            backgroundColor: '#17A558',
                            borderRadius: 20,
                            width: 120,
                            height: 35,
                            }}
                            />

                        <Text style={{marginTop: -25, marginLeft: 35, fontSize: 16, color: '#fff'}}>Pesquisar</Text>

                            </TouchableOpacity>

                <TouchableOpacity>
                    <Icon name="bells"
                        size={27}
                        color='#fff' 
                        style={{
                            marginRight:20,
                            marginTop: 25,
                            marginLeft: -5,
                            backgroundColor: '#17A558',
                            borderRadius: 20, 
                            width: 120,
                            height: 35,
                            }}/>

                        <Text style={{marginTop: -25, marginLeft: 20, fontSize: 16, color: '#fff'}}>Notificações</Text>

                           </TouchableOpacity>
            </View>    
        </View>
      );
}

