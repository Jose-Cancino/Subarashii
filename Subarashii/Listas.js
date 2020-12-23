import React, {useState, Component} from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView, Image, Button, TextInput, FlatList, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
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
import RecPerso from "./ListasRec/RecPerso"
import ListaPerso1 from "./Listas/ListaPerso1"
import ListaPerso2 from "./Listas/ListaPerso2"
import ListaPerso3 from "./Listas/ListaPerso3"
import ListaPerso4 from "./Listas/ListaPerso4"
import ListaPerso5 from "./Listas/ListaPerso5"
import ListaPerso6 from "./Listas/ListaPerso6"
import ListaPerso7 from "./Listas/ListaPerso7"
import ListaPerso8 from "./Listas/ListaPerso8"
import ListaPerso9 from "./Listas/ListaPerso9"
import ListaPerso10 from "./Listas/ListaPerso10"
import { ListItem, Avatar } from "react-native-elements"

const Listas = ({route, navigation}) => {
    const  id  = route.params;
    const [listado, setListado] = useState([
        {name: "Lista 1", 
        avatar_url:"https://cdn.discordapp.com/attachments/409042100428996621/791374658775547944/original.gif",
             key: "1",},
        {name: "Lista 2",
        avatar_url:"https://cdn.discordapp.com/attachments/409042100428996621/791377209939722240/tenor.gif", 
            key: "2",},
        {name: "Lista 3", 
        avatar_url:"https://media.tenor.com/images/c719de6c80d5acf540bf417fed7a9210/tenor.gif", 
            key: "3",},
        {name: "Lista 4", 
        avatar_url:"https://cdn.discordapp.com/attachments/409042100428996621/791378034883559434/tenor_1.gif", 
            key: "4",},
        {name: "Lista 5", 
        avatar_url:"https://cdn.discordapp.com/attachments/409042100428996621/791376068614291496/giphy.gif", 
            key: "5",},
        {name: "Lista 6", 
        avatar_url:"https://cdn.discordapp.com/attachments/409042100428996621/791375041115455488/99c10f79936772fd3e6105a36bb0913d.gif", 
            key: "6",},
        {name: "Lista 7", 
        avatar_url:"https://cdn.discordapp.com/attachments/409042100428996621/791380173274480700/descarga.gif", 
            key: "7",},
        {name: "Lista 8", 
        avatar_url:"https://cdn.discordapp.com/attachments/409042100428996621/791382474755145778/73.gif", 
            key: "8",},
        {name: "Lista 9", 
        avatar_url:"https://cdn.discordapp.com/attachments/409042100428996621/791374834919014420/tumblr_n3fs0wtXf61sk6x9qo1_400.gif", 
            key: "9",},
        {name: "Lista 10", 
        avatar_url:"https://cdn.discordapp.com/attachments/409042100428996621/791378381038944326/tenor.gif", 
            key: "10",}
    ])

    return (
        <ScrollView>
            { 
                listado.map((l, i) => (
                <TouchableOpacity onPress = {() => navigation.navigate(l.name, {id: {id}})}>
                    <ListItem
                      linearGradientProps={{
                        colors: ["#F7FF00", '#FF6400' ],
                        start: { x: 1, y: 0 },
                        end: { x: 0.2, y: 0 },
                      }}>
                    <Avatar rounded size = "medium" source={{uri: l.avatar_url}}/>
                        <ListItem.Content>
                            <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>{l.name}</ListItem.Title>
                        </ListItem.Content>
                  </ListItem> 
                </TouchableOpacity>     
                ))
            }
        </ScrollView>
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
            <Stack.Screen name= "RecPerso" component = {RecPerso} options = {{title: "Recomendación Personalizada"}}/>
            <Stack.Screen name = "Ver Lista 1" component = {ListaPerso1} options = {{title: "Tu maravillosa lista"}}/>
            <Stack.Screen name = "Ver Lista 2" component = {ListaPerso2} options = {{title: "Tu maravillosa lista"}}/>
            <Stack.Screen name = "Ver Lista 3" component = {ListaPerso3} options = {{title: "Tu maravillosa lista"}}/>
            <Stack.Screen name = "Ver Lista 4" component = {ListaPerso4} options = {{title: "Tu maravillosa lista"}}/>
            <Stack.Screen name = "Ver Lista 5" component = {ListaPerso5} options = {{title: "Tu maravillosa lista"}}/>
            <Stack.Screen name = "Ver Lista 6" component = {ListaPerso6} options = {{title: "Tu maravillosa lista"}}/>
            <Stack.Screen name = "Ver Lista 7" component = {ListaPerso7} options = {{title: "Tu maravillosa lista"}}/>
            <Stack.Screen name = "Ver Lista 8" component = {ListaPerso8} options = {{title: "Tu maravillosa lista"}}/>
            <Stack.Screen name = "Ver Lista 9" component = {ListaPerso9} options = {{title: "Tu maravillosa lista"}}/>
            <Stack.Screen name = "Ver Lista 10" component = {ListaPerso10} options = {{title: "Tu maravillosa lista"}}/>
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
  },
  image: {
    flex: 1,
    resizeMode:"contain",
    height: 800,       
  },
});


export default NListas;