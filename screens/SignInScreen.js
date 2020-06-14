import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ScreenContainer from '../common/ScreenContainer'

import SignIn from '../components/SignIn'

const SignInScreen = props => {
  const dispatch = useDispatch()

  // const { user } = props.route.params

  const user = {
    name: 'Kamran',
    email: 'elchuzade@gmail.com'
  }

  return (
    <ScreenContainer>
      <SignIn user={user} />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({})

export default SignInScreen