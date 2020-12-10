import React, { useState } from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    Image
  } from 'react-native';

 
const ListaRec8 = ({navigation}) => {
  const Lista8ID = [
    "12243", "3936", "6448", "1376", "7158", "1801", "7442", "41440", "1415", "5853", "3919", "7711", "4604", "5981", "10028",
    "11614", "41995", "7821", "831", "7712", "4240", "7160", "8133", "7023", "6028"
  
  ];
  const [isLoading, setLoading] = useState(true)
  const lista8_listo = []
  const [resultados, setResultados] = useState ("")
  const categori = []
  const [lista, setLista] = useState([])
    const Bloques = Lista8ID.map(lista10 => {
        fetch(`https://kitsu.io/api/edge/anime/${lista10}/categories`)
        .then((response) => response.json())
        .then((json) => {
        categori.push(json.data[0].attributes.title);
        categori.push(json.data[1].attributes.title);
        categori.push(json.data[2].attributes.title);
        categori.push(json.data[3].attributes.title);

        
        lista8_listo.push(lista10);
        if(lista8_listo.length == Lista8ID.length){
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
    
    const Buscar = (pop) => {
        fetch(`https://kitsu.io/api/edge/anime?filter[categories]=${pop}&sort=-averageRating`)
          .then((response) => response.json())
          .then((json) => {
            setLista(json.data);
          })
          .catch((error) => alert(error))
          .finally(() => setLoading(false));
      };

      const Item = ({ id, title, imagen}) => (
  
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity   onPress={() => navigation.navigate("Anime", {
          id: `${id}`
          })}>
      
            <Image 
            source = {{uri: imagen}}
            style={{
              width:210,
              height:300,
              borderWidth:2,
              borderColor:'#d35647',
              resizeMode:'contain',
              margin:8
            }}
            />
          </TouchableOpacity>
        </View>
      );

    const renderItem = ({item}) => (
        <Item 
         id={item.id} 
         title={item.attributes.canonicalTitle} 
         imagen={item.attributes.posterImage.small} 
         />
    );

    return(
    <ScrollView style ={styles.scrollView}>
        <View >
            <TouchableOpacity  onPress = {() => Buscar(resultados)}>
              <Text style={styles.boton}>
              {resultados}</Text>
            </TouchableOpacity>
            {isLoading ? ( 
        <ActivityIndicator/> 
      ) : ( 
        <FlatList
          data = {lista} 
          keyExtractor = {({ data }, index) => data}
          renderItem = {renderItem}    
        /> 
      )}
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
export default ListaRec8;