import React, { useState } from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableNativeFeedback,
    TouchableOpacity,
    ScrollView
  } from 'react-native';


 
const Lista10 = ({navigation}) => {
  const [lista10, setLista10] = useState([
    {name: "12243"},
    {name: "3936"},
    {name: "6448"},
    {name: "1376"},
    {name: "7158"}
  ]);
 

    const Bloques = lista10.map(lista10 => {
      const [nombre, setNombre] = useState("")
      const [Lista, setLista] = useState([])
  
        fetch(`https://kitsu.io/api/edge/anime/${anime.name}/categories`)
        .then((response) => response.json())
        .then((json) => {
        setLista(json.data)
          })
          .catch((error) => {
            console.error(error);
          });
        

        
  
        return ( 
          <View >
            <TouchableOpacity>
              <Text style={styles.lista}>{nombre}</Text>
            </TouchableOpacity>
          </View>
          
          
          );
        });

    return(
    <ScrollView style ={styles.scrollView}>

        <View >
        {Bloques}
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
  });
export default Lista10;