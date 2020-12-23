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
        avatar_url:"https://vignette.wikia.nocookie.net/gurrenlagann/images/8/8c/Kamina_2.png/revision/latest/scale-to-width-down/340?cb=20160106173943&path-prefix=es",
             key: "1",},
        {name: "Lista 2",
        avatar_url:"https://i.pinimg.com/originals/aa/09/60/aa096042da83a0d847b3dbacfd62eb1a.jpg", 
            key: "2",},
        {name: "Lista 3", 
        avatar_url:"https://vignette.wikia.nocookie.net/maid-dragon/images/6/67/Tohru_2.png/revision/latest?cb=20181123213830&path-prefix=es", 
            key: "3",},
        {name: "Lista 4", 
        avatar_url:"https://www.latercera.com/resizer/PGw8XCJ5YPzXa5WEAv7WlbUEtYg=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/CMM446BJSZAMTIEAVZIOKCDEMY.jpg", 
            key: "4",},
        {name: "Lista 5", 
        avatar_url:"https://pbs.twimg.com/profile_images/665186307124142080/oA7gC1Gd_400x400.png", 
            key: "5",},
        {name: "Lista 6", 
        avatar_url:"https://static.tumblr.com/017e6d57caac632519ec15cbff6ab12d/deag8zo/xBbot8sc0/tumblr_static_3bbs2g4cju688scsc4ww0wogg.jpg", 
            key: "6",},
        {name: "Lista 7", 
        avatar_url:"https://i0.wp.com/jellygoods.com/wp-content/uploads/2019/03/Pel%C3%ADcula-de-Konosuba-2019.jpg?fit=1440%2C810&ssl=1", 
            key: "7",},
        {name: "Lista 8", 
        avatar_url:"https://www.beahero.gg/wp-content/uploads/2019/10/code-geass-2019.jpg", 
            key: "8",},
        {name: "Lista 9", 
        avatar_url:"https://vignette.wikia.nocookie.net/kill-la-kill/images/f/f5/Ryukoo.jpg/revision/latest?cb=20190818230524&path-prefix=es", 
            key: "9",},
        {name: "Lista 10", 
        avatar_url:"https://i.pinimg.com/originals/39/69/1f/39691f30f78af4924661678743c7483b.png", 
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
                    <Avatar rounded size = "medium" source={{uri: l.avatar_url}} />
                        <ListItem.Content>
                            <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>{l.name}</ListItem.Title>
                            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
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