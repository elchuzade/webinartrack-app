import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ScreenContainer from '../common/ScreenContainer'

import SignUp from '../components/SignUp'

const SignUpScreen = props => {
  const dispatch = useDispatch()

  // const { user } = props.route.params

  const user = {
    name: 'Kamran',
    email: 'elchuzade@gmail.com'
  }

  return (
    <ScreenContainer>
      {/* <SignUp user={user} /> */}
      <SignUp />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({})

export default SignUpScreen