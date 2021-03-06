import { GET_UPCOMING_WEBINARS, GET_PAST_WEBINARS, GET_WEBINAR } from './types'
import api from '../../utils/api'
import axios from 'axios'

export const getUpcomingWebinars = () => async dispatch => {
  try {
    const res = await axios.get(`${api}/webinars/upcoming`)

    dispatch({
      type: GET_UPCOMING_WEBINARS,
      payload: res.data
    })
  } catch (err) {
    console.log('err', err)
  }
}

export const getPastWebinars = () => async dispatch => {
  try {
    const res = await axios.get(`${api}/webinars/past`)

    dispatch({
      type: GET_PAST_WEBINARS,
      payload: res.data
    })
  } catch (err) {
    console.log('err', err)
  }
}

export const getWebinar = id => async dispatch => {
  try {
    const res = await axios.get(`${api}/webinars/${id}`)

    dispatch({
      type: GET_WEBINAR,
      payload: res.data
    })
  } catch (err) {
    console.log('err', err)
  }
}