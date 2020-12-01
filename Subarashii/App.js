import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Recomendacion from "./Recomendacion"
import Lista from "./Listas"
import BusquedaAnime from "./Busqueda"

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
    <Tab.Navigator 
      initialRouteName = "Home"
      activeColor = "white"
      shifting = {true}
      barStyle = {{backgroundColor:'#694fad'}}
    > 
      <Tab.Screen 
        name="Buscar" component={BusquedaAnime} 
        options={{
        tabBarLabel: "Buscar",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name= "magnify" color={color} size={26}/>
        ),
      }}
      />
      <Tab.Screen 
        name="Home" component={Recomendacion} 
        options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26}/>
        ),
      }} 
      />
      <Tab.Screen
        name="Listas" component={Lista} 
        options={{
        tabBarLabel: "Listas",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26}/>
        ),
      }} 
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
      color:"black",
  }
})