import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import WebinarCard from '../components/WebinarCard'
import { getPastWebinars, getUpcomingWebinars } from '../redux/actions/webinarActions'

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
)

const WebinarsScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  const pastWebinars = useSelector(state => state.webinars.pastWebinars)

  useEffect(() => {
    dispatch(getPastWebinars())
  }, [dispatch])

  return (
    <ScreenContainer>
      <FlatList style={styles.flatList} keyExtractor={item => item._id} data={pastWebinars} renderItem={({ item }) => (
        <WebinarCard
          webinar={item}
          onClickWebinar={() => navigation.push('Webinar', { name: 'Webinar', id: item._id })}
        />
      )} />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatList: {
    width: '100%'
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
})

export default WebinarsScreen
