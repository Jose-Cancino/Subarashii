import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, TextInput, FlatList, TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Lista1, {ListaN1} from "./Listas/Lista1"
import Lista2 from "./Listas/Lista2"
import Lista3 from "./Listas/Lista3"
import Lista4 from "./Listas/Lista4"
import Lista5 from "./Listas/Lista5"
import Lista6 from "./Listas/Lista6"
import Lista7 from "./Listas/Lista7"
import Lista8 from "./Listas/Lista8"
import Lista9 from "./Listas/Lista9"
import Lista10 from "./Listas/Lista10"
import pagAnime from "./pagAnime"


const Lista = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista 1")}>
                    Lista 1 </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista 2")}>
                    Lista 2 </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista 3")}>
                    Lista 3 </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista 4")}>
                    Lista 4 </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista 5")}>
                    Lista 5 </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista 6")}>
                    Lista 6 </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista 7")}>
                    Lista 7 </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista 8")}>
                    Lista 8 </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista 9")}>
                    Lista 9 </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listas}>
                <Text onPress={() => navigation.navigate("Lista 10")}>
                    Lista 10 </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const Stack = createStackNavigator();
function NListas() {
    return (
        <Stack.Navigator initialRouteName = "Listas">
            <Stack.Screen name = "Listas" component = {Lista} />
            <Stack.Screen name = "Lista 1" component = {Lista1} options = {{ title: ListaN1 }} />
            <Stack.Screen name = "Lista 2" component = {Lista2} />
            <Stack.Screen name = "Lista 3" component = {Lista3} />
            <Stack.Screen name = "Lista 4" component = {Lista4} />
            <Stack.Screen name = "Lista 5" component = {Lista5} />
            <Stack.Screen name = "Lista 6" component = {Lista6} />
            <Stack.Screen name = "Lista 7" component = {Lista7} />
            <Stack.Screen name = "Lista 8" component = {Lista8} />
            <Stack.Screen name = "Lista 9" component = {Lista9} />
            <Stack.Screen name = "Lista 10" component = {Lista10} />
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


export default NListas;