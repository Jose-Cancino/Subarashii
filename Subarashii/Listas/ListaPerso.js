import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, SafeAreaView, ScrollView, TextPropTypes } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { Button } from "react-native-elements"
var flag = 0
const ListaPerso = ({navigation, route}) => {
  
    const lista = route.params
    const lista2 = Object.values(lista)[0]
    let listarec = lista2.split(",")
    let listarec2 = lista2.split(",")
    const lista3 = listarec.pop()
    
        const Bloques = listarec.map(listarec => {
          const [nombre, setNombre] = useState("")
          const [id, setId] = useState("")

          function navegacion(){
            console.log(flag)
            if (flag === 0) {
              navigation.navigate("Anime", {id:`${id}`})
            } else {
              var index = listarec2.indexOf(id)
              listarec2.splice(index, 1)
              console.log(listarec2) 
            }
          } 
          
    
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
              <TouchableOpacity onPress = {() => navegacion()}>
                <Text style={styles.lista}>{nombre}</Text>
              </TouchableOpacity>
            </View>
            );
          });
          
// flag = 0 = True = Ver Anime
// flag = 1 = False = Borrar Anime
function cambiot () {
  flag = 0
  }  
function cambiof () {
  flag = 1
}

      return (
        <ScrollView style ={styles.scrollView}>
            <Button onPress={() => navigation.navigate("RecPerso", {listarec})} 
            title = "Recomendacion"
            type = "outline"
              buttonStyle = {{
              backgroundColor:"white",
              marginHorizontal: 20,
              borderColor: "white",
              borderRadius: 10,
              marginTop: 10,
              }}>
            </Button>
            <View style={{flexDirection:"row"}}>
            <Button onPress={() => cambiot()} 
            title = "Ver anime"
            type = "outline"
              buttonStyle = {{
              backgroundColor:"white",
              marginHorizontal:20,
              borderColor: "white",
              borderRadius: 10,
              marginTop: 10,
              }}></Button>
            <Button onPress={() => cambiof()} 
            title = "Eliminar anime"
            type = "outline"
              buttonStyle = {{
              backgroundColor:"white",
              marginHorizontal:20,
              borderColor: "white",
              borderRadius: 10,
              marginTop: 10,
              alignItems: "flex-start"
              }}>
            </Button>
            </View>
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
        backgroundColor: "white",
        fontSize: 24,
        borderRadius:10,
      },
    });
    export default ListaPerso;