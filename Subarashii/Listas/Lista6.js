import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, SafeAreaView, ScrollView, TextPropTypes } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { Button } from "react-native-elements"
export default function Lista6({navigation, route}){
    const ide = route.params
    let id = "0000"
    if (typeof(Object.values(Object.values(ide)[0])[0]) !== "undefined"){
        id = (Object.values(Object.values(Object.values(ide)[0])[0])[0])
    }
    console.log(id)
    const [listaP6, setListaP6] = useState("") 
    const [ListaN6, setListaN6] = useState("Lista 6");

    const añadir = () => {
    if (id !== "0000"){
        if (listaP6 !== ""){
        var listasplit = listaP6.split(",")
        if (listasplit.includes(id) === false){
            var nueva = listaP6.concat(id +",")
            setListaP6(nueva)
        } else {
            Alert.alert(
                "No pudimos agregar tu Anime UnU",
                "Este Anime ya esta en la lista, prueba con otro :3",
            ) 
        }
    } else {
        setListaP6(id +",")
    }
    }}

    const storeData = async () => {
        try {
            console.log("Guardando")
            await AsyncStorage.setItem("@Lista6", listaP6);
        } catch (err) {
            alert(err);
        } 
    }

    const getData = async () => {
        try{
            console.log("Cargando")
            let listaP6 = await AsyncStorage.getItem("@Lista6");
            if (listaP6 !== null) {
                setListaP6(listaP6);
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
            await AsyncStorage.removeItem("@Lista6")
    } catch (err) {
        alert(err)
    } finally {
        setListaP6("");
    };
    };

    const save = async() => {
        try {
            await AsyncStorage.setItem("Lista 6", ListaN6);
        } catch (err) {
            alert(err);
        }
    };

    const load = async () => {
        try{
            let ListaN6 = await AsyncStorage.getItem("Lista 6");
            if (ListaN6 !== null) {
                setListaN6(ListaN6);
            }
        } catch (err) {
            alert(err)
        }
    };

    const remove = async () => {
        try {
            await AsyncStorage.removeItem("Lista 6")
    } catch (err) {
        alert(err)
    } finally {
        setListaN6("");
    };
    };
    
    useEffect(() => {
        load();
        getData();
    },[]);

    return(
        <SafeAreaView style={styles.container}>
        <Text style = {styles.titulo}> {ListaN6} </Text>
        <TextInput 
            style={styles.input}
            placeholder = "Inserte Nombre Lista"
            onChangeText = {(text) => setListaN6(text)}>
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
        <Button onPress={() => navigation.navigate("Ver Lista 6", {lista: listaP6})}
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