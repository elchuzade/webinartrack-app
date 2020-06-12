import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'

const WebinarCard = ({ webinar, onClickWebinar }) => {
  let TouchableComponent = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }

  return (
    <TouchableComponent onPress={onClickWebinar}>
      <View style={styles.container}>
        <Text>{webinar.title}</Text>
      </View>
    </TouchableComponent>
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
