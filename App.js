import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import WebinarStackScreen from './navigation/WebinarsNavigation'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <WebinarStackScreen />
      </NavigationContainer>
    </Provider>
  )
}
