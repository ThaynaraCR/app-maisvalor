import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import api from '../services/api';
import Logo from '../assets/logo.png';

export default function Login({navigation}){

   const [login, setLogin] = useState('');
   const [senha, setSenha] = useState('');
  //  let data = {
  //   login: login,
  //   senha: senha
  //   }
  //    console.log(data)
  async function PegarDados(){
    const response = await api.post('/users',{
      login,
      senha
    })
     
      if(response.data === 'ok'){
        navigation.navigate('BemVindo')
      } else {
        Alert.alert(
          "Atenção",
          response.data,
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      }
    
      
  }
  return (
  <View style ={styles.container}>
    <Image source ={Logo} /> 

    <View style ={styles.form}>

      <Text style = {styles.label}>Login:</Text>
      <TextInput style= {styles.input}
        placeholder = "Login"
        placeholderTextColor = "#999"
        autoCorrect = {false}
        value = {login}
        onChangeText = {setLogin}
      />

      <Text style = {styles.label}>Senha:</Text>
      <TextInput style= {styles.input}
        placeholder = "Senha"
        placeholderTextColor = "#999"
        secureTextEntry={true}
        value = {senha}
        onChangeText = {setSenha}


      />

      <TouchableOpacity onPress ={PegarDados} style = {styles.button}>
        <Text style = {styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal:30,
    marginTop:30
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 5
  },

  button: {
    height: 42,
    backgroundColor:'#CEF207',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  
  },

  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },


});

