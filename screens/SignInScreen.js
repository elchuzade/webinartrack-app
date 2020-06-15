import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ScreenContainer from '../common/ScreenContainer'

import { signIn } from '../redux/actions/userActions'
import SignIn from '../components/SignIn'

const SignInScreen = () => {
  const [user, setUser] = useState({ email: '', password: '' })

  const dispatch = useDispatch()

  const onSignIn = useCallback((user) =>
    dispatch(signIn(user)), [dispatch, user])

  return (
    <ScreenContainer>
      <SignIn onSignIn={onSignIn} user={user} setUser={setUser} />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({})

export default SignInScreen