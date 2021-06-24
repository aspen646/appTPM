import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './telas/menu';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Menu/>
  );
}