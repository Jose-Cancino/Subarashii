import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Alert, SafeAreaView, ScrollView, TextPropTypes } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { Button } from "react-native-elements"
import { ImageBackgroundBase } from 'react-native';

const image = {uri:"https://media.discordapp.net/attachments/760834589987045388/791388140795068431/a9fc1f7efe25a88c5f15a9b7d1a43bfd.png?width=377&height=669"};
export default function Viendo({navigation, route}){
    const ide = route.params
    let id = "0000"
    if (typeof(Object.values(Object.values(ide)[0])[0]) !== "undefined"){
        id = (Object.values(Object.values(Object.values(ide)[0])[0])[0])
    }
    console.log(id)
    const [listaPViendo, setListaPViendo] = useState("") 
    const [ListaNViendo, setListaNViendo] = useState("Lista Viendo");

    const añadir = () => {
    if (id !== "0000"){
        if (listaPViendo !== ""){
        var listasplit = listaPViendo.split(",")
        if (listasplit.includes(id) === false){
            var nueva = listaPViendo.concat(id +",")
            setListaPViendo(nueva)
        } else {
            Alert.alert(
                "No podemos agregar tu Anime UnU",
                "Este Anime ya esta en la lista, prueba con otro :3",
            ) 
        }
    } else {
        setListaPViendo(id +",")
    }
    }}

    const storeData = async () => {
        try {
            console.log("Guardando")
            await AsyncStorage.setItem("@ListaViendo", listaPViendo);
        } catch (err) {
            alert(err);
        } 
    }

    const getData = async () => {
        try{
            console.log("Cargando")
            let listaPViendo = await AsyncStorage.getItem("@ListaViendo");
            if (listaPViendo !== null) {
                setListaPViendo(listaPViendo);
            }
        } catch (err) {
            alert(err)
            }
}
    
    const borrar = () => {
        Alert.alert(
            "¿Desea purgar esta lista?",
            "Al purgar la lista se borrarán todos los Animes que contiene.",
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
            await AsyncStorage.removeItem("@ListaViendo")
    } catch (err) {
        alert(err)
    } finally {
        setListaPViendo("");
    };
    };

    const save = async() => {
        try {
            await AsyncStorage.setItem("Lista Viendo", ListaNViendo);
        } catch (err) {
            alert(err);
        }
    };

    const load = async () => {
        try{
            let ListaNViendo = await AsyncStorage.getItem("Lista Viendo");
            if (ListaNViendo !== null) {
                setListaNViendo(ListaNViendo);
            }
        } catch (err) {
            alert(err)
        }
    };

    const remove = async () => {
        try {
            await AsyncStorage.removeItem("Lista Viendo")
    } catch (err) {
        alert(err)
    } finally {
        setListaNViendo("");
    };
    };
    
    useEffect(() => {
        load();
        getData();
    },[]);

    return(
        <SafeAreaView>
         <ImageBackground source={image} style={styles.image}></ImageBackground>
        <Button onPress={() => añadir()}
            title = "Añadir"
            type = "outline"
         buttonStyle = {{
            backgroundColor:'rgba(255, 255, 255, 0.7)',
            marginHorizontal: 20,
            borderColor: "white",   
            borderWidth: 2, 
            borderRadius: 10, 
            marginVertical: 10,                 
        }}> </Button>
        <Button onPress={() => storeData()}
            title = "Guardar Anime"
            type = "outline"
         buttonStyle = {{
            backgroundColor:'rgba(255, 255, 255, 0.7)',
            marginHorizontal: 20,
            borderColor: "white",
            borderWidth: 2,    
            borderRadius: 10, 
            marginVertical: 10,                 
        }}> </Button>
        <Button onPress={() => borrar()}
            title = "Purgar Lista"
            type = "outline"
         buttonStyle = {{
            backgroundColor:'rgba(255, 255, 255, 0.7)',
            borderWidth: 2, 
            marginHorizontal: 20,
            borderColor: "white", 
              
            borderRadius: 10,
            marginVertical: 10,                  
        }}> </Button>
        <Button onPress={() => navigation.navigate("Ver Lista Viendo", {lista: listaPViendo})}
            title = "Ver Lista"
            type = "outline"
         buttonStyle = {{
            backgroundColor:'rgba(255, 255, 255, 0.7)',
            marginHorizontal: 20,
            borderColor: "white", 
            borderWidth: 2,   
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
        },
        image: {
            flex: 1,
            resizeMode:"contain",
            height: 800     
        },
    })