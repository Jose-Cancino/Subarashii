import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";

import ListaRec from './Listas/ListaRec';
import pagAnime from "./pagAnime"
import Lista from "./Listas"
import Busqueda from "./Busqueda"

import generarVistos from "./generarVistos"
import express from "./express"
import Vistos from "./Vistos"


import categorias from "./categorias"

import Contenido from "./TodasCategorias/Contenido"
import Dinamica from "./TodasCategorias/Dinamica"
import Elementos from "./TodasCategorias/Elementos"
import Escenario from "./TodasCategorias/Escenario"
import Publico from "./TodasCategorias/Publico"
import Tematica from "./TodasCategorias/Tematica"


const RecomendacionTab = ({navigation}) => {
  return(
    <ScrollView style ={styles.scrollView}>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("Lista Recomendada")}
                title = "Lista Recomendada Programadores"
            ></Button>
            <Text>Danos tres animes y te daremos lo que buscas</Text>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("express")}
                title = "Recomendadacion express"
                >
            </Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("Vistos")}
                title = "Vistos"
                >
            </Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("Categorias")}
                title = "Categorias"
                >
            </Button>
      </ScrollView>
    );
  }
  const Stack = createStackNavigator();
  function Recomendacion (){
  return (
    <Stack.Navigator initialRouteName = "Listas">
        <Stack.Screen name = "Home" component = {RecomendacionTab} />
        <Stack.Screen name = "Lista Recomendada" component = {ListaRec} />
        <Stack.Screen name = "express" component = {express} />
        <Stack.Screen name = "Vistos" component = {Vistos} />

        <Stack.Screen name = "generarVistos" component = {generarVistos} />        
        
        <Stack.Screen name= "Anime" component = {pagAnime} />



        <Stack.Screen name= "Categorias" component = {categorias} />

        <Stack.Screen name= "Contenido" component = {Contenido} />
        <Stack.Screen name= "Dinamica" component = {Dinamica} />
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
      backgroundColor: "#DDDDDD",
      padding: 10,
      marginBottom: 15,
    }
  
  });
export default Recomendacion;