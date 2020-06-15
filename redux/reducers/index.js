import { combineReducers } from 'redux'
import webinarReducer from './webinarReducer'
import userReducer from './userReducer'

export default combineReducers({
  webinars: webinarReducer,
  user: userReducer
})