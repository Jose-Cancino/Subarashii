import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, TextInput, FlatList, TouchableNativeFeedback, TouchableOpacity} from 'react-native';

const ListaRec = () => {
    const [anime, setAnime] = useState([
        {name: "Kobayashi-san Chi no Maid Dragon"},
        {name: "Fullmetal Alchemist: Brotherhood"},
        {name: "Hunter x Hunter (2011)"},
        {name: "Death Note"},
        {name: "JoJo's Bizarre Adventure (2012)"},
        {name: "Tengen Toppa Gurren Lagann"},
        {name: "Shingeki no Kyojin"},
        {name: "Kono Subarashii Sekai ni Shukufuku wo!"},
        {name: "Code Geass: Hangyaku no Lelouch"},
        {name: "Toradora!"},
    ]);
 
    return (
     <View style={styles.container}>
         <FlatList
             keyExtractor={( item ) => item.id}
             data={anime}
             renderItem={({ item }) => (
             <TouchableNativeFeedback>
             <Text style={styles.lista}>{item.name}</Text>
             </TouchableNativeFeedback>
             )}
         />
     </View>
    )}
 
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
        backgroundColor: "grey",
        fontSize: 24,
    },
});
export default ListaRec;
