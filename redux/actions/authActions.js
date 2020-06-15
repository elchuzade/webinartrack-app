import { SET_CURRENT_USER, SIGN_OUT, SIGN_UP } from './types'
import api from '../../utils/api'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

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

  try {
    const res = await axios.post(`${api}/users/login`, user)

    await AsyncStorage.setItem('webinartrack_token', res.data.token)

    const userObject = jwt_decode(res.data.token)

    dispatch({
      type: SET_CURRENT_USER,
      payload: userObject
    })
  } catch (err) {
    console.log('err', err.response.data)
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

export const signOut = () => async dispatch => {
  console.log('signin out')
  try {
    dispatch({
      type: SIGN_OUT
    })
  } catch (err) {
    console.log('err', err)
  }
}