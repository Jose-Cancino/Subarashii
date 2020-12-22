import { MaterialBottomTabView } from '@react-navigation/material-bottom-tabs';
import React, { useState, Component, useEffect } from 'react';
import { StyleSheet,
   Text,
   View,
   Image,
   TextInput,
   FlatList,
   ActivityIndicator,
   SafeAreaView,
   TouchableOpacity,
   StatusBar,
   ImageBackground
} from 'react-native';
import { Button } from "react-native-elements"

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
      {title}       #{id}
      </Text>
    <TouchableOpacity onPress={() => navigation.navigate("Anime", {
    id: `${id}`
    })}>

      <Image 
      source = {{uri: imagen}}
      style={{
        width:210,
        height:300,
        borderWidth:4,
        borderColor:'white',
        resizeMode:'contain',
        margin: 3,
        alignSelf: "center",
      }}
      />
    </TouchableOpacity>
  </View>
);

const imagencita = { uri: "https://p4.wallpaperbetter.com/wallpaper/793/973/136/clouds-sunset-sky-portrait-display-wallpaper-preview.jpg" };
  const renderItem = ({item}) => (
      <Item 
       id={item.id} 
       title={item.attributes.canonicalTitle} 
       canonico={item.attributes.canonicalTitle}
       imagen={item.attributes.posterImage.small} 
       desc={item.attributes.synopsis}
       />
  );

  return (
    <SafeAreaView>
      <ImageBackground source={imagencita} style={styles.imagen}></ImageBackground>
      <TextInput style = {styles.input}
        onChangeText = {text => setDatos(text)}
        value = {datos}
        placeholder = "   Nombre anime..."
      ></TextInput>
      <Button 
            onPress={() => Buscar()}
            type = "outline"
            title = 'BUSCAR'
            buttonStyle = {{
              backgroundColor: "white",
              alignItems: 'center',
              marginHorizontal: 50,
              borderColor: "white",
              borderRadius: 10,
            }}
          >
          </Button>
        <FlatList
          data = {lista} 
          keyExtractor = {({ data }, index) => data}
          renderItem = {renderItem}    
        /> 
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
    borderColor: 'grey',
    borderWidth: 1, 
    backgroundColor: "white",
    marginBottom: 10,
    marginVertical: 25,
    marginHorizontal: 20,
  },
  item: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    width: 300,
    backgroundColor: '#F9D233',
    alignSelf: 'center',
  },  
  boton: {
    color: 'white',
    backgroundColor: '#191970',
    padding: 3,
    marginVertical: 10,
    marginHorizontal: 50,
    alignItems: 'center',
    borderRadius: 10
  },  
  title: {
    marginVertical: 5,
    alignItems: 'center',
    textAlign: 'center',
    fontSize:13,
    fontWeight: 'bold',
    color: 'black',
  },  
  imagen: {
    flex: 1,
    resizeMode:"contain",
    height: 800,   
  },
  titulo: {
    color: 'black',
  }
});
export default Busqueda;