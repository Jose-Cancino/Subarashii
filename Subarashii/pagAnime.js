import React, {useState, useEffect} from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  SafeAreaView,
  ActivityIndicator,
  Image,
  Button,
  ScrollView,
  FlatList
 } from 'react-native';

const pagAnime = ({navigation, route}) => {
  const [isLoading, setLoading] = useState(true);
  const [foto, setFoto] = useState("")
  const [title, setTitle] = useState("")
  const [synopsis, setSynopsis] = useState("")
  const animeURL = `https://kitsu.io/api/edge/anime/${route.params.id}`
  const categoriaUrl = `https://kitsu.io/api/edge/anime/${route.params.id}/categories`
  const [rating, setRating] = useState("")
  const [lista, setLista] = useState([])

  
  useEffect (() => {
    fetch(animeURL)
    .then((response) => response.json())
    .then((json) => {
      setFoto(json.data.attributes.posterImage.small);
      setTitle(json.data.attributes.canonicalTitle);
      setSynopsis(json.data.attributes.synopsis);
      setRating(json.data.attributes.averageRating);
    })
    fetch(categoriaUrl)
    .then((response) => response.json())
    .then((json) => {
      setLista(json.data)
    })
    .catch((error) => alert(error))
    .finally(setLoading(false));  
  },[]);
  
  const Item = ({ categoria }) => (
  
    <View style={styles.item}>
      <Text>{categoria}</Text>
    </View>
  );

  const renderItem = ({item}) => (
    <Item 
     categoria = {item.attributes.title} 
     />
  );
   
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style ={styles.scrollView}>
      {isLoading ? (
      <ActivityIndicator/> 
      ):( 
      <View >
        
      <Text style= {styles.title}> {title} </Text> 
      <Image style={styles.imagen}
        source = {{uri: foto}}
        />
      <Text>
        {synopsis}
        
      </Text>  

      <Text style={styles.title}>
        Rating: {rating}

      </Text>
      <Text style={styles.subtitle}>
        Categorias:
      </Text>
      <FlatList
          data = {lista} 
          keyExtractor = {({ data }, index) => data}
          renderItem = {renderItem}    
        /> 
      <Button
      title = "Añadir"
      
      
      
      ></Button>

      </View>
      )}
      </ScrollView>
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
  imagen:{
    width:210,
    height:300,
    borderWidth:2,
    borderColor:'#d35647',
    resizeMode:'contain',
    alignItems: "center",
    margin:8
  },
  title: {
    fontSize:20,
    backgroundColor: '#fff',  
    height: 40,
    lineHeight: 35,
        
  },
  subtitle: {
    fontSize:20, 
    height: 40,
    lineHeight: 35,
    textAlign: "center",        
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});

export default pagAnime;