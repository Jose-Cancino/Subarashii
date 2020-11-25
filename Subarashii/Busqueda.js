
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Button, Text, View, TextInput, Alert, SafeAreaView, KeyboardAvoidingView, } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from 'react-native/Libraries/NewAppScreen';

import Busqueda from "./buscar" 
import pagAnime from "./pagAnime" 

const Stack = createStackNavigator();


const BusquedaAnime= () => {
  return (
      
        <Stack.Navigator initialRoutName = "Buscar">
          <Stack.Screen name= "Buscar" component = {Busqueda} />
          <Stack.Screen name= "Anime" component = {pagAnime} />
          

        </Stack.Navigator>
      
  );
}



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

  }
});
export default BusquedaAnime;