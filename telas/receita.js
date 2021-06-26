import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, SafeAreaView} from 'react-native';
import { Header } from '../components/Header';


export default function Receita() {

  return (
    <SafeAreaView style={styles.container}>
      <Header texto="Receita" />
      <View style={styles.conteudo}>
        <TextInput style={styles.input} placeholder="Nome da Receita" />
        <TextInput style={styles.input} placeholder="Valor R$" />
        <TouchableOpacity style={styles.botao} onPress={() => { }}>
          <Text style={styles.botaoTexto}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView>
       
        </ScrollView>
      </View>
    </SafeAreaView>
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
  },

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },

}

);
