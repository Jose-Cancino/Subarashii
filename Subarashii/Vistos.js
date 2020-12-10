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

 const Vistos = ({navigation}) => {
     const [vistos, setVistos] = useState([])
     const [agregar, setAgregar] = useState("")
     const [nombre, setNombre] = useState("")
     const [id, setId] = useState("")

    return(
        <ScrollView style ={styles.scrollView}>
            <View>
            <Text>hola</Text>
                <TextInput
                    style = {styles.input}
                    onChangeText = {text => setAgregar(text)}
                    placeholder = "ID"
                ></TextInput>
                <Button style={styles.listas}
                    onPress={() => vistos.push(agregar)}
                    title = "Agregar"
                    >
                </Button>
                <Button style={styles.listas}
                    onPress={() => navigation.navigate("generarVistos", {
                        lista: `${vistos}`
                        })}
                    title = "Ver Vistos"
                    >
                </Button>

            

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
 export default Vistos;