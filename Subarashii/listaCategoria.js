import React, { useState, Component, useEffect } from 'react';
import { StyleSheet,
   Text,
   View,
   Image,
   TextInput,
   FlatList,
   ActivityIndicator,
   SafeAreaView,
   TouchableOpacity,
   ImageBackground,
   StatusBar 
} from 'react-native';
import { Button } from "react-native-elements"

const imagencita = {uri:"https://mfiles.alphacoders.com/779/thumb-1920-779524.jpg"};
const listaCategoria = ({navigation, route}) => {

    const [isLoading, setLoading] = useState(true)
    const [lista, setLista] = useState([])
  
    buscar = () => {
        fetch(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&filter[categories]=${route.params.categoria}&sort=-averageRating`)
          .then((response) => response.json())
          .then((json) => {
            setLista(json.data);
          })
          .catch((error) => alert(error))
          .finally(() => setLoading(false));
        };
  

  
  const Item = ({ id, title, imagen, desc, canonico}) => (
    
    <View style={styles.item}>
      <Text style={styles.title}>
        {title}       #{id}
        </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Anime", {
      id: `${id}`
      })}>
      
        <Image 
        source = {{uri: imagen}}
        style={{
          width:210,
          height:300,
          borderWidth:2,
          borderColor:'white',
          resizeMode:'contain',
          margin:6,
          marginHorizontal: 60,
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
         desc={item.attributes.synopsis}
         />
    );
  
    return (
      <SafeAreaView>
        <ImageBackground source={imagencita} style={styles.imagencita}></ImageBackground>
            <Button
                type = "outline"
                buttonStyle = {{
                  backgroundColor:"white",
                  borderColor: "white",
                  borderRadius: 10,
                  alignItems: "center",
                  marginVertical: 10,
                  marginHorizontal: 20
             }}
                onPress={() => buscar()}
                title = {route.params.categoria}
            ></Button>     
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
      padding: 15,
      marginVertical: 10,
      marginHorizontal: 30,
      backgroundColor: 'rgba(255, 253, 158, 0.8)',
      borderWidth: 3,
      borderColor: 'white',
      alignItems: 'center',
    },  
    boton: {
      color: 'white',
      backgroundColor: '#694fad',
      padding: 3,
      marginVertical: 10,
      marginHorizontal: 50,
      alignItems: 'center',
    },  
    title: {
      marginVertical: 5,
      alignItems: 'center',
      textAlign: 'center',
      fontSize:13,
      fontWeight: 'bold',
      color: 'black',
      fontSize: 15
    },  
    listas: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      marginBottom: 15,
    },
    imagencita: {
      flex: 1,
      resizeMode:"contain",
      height: 800     
    },
  });

  export default listaCategoria;