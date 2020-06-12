import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

import WebinarScreen from '../screens/WebinarScreen'
import WebinarsScreen from '../screens/WebinarsScreen'

const WebinarStack = createStackNavigator()

const WebinarStackScreen = () => (
  <WebinarStack.Navigator>
    <WebinarStack.Screen name='Webinars' component={WebinarsScreen} options={{ title: 'Webinars' }} />
    <WebinarStack.Screen name='Webinar' component={WebinarScreen} options={{ title: 'Webinar' }} />
  </WebinarStack.Navigator>
)

export default WebinarStackScreen