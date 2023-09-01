import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import iniciar from './src/paginas/Iniciar';
import Cadastro from './src/paginas/Cadastro'
import Login from './src/paginas/Login'
import Telainicial from './src/paginas/Telainicial'
import TelaInicial from './src/paginas/Telainicial';

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
        </Stack.Navigator>
      </NavigationContainer>
    )
}
