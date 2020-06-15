import React, { useCallback } from 'react'
import { Text, Button } from 'react-native'
import ScreenContainer from '../common/ScreenContainer'

import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../redux/actions/userActions'

export const SignOutScreen = () => {
  const dispatch = useDispatch()

  const onSignOut = useCallback(() => dispatch(signOut()), [dispatch])

  return (
    <ScreenContainer>
      <Text>Signing Out</Text>
      <Button title='Sign Out' onPress={onSignOut} />
    </ScreenContainer>
  )
}
export default SignOutScreen