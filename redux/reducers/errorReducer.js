import { SET_ERROR, REMOVE_ERROR } from '../actions/types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ERROR:
      let copiedState = { ...state }
      delete copiedState[action.payload]
      return copiedState
    case SET_ERROR:
      return action.payload
    default:
      return {}
  }
}