import React, { useState } from 'react';
import { StyleSheet,
   ImageBackground,
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
 import { Button } from "react-native-elements"

const image = {uri:"https://i.pinimg.com/564x/c5/bd/af/c5bdafa8a9dd6cd92450bd0786c61f52.jpg"};
const AnimeRelacionado = ({navigation}) => {
    const [isLoading, setLoading] = useState(true)
    const [anime1, setAnime1] = useState("")
    const [resultados, setResultados] = useState ("")
    const categori = []
    const lista_listo = []
    const [lista, setLista] = useState([])


    const tridente = [anime1]
    const random = ar => ar[Math.floor(Math.random() * ar.length)];


    function generar (){
        tridente.map(lista10 => {
        fetch(`https://kitsu.io/api/edge/anime/${lista10}/categories`)
        .then((response) => response.json())
        .then((json) => {
        try {categori.push(json.data[0].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[1].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[2].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[3].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[4].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[5].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[6].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[7].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[8].attributes.title)}
        catch(error){
          console.error(error)
        }
        try {categori.push(json.data[9].attributes.title)}
        catch(error){
          console.error(error)
        }


        
        lista_listo.push(tridente);
        if(lista_listo.length == tridente.length){
          setResultados(random(categori))
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
              alignSelf:"center",
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
  <SafeAreaView>
  <ImageBackground source={image} style={styles.image}></ImageBackground>
    <ScrollView style ={styles.scrollView}>
     
    <View style={styles.item}>
        <Text style={styles.frasesita}>Agrega un ID</Text>
      <TextInput
        style = {styles.input}
        onChangeText = {text => setAnime1(text)}
        value = {anime1}
        placeholder = "   Ingresa un ID"
      ></TextInput>
      <Button  
        onPress={() => generar()}style={styles.boton}
        type = "outline"
        buttonStyle = {{
          backgroundColor:"white",
            marginHorizontal: 20,
            borderColor: "white",
            borderRadius: 10,
            marginVertical: 15,
        }}
        title = "RECOMENDAR"
        ></Button>
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
    </SafeAreaView>
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
      backgroundColor:"white",
      marginHorizontal: 20,
      borderColor: "white",
      borderRadius: 10,
      marginVertical: 15,
      color:"black",
      alignItems:"center"
    },
    item: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 15,
        marginVertical: 15,
        marginHorizontal: 16,
      },
    frasesita:{
      color: "black", 
      textAlign: "center", 
      marginBottom: 10,
      fontSize: 20,
    },  
    image: {
      flex: 1,
      resizeMode:"contain",
      height: 800     
    }, 
    title: {
      alignSelf:"center"
    } 
  });

export default AnimeRelacionado;