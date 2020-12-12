import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, SafeAreaView, ScrollView, TextPropTypes } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { createStackNavigator } from '@react-navigation/stack';
import pagAnime from "../pagAnime"
import RecPerso from '../ListasRec/RecPerso';
import Recomendacion from '../Recomendacion';

export default function Lista3({navigation}){

    const Stack = createStackNavigator();
    <Stack.Navigator>
        <Stack.Screen name= "Anime" component = {pagAnime} />
        <Stack.Screen name= "RecPerso" component = {RecPerso}/>
    </Stack.Navigator>
    
    const lista2 = ["41370", "5714","7442","6448","8133","41982","13569","42586","8671","8699"]
    const Bloques = lista2.map(lista2 => {
        const [nombre, setNombre] = useState("")
        const [id, setId] = useState("")
  
          fetch(`https://kitsu.io/api/edge/anime/${lista2}`)
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
   
    return(
    
    <ScrollView>
        <Button onPress={() => navigation.navigate("RecPerso", {lista2})} title = "Recomendacion">
        </Button>

        <View>
            {Bloques}
        </View>
                
    </ScrollView>
    )
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