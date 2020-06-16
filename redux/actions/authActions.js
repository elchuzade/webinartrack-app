import { SET_CURRENT_USER, SIGN_OUT, SIGN_UP } from './types'
import api from '../../utils/api'
import setAuthToken from '../../utils/setAuthToken'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

import { setError } from './errorActions'

import AsyncStorage from '@react-native-community/async-storage';

export const getUserInfo = token => async dispatch => {
  console.log('getting user info')
  try {
    const profile = await axios.post(`${api}/profile/me`, token)
  } catch (err) {
    console.log('err', err.response.data)
  }
}

export const signIn = user => async dispatch => {
  console.log('user is - ', user)
  try {
    const res = await axios.post(`${api}/users/login`, user)
    // Setting token to local storage
    await AsyncStorage.setItem('webinartrack_token', res.data.token)
    // Setting token to axios headers
    setAuthToken(res.data.token)
    // Decoding token to get user object
    const userObject = jwt_decode(res.data.token)

    dispatch({
      type: SET_CURRENT_USER,
      payload: userObject
    })
  } catch (err) {
    console.log('err', err.response && err.response.data)
    err.response && dispatch(setError(err.response.data))
  }
}

export const signOut = () => async dispatch => {
  try {
    // Removing token from local storage
    await AsyncStorage.removeItem('webinartrack_token')
    // Removing token from axios headers
    setAuthToken(false)
    dispatch({
      type: SET_CURRENT_USER,
      payload: {}
    })
  } catch (err) {
    console.log('err', err)
  }
}

export const signUp = user => async dispatch => {
  console.log('signin up', user)
  try {
    dispatch({
      type: SIGN_UP
    })
  } catch (err) {
    console.log('err', err)
  }
}

export const checkUser = () => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('webinartrack_token')
    if (token) {
      // Setting token to axios headers
      setAuthToken(token)
      // Decoding token to get user object
      const userObject = jwt_decode(token)

      dispatch({
        type: SET_CURRENT_USER,
        payload: userObject
      })
    }
  } catch (err) {
    console.log(err)
  }
}