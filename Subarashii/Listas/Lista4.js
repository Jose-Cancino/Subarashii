import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, SafeAreaView, ScrollView, TextPropTypes, ImageBackground } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { Button } from "react-native-elements"
export default function Lista4({navigation, route}){
    const ide = route.params
    let id = "0000"
    if (typeof(Object.values(Object.values(ide)[0])[0]) !== "undefined"){
        id = (Object.values(Object.values(Object.values(ide)[0])[0])[0])
    }
    console.log(id)
    const [listaP4, setListaP4] = useState("") 
    const [ListaN4, setListaN4] = useState("Lista 4");

    const añadir = () => {
    if (id !== "0000"){
        if (listaP4 !== ""){
        var listasplit = listaP4.split(",")
        if (listasplit.includes(id) === false){
            var nueva = listaP4.concat(id +",")
            setListaP4(nueva)
        } else {
            Alert.alert(
                "No pudimos agregar tu Anime UnU",
                "Este Anime ya esta en la lista, prueba con otro :3",
            ) 
        }
    } else {
        setListaP4(id +",")
    }
    }}

    const storeData = async () => {
        try {
            console.log("Guardando")
            await AsyncStorage.setItem("@Lista4", listaP4);
        } catch (err) {
            alert(err);
        } 
    }

    const getData = async () => {
        try{
            console.log("Cargando")
            let listaP4 = await AsyncStorage.getItem("@Lista4");
            if (listaP4 !== null) {
                setListaP4(listaP4);
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
            await AsyncStorage.removeItem("@Lista4")
    } catch (err) {
        alert(err)
    } finally {
        setListaP4("");
    };
    };

    const save = async() => {
        try {
            await AsyncStorage.setItem("Lista 4", ListaN4);
        } catch (err) {
            alert(err);
        }
    };

    const load = async () => {
        try{
            let ListaN4 = await AsyncStorage.getItem("Lista 4");
            if (ListaN4 !== null) {
                setListaN4(ListaN4);
            }
        } catch (err) {
            alert(err)
        }
    };

    const remove = async () => {
        try {
            await AsyncStorage.removeItem("Lista 4")
    } catch (err) {
        alert(err)
    } finally {
        setListaN4("");
    };
    };
    
    useEffect(() => {
        load();
        getData();
    },[]);
const image = {uri: "https://cdn.discordapp.com/attachments/409042100428996621/791378878256906260/274bcfc4a44699b4ff1ea0ea89a2b808.jpg"}
    return(
        <SafeAreaView style={styles.container}>
        <ImageBackground source={image} style={styles.image}></ImageBackground>
        <Text style = {styles.titulo}> {ListaN4} </Text>
        <TextInput 
            style={styles.input}
            placeholder = "Inserte Nombre Lista"
            onChangeText = {(text) => setListaN4(text)}>
        </TextInput>
        <Button onPress={() => añadir()}
        title = "Añadir"
        type = "outline"
     buttonStyle = {{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        marginHorizontal: 20,
        borderColor: "white",   
        borderRadius: 10, 
        marginVertical: 10,                 
    }}> </Button>
    <Button onPress={() => storeData()}
        title = "Guardar Anime"
        type = "outline"
     buttonStyle = {{
        backgroundColor:"'rgba(255, 255, 255, 0.95)'",
        marginHorizontal: 20,
        borderColor: "white",   
        borderRadius: 10, 
        marginVertical: 10,                 
    }}> </Button>

    <Button onPress={() => navigation.navigate("Ver Lista 4", {lista: listaP4})}
        title = "Ver Lista"
        type = "outline"
     buttonStyle = {{
        backgroundColor:"'rgba(255, 255, 255, 0.95)'",
        marginHorizontal: 20,
        borderColor: "white",   
        borderRadius: 10,
        marginVertical: 10,                
    }}> </Button>
    <Button onPress={() => save()}
        title = "Guardar Nombre"
        type = "outline"
     buttonStyle = {{
        backgroundColor:"'rgba(255, 255, 255, 0.95)'",
        marginHorizontal: 20,
        borderColor: "white",   
        borderRadius: 10,
        marginVertical: 10,                
    }}> </Button>
    <Button onPress={() => borrar()}
        title = "Purgar Lista"
        type = "outline"
     buttonStyle = {{
        backgroundColor:"'rgba(255, 255, 255, 0.95)'",
        marginHorizontal: 20,
        borderColor: "white",   
        borderRadius: 10,
        marginVertical: 10,                  
    }}> </Button>
    </SafeAreaView>
    )}

const styles = StyleSheet.create({
    input: {
        alignItems: "center",
        alignSelf: "center",
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
        marginVertical: 10,
        fontSize:22,  
        fontStyle: 'italic',
        height: "auto",
        lineHeight: 35,
        textAlign: 'center', 
        borderColor: 'white',   
        borderWidth: 3, 
        color: 'white',
        backgroundColor: '#DB4E08',
        padding: 10,
      },
    image: {
        flex: 1,
        resizeMode:"contain",
        height: 800     
      },
})