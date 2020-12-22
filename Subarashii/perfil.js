import React from "react";
import {Text, StyleSheet} from "react-native";

export default function perfil(){
    return(
    <Text style={styles.title}>
        TU PERFIL
    </Text>
    )}


const styles = StyleSheet.create({
title: {
    marginVertical: 50,
    alignItems: 'center',
    textAlign: 'center',
    fontSize:13,
    fontWeight: 'bold',
    color: 'black',
  }
})