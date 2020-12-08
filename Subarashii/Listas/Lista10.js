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
    "12243",
    "3936",
    "6448",
    "1376",
    "7158"
  ]);
 

    const Bloques = lista10.map(lista10 => {
      const [nombre, setNombre] = useState("")
      const [Lista, setLista] = useState([])
      const [categorias, setCategorias] = useState({})
  
        fetch(`https://kitsu.io/api/edge/anime/${lista10}/categories`)
        .then((response) => response.json())
        .then((json) => {
        setLista(json.data)
          })
          .catch((error) => {
            console.error(error);
          });
        
        Lista.forEach(function(Lista, index){
          //console.log(`${index} : ${Lista.id}`)
          if(categorias[Lista.id] === undefined){
          setCategorias(categorias.push({key:`${Lista.id}`, value: 1}))
          } else {
          setCategorias({...categorias , Lista.id : categorias[Lista.id] + 1})
          }
        });
        const [contador, setContador] = useState(0)
        const [main, setMain] = useState("")
        categorias.forEach(function(Lista, index){
          if(categorias){

          }
        });

        return ( 
          <View >
            <TouchableOpacity>
              <Text style={styles.lista}>{}</Text>
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