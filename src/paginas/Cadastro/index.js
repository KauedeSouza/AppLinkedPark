import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import styles from './style';
import * as yup from 'yup';


const schema = yup.object({
  email: yup.string().email("Email inválido").required("Informe seu Email"),
  password: yup.string().min(8, "A senha deve ter pelo menos 8 dígitos").required("Informe sua senha")
})

export default function Cadastro(){ 
    const navigation = useNavigation();
    const {control, handleSubmit, formState: {errors} } = useForm({
      resolver: yupResolver(schema)
    })

    function handleSignIn(data){
        fetch('https://tcc-production-e100.up.railway.app/api/usuario', {
  method: 'POST',
  body: JSON.stringify({
    email: data.email,
    senha: data.password,
   
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then(response => {
    if(response.status == 400){
      Alert.alert("Ops!","esse email a esta em uso")
    }else if (response.status == 201){
      Alert.alert("Sucesso!","cadastrado com sucesso")
    }else{
      Alert.alert("Ops!","Erro no servidor verifique o email e tente novamente!")

    }

  }).catch(errors =>{
  console.error("Erro durante a requisição:", errors);
  Alert.alert("Erro", "Ocorreu um erro durante a requisição");
});
    }


      return(
        <View style= {{flex:1, backgroundColor: '#FFF'}}>
            <TouchableOpacity style={styles.botaopular} onPress={ () => navigation.navigate('iniciar')} >
                <Text style={{color: '#000',fontSize: 35, left: 30, marginTop: 60}}><Icon name="leftcircle" size={40} color='#17A558'/>  Cadastro</Text>
            </TouchableOpacity>

            <Text style={styles.Textocadas}>Vamos realizar seu cadastro, precisamos apenas de algumas informações:</Text>

            <Text style={{fontSize: 20, left: 30, marginTop: 50}}>E-mail:</Text>

              <Controller
                  control={control}
                  name="email"
                  render={({field: {onChange, onBlur, value}}) => (

                    <TextInput 
                    style={[styles.Inputs, {
                      borderWidth: errors.email && 2,
                      borderColor: errors.email && '#ff375b'
                    } ]} 

                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder='  Digite seu E-mail'
                  />
                )}
              />
              {errors.email && <Text style={styles.Error}>{errors.email?.message}</Text>}

              <Text style={{fontSize: 20, left: 30, marginTop: 30}}>Senha:</Text>

              <Controller
                  control={control}
                  name="password"
                  render={({field: {onChange, onBlur, value}}) => (

                    <TextInput
                     style={[styles.Inputs, {
                      borderWidth: errors.password && 2,
                      borderColor: errors.password && '#ff375b'
                    } ]} 

                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder='  Digite sua Senha'
                    secureTextEntry={true}
                  />
                )}
              />
              {errors.password && <Text style={styles.Error}>{errors.password?.message}</Text>}


            <TouchableOpacity style={styles.Botao} onPress={handleSubmit(handleSignIn)} >
            <Text style={{color: '#FFF'}}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaofazerlogin} onPress={ () => navigation.navigate('Login')}>
            <Text style={{color: '#000', fontSize: 15}}>Já tem conta?<Text style={{color: '#17A558' }}> - Faça o Login</Text></Text>
          </TouchableOpacity>
        </View>
        
      );
      
}


