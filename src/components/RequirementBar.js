import React from 'react'
import {
  View,
  Image
} from 'react-native'
import { COLORS, SIZES } from '../constants'

const RequirementBar = ({ icon, barPercentage }) => {

  return (
    <View
      style={{
        height: 60,
        alignItems: 'center'
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: COLORS.gray
        }}
      >
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.secondary,
            width: 30,
            height: 30
          }}
        />
      </View>
      {/* Bar */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.gray
        }}
      >
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          width: barPercentage,
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.primary
        }}
      >
      </View>
    </View>
  )
}

export default RequirementBar