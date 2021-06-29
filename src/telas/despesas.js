import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';


import { Header } from '../components/Header';

export default function Despesas() {
  const [real, setReal] = useState("");

  //   function ListaComponent(props){
    
  //   return(
  //       <View>
  //           <TouchableOpacity onPress={() => {}}>
  //               <View>
  //                   <Text>Despesa</Text>
  //                   <Text>{'Internet'}</Text>
  
  //                   <Text>Valor</Text>
  //                   <Text>{'100,00'}</Text>
  //               </View>
  //               <Feather name="info" size={28} color="#EB708A"/>
  //           </TouchableOpacity>
  //       </View>
  //   );
  // }
  
  
    return (
    <View style={styles.wrapper}>
        <Header texto="Despesas" />
        <View style={styles.container}>
          <View style={styles.conteudo}>
            <TextInput placeholderTextColor="#999" style={styles.input} placeholder="Despesa" />
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
              <View style={styles.listaHeader}>
                <Text style={styles.listaTexto}>Despesas</Text>
                <Text style={styles.listaTexto}>R$</Text>
              </View>
              <View style={styles.listaHeader}>
                <Text style={styles.listaTexto}>Internet</Text>
                <Text style={styles.listaTexto}>R$ 100,00</Text>
              </View>
              <View style={styles.listaHeader}>
                <Text style={styles.listaTexto}>Energia</Text>
                <Text style={styles.listaTexto}>R$ 20,00 </Text>
              </View>
              <View style={styles.listaHeader}>
                <Text style={styles.listaTexto}>Óleo</Text>
                <Text style={styles.listaTexto}>R$ 7,49</Text>
              </View>
              {/* <FlatList
                  //data={clientes}
                  ListEmptyComponent={<Text style={{alignSelf:'center', color:'#999'}}>Não existe nenhuma receita.</Text>}
                  //refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                  //onEndReached={loadClientes}
                  //onEndReachedThreshold={0.2}            
                  //ListFooterComponent={<RenderFooter value={loading} refreshing={refreshing}/>}
                  //keyExtractor={clientes => String(clientes.idCliente)}
                  renderItem={()=>(
                      <ListaComponent/>
                  )}/>  */}
          
          </View>
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: '#414141'
    },
    container: {
      flex: 1,
      alignItems: 'center',
    },
    titulo: {
      color: '#F0F0F5',
      fontSize: 28,
      fontWeight: 'bold',
    },
    conteudo: {
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'space-around',
      // backgroundColor: 'pink'
    },
    input: {
      height: 55,
      alignSelf: "stretch",
      backgroundColor: '#525252',
      borderRadius: 4,
      width: 240,
      paddingLeft: 15,
      fontSize: 15,
      color: '#fff',
      marginBottom: 25
    },
    botao: {
      width: 240,
      height: 55,
      backgroundColor: '#EC625F',
      marginTop: 12,
      borderRadius: 4,
      justifyContent: 'center',
      marginBottom: 50
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
  
    listaHeader:{
      flexDirection: 'row',
      justifyContent: 'space-around',
  
      width: 300,
      // backgroundColor: 'blue',
      paddingBottom: 3,
      marginBottom: 12,
      borderBottomColor: 'grey',
      borderBottomWidth: 2
    },
  
    listaTexto:{
      color: '#f0f0f5',
      fontSize: 14,
    }
  });