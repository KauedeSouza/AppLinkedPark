import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/FontAwesome';
import Iconsss from 'react-native-vector-icons/MaterialCommunityIcons';
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
                            marginTop: 15,
                            marginLeft: 85 , 
                            width: 120,
                            height: 35,
                            }}>
                        <Icons name="home" size={27} color='#526856'/>

                        <Text style={{marginTop: -19, marginLeft: 35, fontSize: 16, color: '#526856'}}>Início</Text>

                            </View>
                           </TouchableOpacity>

                <TouchableOpacity 
                style={{
                    marginTop: -35,
                    marginLeft: -1,
                    backgroundColor: '#17A558',
                    borderRadius: 30,
                    width: 100,
                    height: 55,
                    }}>
                    <Icon name="search1"
                        size={27}
                        color='#fff' 
                        style={{
                            marginLeft: 33,
                            marginTop: 10
                        }}/>

                        <Text style={{marginTop: 20, marginLeft: 20, fontSize: 16, color: '#526856'}}>Pesquisar</Text>

                            </TouchableOpacity>

                <TouchableOpacity>
                    <Iconsss name="bell"
                        size={27}
                        color='#526856' 
                        style={{
                            marginTop: 15,
                            marginLeft: 25, 
                            width: 120,
                            height: 35,
                            }}/>

                        <Text style={{marginTop: -25, marginLeft: 60, marginRight:67, fontSize: 16, color: '#526856'}}>Notificações</Text>

                           </TouchableOpacity>
            </View>    
        </View>
      );
}

