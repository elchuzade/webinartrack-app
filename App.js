import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import RootNavigation from './navigation/RootNavigation'

// import WebinarStackScreen from './navigation/WebinarNavigation'
import SplashScreen from './screens/SplashScreen'

import store from './store'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState('123')

  // const authContext = useMemo(() => {
  //   return {
  //     signIn: () => {
  //       setIsLoading(false)
  //       setUserToken('asdf')
  //     },
  //     signUp: () => {
  //       setIsLoading(false)
  //       setUserToken('asdf')
  //     },
  //     signOut: () => {
  //       setIsLoading(false)
  //       setUserToken(null)
  //     }
  //   }
  // }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  if (isLoading) {
    return <SplashScreen />
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <WebinarStackScreen /> */}
        <RootNavigation userToken={userToken} />
      </NavigationContainer>
    </Provider>
  )
}
