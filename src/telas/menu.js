import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import imgMenu from '../assets/wallet.png';

export default function Menu() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');

  useEffect(() =>{
    handleStorage() 
  },[]);

  async function handleStorage(){
    setNome(await AsyncStorage.getItem('@nomeUsuario'));
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>SysREP</Text>
        <Image source={imgMenu} style={{width: 150, height: 150, marginTop: 25, alignSelf: 'center'}}/>
        <Text style={styles.subtitulo}>Seja Bem-Vindo, <Text style={{fontWeight:'bold', color: '#55B4F1'}}>{nome}</Text></Text>
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
    justifyContent: 'space-around',
  },
  botao: {
    width: 240,
    height: 55,
    backgroundColor: '#EC625F',
    marginBottom: 25,
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
    alignSelf: 'center'
  },
  subtitulo: {
    color: '#F0F0F5',
    fontSize: 24,
    fontWeight: '400',
    marginTop: 30,
    width: 240
  }
});
