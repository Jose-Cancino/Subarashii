import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, SafeAreaView, ScrollView, TextPropTypes } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

const ListaPerso = ({navigation, route}) => {
    const lista = route.params
    const lista2 = Object.values(lista)[0]
    const listarec = lista2.split(",")
    const lista3 = listarec.pop()
        const Bloques = listarec.map(listarec => {
          const [nombre, setNombre] = useState("")
          const [id, setId] = useState("")
    
            fetch(`https://kitsu.io/api/edge/anime/${listarec}`)
            .then((response) => response.json())
            .then((json) => {
              setNombre(json.data.attributes.canonicalTitle);
              setId(json.data.id)
            })
            .catch((error) => {
              console.error(error);
            });
    
          return ( 
            <View >
              <TouchableOpacity onPress = {() => navigation.navigate("Anime", {id: `${id}`})}>
                <Text style={styles.lista}>{nombre}</Text>
              </TouchableOpacity>
            </View>
            );
          });
    
      return (
        <ScrollView style ={styles.scrollView}>
            <Button onPress={() => navigation.navigate("RecPerso", {listarec})} title = "Recomendacion">
            </Button>
            <View >
            {Bloques}
            </View>
    
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      lista:{
        marginHorizontal: 20,
        marginTop: 24,
        padding: 30,
        backgroundColor: "pink",
        fontSize: 24,
      },
    });
    export default ListaPerso;