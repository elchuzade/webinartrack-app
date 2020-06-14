import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'

const AuthStack = createStackNavigator()

const AuthNavigation = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name='SignIn' component={SignInScreen} options={{ title: 'SignIn' }} />
    <AuthStack.Screen name='SignUp' component={SignUpScreen} options={{ title: 'SignUp' }} />
  </AuthStack.Navigator>
)

export default AuthNavigation