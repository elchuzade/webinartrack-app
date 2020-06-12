import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import WebinarStackScreen from './navigation/WebinarsNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <WebinarStackScreen />
    </NavigationContainer>
  )
}
