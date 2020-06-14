import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ScreenContainer from '../common/ScreenContainer'
import Profile from '../components/Profile'

const ProfileScreen = props => {
  const dispatch = useDispatch()

  // const { user } = props.route.params

  const user = {
    name: 'Kamran',
    email: 'elchuzade@gmail.com'
  }

  return (
    <ScreenContainer>
      <Profile user={user} />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({})

export default ProfileScreen