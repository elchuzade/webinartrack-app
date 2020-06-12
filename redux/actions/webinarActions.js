import { GET_UPCOMING_WEBINARS, GET_PAST_WEBINARS, GET_WEBINAR } from './types'

import axios from 'axios'

export const getUpcomingWebinars = () => async dispatch => {
  console.log('getting upcoming webinars')
  try {
    const res = await axios.get('https://webinartrack.com/api/webinars/upcoming')

    dispatch({
      type: GET_UPCOMING_WEBINARS,
      payload: res.data
    })
  } catch (err) {
    console.log('err', err)
  }
}

export const getPastWebinars = () => async dispatch => {
  console.log('getting past webinars')
  try {
    const res = await axios.get('https://webinartrack.com/api/webinars/past')

    dispatch({
      type: GET_PAST_WEBINARS,
      payload: res.data
    })
  } catch (err) {
    console.log('err', err)
  }
}

export const getWebinar = id => async dispatch => {
  console.log('getting single webinars')
  try {
    const res = await axios.get(`https://webinartrack.com/api/webinars/${id}`)

    dispatch({
      type: GET_WEBINAR,
      payload: res.data
    })
  } catch (err) {
    console.log('err', err)
  }
}