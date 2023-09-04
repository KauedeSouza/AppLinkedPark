import React from 'react';
import {View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/FontAwesome';
import Iconsss from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Routes from '../../componentes/menu/routes';

export default function TelaParques(){
    const navigation = useNavigation();

    return(
            <View>
                <ScrollView>
                <TouchableOpacity style={styles.botaopular} onPress={ () => navigation.navigate('TelaInicial')} >
                <Text style={{color: '#000',fontSize: 35, left: 30, marginTop: 60}}><Icon name="leftcircle" size={40} color='#17A558'/>  Parques</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 160}}>
                    <View style={{backgroundColor: '#B1D3C1', marginTop: 45, borderRadius: 35, width: 355, height: 150, marginLeft: 20}}>
                                <Image source= {require('../../Imagens/PQCSN.jpg')} style={styles.Imagens} />
                                <Text style={{
                                    marginLeft: 140,
                                    marginTop: -115,
                                    fontSize: 18
                                    }}>Parque da Consciência Negra
                                </Text>

                                <Text style={{
                                marginLeft: 140,
                                marginTop: 15,
                                    fontSize: 12
                                    }}>Localizado na Cidade Tiradentes,
                                Zona Leste da capital paulista e foi criado para preservar as nascentes do Córrego Itaquera
                                e da mata em estágio de regeneração.
                                </Text>

                                <Text style={{
                                marginLeft: 30,
                                marginTop: 40,
                                    fontSize: 12
                                    }}>Recomendado: Todas as idades / Horários: 6h às 18h

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


                    <TouchableOpacity style={{height: 160}}>
                    <View style={{backgroundColor: '#B1D3C1', marginTop: 55, borderRadius: 35, width: 355, height: 150, marginLeft: 20}}>
                                <Image source= {require('../../Imagens/PQDC.jpg')} style={styles.Imagens} />
                                <Text style={{
                                    marginLeft: 140,
                                    marginTop: -115,
                                    fontSize: 18
                                    }}>Parque da ciência
                                </Text>

                                <Text style={{
                                marginLeft: 140,
                                marginTop: 15,
                                    fontSize: 12
                                    }}>Localizado na Cidade Tiradentes, o famoso Parque Ciência é um cantinho especial
                                     para os moradores da região. Isso porque, o espaço foi construído com o intuito de 
                                     promover a educação ambiental e exploração da pesquisa científica.
                                </Text>

                                <Text style={{
                                marginLeft: 30,
                                marginTop: 15,
                                    fontSize: 12
                                    }}>Recomendado: Todas as idades / Horários: 6h às 18h

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


                    <TouchableOpacity style={{height: 160}}>
                    <View style={{backgroundColor: '#B1D3C1', marginTop: 65, borderRadius: 35, width: 355, height: 150, marginLeft: 20}}>
                                <Image source= {require('../../Imagens/PQVilaRodeio.jpg')} style={styles.Imagens} />
                                <Text style={{
                                    marginLeft: 140,
                                    marginTop: -115,
                                    fontSize: 18
                                    }}>Parque Vila do Rodeio
                                </Text>

                                <Text style={{
                                marginLeft: 140,
                                marginTop: 15,
                                    fontSize: 12
                                    }}>Criado como uma forma de preservar as nascentes do Córrego do Rodeio, 
                                    na Zona Leste da capital, o Parque Vila do Rodeio recebe diversos visitantes
                                     que estão em busca de lazer e diversão na cidade.
                                </Text>

                                <Text style={{
                                marginLeft: 30,
                                marginTop: 25,
                                    fontSize: 12
                                    }}>Recomendado: Todas as idades / Horários: 6h às 18h

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


                    <TouchableOpacity style={{height: 160}}>
                    <View style={{backgroundColor: '#B1D3C1', marginTop: 75, borderRadius: 35, width: 355, height: 150, marginLeft: 20}}>
                                <Image source= {require('../../Imagens/parque_do_carmo.jpg')} style={styles.Imagens} />
                                <Text style={{
                                    marginLeft: 140,
                                    marginTop: -115,
                                    fontSize: 18
                                    }}>Parque do Carmo
                                </Text>

                                <Text style={{
                                marginLeft: 140,
                                marginTop: 15,
                                    fontSize: 12
                                    }}>Inaugurado em 1976, o Parque do Carmo tem 1,5 milhão de m². O bosque tem cerca de 6 mil árvores,
                                      cerejeiras, diversas espécies  de animais. A estrutura do é completa
                                      e o visitante conta com Museu, pista de cooper e churrasqueiras.
                                </Text>

                                <Text style={{
                                marginLeft: 30,
                                marginTop: 15,
                                    fontSize: 12
                                    }}>Recomendado: Todas as idades / Horários: 5h30 às 20h

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


                    <TouchableOpacity style={{height: 160}}>
                    <View style={{backgroundColor: '#B1D3C1', marginTop: 85, borderRadius: 35, width: 355, height: 150, marginLeft: 20}}>
                                <Image source= {require('../../Imagens/PQRSX.jpg')} style={styles.Imagens} />
                                <Text style={{
                                    marginLeft: 140,
                                    marginTop: -115,
                                    fontSize: 18
                                    }}>Parque Raul Seixas
                                </Text>

                                <Text style={{
                                marginLeft: 140,
                                marginTop: 15,
                                    fontSize: 12
                                    }}>O Parque Raul Seixas é um parque público da cidade de São Paulo,
                                     Brasil. Conta com 33.000 m² e está situado no distrito de
                                    Itaquera, Leste da cidade.
                                </Text>

                                <Text style={{
                                marginLeft: 30,
                                marginTop: 40,
                                    fontSize: 12
                                    }}>Recomendado: Todas as idades / Horários: 6h às 18h

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