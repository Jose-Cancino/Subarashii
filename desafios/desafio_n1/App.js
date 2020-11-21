import { StatusBar } from 'expo-status-bar';
import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [usuario, setUsuario] = React.useState("Usuario");
  const [contraseña, setContraseña] = React.useState("Contraseña");
  const [mensaje, setMensaje] = React.useState("")

  function comprobar(){
    if (usuario === "Pabst" && contraseña === "neko"){
      setMensaje("Wena po")
    } else{
      setMensaje("No Sos VOS")
      Alert.alert("Quien Sos?"), [
        {text: "soy yoh"}
      ];
    }

  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>Iniciar Sesión</Text>
      <TextInput 
        style={styles.input}
        placeholder = "Usuario"
        onChangeText = {(val) => setUsuario(val)}
        />
      <TextInput 
        style={styles.input}
        secureTextEntry={true}
        placeholder = "Contraseña"
        onChangeText = {(val) => setContraseña(val)}
        />
      <TouchableOpacity onPress={() => comprobar()}>
        <Text style={styles.boton}> Iniciar Sesión </Text> 
      </TouchableOpacity>
      <Text style={styles.texto}> {mensaje} </Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
  
  },
  texto: {
    fontSize: 20,
    fontFamily: "monospace"
  
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
    backgroundColor: "white",

  },
  boton: {
    borderWidth: 1,
    height: 42,
    width:200,
    borderRadius: 24,
    textAlignVertical: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "white",
  },
});



