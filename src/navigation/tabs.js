import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { icons, COLORS } from '../constants'

import CameraButton from '../components/CameraButton'
// Screens
import { Home } from '../screens/'

const Tab = createBottomTabNavigator()

const tabOptions = {
  showLabel: false,
  style: {
    height: '7%'
  }
}

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray
          switch(route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.flash}
                  resizeMode="contain"
                  style={{
                    tintColor,
                    width: 25,
                    height: 25
                  }}
                />
              )
            case 'Box':
              return (
                <Image
                  source={icons.cube}
                  resizeMode="contain"
                  style={{
                    tintColor,
                    width: 25,
                    height: 25
                  }}
                />
              )
            case 'Camera':
              return (
                <CameraButton />
              )
            case 'Search':
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    tintColor,
                    width: 25,
                    height: 25
                  }}
                />
              )
            case 'Favourite':
              return (
                <Image
                  source={icons.heart}
                  resizeMode="contain"
                  style={{
                    tintColor,
                    width: 25,
                    height: 25
                  }}
                />
              )
          }
        }
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Box"
        component={Home}
      />
      <Tab.Screen
        name="Camera"
        component={Home}
      />
      <Tab.Screen
        name="Search"
        component={Home}
      />
      <Tab.Screen
        name="Favourite"
        component={Home}
      />
    </Tab.Navigator>
  )
}

export default Tabs