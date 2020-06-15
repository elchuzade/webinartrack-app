import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import WebinarNavigation from './WebinarNavigation'
import FilterNavigation from './FilterNavigation'

const WebinarTabs = createBottomTabNavigator()

const WebinarTabsNavigation = () => (
  <WebinarTabs.Navigator>
    <WebinarTabs.Screen name='Webinars' component={WebinarNavigation} />
    <WebinarTabs.Screen name='Filter' component={FilterNavigation} />
  </WebinarTabs.Navigator>
)

export default WebinarTabsNavigation