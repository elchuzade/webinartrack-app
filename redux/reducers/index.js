import { combineReducers } from 'redux'
import webinarReducer from './webinarReducer'

export default combineReducers({
  webinars: webinarReducer
})