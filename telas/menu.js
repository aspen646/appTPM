import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import imgMenu from '../assets/wallet.png';

export default function Menu() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>SysREP</Text>
        <Image source={imgMenu} style={{width: 100, height: 100, marginTop: 25}}/>
      </View>
      <View style={styles.botaoContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize: 28,
    fontWeight: 'bold',
  }
});
