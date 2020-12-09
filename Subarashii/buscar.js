import { MaterialBottomTabView } from '@react-navigation/material-bottom-tabs';
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
    <Text style={styles.title}>
      {title} 
      </Text>
    <TouchableOpacity   onPress={() => navigation.navigate("Anime", {
    id: `${id}`
    })}>

      <Image 
      source = {{uri: imagen}}
      style={{
        width:210,
        height:300,
        borderWidth:4,
        borderColor:'#694fad',
        resizeMode:'contain',
        margin:6,
        marginHorizontal: 60,
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
        placeholder = "   Nombre anime..."
      ></TextInput>
    <TouchableOpacity  onPress={() => Buscar()}style={styles.boton}>
        <Text style={styles.boton}>
        BUSCAR </Text>
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
    borderWidth: 1,
  },
  item: {
    backgroundColor: '#cbc2ff',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 16,
  },  
  boton: {
    color: 'white',
    backgroundColor: '#694fad',
    padding: 3,
    marginVertical: 10,
    marginHorizontal: 50,
    alignItems: 'center',
  },  
  title: {
    marginVertical: 5,
    alignItems: 'center',
    textAlign: 'center',
    fontSize:13,
    fontWeight: 'bold',
  },  
});
export default Busqueda;