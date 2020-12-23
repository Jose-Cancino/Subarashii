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
  Linking,
  TouchableOpacity,
  FlatList,
  ImageBackground,
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
  const [video, setVideo] = useState('')
  const [id, setId] = useState("")

  
  useEffect (() => {
    fetch(animeURL)
    .then((response) => response.json())
    .then((json) => {
      setFoto(json.data.attributes.posterImage.small);
      setTitle(json.data.attributes.canonicalTitle);
      setSynopsis(json.data.attributes.synopsis);
      setRating(json.data.attributes.averageRating);
      setVideo(json.data.attributes.youtubeVideoId);
      setId(json.data.id)
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

  const imagencita = { uri: "https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-orange-ink-background-gradient-color-fruit-background-poster-image_49305.jpg" };
  const renderItem = ({item}) => (
    <Item 
     categoria = {item.attributes.title} 
     />
  );
   
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={imagencita} style={styles.imagencita}>
      <ScrollView style ={styles.scrollView}>
      <View >
        
      <Text style= {styles.title}> {title} </Text> 
      <Image style={styles.imagen}
        source = {{uri: foto}}
        />
      <Text style= {styles.sinopsis}>
        {synopsis}

      </Text>  

      <Text style={styles.rating}>
        Rating: {rating}

      </Text>
      <Text style={styles.subtitle}>
        CATEGORÍAS
      </Text>
      <FlatList style={styles.flat}
          data = {lista} 
          keyExtractor = {({ data }, index) => data}
          renderItem = {renderItem}    
        /> 
    <TouchableOpacity onPress = {() => Linking.openURL(`https://www.youtube.com/watch?v=${video}`)}>
        <Text style={styles.yutu}>
          Ver Trailer
        </Text>
    </TouchableOpacity>
    <View style= {{flex:1, flexDirection: 'row'}}>
    <TouchableOpacity onPress={() => navigation.navigate("Listas", {screen: "Listas", params: {id}})}>
      <Text style = {styles.añadir}>
        Añadir a lista
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Perfil", {screen: "Perfil", params: {id}})}>
      <Text style = {styles.añadir}>
        Añadir a perfil
      </Text>
    </TouchableOpacity>
    </View>
      </View>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen:{
    width:210,
    height:300,
    borderWidth: 3,
    borderColor:'white',
    resizeMode:'contain',
    alignItems: 'center',
    margin:8,
    marginHorizontal: 80,
  },
  title: {
    marginVertical: 20,
    fontSize:22,  
    fontStyle: 'italic',
    height: "auto",
    lineHeight: 35,
    textAlign: 'center',
    alignItems: "center", 
    borderColor: 'white',   
    borderWidth: 3, 
    color: 'white',
    backgroundColor: '#DB4E08',
    padding: 10,
  },
  subtitle: {
    fontSize:20, 
    color: 'white',
    height: 40,
    lineHeight: 35,
    marginVertical: 10,
    marginHorizontal: 30,
    textAlign: "center",  
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    fontWeight: 'bold'

  },
  scrollView: {
    marginHorizontal: 20,
  },
  yutu: {
    color: "blue",
    fontSize: 15,  
    height: 40,
    lineHeight: 35,
    textAlign: "center", 
    textDecorationLine: "underline"       
  },
  añadir: {
    backgroundColor: '#23265E',
    color: 'white',
    fontSize:18,  
    lineHeight: 20,   
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 10, 
    borderColor: 'white',
    borderWidth: 3
  },
  sinopsis: {
    fontFamily: "serif",
    color: 'white',
    fontSize:15,  
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    textAlign: 'justify',
  },  
  rating: {
    color: '#AE051F',
    fontSize: 18,  
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    textAlign: 'justify',
  },  
  imagencita: {
    flex: 1,
    resizeMode:"contain",
    height: 800,
  },
  flat: {
    backgroundColor: '#F0B838',
    padding: 20,
    borderColor: 'white',
    borderWidth: 2,
  }
});

export default pagAnime; 