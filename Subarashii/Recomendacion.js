import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import ListaRec from './Listas/ListaRec';
import pagAnime from "./pagAnime"
import Lista from "./Listas"
import Busqueda from "./Busqueda"

const RecomendacionTab = ({navigation}) => {
    return(
      <View>
            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista Recomendada")}>
                    Lista Recomendada </Text>
            </TouchableOpacity>
      </View>
    );
  }
  const Stack = createStackNavigator();
  function Recomendacion() {
    return (
        <Stack.Navigator initialRouteName = "Listas">
            <Stack.Screen name = "Recomendaciones" component = {RecomendacionTab} />
            <Stack.Screen name = "Lista Recomendada" component = {ListaRec} />
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