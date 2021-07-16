import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Menu from './src/telas/menu';
import Membros from './src/telas/membros';
import Despesas from './src/telas/despesas';
import Receita from './src/telas/receita';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Menu" component={Menu}/>  
        <Stack.Screen name="Receita" component={Receita}/>  
        <Stack.Screen name="Membros" component={Membros}/>  
        <Stack.Screen name="Despesas" component={Despesas}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}