import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { Header } from '../components/Header';


export default function Membros() {

  return (
    <View style={styles.container}>
      <Header texto="Membros"/>
      <Text style={styles.titulo}>membros</Text>
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
  botao: {
    width: 200,
    height: 50,
    backgroundColor: '#000',
    marginTop: 25,
    borderRadius: 4,
    justifyContent: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  titulo:{
    color: '#F0F0F5',
    fontSize: 28,
    fontWeight: 'bold',
  }
});
