
import React, { useState, Component, useEffect } from 'react';
import { StyleSheet,
   Button,
   Text,
   View,
   Image,
   TextInput,
   FlatList,
   ActivityIndicator,
   SafeAreaView,
   TouchableOpacity,
   StatusBar 
} from 'react-native';

const AnimeUff = ({navigation, route}) => {
  

  const animeAPI = `https://kitsu.io/api/edge/anime?filter[categories]=${route.params.categoria}&sort=-averageRating`;

  const [isLoading, setLoading] = useState(true)
  const [lista, setLista] = useState([])

  
    fetch(animeAPI)
        .then((response) => response.json())
        .then((json) => {
          setLista(json.data);
        })
        .catch((error) => alert(error))
        .finally(() => setLoading(false));
    
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

  const renderItem = ({item}) => (
      <Item 
       id={item.id} 
       title={item.attributes.canonicalTitle} 
       canonico={item.attributes.canonicalTitle}
       imagen={item.attributes.posterImage.small} 
       />
  );




  return (
    <SafeAreaView>
        {isLoading ? ( 
        <ActivityIndicator/> 
      ) : ( 
        <FlatList
          data = {lista} 
          keyExtractor = {({ data }, index) => data}
          renderItem = {renderItem}    
        /> 
      )}
    </SafeAreaView>
  );
};

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
    borderWidth: 1,
  },
  item: {
    backgroundColor: '#cbc2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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
export default AnimeUff;