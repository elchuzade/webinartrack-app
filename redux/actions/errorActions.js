import { REMOVE_ERROR, SET_ERROR } from './types'

export const removeError = field => dispatch => {
  dispatch({
    type: REMOVE_ERROR,
    payload: field
  })
}

export const setError = error => dispatch => {
  dispatch({
    type: SET_ERROR,
    payload: error
  })
}