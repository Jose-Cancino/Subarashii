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
              borderColor:'#191970',
              resizeMode:'contain',
              margin:8,
              alignSelf: "center"
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
        <Text style={styles.frasesita}>Agrega 3 IDs para obtener recomendación.</Text>
      <TextInput
        style = {styles.input}
        onChangeText = {text => setAnime1(text)}
        value = {anime1}
        placeholder = "   Ingresa un ID"
      ></TextInput>
      <TextInput
        style = {styles.input}
        onChangeText = {text => setAnime2(text)}
        value = {anime2}
        placeholder = "   Ingresa otro ID"
      ></TextInput>
      <TextInput
        style = {styles.input}
        onChangeText = {text => setAnime3(text)}
        value = {anime3}
        placeholder = "   Ingresa un último ID"
      ></TextInput>
      <TouchableOpacity  onPress={() => generar()}style={styles.boton}>
        <Text style={styles.boton}>
        RECOMENDAR </Text>
      </TouchableOpacity>
      <Text style={styles.frasesita}> Cuando veas la recomendación, presiona el botón. </Text>
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
      borderColor: 'grey',
      borderWidth: 1, 
      backgroundColor: "white"
  
    },
    boton: {
        color: 'black',
        backgroundColor: 'white',
        padding: 3,
        marginVertical: 10,
        marginHorizontal: 50,
        alignItems: 'center',
        borderRadius: 10,
    },
    item: {
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 16,
      },
    frasesita: {
      color: "black", 
      textAlign: "center", 
      marginBottom: 10,
      fontSize: 15
    },    
    title:{
      alignSelf:"center",
    }
  });

export default express;