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
})

.catch(errors =>{
  console.error("Erro durante a requisição:", errors);
  Alert.alert("Erro", "Ocorreu um erro durante a requisição");
});
    }

    const [cep, setCep] = useState('');

  const handleCepChange = (text) => {
    setCep(text.replace(/[^0-9]/g, '')); // Remove caracteres não numéricos
  };

  const handleSearchCep = async () => {
    if (cep.length !== 8) {
      Alert.alert('Erro', 'CEP inválido. Por favor, insira um CEP válido.');
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      if (data.erro) {
        Alert.alert('Erro', 'CEP não encontrado. Por favor, insira um CEP válido.');
      } else {
        // Aqui você pode utilizar os dados do CEP, por exemplo, exibindo em um Alert
        Alert.alert('CEP Encontrado', `Cidade: ${data.localidade}, Estado: ${data.uf}`);
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };



      return(
        <View style= {{flex:1, backgroundColor: '#FFF'}}>
            <TouchableOpacity style={styles.botaopular} onPress={ () => navigation.navigate('iniciar')} >
                <Text style={{color: '#000',fontSize: 35, left: 30, marginTop: 60}}><Icon name="leftcircle" size={40} color='#17A558'/>  Cadastro</Text>
            </TouchableOpacity>

            <Text style={styles.Textocadas}>Vamos realizar seu cadastro, precisamos apenas de algumas informações:</Text>


            <Text style={{fontSize: 20, left: 20, marginTop: 50}}>Nome Completo:</Text>

                    <TextInput 
                    style={[styles.Inputs]} 
                    placeholder='  Digite seu Nome Completo'
                  />

            <Text style={{fontSize: 20, left: 20, marginTop: 30}}>CEP:</Text>

              <Input
                style={styles.Inputs}
                placeholder="Digite seu CEP"
                value={cep}
                onChangeText={handleCepChange}
                keyboardType="numeric"
                maxLength={8}
              />

            <Text style={{fontSize: 20, left: 20, marginTop: 50}}>E-mail:</Text>

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

              <Text style={{fontSize: 20, left: 20, marginTop: 30}}>Senha:</Text>

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




            <TouchableOpacity style={styles.Botao} onPress={handleSubmit(handleSignIn, handleSearchCep)} >
            <Text style={{color: '#FFF'}}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaofazerlogin} onPress={ () => navigation.navigate('Login')}>
            <Text style={{color: '#000', fontSize: 15}}>Já tem conta?<Text style={{color: '#17A558' }}> - Faça o Login</Text></Text>
          </TouchableOpacity>
        </View>
        
      );
      
}


