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

 const Tematica = ({navigation}) => {
    return(
        <ScrollView style ={styles.scrollView}>
        <View>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Anti War"})}
                title = "Anti War"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Coming Of Age"})}
                title = "Adolescencia"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Conspiracy"})}
                title = "Conspiracion"
            ></Button> 
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Cooking"})}
                title = "Cocina"
            ></Button>   
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Crime"})}
                title = "Crimen"
            ></Button>   
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Disaster"})}
                title = "Desastre"
            ></Button>       
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Family"})}
                title = "Familia"
            ></Button>  
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Friendship"})}
                title = "Amistad"
            ></Button> 
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Military"})}
                title = "Militar"
            ></Button> 
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Parental Abandonment"})}
                title = "Abandono parental"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Politics"})}
                title = "Politica"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Religion"})}
                title = "Religion"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Revenge"})}
                title = "Venganza"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Rotten World"})}
                title = "Dead World"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "School Life"})}
                title = "Vida Escolar"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Slavery"})}
                title = "Esclavitud"
            ></Button>
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Slice of Life"})}
                title = "Vida Diaria"
            ></Button>   
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "Sports"})}
                title = "Deportes"
            ></Button> 
            <Button style={styles.listas}
                onPress={() => navigation.navigate("listaCategoria", {categoria: "The Arts"})}
                title = "Artes"
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
 export default Tematica;