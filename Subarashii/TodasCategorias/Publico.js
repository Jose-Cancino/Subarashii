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
 const Publico = ({navigation}) => {
    return(

        <ScrollView style ={styles.scrollView}>
        <View>
            <Button
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Josei"})}
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
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
                    backgroundColor:"white",
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
                    backgroundColor:"white",
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
                    backgroundColor:"white",
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
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 15,
                  }}
                title = "Shounen"
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
 export default Publico;