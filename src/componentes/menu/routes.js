import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/FontAwesome';
import Iconsss from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../paginas/Telainicial/style';
import {useNavigation} from '@react-navigation/native';


export default function Routes(){ 
    const navigation = useNavigation();

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

                <TouchableOpacity onPress={ () => navigation.navigate('TelaInicial') }>
                    <View 
                        style={{ 
                                marginTop: 15,
                                marginLeft: 15 , 
                                }}>
                            <Icons 
                                name="home"
                                size={30}
                                color='#526856'
                                />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={ () => navigation.navigate('TelaInicial') }>
                    <View 
                        style={{ 
                                marginTop: 15,
                                marginLeft: 45 , 
                                }}>
                            <Icons 
                                name="chat"
                                size={30}
                                color='#526856'
                                />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity 
                    style={{
                        marginTop: -35,
                        marginLeft: 20,
                        backgroundColor: '#17A558',
                        borderRadius: 45,
                        width: 70,
                        height: 65,
                        }}>
                        <Icon name="search1"
                            size={30}
                            color='#fff' 
                            style={{
                                marginLeft: 20,
                                marginTop: 17
                        }}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Iconsss name="bell"
                        size={30}
                        color='#526856' 
                        style={{
                            marginTop: 15,
                            marginLeft: 13, 
                            width: 120,
                            height: 35,
                    }}/>
                </TouchableOpacity>


                <TouchableOpacity onPress={ () => navigation.navigate('TelaInicial') }>
                    <View 
                        style={{ 
                                marginTop: 15,
                                marginLeft: -55 , 
                                }}>
                            <Icons 
                                name="heart"
                                size={30}
                                color='#526856'
                                />
                    </View>
                </TouchableOpacity>

            </View>    
        </View>
      );
}

