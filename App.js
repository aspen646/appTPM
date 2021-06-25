import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Menu from './telas/menu';
import Membros from './telas/membros';
import Despesas from './telas/despesas';
import Receita from './telas/receita';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Menu" component={Menu}/>  
        <Stack.Screen name="Membros" component={Membros}/>  
        <Stack.Screen name="Despesas" component={Despesas}/>  
        <Stack.Screen name="Receita" component={Receita}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}