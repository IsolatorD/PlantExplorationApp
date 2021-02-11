// import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { PlantDetail, Home } from './src/screens/'
// Tabs
import Tabs from './src/navigation/tabs'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        {/* Tabs */}
        <Stack.Screen
          name="Home"
          component={Tabs}
        />
        {/* Screens */}
        <Stack.Screen
          name="PlantDetail"
          component={PlantDetail}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App