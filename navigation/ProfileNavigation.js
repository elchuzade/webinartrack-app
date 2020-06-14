import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ProfileScreen from '../screens/ProfileScreen'

ProfileStack = createStackNavigator()

const ProfileNavigation = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name='Profile' component={ProfileScreen} options={{ title: 'Profile' }} />
  </ProfileStack.Navigator>
)

export default ProfileNavigation