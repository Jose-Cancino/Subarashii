import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from "@react-native-community/async-storage";

import Recomendacion from "./Recomendacion"
import Lista from "./Listas"
import BusquedaAnime from "./Busqueda"
import perfil from "./perfil"
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


const Tab = createMaterialBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#DAEEFF',
  },
};
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
    <Tab.Navigator 
      initialRouteName = "Home"
      activeColor = "white"
      shifting = {true}
      barStyle = {{backgroundColor:'#23265E'}}
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
      <Tab.Screen
        name="Perfil" component={perfil} 
        options={{
        tabBarLabel: "Perfil",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26}/>
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