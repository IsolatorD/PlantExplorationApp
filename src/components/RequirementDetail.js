import React from 'react'
import {
  View,
  Image,
  Text
} from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

const RequirementDetail = ({ icon, label, detail }) => {

  return (
    <View
      style={{
        flexDirection: 'row'
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',

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
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.secondary,
            ...FONTS.h2
          }}
        >
          {label}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end'
        }}
      >
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.gray,
            ...FONTS.h2
          }}
        >
          {detail}
        </Text>
      </View>
    </View>
  )
}

export default RequirementDetail