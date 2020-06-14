import React from 'react'
import { Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import WebinarScreen from '../screens/WebinarScreen'
import WebinarsScreen from '../screens/WebinarsScreen'

const WebinarStack = createStackNavigator()

const WebinarNavigation = ({ navigation }) => (
  <WebinarStack.Navigator>
    <WebinarStack.Screen name='Webinars' component={WebinarsScreen} options={{
      title: 'Webinars', headerLeft: () => (
        <Button title='Hamburger' onPress={() => navigation.toggleDrawer()} />
      )
    }} />
    <WebinarStack.Screen name='Webinar' component={WebinarScreen} options={{ title: 'Webinar' }} />
  </WebinarStack.Navigator>
)

export default WebinarNavigation