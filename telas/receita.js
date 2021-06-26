import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput,ScrollView } from 'react-native';
import { Header } from '../components/Header';


export default function Receita() {

  return (
    <View style={styles.container}>
      <Header texto="Receita" />
      <ScrollView horizontal={false} style={styles.conteudo}>
        <TextInput style={styles.input} placeholder="Nome da Receita" />
        <TextInput style={styles.input} placeholder="Valor R$" />
        <TouchableOpacity style={styles.botao} onPress={() => {}}>
          <Text style={styles.botaoTexto}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
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
  titulo: {
    color: '#F0F0F5',
    fontSize: 28,
    fontWeight: 'bold',
  },
  conteudo: {

  },
  input: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: '#525252',
    borderRadius: 4,
    width: 200,
    paddingLeft: 15,
    fontSize: 15,
    color: '#fff',
    marginBottom: 25
  },
  botao: {
    width: 200,
    height: 50,
    backgroundColor: '#EC625F',
    marginTop: 12,
    borderRadius: 4,
    justifyContent: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  }
}

);
