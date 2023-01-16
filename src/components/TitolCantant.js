import React from 'react';
import { useState } from 'react'; 
import { View, StyleSheet, Text } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';

export const TitolCantant = (props) => {
  const theme = useTheme();
  const [colorIcona, setColorIcona] = useState(theme.colors.inverseSurface); 
  const CanviarColor = () => {
    if(colorIcona === theme.colors.surface){
      setColorIcona(theme.colors.inverseSurface)
    } else {
      setColorIcona(theme.colors.surface) 
    }
  }

  const [colorIcona2, setColorIcona2] = useState(theme.colors.inverseSurface); 
  const CanviarColor2 = () => {
    if(colorIcona2 === theme.colors.surface){
      setColorIcona2(theme.colors.inverseSurface)
    } else {
      setColorIcona2(theme.colors.surface)  
    }
  } 
  
  return (
    <View style={styles.Container}>
      <IconButton style={styles.bluetooth}
        icon="bluetooth"
        iconColor={colorIcona} 
        size={40}
        onPress={()=>{CanviarColor()}} 
      />
      <View style={styles.text}> 
      <Text style={styles.titol}> {props.titol===''?'Títol':props.titol} </Text> 
      <Text style={styles.cantant}> {props.cantant===''?'Cantant/Grup':props.cantant} </Text>
      </View>
      <IconButton style={styles.button}
        icon="shuffle-variant"
        iconColor={colorIcona2} 
        size={40}
        onPress={()=>{CanviarColor2()}}  
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#191414',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  bluetooth: {
    flex: 1,
    alignSelf: 'center',
  },
  button: {
    flex: 1,
    alignSelf: 'center',
  },
  titol: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FFFFFF' 
  },
  cantant: {
    textalign: 'center',
    fontSize: 20,
    color: 'grey',
  },
  text: {
    flexDirection: 'column',
  },
});