import React from 'react'
import { Text, View, Button } from 'react-native'

const SignIn = ({ onSignIn, user, setUser }) => {
  return (
    <View>
      <Text>Sign In</Text>
      <Button
        title='fill in info'
        onPress={() => setUser({ email: 'elchuzade@gmail.com', password: 'Kayfarik.423' })}
      />
      <Button
        title='Submit'
        onPress={onSignIn}
      />
    </View>
  )
}

export default SignIn
