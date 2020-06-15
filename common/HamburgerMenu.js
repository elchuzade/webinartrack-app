import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const HamburgerMenu = props => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="menu"
        size={24}
        color="black"
        onPress={props.toggleMenu}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  }
})

export default HamburgerMenu
