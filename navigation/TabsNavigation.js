import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import WebinarNavigation from './WebinarNavigation'
import ProfileNavigation from './ProfileNavigation'

const Tabs = createBottomTabNavigator()

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name='Webinars' component={WebinarNavigation} />
    <Tabs.Screen name='Profile' component={ProfileNavigation} />
  </Tabs.Navigator>
)

export default TabsScreen