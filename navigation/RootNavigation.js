import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerNavigation from './Drawer'
import { useDispatch } from 'react-redux'
import { checkUser } from '../redux/actions/authActions'

const RootStack = createStackNavigator()

const RootNavigation = () => {
  const dispatch = useDispatch()

  // Checking if user is already logged in
  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])

  return (
    <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name='App' component={DrawerNavigation} options={{ animationEnabled: false }} />
    </RootStack.Navigator>
  )
}


export default RootNavigation