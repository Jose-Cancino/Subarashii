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
const categorias = ({navigation}) => {
    return(
        <ScrollView>
            <Button 
                onPress={() => navigation.navigate("Contenido")}
                title = "Contenido"
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
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
                    borderRadius: 10,
                    marginVertical: 15,
                  }}
            ></Button>
            <Button
                onPress={() => navigation.navigate("Publico")}
                title = "Publico"
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 15,
                  }}
            ></Button>
            <Button 
                onPress={() => navigation.navigate("Tematica")}
                title = "Tematicas"
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 15,
                  }}
            ></Button>
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
export default categorias;