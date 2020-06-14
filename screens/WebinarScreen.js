import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getWebinar } from '../redux/actions/webinarActions'
import Webinar from '../components/Webinar'
import ScreenContainer from '../common/ScreenContainer'

const WebinarScreen = props => {
  const dispatch = useDispatch()
  const { id } = props.route.params

  const webinar = useSelector(state => state.webinars.webinar)
  
  useEffect(() => {
    dispatch(getWebinar(id))
  }, [dispatch])

  return (
    <ScreenContainer>
      {Object.keys(webinar).length > 0 && <Webinar webinar={webinar} />}
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({})

export default WebinarScreen