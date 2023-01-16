/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image, 
} from 'react-native';

import { ArtWork } from './components/ArtWork';
import { TitolCantant } from './components/TitolCantant'; 

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ArtWork}> 
        <ArtWork image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-g04tFYeRacXdRDB-G09RsqHyjCDQg4QpZ2bNa7axBg&s'/>    
      </View> 
      <View style={styles.TitolCantant}>
        <TitolCantant titol='Tu Calorro' cantant='       Estopa'/>  
      </View>
      <View style={styles.style2}>

      </View>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ArtWork: {
    flex: 3,
    backgroundColor: '#191414'
  },
  TitolCantant: {
    flex: 1,
    backgroundColor: '#191414'
  },
  style2: {
    flex: 2,
    backgroundColor: '#fff'
  },
});

export default App;
