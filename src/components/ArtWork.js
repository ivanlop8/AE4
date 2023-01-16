import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';  

function Square(props) {
    return (
      <View size="100" mt="-2" marginTop={-6}
        width={props.width}
        height={props.height} 
        backgroundColor={props.color} 
        Text={props.Text} 
      > 
      <Text style={styles.text}> Açi va una foto </Text> 
      </View>  
    );
}  

export const ArtWork = (props) => {
  return (
    <View style={styles.Container}> 
      {props.image===''?<Square
        width = {200} 
        height = {200}
        color = '#1DB954'
      />:<Image style={{width:200, height:200}}source={{uri: props.image}}/>}
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
  text: { 
    textAlign: 'center',
    marginTop: 180, 
  }
});