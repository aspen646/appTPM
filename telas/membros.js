import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Membros() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>membros</Text>
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
