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
      <FlatList style={styles.flatList} keyExtractor={item => item._id} data={mockWebinars} renderItem={({ item }) => (
        <WebinarCard
          webinar={item}
          onClickWebinar={() => navigation.push('Webinar', { name: 'Webinar', webinar: item })}
        />
      )} />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatList: {
    width: '100%'
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
})

export default WebinarsScreen
