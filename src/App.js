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
} from 'react-native';

import { ArtWork } from './components/ArtWork';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ArtWork}> 
        <ArtWork /> 
      </View> 
      <View style={styles.style1}>

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
  style1: {
    flex: 1,
    backgroundColor: '#fff'
  },
  style2: {
    flex: 2,
    backgroundColor: '#fff'
  },
});

export default App;
