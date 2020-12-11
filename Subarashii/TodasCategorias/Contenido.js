import React, { useState } from 'react';
import { StyleSheet,
    Button,
    View,

 } from 'react-native';

 const Contenido = ({navigation}) => {
    return(
        <View>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "violence"} )}
                title = "Violence"
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