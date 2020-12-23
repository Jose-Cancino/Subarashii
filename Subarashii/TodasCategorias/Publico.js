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
 const image = {uri:"https://i.pinimg.com/originals/b9/5a/e2/b95ae24cb746833f65045626b179a161.jpg"};
 const Publico = ({navigation}) => {
    return(
      <SafeAreaView>
        <ImageBackground source={image} style={styles.image}></ImageBackground>
        <ScrollView style ={styles.scrollView}>
        <View>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Josei"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderWidth: 2,
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 15,
                  }}
                title = "Josei"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Kids"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderWidth: 2,
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 15,
                  }}
                title = "Children"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Seinen"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderWidth: 2,
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 15,
                  }}
                title = "Seinen"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Shoujo"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderWidth: 2,
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 15,
                  }}
                title = "Shoujo"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Shounen"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderWidth: 2,
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 15,
                  }}
                title = "Shounen"
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
 export default Publico;