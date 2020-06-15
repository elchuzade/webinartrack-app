import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HamburgerMenu from '../common/HamburgerMenu'

import ProfileScreen from '../screens/ProfileScreen'

ProfileStack = createStackNavigator()

const ProfileNavigation = ({ navigation }) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name='Profile'
      component={ProfileScreen}
      options={{
        title: 'Profile',
        headerRight: () => (
          <HamburgerMenu toggleMenu={navigation.toggleDrawer} />
        )
      }}
    />
  </ProfileStack.Navigator>
)

export default ProfileNavigation