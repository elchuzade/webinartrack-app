import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const WebinarCard = ({ webinar }) => {
  return (
    <View style={styles.container}>
      <Text>{webinar.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginVertical: 5,
    padding: 5,
    width: '100%'
  }
})

export default WebinarCard
