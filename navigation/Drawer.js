import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import TabsNavigation from './TabsNavigation'
import WebinarNavigation from './WebinarNavigation'
import ProfileNavigation from './ProfileNavigation'
import AuthNavigation from './AuthNavigation'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => (
  <Drawer.Navigator initialRouteName='Home'>
    <Drawer.Screen name='Home' component={TabsNavigation} />
    <Drawer.Screen name='Webinars' component={WebinarNavigation} />
    <Drawer.Screen name='Profile' component={ProfileNavigation} />
    <Drawer.Screen name='Auth' component={AuthNavigation} />
  </Drawer.Navigator>
)

export default DrawerNavigation