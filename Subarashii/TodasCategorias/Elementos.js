import React, { useState } from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StatusBar 
 } from 'react-native';
 import { Button } from "react-native-elements"

 const Elementos = ({navigation}) => {
    return(
        <ScrollView style ={styles.scrollView}>
        <View>
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Action"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Accion"
            ></Button>
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Adventure"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Aventura"
            ></Button>
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Angst"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Angustia"
            ></Button>
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Anime Influenced"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Influenciado por anime"
            ></Button>
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Anthropomorphism"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Antropomorfismo"
            ></Button>
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Comedy"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Comedia"
            ></Button>
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Detective"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Detectives"
            ></Button> 
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Drama"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Drama"
            ></Button>   
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Ecchi"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Ecchi"
            ></Button>    
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Fantasy"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Fantasy"
            ></Button>  
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Ghost"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Ghost"
            ></Button>  
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Harem"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Harem"
            ></Button>
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Henshin"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Henshin"
            ></Button>    
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Horror"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Horror"
            ></Button>   
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Magic Girl"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Chicas Magicas"
            ></Button>   
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Mystery"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Misterio"
            ></Button>   
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Parasite"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Parasitos"
            ></Button> 
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "psychological"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Psychological"
            ></Button>  
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Romance"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Romance"
            ></Button>  
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Science fiction"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Science fiction"
            ></Button>  
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Super power"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Super Poderes"
            ></Button> 
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Supernatural"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Supernatural"
            ></Button> 
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Thriller"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Suspenso"
            ></Button> 
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Vampire"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Vampiros"
            ></Button> 
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Virtual Reality"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Virtual Reality"
            ></Button>
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Zombie"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                title = "Zombies"
            ></Button>
        </View>
        </ScrollView>
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
 export default Elementos;