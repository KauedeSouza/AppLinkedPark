import React from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';


export default function TelaInicial(){ 

      return(
        <View style= {{flex:1, backgroundColor: '#FFF'}}>
            <View style={styles.view}>

                <Image source= {require('../../Imagens/perfilimg.jpg')} style={styles.Imagem} />
                <TextInput style={styles.Input} placeholder= 'Pesquisar'/>
                <TouchableOpacity><Icon name="wechat" size={40} color='#17A558'/></TouchableOpacity>

            </View>    
        </View>

      );
}

