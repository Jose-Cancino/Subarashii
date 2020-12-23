import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, SafeAreaView, ScrollView, TextPropTypes } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { Button } from "react-native-elements"

export default function vistos({navigation, route}){
    const ide = route.params
    let id = "0000"
    if (typeof(Object.values(Object.values(ide)[0])[0]) !== "undefined"){
        id = (Object.values(Object.values(Object.values(ide)[0])[0])[0])
    }
    console.log(id)
    const [listaPVistos, setListaPVistos] = useState("") 
    const [ListaNVistos, setListaNVistos] = useState("Lista Vistos");

    const añadir = () => {
    if (id !== "0000"){
        if (listaPVistos !== ""){
        var listasplit = listaPVistos.split(",")
        if (listasplit.includes(id) === false){
            var nueva = listaPVistos.concat(id +",")
            setListaPVistos(nueva)
        } else {
            Alert.alert(
                "No pudimos agregar tu Anime UnU",
                "Este Anime ya esta en la lista, prueba con otro :3",
            ) 
        }
    } else {
        setListaPVistos(id +",")
    }
    }}

    const storeData = async () => {
        try {
            console.log("Guardando")
            await AsyncStorage.setItem("@ListaVistos", listaPVistos);
        } catch (err) {
            alert(err);
        } 
    }

    const getData = async () => {
        try{
            console.log("Cargando")
            let listaPVistos = await AsyncStorage.getItem("@ListaVistos");
            if (listaPVistos !== null) {
                setListaPVistos(listaPVistos);
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
            await AsyncStorage.removeItem("@ListaVistos")
    } catch (err) {
        alert(err)
    } finally {
        setListaPVistos("");
    };
    };

    const save = async() => {
        try {
            await AsyncStorage.setItem("Lista Vistos", ListaNVistos);
        } catch (err) {
            alert(err);
        }
    };

    const load = async () => {
        try{
            let ListaNVistos = await AsyncStorage.getItem("Lista Vistos");
            if (ListaNVistos !== null) {
                setListaNVistos(ListaNVistos);
            }
        } catch (err) {
            alert(err)
        }
    };

    const remove = async () => {
        try {
            await AsyncStorage.removeItem("Lista Vistos")
    } catch (err) {
        alert(err)
    } finally {
        setListaNVistos("");
    };
    };
    
    useEffect(() => {
        load();
        getData();
    },[]);

    return(
        <SafeAreaView style={styles.container}>
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
        <Button onPress={() => navigation.navigate("Ver Lista Vistos", {lista: listaPVistos})}
            title = "Ver Lista"
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