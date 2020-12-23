import React, {useState, Component, useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, Alert, SafeAreaView, ScrollView, TextPropTypes } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { Button } from "react-native-elements"

const image = {uri:"https://i.pinimg.com/564x/ca/c7/9e/cac79e74ff119a4303edcf4effdb1c5d.jpg"};
export default function Ver({navigation, route}){
    const ide = route.params
    let id = "0000"
    if (typeof(Object.values(Object.values(ide)[0])[0]) !== "undefined"){
        id = (Object.values(Object.values(Object.values(ide)[0])[0])[0])
    }
    console.log(id)
    const [listaPVer, setListaPVer] = useState("") 
    const [ListaNVer, setListaNVer] = useState("Lista Ver");

    const añadir = () => {
    if (id !== "0000"){
        if (listaPVer !== ""){
        var listasplit = listaPVer.split(",")
        if (listasplit.includes(id) === false){
            var nueva = listaPVer.concat(id +",")
            setListaPVer(nueva)
        } else {
            Alert.alert(
                "No pudimos agregar tu Anime UnU",
                "Este Anime ya esta en la lista, prueba con otro :3",
            ) 
        }
    } else {
        setListaPVer(id +",")
    }
    }}

    const storeData = async () => {
        try {
            console.log("Guardando")
            await AsyncStorage.setItem("@ListaVer", listaPVer);
        } catch (err) {
            alert(err);
        } 
    }

    const getData = async () => {
        try{
            console.log("Cargando")
            let listaPVer = await AsyncStorage.getItem("@ListaVer");
            if (listaPVer !== null) {
                setListaPVer(listaPVer);
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
            await AsyncStorage.removeItem("@ListaVer")
    } catch (err) {
        alert(err)
    } finally {
        setListaPVer("");
    };
    };

    const save = async() => {
        try {
            await AsyncStorage.setItem("Lista Ver", ListaNVer);
        } catch (err) {
            alert(err);
        }
    };

    const load = async () => {
        try{
            let ListaNVer = await AsyncStorage.getItem("Lista Ver");
            if (ListaNVer !== null) {
                setListaNVer(ListaNVer);
            }
        } catch (err) {
            alert(err)
        }
    };

    const remove = async () => {
        try {
            await AsyncStorage.removeItem("Lista Ver")
    } catch (err) {
        alert(err)
    } finally {
        setListaNVer("");
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
            backgroundColor:'rgba(255, 255, 255, 0.8)',
            borderWidth: 2,
            marginHorizontal: 20,
            borderColor: "white",   
            borderRadius: 10, 
            marginVertical: 10,                 
        }}> </Button>
        <Button onPress={() => storeData()}
            title = "Guardar Anime"
            type = "outline"
         buttonStyle = {{
            backgroundColor:'rgba(255, 255, 255, 0.8)',
            borderWidth: 2,
            marginHorizontal: 20,
            borderColor: "white",   
            borderRadius: 10, 
            marginVertical: 10,                 
        }}> </Button>
        <Button onPress={() => borrar()}
            title = "Purgar Lista"
            type = "outline"
         buttonStyle = {{
            backgroundColor:'rgba(255, 255, 255, 0.8)',
            borderWidth: 2,
            marginHorizontal: 20,
            borderColor: "white",   
            borderRadius: 10,
            marginVertical: 10,                  
        }}> </Button>
        <Button onPress={() => navigation.navigate("Ver Lista Ver", {lista: listaPVer})}
            title = "Ver Lista"
            type = "outline"
         buttonStyle = {{
            backgroundColor:'rgba(255, 255, 255, 0.8)',
            borderWidth: 2,
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
        },
        image: {
            flex: 1,
            resizeMode:"contain",
            height: 800     
        },
    })