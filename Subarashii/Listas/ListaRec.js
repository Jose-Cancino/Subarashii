import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  ImageBackground,
  Text, 
  SafeAreaView,
  View, 
  TouchableNativeFeedback,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const image = {uri:"https://i.pinimg.com/originals/13/1d/b2/131db26ddf93fdb1733bba75a5dcea87.png"};
const ListaRec = ({navigation}) => {

const listarec = [
  "12243", "3936", "6448", "1376", "7158", "1801", "7442", "41440", "1415", "5853", "3919", "7711", "4604", "5981", "10028",
  "11614", "41995", "7821", "831", "7712", "4240", "7160", "8133", "7023", "6028",
]

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
  <SafeAreaView>
    <ImageBackground source={image} style={styles.image}></ImageBackground>
    <ScrollView style ={styles.scrollView}>
        <View >
        {Bloques}
        </View>
    </ScrollView>
  </SafeAreaView>
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
    borderRadius: 10,
    fontSize: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: 'black',
    borderColor: 'white',
    borderWidth: 4, 
    fontStyle: 'italic'
  },
  image: {
    flex: 1,
    resizeMode:"contain",
    height: 800     
  },
});
export default ListaRec;