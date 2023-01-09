import React from 'react';
import {View, StyleSheet, Text} from 'react-native'; 

function Square(props) {
    return (
      <View size="100" mt="-2" marginTop={-6}
        width={props.width}
        height={props.height} 
        backgroundColor={props.color} 
        Text={props.Text} 
       />   
    );
}  

export const ArtWork = () => {
  return (
    <View style={styles.Container}>
      <Square
        width = {200} 
        height = {200}
        color = '#1DB954'
      /> 
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#191414', 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
});