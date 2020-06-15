import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HamburgerMenu from '../common/HamburgerMenu'

import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'

const AuthStack = createStackNavigator()

const AuthNavigation = ({ navigation }) => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name='SignIn'
      component={SignInScreen}
      options={{
        title: 'SignIn',
        headerRight: () => (
          <HamburgerMenu toggleMenu={navigation.toggleDrawer} />
        )
      }}
    />
    <AuthStack.Screen
      name='SignUp'
      component={SignUpScreen}
      options={{
        title: 'SignUp',
        headerRight: () => (
          <HamburgerMenu toggleMenu={navigation.toggleDrawer} />
        )
      }}
    />
  </AuthStack.Navigator>
)

export default AuthNavigation