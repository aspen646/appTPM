import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Receita() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Receita</Text>
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
  titulo:{
    fontSize: 28,
    fontWeight: 'bold',
  }
});
