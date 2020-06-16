import { combineReducers } from 'redux'
import webinarReducer from './webinarReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'

export default combineReducers({
  webinars: webinarReducer,
  auth: authReducer,
  error: errorReducer
})