import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
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
        console.log (data.email + data.password);
        fetch('http://localhost:8080/usuario', {
  method: 'POST',
  body: JSON.stringify({
    nome:"gabriel",
    email: data.email,
    senha: data.password,
   
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => {

    if(response.status == 400){
      console.log("esse email a esta em uso")
    }else{
      console.log("cadastrado com sucesso")
    }

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

              <Text style={{fontSize: 20, left: 30, marginTop: 30}}>Confirme sua senha:</Text>

              <Controller
                  control={control}
                  name="passwordconfirm"
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

const styles = StyleSheet.create({
  Botao: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#17A558',
    width: 250,
    height: 50,
    left: 75,
    borderRadius: 50
  },
  Textocadas: {
    fontSize:25,
    alignItems: 'center',
    justifyContent: 'center',
    left: 20,
    marginTop: 100
  },
  Inputs: {
    height: 45,
    borderWidth: 1,
    borderColor: '#B1D3C1',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    borderRadius: 15,
    backgroundColor: '#B1D3C1'
  },
  botaofazerlogin: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    left: 70
  },
  Error: {
    alignSelf: 'flex-start',
    color: '#ff375b',
    marginBottom: 8,
    left: 30
  }
})
