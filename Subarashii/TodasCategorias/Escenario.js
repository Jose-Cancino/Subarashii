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
    ImageBackground,
    TouchableOpacity,
    StatusBar 
 } from 'react-native';
 import { Button } from "react-native-elements"

 const image = {uri:"https://i.pinimg.com/564x/14/9d/ce/149dce91c327259fddc7e47af4304cdc.jpg"};
 const Escenario = ({navigation}) => {
    return(
      <SafeAreaView>
        <ImageBackground source={image} style={styles.image}></ImageBackground>
        <ScrollView style ={styles.scrollView}>
        <View>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Countryside"})}
                type = "outline"
                buttonStyle = {{
                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
                   borderWidth: 2,
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
                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
                   borderWidth: 2,
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
                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
                   borderWidth: 2,
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
                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
                   borderWidth: 2,
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 9,
                  }}
                title = "Mundo Fantástico"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Future"})}
                type = "outline"
                buttonStyle = {{
                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
                   borderWidth: 2,
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
                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
                   borderWidth: 2,
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
                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
                   borderWidth: 2,
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
                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
                   borderWidth: 2,
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
                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
                   borderWidth: 2,
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
                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
                   borderWidth: 2,
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
                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
                   borderWidth: 2,
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
                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
                   borderWidth: 2,
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 9,
                  }}
                title = "Verano"
            ></Button>
        </View>
        </ScrollView>
        </SafeAreaView>

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
    },
    image: {
      flex: 1,
      resizeMode:"contain",
      height: 800     
    },
  
  });
 export default Escenario;