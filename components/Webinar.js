import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import moment from 'moment'
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import webinars from '../data/webinars';

const Webinar = ({webinar}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: webinars.croppedAvatar.location}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Webinar
