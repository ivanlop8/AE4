import React from 'react';
import { useState } from 'react'; 
import { View, StyleSheet, Text } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';
import {Slider} from '@miblanchard/react-native-slider';

export const Controls = (props) => { 
  const [sliderValue, setSliderValue] = useState(0);
  state = {
    value: sliderValue, 
  }; 

  const CanviarValorN = () => {
    return (setSliderValue(100)); 
  }

  const CanviarValorR = () => {
    return (setSliderValue(0)); 
  }

  const theme = useTheme();

  const [iconaFav, setIconaFav] = useState('heart'); 
  const [colorIconaFav, setColorIconaFav] = useState(theme.colors.inverseSurface); 
  const CanviarColor = () => {
    if(colorIconaFav === '#1DB954'){
      setColorIconaFav(theme.colors.inverseSurface) 
      setIconaFav('heart') 
    } else {
      setColorIconaFav('#1DB954')  
      setIconaFav('cards-heart')  
    }
  }

  const [iconaStar, setIconaStar] = useState('star-outline'); 
  const [colorIconaStar, setColorIconaStar] = useState(theme.colors.inverseSurface); 
  const CanviarColor2 = () => {
    if(colorIconaStar === '#1DB954'){
      setColorIconaStar(theme.colors.inverseSurface) 
      setIconaStar('star-outline') 
    } else {
      setColorIconaStar('#1DB954')  
      setIconaStar('star')  
    }
  } 

  const [iconaPlay, setIconaPlay] = useState('play');  
  const CanviarPlay = () => {
    if(iconaPlay === 'pause-circle-outline'){ 
      setIconaPlay('play') 
    } else {
      setIconaPlay('pause-circle-outline')  
      setSliderValue()
    }
  }

  return (
    <View style={styles.Container}>
        <View style={styles.slider}>
        <Slider 
        thumbTintColor='#1DB954'
        minimumTrackTintColor='#1DB954' 
        trackClickable={true}  
        maximumTrackTintColor= {theme.colors.inverseSurface} 
        value={this.state.value}
        onValueChange={value => this.setState({value})}
        size={40} 
        />
        </View>
        <View style={styles.controls}>
        <IconButton style={styles.heart}
        icon= {iconaFav}
        iconColor={colorIconaFav}  
        size={30}  
        onPress={()=>{CanviarColor()}}
        />
        <IconButton style={styles.previous}
        icon="skip-previous"
        iconColor={theme.colors.surface} 
        size={70}  
        onPress={()=>{CanviarValorR()}}  
        />
        <IconButton style={styles.play}
        icon={iconaPlay}
        iconColor={theme.colors.surface} 
        size={70}  
        onPress={()=>{CanviarPlay()}}  
        />
        <IconButton style={styles.next}
        icon="skip-next"
        iconColor={theme.colors.surface} 
        size={70}  
        onPress={()=>{CanviarValorN()}} 
        />
        <IconButton style={styles.star}
        icon={iconaStar}
        iconColor={colorIconaStar}  
        size={30} 
        onPress={()=>{CanviarColor2()}} 
        />
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#191414',
  },
  slider: {
    flex: 1,
  },
  controls: {
    flex: 2,
    flexDirection: 'row',
  }, 
  heart: {
    alignSelf: 'center',
  },
  previous: {
    alignSelf: 'center',
  },
  play: {
    alignSelf: 'center',
  },
  next: {
    alignSelf: 'center',
  },
  star: {
    alignSelf: 'center',
  },
});