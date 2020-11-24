import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Lista from "./Listas"
import Busqueda from "./Busqueda"

const Recomendacion = () => {
    return(
      <View>
      <Text>
      Esta noche oscura te tortura la locura
  Procura estar a mi altura aunque es baja tu estatura
  Tartamudas ante el miedo que genero en el momento
  Que aparezco entre las sombras y en tu mente me conecto
  Ven victima mía... siente mi presencia
  No luche por tu vida y se parte de mi esencia
  Con decencia me escabullo y aparece detrás de ti
  Huye todo lo que puedas porque yo siempre te escucho
  ¿Tú eres Jeff the killer? tu vida pende de un hilo mientras te cortas la cara yo te agarro y te aniquilo as requerido ser traumado para ser un asesino cuando yo toda mi vida miles de almas eh obtenido
  Soy slenderman y puedo cambiar de forma
  Te conformas si te digo que tu cara es espantosa.
  Levo la maldad y la expando a tu alrededor
  No requiero fuego y cúter para causarte terror
      </Text>
      </View>
    );
  }

export default Recomendacion;