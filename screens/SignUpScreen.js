import React, { useEffect, useState, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ScreenContainer from '../common/ScreenContainer'

import { signUp } from '../redux/actions/authActions'
import SignUp from '../components/SignUp'

const SignUpScreen = props => {
  const dispatch = useDispatch()

  const onSignUp = useCallback((user) => {
    dispatch(signUp(user))
  }, [dispatch])

  return (
    <ScreenContainer>
      <SignUp onSignUp={onSignUp} navigation={props.navigation} />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({})

export default SignUpScreen