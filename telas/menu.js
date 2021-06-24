import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import imgMenu from '../assets/wallet.png';

export default function Menu() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>SysREP</Text>
      <Image source={imgMenu} style={{width: 100, height: 100, marginBottom: 10, marginTop: 25}}/>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Despesas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Receita</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Membros</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: 200,
    height: 40,
    backgroundColor: '#000',
    marginTop: 25,
    textAlign: 'center',
    borderRadius: 8,
    justifyContent: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
  },
  titulo:{
    fontSize: 28,
    fontWeight: 'bold',
  }
});
