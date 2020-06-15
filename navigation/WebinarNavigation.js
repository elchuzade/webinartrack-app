import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Entypo } from '@expo/vector-icons';
import WebinarScreen from '../screens/WebinarScreen'
import WebinarsScreen from '../screens/WebinarsScreen'
import HamburgerMenu from '../common/HamburgerMenu'

const WebinarStack = createStackNavigator()

const WebinarNavigation = ({ navigation }) => (
  <WebinarStack.Navigator>
    <WebinarStack.Screen name='Webinars' component={WebinarsScreen} options={{
      title: 'Webinars',
      headerRight: () => (
        <HamburgerMenu toggleMenu={navigation.toggleDrawer} />
      )
    }} />
    <WebinarStack.Screen name='Webinar' component={WebinarScreen} options={{
      title: 'Webinar',
      headerRight: () => (
        <HamburgerMenu toggleMenu={navigation.toggleDrawer} />
      )
    }} />
  </WebinarStack.Navigator>
)

export default WebinarNavigation