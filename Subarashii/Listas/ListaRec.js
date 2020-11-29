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


const ListaRec = ({navigation}) => {

  const [anime, setAnime] = useState([
    {name: "12243"},
    {name: "3936"},
    {name: "6448"},
    {name: "1376"},
    {name: "7158"},
    {name: "1801"},
    {name: "7442"},
    {name: "41440"},
    {name: "1415"},
    {name: "5853"},
    {name: "3919"},
    {name: "7711"},
    {name: "4604"},
    //{name: "41995"},
    {name: "5981"},
    {name: "10028"},
    {name: "11614"},
    //{name: "7821"},
    //{name: "831"},
    //{name: "7712"},
    //{name: "4240"},
    //{name: "7160"},
    //{name: "8133"},
    //{name: "7023"},
    //{name: "6028"}
  ]);


    const Bloques = anime.map(anime => {
      const [nombre, setNombre] = useState("")
      const [id, setId] = useState("")

        fetch(`https://kitsu.io/api/edge/anime/${anime.name}`)
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
export default ListaRec;