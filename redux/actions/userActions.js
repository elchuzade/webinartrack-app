import { SIGN_IN, SIGN_OUT, SIGN_UP } from './types'

import axios from 'axios'

export const signIn = user => async dispatch => {
  console.log('signin in', user)
  try {
    dispatch({
      type: SIGN_IN
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