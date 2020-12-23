import React, { useState } from 'react';
import { StyleSheet,
    ImageBackground,
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

 const image = {uri:"https://i.pinimg.com/564x/32/db/75/32db75e9d1036f891343ece7e8bb555c.jpg"};

const categorias = ({navigation}) => {
    return(
    <SafeAreaView>
      <ImageBackground source={image} style={styles.image}></ImageBackground>     
        <ScrollView>
            <Button 
                onPress={() => navigation.navigate("Contenido")}
                title = "Contenido"
                type = "outline"
                buttonStyle = {{
                    backgroundColor: 'white',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderWidth: 2,
                    borderRadius: 10,
                    marginVertical: 15,
                  }}

            ></Button>
            <Button
                onPress={() => navigation.navigate("Elementos")}
                title = "Elementos"
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderWidth: 2,
                    borderRadius: 10,
                    marginVertical: 15,
                  }}
            ></Button>
            <Button 
                onPress={() => navigation.navigate("Escenario")}
                title = "Escenario"
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderWidth: 2,
                    borderRadius: 10,
                    marginVertical: 15,
                  }}
            ></Button>
            <Button
                onPress={() => navigation.navigate("Publico")}
                title = "Público"
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderWidth: 2,
                    borderRadius: 10,
                    marginVertical: 15,
                  }}
            ></Button>
            <Button 
                onPress={() => navigation.navigate("Tematica")}
                title = "Temática"
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderWidth: 2,
                    borderRadius: 10,
                    marginVertical: 15,
                  }}
            ></Button>
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
    image: {
      flex: 1,
      resizeMode:"contain",
      height: 800     
    },
    listas: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      marginBottom: 15,
    }
  
  });
export default categorias;