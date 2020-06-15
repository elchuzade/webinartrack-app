import React from 'react'
import { useSelector } from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer'

import WebinarTabsNavigation from './WebinarTabsNavigation'
import ProfileTabsNavigation from './ProfileTabsNavigation'
import AuthNavigation from './AuthNavigation'

import SignOutScreen from '../screens/SignOutScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)

  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Webinars' component={WebinarTabsNavigation} />
      <Drawer.Screen name='Profile' component={ProfileTabsNavigation} />
      {isAuthenticated ?
        <Drawer.Screen name='Sign Out' component={SignOutScreen} /> : <Drawer.Screen name='Sign In' component={AuthNavigation} />
      }
    </Drawer.Navigator>
  )
}

export default DrawerNavigation