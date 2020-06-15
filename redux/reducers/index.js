import { combineReducers } from 'redux'
import webinarReducer from './webinarReducer'
import authReducer from './authReducer'

export default combineReducers({
  webinars: webinarReducer,
  auth: authReducer
})