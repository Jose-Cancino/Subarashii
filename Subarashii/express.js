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

const express = ({navigation}) => {
    const [isLoading, setLoading] = useState(true)
    const [anime1, setAnime1] = useState("")
    const [anime2, setAnime2] = useState("")
    const [anime3, setAnime3] = useState("")
    const [resultados, setResultados] = useState ("")
    const categori = []
    const lista_listo = []
    const [lista, setLista] = useState([])


    const tridente = [anime1, anime2, anime3]

    
    function generar (){
        tridente.map(lista10 => {
        fetch(`https://kitsu.io/api/edge/anime/${lista10}/categories`)
        .then((response) => response.json())
        .then((json) => {
        categori.push(json.data[0].attributes.title);
        categori.push(json.data[1].attributes.title);
        categori.push(json.data[2].attributes.title);
        categori.push(json.data[3].attributes.title); 

        
        lista_listo.push(tridente);
        if(lista_listo.length == tridente.length){
          setResultados(mode(categori))
          console.log(resultados)
          }
        })
          .catch((error) => {
            console.error(error)
          })
      })};

    const Buscar = (pop) => {
        
        fetch(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&filter[categories]=${pop}&sort=-averageRating`)
          .then((response) => response.json())
          .then((json) => {
            setLista(json.data);
          })
          .catch((error) => alert(error))
          .finally(() => setLoading(false));
      };

      const Item = ({ id, title, imagen}) => (
  
        <View style={styles.item}>
          <Text style={styles.title}>{title}    #{id}</Text>
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
        function mode (arr){
        return arr.sort((a,b) =>
          arr.filter(v => v===a).length
          - arr.filter(v => v===b).length
        ).pop();
      }

    const renderItem = ({item}) => (
        <Item 
         id={item.id} 
         title={item.attributes.canonicalTitle} 
         imagen={item.attributes.posterImage.small} 
         />
    );


return(
    <ScrollView style ={styles.scrollView}>
     
    <View style={styles.item}>
        <Text>Agrega 3 ID para generar</Text>
      <TextInput
        style = {styles.input}
        onChangeText = {text => setAnime1(text)}
        value = {anime1}
        placeholder = "ID"
      ></TextInput>
      <TextInput
        style = {styles.input}
        onChangeText = {text => setAnime2(text)}
        value = {anime2}
        placeholder = "ID"
      ></TextInput>
      <TextInput
        style = {styles.input}
        onChangeText = {text => setAnime3(text)}
        value = {anime3}
        placeholder = "ID"
      ></TextInput>
      <TouchableOpacity  onPress={() => generar()}style={styles.boton}>
        <Text style={styles.boton}>
        RECOMENDAR </Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => Buscar(resultados)}style={styles.boton}>
        <Text style={styles.boton}>
        {resultados} </Text>
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

)

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1 
  
    },
    boton: {
        color: 'white',
        backgroundColor: '#694fad',
        padding: 3,
        marginVertical: 10,
        marginHorizontal: 50,
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#cbc2ff',
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 16,
      },    
  });

export default express;