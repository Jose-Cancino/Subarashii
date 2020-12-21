import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, SafeAreaView, ScrollView, TextPropTypes, TouchableNativeFeedback } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { Button, CheckBox } from "react-native-elements"
import { listaP1 } from "../Listas/Lista1"
import { onChange } from 'react-native-reanimated';

const ListaPerso7 = ({navigation, route}) => {
    var listastring = ""
    const lista = route.params
    const lista2 = Object.values(lista)[0]
    let listarec = lista2.split(",")
    const lista3 = listarec.pop()
    console.log(listarec)

    const eliminarid = async (id) => {
      try {
          listastring = ""
          listarec.forEach(element => {
          if (element !== id){
            listastring += element + ","
            console.log(listastring)
            }});
          console.log("Guardando")
          console.log(listastring)
          await AsyncStorage.setItem("@Lista7", listastring)
          navigation.navigate("Listas", {screen: "Listas"})
      } catch (err) {
          alert(err);
      } 
  } 

        const Bloques = listarec.map(listarec => {
          const [nombre, setNombre] = useState("")
          const [id, setId] = useState("")
          
          function eliminar(){
            Alert.alert(
              "¿Desea borrar este anime?",
              "Al borrar este Anime desaparecera de la lista, pero puedes agregarlo nuevamente.",
              [
                { text: "Cancelar", onPress: () => console.log("Cancel Pressed")},
                { text: "Borrar", onPress: () => eliminarid(id) }
              ],
              { cancelable: false }
            )
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
            <View>
              <TouchableOpacity onPress = {() => navigation.navigate("Anime", {id:`${id}`})} onLongPress = {() => eliminar()}>
                <Text style={styles.lista}>{nombre}</Text>
              </TouchableOpacity>
            </View>
            );
          });
          

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
              marginVertical: 10,
              }}>
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
        marginBottom: 24,
        padding: 30,
        backgroundColor: "white",
        fontSize: 24,
        borderRadius:10,
      },
    });
    export default ListaPerso7;