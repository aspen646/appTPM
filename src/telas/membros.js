import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/Header';
import api from '../services/api';


export default function Membros() {
  const navigation = useNavigation();
  const [membros, setMembros] = useState();

  useEffect(() =>{
    loadApiContent();
  },[]);

async function loadApiContent(){
  let dataResponse = [];
  api.get(
    `membros`,
  )
  .then((response) => {
    response.data.filter((item) => {
      dataResponse.push(item);    
    });
    setMembros(dataResponse)
   
  })
  .catch((e) => {
    console.log(e);
      if(!e.response){
        return Alert.alert('Erro');
      }
      return Alert.alert('Erro', e.response.data.erro);
  });
}

function ListaComponent({...props}){
  return(
      <View style={styles.listaHeader}>
        <Text style={styles.listaTexto}>{props && props.data.nome}</Text>
        <Text style={styles.listaTexto}>{props && props.data.telefone}</Text>
    </View>
  );
}


  return (
    <View style={styles.wrapper}>
      <Header texto="Membros" />
      <View style={styles.container}>
        <View style={styles.conteudo} />
        <View style={styles.listaHeader}>
          <Text style={styles.listaTexto}>Membro</Text>
          <Text style={styles.listaTexto}>Telefone</Text>
        </View>
        {membros &&
          <FlatList
              data={membros}
              ListEmptyComponent={<Text style={{alignSelf:'center', color:'#999'}}>Não existe nenhum membro.</Text>}
              //refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
              //onEndReached={loadClientes}
              //onEndReachedThreshold={0.2}            
              //ListFooterComponent={<RenderFooter value={loading} refreshing={refreshing}/>}
              keyExtractor={membros => String(membros.id)}
              renderItem={({ item } ) => <ListaComponent data={item} />} 
          />
        }
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


