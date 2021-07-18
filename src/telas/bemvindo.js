import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ActivityIndicator, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import imgBemVindo from '../assets/team.png';

export default function BemVindo() {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingStorage, setLoadingStorage] = useState(false);
    const navigation = useNavigation();

    useEffect(() =>{
      handleEntry() 
    },[]);
  
    async function handleEntry(){
        setLoadingStorage(true);
      try {
        await AsyncStorage.clear()
        const value = await AsyncStorage.getItem('@nomeUsuario')
        if(value !== null) {
            navigation.navigate('Menu');
            setLoadingStorage(false);
        }else{
            setLoadingStorage(false);
            return;
        }
      } catch(e) {
        // error reading value
      }
    }

    async function handleStorage(){
        if(nomeUsuario == "")
            return

        if(loading == true)
            return
        
        setLoading(true);
        try {
            await AsyncStorage.setItem('@nomeUsuario', nomeUsuario).then(() =>{
                navigation.navigate('Menu');
                setLoading(false);
            });
        } catch (e) {
            // saving error
        }
        
    }

    return(
        <View style={styles.wrapper}>
            {loadingStorage?
            <ActivityIndicator style={{justifyContent:'center', alignSelf:'center'}} size="large" color="#fff" />
            :
            <>
            <Text style={styles.titulo}>Bem-Vindo</Text>
            <Text style={styles.subtitulo}>Antes de começar, qual é o seu nome?</Text>
            <Image source={imgBemVindo} style={{width: 180, height: 180, marginTop: 0, alignSelf: 'center'}}/>

            <TextInput 
            value={nomeUsuario}
            onChangeText={(text => setNomeUsuario(text))}
            placeholderTextColor="#999" 
            style={styles.input} 
            placeholder="Nome" />
            {loading?
            <TouchableOpacity style={styles.botao}>
            <ActivityIndicator style={{justifyContent:'center', alignSelf:'center'}} size="small" color="#fff" />
            </TouchableOpacity>
                : 
            <TouchableOpacity style={styles.botao} onPress={() => { handleStorage() }}>
            <Text style={styles.botaoTexto}>Enviar</Text>
            </TouchableOpacity>

            }          
            </>
        }               
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#313131'
    },
    titulo: {
      color: '#F0F0F5',
      alignSelf: 'center',
      fontSize: 42,
      textAlign: 'left',
      width: 240,
      paddingBottom: 5,
      fontWeight: 'bold',

    },
    subtitulo: {
      color: '#F0F0F5',
      alignSelf: 'center',
      fontSize: 18,
      paddingBottom: 0,
      maxWidth: 240,
      fontWeight: '400',
    },
    conteudo: {
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'space-around',
      // backgroundColor: 'pink'
    },
    input: {
      height: 55,
      alignSelf: "center",
      backgroundColor: '#525252',
      borderRadius: 4,
      width: 240,
      paddingLeft: 15,
      marginTop: 60,
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
    }
  });