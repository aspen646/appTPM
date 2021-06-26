import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Header } from '../components/Header';


export default function Receita() {
  const [real, setReal] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Header texto="Receita" />
      <View style={styles.conteudo}>
        <TextInput style={styles.input} placeholder="Nome da Receita" />
        <TextInput style={styles.input} placeholder="Valor R$" />
        <TextInputMask
            type={'money'}
            options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$ ',
            suffixUnit: ''
            }}
            value={real}
            onChangeText={(real => setReal((prevState) => {
                return { ...prevState, real }
            }))}
            autoCapitalize="none"
            placeholder="R$ 0,00"
            placeholderTextColor="#999"
            keyboardType='decimal-pad'
            style={styles.input}
            />
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
});
