import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView, FlatList} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Header } from '../components/Header';


export default function Receita() {
  const [real, setReal] = useState("");

  function ListaComponent(props){
  
  return(
      <View>
          <TouchableOpacity onPress={() => {}}>
              <View>
                  <Text>Despesa</Text>
                  <Text>{'Internet'}</Text>

                  <Text>Valor</Text>
                  <Text>{'100,00'}</Text>
              </View>
              <Feather name="info" size={28} color="#EB708A"/>
          </TouchableOpacity>
      </View>
  );
}


  return (
<SafeAreaView style={styles.wrapper}>
  <View style={styles.container}>
        <Header texto="Receita" />
        <View style={styles.conteudo}>
          <TextInput style={styles.input} placeholder="Nome da Receita" />
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
              onChangeText={(text => setReal(text))}
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
          <FlatList
              //data={clientes}
              ListEmptyComponent={<Text style={{alignSelf:'center', color:'#999'}}>Não existe nenhuma receita.</Text>}
              //refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
              //onEndReached={loadClientes}
              //onEndReachedThreshold={0.2}            
              //ListFooterComponent={<RenderFooter value={loading} refreshing={refreshing}/>}
              //keyExtractor={clientes => String(clientes.idCliente)}
              renderItem={({ item: clientes })=>(
                  <ListaComponent value={clientes}/>
              )}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: '#313131',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height:'100%'

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
