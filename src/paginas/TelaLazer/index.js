import React from 'react';
import {View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/FontAwesome';
import Iconsss from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import Routes from '../../componentes/menu/routes';

export default function TelaLazer(){
    const navigation = useNavigation();

    return(
            <View>
                <ScrollView>
                <TouchableOpacity style={styles.botaopular} onPress={ () => navigation.navigate('TelaInicial')} >
                <Text style={{color: '#000',fontSize: 35, left: 30, marginTop: 60}}><Icon name="leftcircle" size={40} color='#17A558'/>  Lazer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height: 160}}>
                    <View style={{backgroundColor: '#B1D3C1', marginTop: 45, borderRadius: 35, width: 355, height: 150, marginLeft: 20}}>
                                <Image source= {require('../../Imagens/CENTROC.jpg')} style={styles.Imagens} />
                                <Text style={{
                                    marginLeft: 140,
                                    marginTop: -115,
                                    fontSize: 18
                                    }}>Centro cultural Cidade Tiradentes
                                </Text>

                                <Text style={{
                                marginLeft: 140,
                                marginTop: 15,
                                    fontSize: 12
                                    }}>Nesse espaço são realizadas oficinas de dança, música, teatro, artes plásticas,   fotografia,
                                    leitura, dentre outras atividades que visem aproximar as pessoas à cultura.
                                </Text>

                                <Text style={{
                                marginLeft: 30,
                                marginTop: 25,
                                    fontSize: 12
                                    }}>Recomendado: Todas as idades / Horários: 9h às 18h

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
                                <Image source= {require('../../Imagens/PRACABR.jpg')} style={styles.Imagens} />
                                <Text style={{
                                    marginLeft: 140,
                                    marginTop: -115,
                                    fontSize: 18
                                    }}>Praça Brasil
                                </Text>

                                <Text style={{
                                marginLeft: 140,
                                marginTop: 15,
                                    fontSize: 12
                                    }}>Localizada no Conjunto José Bonifácio,
                                     é um ótimo lugar, tem esporte, lazer pra criançada,
                                      música, tudo no meio da cohab.
                                </Text>

                                <Text style={{
                                marginLeft: 30,
                                marginTop: 50,
                                    fontSize: 12
                                    }}>Recomendado: Todas as idades / Horários: 24h

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
                                <Image source= {require('../../Imagens/SESC.jpg')} style={styles.Imagens} />
                                <Text style={{
                                    marginLeft: 140,
                                    marginTop: -115,
                                    fontSize: 18
                                    }}>Sesc Itaquera
                                </Text>

                                <Text style={{
                                marginLeft: 140,
                                marginTop: 15,
                                    fontSize: 12
                                    }}>Famoso pelas piscinas que matam o calor no verão,
                                     o Sesc Itaquera tem atrações até cansar: shows, espaço
                                     s para crianças, quadras, etc.     Se você quer fazer um passeio
                                     barato e legal o Sesc é uma das melhores opções no bairro.
                                </Text>

                                <Text style={{
                                marginLeft: 30,
                                marginTop: 25,
                                    fontSize: 12
                                    }}>Recomendado: Todas as idades / Horários: 9h às 17h

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
                                <Image source= {require('../../Imagens/ECO.jpg')} style={styles.Imagens} />
                                <Text style={{
                                    marginLeft: 140,
                                    marginTop: -115,
                                    fontSize: 18
                                    }}>Ecológico Itaquera
                                </Text>

                                <Text style={{
                                marginLeft: 140,
                                marginTop: 15,
                                    fontSize: 12
                                    }}>o Parque Ecológico do Tietê (PET), está localizado na Zona Leste da cidade de São Paulo,
                                     próximo à estação Engenheiro Goulart,                 da Linha 12-Safira
                                      da Companhia Paulista de Transportes Metropolitanos (CPTM).
                                </Text>

                                <Text style={{
                                marginLeft: 30,
                                marginTop: 25,
                                    fontSize: 12
                                    }}>Recomendado: Todas as idades / Horários: 8h às 17h

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
                                <Image source= {require('../../Imagens/TATUAPE.jpg')} style={styles.Imagens} />
                                <Text style={{
                                    marginLeft: 140,
                                    marginTop: -115,
                                    fontSize: 18
                                    }}>Casa de Cultura do Tatuapé
                                </Text>

                                <Text style={{
                                marginLeft: 140,
                                marginTop: 15,
                                    fontSize: 12
                                    }}>É um lugar feito em uma construção histórica e
                                     hoje abriga um centro cultural com atividades educativas
                                      e exposições.
                                </Text>

                                <Text style={{
                                marginLeft: 30,
                                marginTop: 48,
                                    fontSize: 12
                                    }}>Recomendado: Todas as idades / Horários: 9h às 17h

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