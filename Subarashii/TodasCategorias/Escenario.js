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
 const Escenario = ({navigation}) => {
    return(

        <ScrollView style ={styles.scrollView}>
        <View>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Countryside"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 9,
                  }}
                title = "Rural"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Desert"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 9,
                  }}
                title = "Desierto"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Planet Earth"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 9,
                  }}
                title = "Planeta Tierra"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Fantasy world"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 9,
                  }}
                title = "Mundo Fantastico"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Future"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 9,
                  }}
                title = "Futuro"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Isekai"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 9,
                  }}
                title = "Isekai"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Island"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 9,
                  }}
                title = "Isla"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Parallel Universe"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 9,
                  }}
                title = "Universo Paralelo"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Past"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 9,
                  }}
                title = "Pasado"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Present"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 9,
                  }}
                title = "Presente"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Space"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 9,
                  }}
                title = "Espacio"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Summer"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 9,
                  }}
                title = "Verano"
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
 export default Escenario;