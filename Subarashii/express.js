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
    TouchableOpacity,
    StatusBar 
 } from 'react-native';

const express = ({navigates}) => {

    const [anime1, setAnime1] = useState("")
    const [anime2, setAnime1] = useState("")
    const [anime3, setAnime1] = useState("")


return(
    <SafeAreaView>
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
    </SafeAreaView>

)

}

export default express;