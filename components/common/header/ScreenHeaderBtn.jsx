import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity, Image } from 'react-native';
import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconURL, dimension, handlePress}) => {
  return (
   <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
    <Image source={iconURL}
    resizeMode="cover"
    style={styles.btnImg(dimension)}/>
   </TouchableOpacity>
  )
}
//changes
export default ScreenHeaderBtn