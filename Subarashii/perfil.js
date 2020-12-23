import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, SafeAreaView, ScrollView, TextPropTypes, ImageBackground} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";
import { Avatar, Button } from "react-native-elements";
import vistos from "./Listas/Vistos"
import viendo from "./Listas/Viendo"
import porver from "./Listas/Porver"
import ListaPersoVistos from "./Listas/ListaPersoVistos"
import ListaPersoViendo from "./Listas/ListaPersoViendo"
import ListaPersoVer from "./Listas/ListaPersoPorver"
import pagAnime from "./pagAnime"
import RecPerso from "./ListasRec/RecPerso"

const image = {uri:"https://media.discordapp.net/attachments/760834589987045388/791410745971048498/1565186782114819670.png?width=535&height=669"};
const Perfil = ({route, navigation}) => {
    const id = route.params;
    const [nombre, setNombre] = useState("")
    const [casinombre, setCasinombre] = useState("")
    const [casimagen, setCasimagen] = useState("xd")
    const [imagen, setImagen] = useState("xd")

    const storeData = async () => {
        try {
            await AsyncStorage.setItem("@imagenp", casimagen);
        } catch (err) {
            alert(err);
        } console.log("Guardando")
    }

    const save = async () => {
        try {
            await AsyncStorage.setItem("@name", casinombre);
        } catch (err) {
            alert(err);
        } console.log("Guardando")
    }

    const load = async () => {
        try{
            console.log("Cargando")
            let nombre = await AsyncStorage.getItem("@name");
            if (nombre !== null) {
                setNombre(nombre);
            }
        } catch (err) {
            alert(err)
            }
}

    const getData = async () => {
        try{
            console.log("Cargando")
            let imagen = await AsyncStorage.getItem("@imagenp");
            if (imagen !== null) {
                setImagen(imagen);
            }
        } catch (err) {
            alert(err)
            }
}

useEffect(() => {
    getData();
    load()
},[]);

return(
    <SafeAreaView>
    <ImageBackground source={image} style={styles.image}></ImageBackground>
    <ScrollView style ={styles.scrollView}>
      <View >
    <Text style= {styles.nombre}>{nombre} </Text>
    <Avatar
        containerStyle ={{
            alignSelf: "center",
            marginTop: 20,
            borderWidth: 3,
            borderColor: 'white'
        }}
        size = "xlarge"
        rounded
        source={{
        uri:
            `${imagen}`,
        }}/>
    <TextInput 
        style={styles.input}
        placeholder = "Inserte URL Imagen"
        onChangeText = {(text) => setCasimagen(text)}>
    </TextInput>

    <TextInput 
        style={styles.input}
        placeholder = "Inserte Nombre"
        onChangeText = {(text) => setCasinombre(text)}>
    </TextInput>
    </View>
     </ScrollView>
    <Button onPress={() => {storeData(); setImagen(casimagen)}}
        title = "Añadir Imagen"
        type = "outline"
     buttonStyle = {{
        backgroundColor:"'rgba(255, 255, 255, 0.9)'",
        marginHorizontal: 20,
        borderColor: "white",   
        borderRadius: 10, 
        marginVertical: 10,                 
    }}> </Button>
    <Button onPress={() => {save(); setNombre(casinombre)}}
        title = "Guardar nombre"
        type = "outline"
     buttonStyle = {{
        backgroundColor:"'rgba(255, 255, 255, 0.9)'",
        marginHorizontal: 20,
        borderColor: "white",   
        borderRadius: 10, 
        marginVertical: 10,                 
    }}> </Button>
    <Button onPress={() => navigation.navigate("Vistos", {id: {id}})}
        title = "Vistos "
        type = "outline"
     buttonStyle = {{
        backgroundColor:"'rgba(255, 255, 255, 0.9)'",
        marginHorizontal: 20,
        borderColor: "white",   
        borderRadius: 10, 
        marginVertical: 10,                 
    }}> </Button>
    <Button onPress={() => navigation.navigate("Viendo", {id: {id}})}
        title = "Viendo "
        type = "outline"
     buttonStyle = {{
        backgroundColor:"'rgba(255, 255, 255, 0.9)'",
        marginHorizontal: 20,
        borderColor: "white",   
        borderRadius: 10, 
        marginVertical: 10,                 
    }}> </Button>
    <Button onPress={() => navigation.navigate("Por ver", {id: {id}})}
        title = "Por ver "
        type = "outline"
     buttonStyle = {{
        backgroundColor:"'rgba(255, 255, 255, 0.9)'",
        marginHorizontal: 20,
        borderColor: "white",   
        borderRadius: 10, 
        marginVertical: 10,                 
    }}> </Button>
    </SafeAreaView>
    )

}


const Stack = createStackNavigator();

function perfil() {
    return (
<Stack.Navigator initialRouteName = "Perfil">
    <Stack.Screen name = "Perfil" component = {Perfil} />
    <Stack.Screen name = "Vistos" component = {vistos} />
    <Stack.Screen name = "Viendo" component = {viendo} />
    <Stack.Screen name = "Por ver" component = {porver} />
    <Stack.Screen name = "Ver Lista Vistos" component = {ListaPersoVistos} options = {{title: "Los que ya ví"}}/>
    <Stack.Screen name = "Ver Lista Viendo" component = {ListaPersoViendo} options = {{title: "Los que estoy viendo"}}/>
    <Stack.Screen name = "Ver Lista Ver" component = {ListaPersoVer} options = {{title: "Los que quiero ver"}}/>
    <Stack.Screen name= "Anime" component = {pagAnime} />
    <Stack.Screen name= "RecPerso" component = {RecPerso} options = {{title: "Recomendación Personalizada"}}/>
</Stack.Navigator>
)}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        marginVertical: 5,
    },
    title: {
        marginVertical: 50,
        alignItems: 'center',
        textAlign: 'center',
        fontSize:13,
        fontWeight: 'bold',
        color: 'black',
    },
    input: {
        marginBottom: "auto",
        borderWidth: 1,
        borderColor: "#777",
        padding: 8,
        margin: 10,
        width: 200,
        marginHorizontal: 100,
        backgroundColor: "white",
    },
    image: {
        flex: 1,
        resizeMode:"contain",
        height: 800     
      },
    nombre: {
        textAlign: 'center',
        marginVertical: 30,
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 30
    }
})

export default perfil;