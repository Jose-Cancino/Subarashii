import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, TextInput, FlatList, TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import ListaRec from './ListaRec';

const Lista = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Button 
                title= "Recomendación del programador"
                onPress={() => navigation.navigate("Lista Recomendada")}>
            </Button>
        </SafeAreaView>
    )
}

const Stack = createStackNavigator();
function NListas() {
    return (
        <Stack.Navigator initialRouteName = "Listas">
            <Stack.Screen name = "Listas" component = {Lista} />
            <Stack.Screen name = "Lista Recomendada" component = {ListaRec} />
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
});


export default NListas;