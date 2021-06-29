import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';


function ListaComponent(props){
  return(
    <View style={styles.listaHeader}>
      <Text style={styles.listaTexto}>Óleo</Text>
      <Text style={styles.listaTexto}>R$ 7,49</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
