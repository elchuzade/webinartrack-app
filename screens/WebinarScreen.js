import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Webinar from '../components/Webinar'

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
)

const WebinarScreen = props => {
  const { webinar } = props.route.params
  return (
    <ScreenContainer>
      <Webinar webinar={webinar} />
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
