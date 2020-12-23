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

 const image = {uri:"https://www.wallpapermaiden.com/wallpaper/32723/download/1440x3040/anime-landscape-sakura-blossom-building-street-petals.jpeg"};
 const Tematica = ({navigation}) => {
    return(
      <SafeAreaView>
        <ImageBackground source={image} style={styles.image}></ImageBackground>
        <ScrollView style ={styles.scrollView}>
        <View>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Anti War"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Anti War"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Coming Of Age"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Adolescencia"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Conspiracy"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Conspiración"
            ></Button> 
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Cooking"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Cocina"
            ></Button>   
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Crime"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Crimen"
            ></Button>   
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Disaster"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Desastre"
            ></Button>       
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Family"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Familia"
            ></Button>  
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Friendship"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Amistad"
            ></Button> 
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Military"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Militar"
            ></Button> 
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Parental Abandonment"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Abandono parental"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Politics"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Política"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Religion"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Religión"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Revenge"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Venganza"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Rotten World"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Dead World"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "School Life"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Vida Escolar"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Slavery"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Esclavitud"
            ></Button>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Slice of Life"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Vida Diaria"
            ></Button>   
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Sports"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Deportes"
            ></Button> 
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "The Arts"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 10,
                  }}
                title = "Artes"
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
 export default Tematica;