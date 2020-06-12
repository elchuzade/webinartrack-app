import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getWebinar } from '../redux/actions/webinarActions'
import Webinar from '../components/Webinar'

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
)

const WebinarScreen = props => {
  const dispatch = useDispatch()

  const { webinar } = props.route.params

  useEffect(() => {
    dispatch(getWebinar(webinar._id))
  }, [dispatch])

  return (
    <ScreenContainer>
      <Webinar webinar={webinar} />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default WebinarScreen
