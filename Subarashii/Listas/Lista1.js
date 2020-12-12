import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, SafeAreaView, ScrollView, TextPropTypes } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

export default function Lista1({navigation, route}){
    const {id} = route.params
    const [listaP1, setListaP1] = useState() 
    const [ListaN1, setListaN1] = useState("Lista 1");
    let flag = true
    
    const añadir = () => {
        if (typeof listaP1 !== "undefined"){
        var nueva = listaP1.concat(id +",")
        setListaP1(nueva)
    } else {
        setListaP1(id +",")
    }
}

    const storeData = async () => {
        try {
            console.log("Guardando")
            await AsyncStorage.setItem("@Lista1", listaP1);
        } catch (err) {
            alert(err);
        } 
    }

    const getData = async () => {
        try{
            console.log("Cargando")
            let listaP1 = await AsyncStorage.getItem("@Lista1");
            if (listaP1 !== null) {
                setListaP1(listaP1);
            }
        } catch (err) {
            alert(err)
        }
    }
    
    const removeData = async () => {
        try {
            console.log("Purgado")
            await AsyncStorage.removeItem("@Lista1")
    } catch (err) {
        alert(err)
    } finally {
        setListaP1("");
    };
    };

    const save = async() => {
        try {
            await AsyncStorage.setItem("Lista 1", ListaN1);
        } catch (err) {
            alert(err);
        }
    };

    const load = async () => {
        try{
            let ListaN1 = await AsyncStorage.getItem("Lista 1");
            if (ListaN1 !== null) {
                setListaN1(ListaN1);
            }
        } catch (err) {
            alert(err)
        }
    };

    const remove = async () => {
        try {
            await AsyncStorage.removeItem("Lista 1")
    } catch (err) {
        alert(err)
    } finally {
        setListaN1("");
    };
    };
    
    useEffect(() => {
        load();
        getData();
    },[]);

    return(
    <SafeAreaView style={styles.container}>
    <Text style = {styles.titulo}> {ListaN1} </Text>
    <Text style = {styles.titulo}> {listaP1} </Text>
    <TextInput 
        style={styles.input}
        placeholder = "Inserte Nombre Lista"
        onChangeText = {(text) => setListaN1(text)}>
    </TextInput>
    <TouchableOpacity style={styles.listas}>
        <Text onPress={() => añadir()}>
        Añadir </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.listas}>
        <Text onPress={() => storeData()}>
        Guardar Anime </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.listas}>
        <Text onPress={() => removeData()}>
        Purgar Lista </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.listas}>
        <Text onPress={() => navigation.navigate("Ver Lista", {lista: listaP1})}>
        Ver Lista </Text>
    </TouchableOpacity>
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