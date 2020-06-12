import { GET_UPCOMING_WEBINARS, GET_PAST_WEBINARS, GET_WEBINAR } from '../actions/types'

const initialState = {
  webinar: {},
  upcomingWebinars: [],
  pastWebinars: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_UPCOMING_WEBINARS:
      return {
        ...state,
        upcomingWebinars: action.payload
      }
    case GET_PAST_WEBINARS:
      return {
        ...state,
        pastWebinars: action.payload
      }
    case GET_WEBINAR:
      return {
        ...state,
        webinar: action.payload
      }
    default:
      return state
  }
}