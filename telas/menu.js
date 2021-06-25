import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import imgMenu from '../assets/wallet.png';

export default function Menu() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>SysREP</Text>
        <Image source={imgMenu} style={{width: 100, height: 100, marginTop: 25}}/>
      </View>
      <View style={styles.botaoContainer}>
        <TouchableOpacity style={styles.botao} onPress={() => {navigation.navigate('Despesas')}}>
          <Text style={styles.botaoTexto}>Despesas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => {navigation.navigate('Receita')}}>
          <Text style={styles.botaoTexto}>Receita</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => {navigation.navigate('Membros')}}>
          <Text style={styles.botaoTexto}>Membros</Text>
        </TouchableOpacity>
        </View>
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
    backgroundColor: '#EC625F',
    marginTop: 25,
    borderRadius: 4,
    justifyContent: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  titulo:{
    color: '#F0F0F5',
    fontSize: 28,
    fontWeight: 'bold',
  }
});
