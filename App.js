import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import iniciar from './src/paginas/Iniciar';
import Cadastro from './src/paginas/Cadastro';
import Login from './src/paginas/Login';
import TelaParques from './src/paginas/TelaParques';
import TelaInicial from './src/paginas/Telainicial';
import TelaLazer from './src/paginas/TelaLazer';
import TelaDetalhes from './src/paginas/TelaDetalhes';
import TelaDetalhesLazer from './src/paginas/TelaDetalhesLazer'
import Usuario from './src/paginas/Usuario'

const Stack = createNativeStackNavigator()

export default function App(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name='iniciar' 
          component={iniciar}
          options={{
            headerShown: false
          }}
          />
          <Stack.Screen
           name='Cadastro'
           component={Cadastro}
           options={{
            headerShown: false
          }}
          />
          <Stack.Screen
           name='Login'
           component={Login}
           options={{
            headerShown: false
          }}
          />
          <Stack.Screen
           name='TelaInicial'
           component={TelaInicial}
           options={{
            headerShown: false
          }}
          />
          <Stack.Screen
           name='TelaParques'
           component={TelaParques}
           options={{
            headerShown: false
          }}
          />
          <Stack.Screen
           name='TelaLazer'
           component={TelaLazer}
           options={{
            headerShown: false
          }}
          />
          <Stack.Screen
           name='TelaDetalhes'
           component={TelaDetalhes}
           options={{
            headerShown: false
          }}
          />
          <Stack.Screen
           name='TelaDetalhesLazer'
           component={TelaDetalhesLazer}
           options={{
            headerShown: false
          }}
          />
          <Stack.Screen
           name='Usuario'
           component={Usuario}
           options={{
            headerShown: false
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
