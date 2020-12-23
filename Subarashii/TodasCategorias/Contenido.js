import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet,
    View,
    ImageBackground,
 } from 'react-native';
 import { Button } from "react-native-elements"

 const image = {uri:"https://hbimg.huabanimg.com/20800fec57d23058fd04d16ebd0465fff898f4aa49bd26-nCYzlY"};
 const Contenido = ({navigation}) => {
    return(
      <SafeAreaView>
        <ImageBackground source={image} style={styles.image}></ImageBackground>
        <View>
            <Button 
                onPress={() => navigation.navigate("listaCategoria", {categoria: "violence"} )}
                title = "Violence"
                type = "outline"
                buttonStyle = {{
                    backgroundColor:'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    marginVertical: 15,
                  }}
            ></Button>
        </View>
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
 export default Contenido;