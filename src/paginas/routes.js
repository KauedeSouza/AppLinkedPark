import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TelaInicial from './Telainicial';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={TelaInicial} />
        </Tab.Navigator>
    )
}