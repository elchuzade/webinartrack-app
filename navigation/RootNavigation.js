import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerNavigation from './Drawer'

const RootStack = createStackNavigator()

const RootNavigation = () => {
  return (
    <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name='App' component={DrawerNavigation} options={{ animationEnabled: false }} />
    </RootStack.Navigator>
  )
}


export default RootNavigation