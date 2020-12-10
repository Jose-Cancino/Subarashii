import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";

import ListaRec from './Listas/ListaRec';
import pagAnime from "./pagAnime"
import Lista from "./Listas"
import Busqueda from "./Busqueda"

import ListaRec1 from "./ListasRec/ListasRec1"
import ListaRec2 from "./ListasRec/ListasRec2"
import ListaRec3 from "./ListasRec/ListasRec3"
import ListaRec4 from "./ListasRec/ListasRec4"
import ListaRec5 from "./ListasRec/ListasRec5"
import ListaRec6 from "./ListasRec/ListasRec6"
import ListaRec7 from "./ListasRec/ListasRec7"
import ListaRec8 from "./ListasRec/ListasRec8"
import ListaRec9 from "./ListasRec/ListasRec9"
import ListaRec10 from "./ListasRec/ListasRec10"
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
                <Text onPress={() => navigation.navigate("Lista Recomendada 2")}>
                    Lista Recomendada 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista Recomendada 3")}>
                    Lista Recomendada 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista Recomendada 4")}>
                    Lista Recomendada 4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista Recomendada 5")}>
                    Lista Recomendada 5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista Recomendada 6")}>
                    Lista Recomendada 6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista Recomendada 7")}>
                    Lista Recomendada 7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista Recomendada 8")}>
                    Lista Recomendada 8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista Recomendada 9")}>
                    Lista Recomendada 9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista Recomendada 10")}>
                    Lista Recomendada 10</Text>
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
            <Stack.Screen name = "Lista Recomendada 2" component = {ListaRec2} />
            <Stack.Screen name = "Lista Recomendada 3" component = {ListaRec3} />
            <Stack.Screen name = "Lista Recomendada 4" component = {ListaRec4} />
            <Stack.Screen name = "Lista Recomendada 5" component = {ListaRec5} />
            <Stack.Screen name = "Lista Recomendada 6" component = {ListaRec6} />
            <Stack.Screen name = "Lista Recomendada 7" component = {ListaRec7} />
            <Stack.Screen name = "Lista Recomendada 8" component = {ListaRec8} />
            <Stack.Screen name = "Lista Recomendada 9" component = {ListaRec9} />
            <Stack.Screen name = "Lista Recomendada 10" component = {ListaRec10} />


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