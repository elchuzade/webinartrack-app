import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextInputField = props => {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry={props.password || false}
          style={{ ...styles.inputField, ...props.style }}
          value={props.value}
          placeholder={props.placeholder}
          onChangeText={text => props.onChange(text)}
        />
      </View>
      {props.error && <View style={styles.error}>
        <Text style={styles.errorText}>{props.error}</Text>
      </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  inputView: {
    marginTop: 20,
    marginBottom: 4,
    width: '80%'
  },
  inputField: {
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 2
  },
  error: {
    flex: 1,
    width: '80%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  errorText: {
    color: '#d9534f'
  }
})

export default TextInputField