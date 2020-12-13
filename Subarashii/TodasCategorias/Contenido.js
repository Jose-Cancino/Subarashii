import React, { useState } from 'react';
import { StyleSheet,
    View,

 } from 'react-native';
 import { Button } from "react-native-elements"
 const Contenido = ({navigation}) => {
    return(
        <View>
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "violence"} )}
                title = "Violence"
                type = "outline"
                buttonStyle = {{
                    backgroundColor:"white",
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    marginVertical: 15,
                  }}
            ></Button>
        </View>
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
 export default Contenido;