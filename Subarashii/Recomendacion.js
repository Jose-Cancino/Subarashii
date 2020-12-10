import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";

import ListaRec from './Listas/ListaRec';
import pagAnime from "./pagAnime"
import Lista from "./Listas"
import Busqueda from "./Busqueda"

import ListaRec1 from "./ListasRec/ListasRec1"
import express from "./express"
import AnimeUff from './AnimesUff';

const RecomendacionTab = ({navigation}) => {
  return(
    <ScrollView style ={styles.scrollView}>
    <TouchableOpacity style={styles.listas}>
        <Text onPress={() => navigation.navigate("Lista Recomendada")}>
        Lista Recomendada Programadores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista Recomendada 1")}>
                    Lista Recomendada 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("express")}>
                    Recomendadacion express</Text>
            </TouchableOpacity>
      </ScrollView>
    );
  }
  const Stack = createStackNavigator();
  function Recomendacion (){
  return (
    <Stack.Navigator initialRouteName = "Listas">
        <Stack.Screen name = "Recomendaciones" component = {RecomendacionTab} />
        <Stack.Screen name = "Lista Recomendada 1" component = {ListaRec1} />
        <Stack.Screen name = "Lista Recomendada" component = {ListaRec} />
        <Stack.Screen name = "express" component = {express} />


        <Stack.Screen name = "Animes ufff" component = {AnimeUff} />
        <Stack.Screen name= "Anime" component = {pagAnime} />
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