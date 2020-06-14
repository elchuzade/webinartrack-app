import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import DrawerNavigation from './Drawer'
import AuthNavigation from './AuthNavigation'

const RootStack = createStackNavigator()

const RootNavigation = ({ userToken }) => (
  <RootStack.Navigator headerMode='none'>
    {userToken ? (
      <RootStack.Screen name='App' component={DrawerNavigation} options={{ animationEnabled: false }} />
    ) : (
        <RootStack.Screen name='Auth' component={AuthNavigation} options={{ animationEnabled: false }} />
      )
    }
  </RootStack.Navigator>
)

export default RootNavigation