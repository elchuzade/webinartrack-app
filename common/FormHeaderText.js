import React from 'react'
import { Text, StyleSheet } from 'react-native'

const FormHeaderText = props => {
  return (
    <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
  body: {
    fontSize: 24,
    fontWeight: '300'
  }
})

export default FormHeaderText
