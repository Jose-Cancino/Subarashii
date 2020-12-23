import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator, FlatList, Image, ImageBackground} from 'react-native';


const RecPerso = ({navigation, route}) => {
const listaxd = route.params
const lista2 = Object.values(listaxd)[0]
console.log(lista2)
const [isLoading, setLoading] = useState(true)
const lista_listo = []
const [resultados, setResultados] = useState ("")
const categori = []
const [lista, setLista] = useState([])
  const Bloques = lista2.map(lista10 => {
      fetch(`https://kitsu.io/api/edge/anime/${lista10}/categories`)
      .then((response) => response.json())
      .then((json) => {
        try {categori.push(json.data[0].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[1].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[2].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[3].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[4].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[5].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[6].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[7].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[8].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[9].attributes.title)}
        catch(error){
          console.error(error)
        }
      
      lista_listo.push(lista10);
      if(lista_listo.length == lista2.length){
        setResultados(mode(categori))
        console.log(resultados)
        }
      })
        .catch((error) => {
          console.error(error)
        })
    });

  function mode (arr){
    return arr.sort((a,b) =>
      arr.filter(v => v===a).length
      - arr.filter(v => v===b).length
    ).pop();
  }
  
  const Buscar = (pop) => {
      fetch(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&filter[categories]=${pop}&sort=-userCount`)
        .then((response) => response.json())
        .then((json) => {
          setLista(json.data);
        })
        .catch((error) => alert(error))
        .finally(() => setLoading(false));
    };

    const Item = ({ id, title, imagen}) => (

      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity   onPress={() => navigation.navigate("Anime", {
        id: `${id}`
        })}>
    
          <Image 
          source = {{uri: imagen}}
          style={{
            width:210,
            height:300,
            borderWidth:2,
            borderColor:'#191970',
            resizeMode:'contain',
            margin:8,
            alignSelf:"center"
          }}
          />
        </TouchableOpacity>
      </View>
    );

  const renderItem = ({item}) => (
      <Item 
       id={item.id} 
       title={item.attributes.canonicalTitle} 
       imagen={item.attributes.posterImage.small} 
       />
  );
const image = {uri: "https://cdn.discordapp.com/attachments/760834589987045388/791391987022430239/4e2d0847a98a758d49e1266c0975194e.png"}
  return(
  <SafeAreaView>
  <ImageBackground source={image} style={styles.image}></ImageBackground>
  <ScrollView style ={styles.scrollView}>
      <View >
          <TouchableOpacity  onPress = {() => Buscar(resultados)}>
            <Text style={styles.boton}>
            {resultados}</Text>
          </TouchableOpacity>
          {isLoading ? ( 
      <ActivityIndicator/> 
    ) : ( 
      <FlatList
        data = {lista} 
        keyExtractor = {({ data }, index) => data}
        renderItem = {renderItem}    
      /> 
    )}
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

  boton: {
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 50,
    alignItems: 'center',
    borderRadius: 5,
    textAlign: "center"
  },  
  title: {
    alignSelf:"center"
  },
  item:{
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 15,
    marginVertical: 15,
    marginHorizontal: 16,
  },
  image: {
    flex: 1,
    resizeMode:"contain",
    height: 800     
  }, 
});
export default RecPerso;  