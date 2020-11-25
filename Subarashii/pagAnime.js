import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, FlatList} from 'react-native';





const pagAnime = ( {navigation, route}) => {
    return(
    
    <SafeAreaView style={styles.constainer}>

        <Text style={styles.title}>{route.params.canonico}</Text>
        <Image 

        source = {{uri: route.params.imagen}}
        style={{
          
          width:210,
          height:300,
          borderWidth:2,
          borderColor:'#d35647',
          
          resizeMode:'contain',
          margin:8
        }}
        />

        <Text style={styles.parrafo} >{route.params.desc}</Text>

        <Button
            title = "Agregar"
            


        ></Button>
    </SafeAreaView>   
    
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize:20,  
      height: 40,
      lineHeight: 35,
      textAlign: "center",        
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      }, 
      parrafo: {
        fontSize:12,  
     
      },

    

  });

export default pagAnime;