import React, { useState } from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView,
    TouchableOpacity
  } from 'react-native';


 
const Lista10 = ({navigation}) => {
  const lisTa10 = [
    "12243", "3936"
  ];
  const lista10_listo = []
  const [resultados, setResultados] = useState ("")
  const categori = []
    const Bloques = lisTa10.map(lista10 => {
        fetch(`https://kitsu.io/api/edge/anime/${lista10}/categories`)
        .then((response) => response.json())
        .then((json) => {
        categori.push(json.data[0].attributes.title);
        categori.push(json.data[1].attributes.title);
        categori.push(json.data[2].attributes.title);
        categori.push(json.data[3].attributes.title); 

        
        lista10_listo.push(lista10);
        if(lista10_listo.length == lisTa10.length){
          setResultados(mode(categori))
          console.log(resultados)
          }
        })
          .catch((error) => {
            console.error(error)
          })
      });

    function mode (arr){
      return arr.sort((a,b) =>
        arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
      ).pop();
    }

    return(
    <ScrollView style ={styles.scrollView}>
        <View >
            <TouchableOpacity  >
              <Text style={styles.boton}>
              {resultados}</Text>
            </TouchableOpacity>
          
        </View>
    </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    lista:{
      marginHorizontal: 20,
      marginTop: 24,
      padding: 30,
      backgroundColor: "pink",
      fontSize: 24,
    },
    boton: {
      color: 'white',
      backgroundColor: '#694fad',
      padding: 3,
      marginVertical: 10,
      marginHorizontal: 50,
      alignItems: 'center',
    },  
  });
export default Lista10;