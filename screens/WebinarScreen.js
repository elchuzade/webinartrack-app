import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
)

const WebinarScreen = () => {
  return (
    <ScreenContainer>
      <Text>All Webinars Page</Text>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default WebinarScreen
