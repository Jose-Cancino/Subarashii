import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from "react-native-ionicons"

import Recomendacion from "./Recomendacion"
import Lista from "./Listas"
import BusquedaAnime from "./Busqueda"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
    <Tab.Navigator 
      initialRouteName = "Home"> 
      <Tab.Screen name="Lupita" component={BusquedaAnime} />
      <Tab.Screen name="Home" component={Recomendacion}/>
      <Tab.Screen name="Listas" component={Lista}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}
