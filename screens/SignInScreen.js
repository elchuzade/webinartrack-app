import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ScreenContainer from '../common/ScreenContainer'

import { signIn } from '../redux/actions/authActions'
import SignIn from '../components/SignIn'

const SignInScreen = () => {
  const dispatch = useDispatch()

  const onSignIn = useCallback((user) => {
    dispatch(signIn(user))
  }, [dispatch])

  return (
    <ScreenContainer>
      <SignIn onSignIn={onSignIn} />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({})

export default SignInScreen