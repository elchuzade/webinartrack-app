import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HamburgerMenu from '../common/HamburgerMenu'

import FilterScreen from '../screens/FilterScreen'

const FilterStack = createStackNavigator()

const FilterNavigation = ({ navigation }) => (
  <FilterStack.Navigator>
    <FilterStack.Screen
      name='Filter'
      component={FilterScreen}
      options={{
        title: 'Filter',
        headerRight: () => (
          <HamburgerMenu toggleMenu={navigation.toggleDrawer} />
        )
      }}
    />
  </FilterStack.Navigator>
)

export default FilterNavigation