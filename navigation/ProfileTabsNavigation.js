import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import SettingsNavigation from './SettingsNavigation'
import ProfileNavigation from './ProfileNavigation'

const ProfileTabs = createBottomTabNavigator()

const ProfileTabsNavigation = () => (
  <ProfileTabs.Navigator>
    <ProfileTabs.Screen name='Profile' component={ProfileNavigation} />
    <ProfileTabs.Screen name='Settings' component={SettingsNavigation} />
  </ProfileTabs.Navigator>
)

export default ProfileTabsNavigation