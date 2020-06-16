import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { Provider, useSelector, useDispatch } from 'react-redux'
import RootNavigation from './navigation/RootNavigation'

// import WebinarStackScreen from './navigation/WebinarNavigation'
// import SplashScreen from './screens/SplashScreen'

import store from './store'

const App = () => {

  // const dispatch = useDispatch()
  // const [userToken, setUserToken] = useState('')
  // const [user, setUser] = useState({})

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 2000)
  // }, [])

  // if (isLoading) {
  //   return <SplashScreen />
  // }
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <WebinarStackScreen /> */}
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App
