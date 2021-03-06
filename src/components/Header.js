import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

export function Header({ texto }) {
  const navigation = useNavigation();

  return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={28} color="#f0f0f5" />
        </TouchableOpacity>
        <Text style={styles.titulo}>{texto}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'#313131',
    // width: '100%',
    // height: 100,

    paddingTop: Constants.statusBarHeight + 5,
    paddingLeft: 15,
    paddingBottom: 12,
    marginBottom: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,

  },
  titulo: {
    color: '#F0F0F5',
    paddingLeft: 15,
    fontSize: 28,
    fontWeight: 'bold',
  }
});
