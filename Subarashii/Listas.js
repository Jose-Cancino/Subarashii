import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, TextInput, FlatList, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import "react-native-gesture-handler";
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
import { ListItem } from "react-native-elements"

const Listas = ({route, navigation}) => {
    const { id } = route.params;
    const [listado, setListado] = useState([
        {name: "Lista 1", key: "1",},
        {name: "Lista 2", key: "2",},
        {name: "Lista 3", key: "3",},
        {name: "Lista 4", key: "4",},
        {name: "Lista 5", key: "5",},
        {name: "Lista 6", key: "6",},
        {name: "Lista 7", key: "7",},
        {name: "Lista 8", key: "8",},
        {name: "Lista 9", key: "9",},
        {name: "Lista 10", key: "10",}
    ])
    return (
        <SafeAreaView>
            { 
                listado.map((l, i) => (
                <TouchableOpacity onPress = {() => navigation.navigate(l.name, {id: id})}>
                    <ListItem key = {i} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                  </ListItem> 
                </TouchableOpacity>     
                ))
            }
        </SafeAreaView>
    )
}

const Stack = createStackNavigator();
function NListas() {
    return (
        <Stack.Navigator initialRouteName = "Listas">
            <Stack.Screen name = "Listas" component = {Listas} />
            <Stack.Screen name = "Lista 1" component = {Lista1} />
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
    padding: 30,
    marginBottom: 15,
    marginTop: 24,
    backgroundColor: "pink",
    fontSize: 20
  }

});


export default NListas;