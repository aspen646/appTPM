import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


import { Header } from '../components/Header';

export default function Despesas() {
  return (
    <View style={styles.wrapper}>
      <Header texto="Despesas"/>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.titulo}>DESPESAS</Text> 
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    
  },
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  body: {
    flex: 1,
    backgroundColor: 'red',
  },
  titulo:{
    color: '#F0F0F5',
    fontSize: 28,
    fontWeight: 'bold',
  }
});
