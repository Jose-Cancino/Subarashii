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

 const Escenario = ({navigation}) => {
    return(

        <ScrollView style ={styles.scrollView}>
        <View>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Countryside"})}
                title = "Rural"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Desert"})}
                title = "Desierto"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Planet Earth"})}
                title = "Planeta Tierra"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Fantasy world"})}
                title = "Mundo Fantastico"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Future"})}
                title = "Futuro"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Isekai"})}
                title = "Isekai"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Island"})}
                title = "Isla"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Parallel Universe"})}
                title = "Universo Paralelo"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Past"})}
                title = "Pasado"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Present"})}
                title = "Presente"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Space"})}
                title = "Espacio"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Summer"})}
                title = "Verano"
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
 export default Escenario;