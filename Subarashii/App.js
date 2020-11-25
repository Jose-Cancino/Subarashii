import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Recomendacion from "./Recomendacion"
import Lista from "./Listas"
import BusquedaAnime from "./Busqueda"



const Tab = createBottomTabNavigator();




export default function App() {
  return (
    <NavigationContainer >
    <Tab.Navigator> 
      <Tab.Screen name="Lupita" component={BusquedaAnime} />
      <Tab.Screen name="Home" component={Recomendacion} />
      <Tab.Screen name="lista" component={Lista} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
