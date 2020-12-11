import React, { useState } from 'react';
import { StyleSheet,
    Button,
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

 const Elementos = ({navigation}) => {
    return(
        <ScrollView style ={styles.scrollView}>
        <View>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Action"})}
                title = "Accion"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Adventure"})}
                title = "Aventura"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Angst"})}
                title = "Angustia"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Anime Influenced"})}
                title = "Influenciado por anime"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Anthropomorphism"})}
                title = "Antropomorfismo"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Comedy"})}
                title = "Comedia"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Detective"})}
                title = "Detectives"
            ></Button> 
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Drama"})}
                title = "Drama"
            ></Button>   
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Ecchi"})}
                title = "Ecchi"
            ></Button>    
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Fantasy"})}
                title = "Fantasy"
            ></Button>  
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Ghost"})}
                title = "Ghost"
            ></Button>  
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Harem"})}
                title = "Harem"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Henshin"})}
                title = "Henshin"
            ></Button>    
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Horror"})}
                title = "Horror"
            ></Button>   
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Magic Girl"})}
                title = "Chicas Magicas"
            ></Button>   
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Mystery"})}
                title = "Misterio"
            ></Button>   
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Parasite"})}
                title = "Parasitos"
            ></Button> 
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "psychological"})}
                title = "Psychological"
            ></Button>  
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Romance"})}
                title = "Romance"
            ></Button>  
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Romance"})}
                title = "Romance"
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