import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HamburgerMenu from '../common/HamburgerMenu'

import SettingsScreen from '../screens/SettingsScreen'

const SettingsStack = createStackNavigator()

const SettingsNavigation = ({ navigation }) => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
      name='Settings'
      component={SettingsScreen}
      options={{
        title: 'Settings',
        headerRight: () => (
          <HamburgerMenu toggleMenu={navigation.toggleDrawer} />
        )
      }}
    />
  </SettingsStack.Navigator>
)

export default SettingsNavigation