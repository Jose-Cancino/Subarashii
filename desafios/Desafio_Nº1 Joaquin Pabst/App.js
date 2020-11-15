import React, { useState, Component } from 'react';
import { StyleSheet, Button, Text, View, TextInput, Alert, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default function App () {
  const[mensaje, setMensaje] = useState("")

  const [nombre, setNombre] = useState("")

  const [contraseña, setContraseña] = useState("")

  function corregir () {
    if (nombre === "Neko" && contraseña === "nicolas"){
      setMensaje("Sos Vos") 
    } else {
      setMensaje("QUIEN ANDA AHI")
      Alert.alert("NO SOS")
    }
  }
  
  return (
    
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}> Iniciar sesion</Text>
      
      <TextInput
        style = {styles.input}
        placeholder = " Nombre"
        onChangeText = {(val) => setNombre(val)}
      ></TextInput>
      
      

      <TextInput
        style = {styles.input}
        placeholder = " Contraseña"
        onChangeText = { (val) => setContraseña(val)}
      ></TextInput>


      <Button 
      title = "boton"
      onPress = {() => corregir()} 
      title = "Confirmar"
      ></Button>
      <Text style={styles.title}> {mensaje} </Text>

    
    </View>
    </SafeAreaView>
    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 40,
    borderColor: "blue", 
    borderWidth: 1,  
  },
  title:{
    textAlign: "center",
    marginVertical: 8, 
    fontSize: 30
  
  }
});
