import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, SafeAreaView, ScrollView, TextPropTypes } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { Button } from "react-native-elements"
export default function Lista10({navigation, route}){
    const ide = route.params
    let id = "0000"
    if (typeof(Object.values(Object.values(ide)[0])[0]) !== "undefined"){
        id = (Object.values(Object.values(Object.values(ide)[0])[0])[0])
    }
    console.log(id)
    const [listaP10, setListaP10] = useState("") 
    const [ListaN10, setListaN10] = useState("Lista 10");

    const añadir = () => {
    if (id !== "0000"){
        if (listaP10 !== ""){
        var listasplit = listaP10.split(",")
        if (listasplit.includes(id) === false){
            var nueva = listaP10.concat(id +",")
            setListaP10(nueva)
        } else {
            Alert.alert(
                "No pudimos agregar tu Anime UnU",
                "Este Anime ya esta en la lista, prueba con otro :3",
            ) 
        }
    } else {
        setListaP10(id +",")
    }
    }}

    const storeData = async () => {
        try {
            console.log("Guardando")
            await AsyncStorage.setItem("@Lista10", listaP10);
        } catch (err) {
            alert(err);
        } 
    }

    const getData = async () => {
        try{
            console.log("Cargando")
            let listaP10 = await AsyncStorage.getItem("@Lista10");
            if (listaP10 !== null) {
                setListaP10(listaP10);
            }
        } catch (err) {
            alert(err)
            }
}
    
    const borrar = () => {
        Alert.alert(
            "¿Desea purgar esta lista?",
            "Al purgar la lista se borraran todos los Animes que contiene.",
            [
              { text: "Cancelar", onPress: () => console.log("Cancel Pressed")},
              { text: "Borrar", onPress: () => removeData() }
            ],
            { cancelable: false }
          )
    }

    const removeData = async () => {
        try {
            console.log("Purgado")
            await AsyncStorage.removeItem("@Lista10")
    } catch (err) {
        alert(err)
    } finally {
        setListaP10("");
    };
    };

    const save = async() => {
        try {
            await AsyncStorage.setItem("Lista 10", ListaN10);
        } catch (err) {
            alert(err);
        }
    };

    const load = async () => {
        try{
            let ListaN10 = await AsyncStorage.getItem("Lista 10");
            if (ListaN10 !== null) {
                setListaN10(ListaN10);
            }
        } catch (err) {
            alert(err)
        }
    };

    const remove = async () => {
        try {
            await AsyncStorage.removeItem("Lista 10")
    } catch (err) {
        alert(err)
    } finally {
        setListaN10("");
    };
    };
    
    useEffect(() => {
        load();
        getData();
    },[]);

    return(
      <SafeAreaView style={styles.container}>
      <Text style = {styles.titulo}> {ListaN10} </Text>
      <TextInput 
          style={styles.input}
          placeholder = "Inserte Nombre Lista"
          onChangeText = {(text) => setListaN10(text)}>
      </TextInput>
      <Button onPress={() => añadir()}
          title = "Añadir"
          type = "outline"
       buttonStyle = {{
          backgroundColor:"#dcdcdc",
          marginHorizontal: 20,
          borderColor: "white",   
          borderRadius: 10, 
          marginVertical: 10,                 
      }}> </Button>
      <Button onPress={() => storeData()}
          title = "Guardar Anime"
          type = "outline"
       buttonStyle = {{
          backgroundColor:"#dcdcdc",
          marginHorizontal: 20,
          borderColor: "white",   
          borderRadius: 10, 
          marginVertical: 10,                 
      }}> </Button>
      <Button onPress={() => borrar()}
          title = "Purgar Lista"
          type = "outline"
       buttonStyle = {{
          backgroundColor:"#dcdcdc",
          marginHorizontal: 20,
          borderColor: "white",   
          borderRadius: 10,
          marginVertical: 10,                  
      }}> </Button>
      <Button onPress={() => navigation.navigate("Ver Lista 10", {lista: listaP10})}
          title = "Ver Lista"
          type = "outline"
       buttonStyle = {{
          backgroundColor:"#dcdcdc",
          marginHorizontal: 20,
          borderColor: "white",   
          borderRadius: 10,
          marginVertical: 10,                
      }}> </Button>
      <Button onPress={() => save()}
          title = "Guardar Nombre"
          type = "outline"
       buttonStyle = {{
          backgroundColor:"#dcdcdc",
          marginHorizontal: 20,
          borderColor: "white",   
          borderRadius: 10,
          marginVertical: 10,                
      }}> </Button>
      </SafeAreaView>
      )}
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
      },
      input: {
          marginBottom: "auto",
          borderWidth: 1,
          borderColor: "#777",
          padding: 8,
          margin: 10,
          width: 200,
          backgroundColor: "white",
      },
      listas: {
          alignItems: "center",
          backgroundColor: "#DDDDDD",
          padding: 10,
          marginBottom: 25,
      },
      titulo: {
          marginTop:"auto"
      }
  })