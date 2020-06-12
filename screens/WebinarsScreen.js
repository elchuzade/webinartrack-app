import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

import WebinarCard from '../components/WebinarCard'
import mockWebinars from '../data/webinars'

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
)

const WebinarsScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <FlatList keyExtractor={item => item._id} data={mockWebinars} renderItem={({ item }) => (
        <WebinarCard webinar={item} />
      )} />
      <Text>All Webinars Page</Text>
      <Button title='Click on a webianr' onPress={() => navigation.push('Webinar', { name: 'Webinar' })} />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
})

export default WebinarsScreen
