import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity} from 'react-native';
import Buscar from '../assets/buscar.png'
import Logo from '../assets/logo.png'



export default function BemVindo({navigation}){
  function button(){
    return(
      navigation.navigate('ConsultarPropostas')
    )
  }

  return (
    <View style ={styles.container}>
      {/* <Image source ={Logo} style ={styles.logo}/> */}
      <Text style ={ styles.title} >
        Bem Vindo :
      </Text>
      <ImageBackground source ={Buscar} style={{width: 500, height: 500}} >
        
      </ImageBackground>
      <TouchableOpacity style = {styles.button}
      onPress ={button}>
        <Text  style = {styles.buttonText}>Consultar Propostas</Text>
      </TouchableOpacity>
    </View>


  )
    
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  logo:{
    alignSelf: "flex-start"
  },
  title: {
     
  },
  button: {
    width: 200,
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
  }
})