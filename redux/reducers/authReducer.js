import { SET_CURRENT_USER, SIGN_OUT, SIGN_UP } from '../actions/types'
import isEmpty from '../../utils/is-empty'

const initialState = {
  user: null,
  isAuthenticated: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
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
        user: action.payload,
        isAuthenticated: true
      }
    default:
      return state
  }
}