import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { Header } from '../components/Header';

export default function Receita() {

  return (
    <View style={styles.container}>
      <Header texto="Receita"/>
      <Text style={styles.titulo}>Receita</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313131',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  titulo:{
    color: '#F0F0F5',
    fontSize: 28,
    fontWeight: 'bold',
  }
});
