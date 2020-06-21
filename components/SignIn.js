import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import FormHeaderText from '../common/FormHeaderText'
import TextInputField from '../common/TextInputField'
import { useSelector, useDispatch } from 'react-redux'

import { removeError } from '../redux/actions/errorActions'

const SignIn = ({ onSignIn, navigation }) => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const stateError = useSelector(state => state.error)
  useEffect(() => {
    setErrors(stateError)
  }, [stateError])

  const onChangeField = (fieldName, stateChange, value) => {
    if (errors[fieldName]) dispatch(removeError(fieldName))
    stateChange(value)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.form}>
          <FormHeaderText>Sign In</FormHeaderText>
          <TextInputField
            value={email}
            placeholder='Email'
            onChange={text => onChangeField('email', setEmail, text)}
            error={errors && errors.email}
          />
          <TextInputField
            password
            value={password}
            placeholder='Password'
            onChange={text => onChangeField('password', setPassword, text)}
            error={errors && errors.password}
          />
          <Button
            title='Submit'
            onPress={() => onSignIn({ email, password })}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text>Do not have an account yet?</Text>
          <Button
            title='Sign Up'
            onPress={() => navigation.push('SignUp')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%'
  },
  scrollView: {
    width: '100%'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
    paddingVertical: 40
  },
  inputField: {
    height: 40,
    width: '80%',
    marginVertical: 5,
    paddingHorizontal: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 2
  },
  inputFieldText: {
    fontSize: 30
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SignIn
