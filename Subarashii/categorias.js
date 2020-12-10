import React, { useState } from 'react';
import { StyleSheet,
    Button,
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

const categorias = ({navigation}) => {
    return(
        <ScrollView>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("Contenido")}
                title = "Contenido"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("Dinamica")}
                title = "Dinamica"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("Elementos")}
                title = "Elementos"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("Escenario")}
                title = "Escenario"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("Publico")}
                title = "Publico"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("Tematica")}
                title = "Tematicas"
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