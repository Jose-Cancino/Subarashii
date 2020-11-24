import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { 
   StyleSheet,
   Button,
   Text,
   View,
   Image,
   TextInput,
   FlatList,
   ActivityIndicator,
   SafeAreaView,
   TouchableOpacity,
   } from 'react-native';

import Recomendacion from "./Recomendacion"
import Lista from "./Listas"







export default function App() {

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
  
  
const Item = ({ title, imagen }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
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
  </View>
);

  

  const renderItem = ({item}) => (
      <Item 
       title={item.attributes.slug} 
       imagen={item.attributes.posterImage.small} 
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
