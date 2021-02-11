import React from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'

import { icons, COLORS } from '../constants/'


const CameraButton = () => {
  return (
    <View
      style={style.cameraButton}
    >
      <Image
        source={icons.camera}
        resizeMode="contain"
        style={{
          width: 23,
          height: 23
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  cameraButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary 
  }
})

export default CameraButton