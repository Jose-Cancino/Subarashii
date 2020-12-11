import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, SafeAreaView, ScrollView, TextPropTypes } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

export default function Lista1({navigation, route}){
    const {id} = route.params
    const lista = []
    const [ListaN1, setListaN1] = useState("Lista 1");
    let flag = true

    const añadir = () => {
        if (lista.includes(id) === flag){
        } else {
            lista.push(id)
            console.log(lista)
        }
    }

    const storeData = async (lista) => {
        console.log("Guardando")
        try {
        const jsonLista = JSON.stringify(lista)
        await AsyncStorage.setItem('@lista', jsonLista)
        } catch (e) {
            console.log("Error G")
        }
    }

    const getData = async () => {
        console.log("Cargando")
        try {
        const jsonLista = await AsyncStorage.getItem('@lista')
        return jsonLista != null ? JSON.parse(jsonLista) : null;
        } catch(e) {
        console.log("Error C")
        }
    }
  

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

    useEffect(() => {
        load();
        getData(lista);
    },[]);

    const remove = async () => {
        try {
            await AsyncStorage.removeItem("Lista 1")
    } catch (err) {
        alert(err)
    } finally {
        setListaN1("");
    };
    };
    
    return(
    <SafeAreaView style={styles.container}>
    <Text style = {styles.titulo}> {ListaN1} </Text>
    <Text style = {styles.titulo}> {id} </Text>
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
        Guardar ID </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.listas}>
        <Text onPress={() => remove()}>
        Eliminar Nombre </Text>
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