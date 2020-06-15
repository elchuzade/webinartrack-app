import { SIGN_IN, SIGN_OUT, SIGN_UP } from '../actions/types'

const initialState = {
  user: null,
  isAuthenticated: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: {
          email: 'elchuzade@gmail.com',
          name: 'Kamran'
        },
        isAuthenticated: true
      }
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false
      }
    case SIGN_UP:
      return {
        ...state,
        user: {
          email: 'elchuzade@gmail.com',
          name: 'Kamran'
        },
        isAuthenticated: true
      }
    default:
      return state
  }
}