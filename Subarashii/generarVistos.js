import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableNativeFeedback,
  TouchableOpacity,
  ScrollView
} from 'react-native';


const generarVistos = ({navigation, route}) => {

    const lista = route.params.lista
    
    const Bloques = lista.map(listarec => {
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
export default generarVistos;