import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, SafeAreaView, ScrollView, TextPropTypes, ImageBackground } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { Button } from "react-native-elements"
export default function Lista2({navigation, route}){
    const ide = route.params
    let id = "0000"
    if (typeof(Object.values(Object.values(ide)[0])[0]) !== "undefined"){
        id = (Object.values(Object.values(Object.values(ide)[0])[0])[0])
    }
    console.log(id)
    const [listaP2, setListaP2] = useState("") 
    const [ListaN2, setListaN2] = useState("Lista 2");

    const añadir = () => {
    if (id !== "0000"){
        if (listaP2 !== ""){
        var listasplit = listaP2.split(",")
        if (listasplit.includes(id) === false){
            var nueva = listaP2.concat(id +",")
            setListaP2(nueva)
        } else {
            Alert.alert(
                "No pudimos agregar tu Anime UnU",
                "Este Anime ya esta en la lista, prueba con otro :3",
            ) 
        }
    } else {
        setListaP2(id +",")
    }
    }}

    const storeData = async () => {
        try {
            console.log("Guardando")
            await AsyncStorage.setItem("@Lista2", listaP2);
        } catch (err) {
            alert(err);
        } 
    }

    const getData = async () => {
        try{
            console.log("Cargando")
            let listaP2 = await AsyncStorage.getItem("@Lista2");
            if (listaP2 !== null) {
                setListaP2(listaP2);
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
            await AsyncStorage.removeItem("@Lista2")
    } catch (err) {
        alert(err)
    } finally {
        setListaP2("");
    };
    };

    const save = async() => {
        try {
            await AsyncStorage.setItem("Lista 2", ListaN2);
        } catch (err) {
            alert(err);
        }
    };

    const load = async () => {
        try{
            let ListaN2 = await AsyncStorage.getItem("Lista 2");
            if (ListaN2 !== null) {
                setListaN2(ListaN2);
            }
        } catch (err) {
            alert(err)
        }
    };

    const remove = async () => {
        try {
            await AsyncStorage.removeItem("Lista 2")
    } catch (err) {
        alert(err)
    } finally {
        setListaN2("");
    };
    };
    
    useEffect(() => {
        load();
        getData();
    },[]);
const image = {uri:"https://cdn.discordapp.com/attachments/409042100428996621/791377200859185182/14d3c7d336c13998786231000604.jpg"}
    return(
    <SafeAreaView style={styles.container}>
    <ImageBackground source={image} style={styles.image}></ImageBackground>
    <Text style = {styles.titulo}> {ListaN2} </Text>
    <TextInput 
        style={styles.input}
        placeholder = "Inserte Nombre Lista"
        onChangeText = {(text) => setListaN2(text)}>
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

    <Button onPress={() => navigation.navigate("Ver Lista 2", {lista: listaP2})}
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