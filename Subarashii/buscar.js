import React, { useState, Component, useEffect } from 'react';
import { StyleSheet,
   Button,
   Text,
   View,
   Image,
   TextInput,
   FlatList,
   ActivityIndicator,
   SafeAreaView,
   TouchableOpacity,
   StatusBar 
} from 'react-native';








const Busqueda = ({navigation}) => {
  const [idAnime, setIdAnime] = useState("")

  const [datos, setDatos] = useState("")
  const animeAPI = `https://kitsu.io/api/edge/anime?filter[text]=${datos}`;
  

  const [isLoading, setLoading] = useState(true)
  const [lista, setLista] = useState([])

  
  
  const Buscar = () => {
      fetch(animeAPI)
        .then((response) => response.json())
        .then((json) => {
          setLista(json.data);
        })
        .catch((error) => alert(error))
        .finally(() => setLoading(false));

    };
var titulo = "hola"

const Item = ({ id, title, imagen, desc, canonico}) => (
  
  <View style={styles.item}>
    <Text style={styles.title}>{title}    #{id}</Text>
    <TouchableOpacity   onPress={() => navigation.navigate("Anime", {
    title: `${title}`,
    imagen: `${imagen}`,
    desc: `${desc}`,
    canonico: `${canonico}`,



                                                                     


    
    })}>
      <Image 

      source = {{uri: imagen}}
      style={{
        width:210,
        height:300,
        borderWidth:2,
        borderColor:'#d35647',
        resizeMode:'contain',
        margin:8
      }}
      />
    </TouchableOpacity>


    
  </View>
);


  const renderItem = ({item}) => (
      <Item 
       id={item.id} 
       title={item.attributes.slug} 
       canonico={item.attributes.canonicalTitle}
       imagen={item.attributes.posterImage.small} 
       desc={item.attributes.synopsis}

       />
  );

  return (
    <SafeAreaView>
      <TextInput
        style = {styles.input}
        onChangeText = {text => setDatos(text)}
        value = {datos}
        placeholder = "Buscar..."
      ></TextInput>
      <Button
      title = "buscar"
      onPress = {() => Buscar()  }
      ></Button>


    
      {isLoading ? ( 
        <ActivityIndicator/> 
      ) : ( 
        <FlatList
          data = {lista} 
          keyExtractor = {({ data }, index) => data}
          renderItem = {renderItem}
                 
        /> 
      )}
    </SafeAreaView>
  );
  
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1 
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },  
});
export default Busqueda;