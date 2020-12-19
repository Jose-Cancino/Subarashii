import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { Button } from "react-native-elements"
import { createStackNavigator } from "@react-navigation/stack";

import ListaRec from './Listas/ListaRec';
import pagAnime from "./pagAnime"


import generarVistos from "./generarVistos"
import express from "./express"

import listaCategoria from "./listaCategoria"

import categorias from "./categorias"



import Contenido from "./TodasCategorias/Contenido"


import Elementos from "./TodasCategorias/Elementos"
import Escenario from "./TodasCategorias/Escenario"
import Publico from "./TodasCategorias/Publico"
import Tematica from "./TodasCategorias/Tematica"
import AnimeRelacionado from "./AnimeRelacionado"


const image = { uri: "https://archive-media-1.nyafuu.org/vp/image/1494/46/1494462189909.png" };

const RecomendacionTab = ({navigation}) => {
  return(
    <ScrollView>
            <ImageBackground source={image} style={styles.image}>
            <Text style={styles.frasesitas}>Los mejores recomendado por los mejores</Text>
            <Button 
                  onPress={() => navigation.navigate("Lista Recomendada")}
                  title = "Lista Recomendada Programadores"
                  type = "outline"
                buttonStyle = {{
                  backgroundColor:"white",
                  marginHorizontal: 20,
                  borderColor: "white",
                  borderRadius: 10,
                  
                }}>
            </Button>
            <Text style={styles.frasesitas}>Danos tres animes y te daremos lo que buscas</Text>
            <Button 
                onPress={() => navigation.navigate("express")}
                title = "Recomendacion Express"
                type = "outline"
                buttonStyle = {{
                  backgroundColor:"white",
                  marginHorizontal: 20,
                  borderColor: "white",
                  borderRadius: 10,
                  
                }}
                >
            </Button>
            <Text style={styles.frasesitas}>Busca por tus categorias favoritas</Text>
            <Button 
                onPress={() => navigation.navigate("Categorias")}
                title = "Categorias"
                type = "outline"
                buttonStyle = {{
                  backgroundColor:"white",
                  marginHorizontal: 20,
                  borderColor: "white",
                  borderRadius: 10,
                  
                }}
                >
            </Button>
            <Text style={styles.frasesitas}> Dame un Anime y disfruta </Text>
            <Button 
                onPress={() => navigation.navigate("AnimeRelacionado")}
                title = "Recomendacion por Anime"
                type = "outline"
                buttonStyle = {{
                  backgroundColor:"white",
                  marginHorizontal: 20,
                  borderColor: "white",
                  borderRadius: 10,
                  
                }}
                >
            </Button>
            </ImageBackground>
      </ScrollView>
    );
  }
  const Stack = createStackNavigator();
  function Recomendacion (){
  return (
    <Stack.Navigator >
        <Stack.Screen name = "Home" component = {RecomendacionTab} />
        <Stack.Screen name = "Lista Recomendada" component = {ListaRec} />
        <Stack.Screen name = "express" component = {express} options = {{title: "Express"}}/>
        <Stack.Screen name = "generarVistos" component = {generarVistos} />        
        <Stack.Screen name= "Anime" component = {pagAnime} />
        <Stack.Screen name= "listaCategoria" component = {listaCategoria} options = {{title: "Categoria"}} />
        <Stack.Screen name= "Categorias" component = {categorias} />
        <Stack.Screen name= "AnimeRelacionado" component = {AnimeRelacionado} />
        <Stack.Screen name= "Contenido" component = {Contenido} />
        <Stack.Screen name= "Elementos" component = {Elementos} />
        <Stack.Screen name= "Escenario" component = {Escenario} />
        <Stack.Screen name= "Publico" component = {Publico} />
        <Stack.Screen name= "Tematica" component = {Tematica} />
      </Stack.Navigator>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listas: {
      alignItems: "center",
      borderColor: "white",
      padding: 10,
      marginBottom: 15,
      height: 500,
      marginHorizontal: 40,
    },

    frasesitas: {
      textAlign:"center",
      alignItems: "center",
      marginBottom: 15,
      marginHorizontal: 40,
      justifyContent: 'center',
      marginVertical: 15,
      fontFamily: "serif",
      fontWeight: "bold",
      color: 'black',
    },
    image: {
      flex: 1,
      resizeMode:"contain",
      height: 800,       
    },
  });
export default Recomendacion;