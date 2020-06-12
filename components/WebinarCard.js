import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, Image } from 'react-native'
import moment from 'moment'
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const WebinarCard = ({ webinar, onClickWebinar }) => {
  let TouchableComponent = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }

  return (
    <TouchableComponent onPress={onClickWebinar}>
      <View style={styles.container}>
        {/* Image and Details */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.webinarCardImage}
            // source={{ uri: webinar.avatar.location }}
            source={{ uri: webinar.croppedAvatar.location }}
          />
          <View style={styles.webinarDetails}>
            <View style={styles.webinarDetail}>
              <Entypo name="language" size={16} color="black" />
              <Text style={styles.webinarDetailText}>{webinar.language}</Text>
            </View>
            <View style={styles.webinarDetail}>
              <Fontisto name="date" size={16} color="black" />
              <Text style={styles.webinarDetailText}>
                {moment(webinar.dateTime).format('D MMM YYYY')}
              </Text>
            </View>
            <View style={styles.webinarDetail}>
              <AntDesign name="clockcircleo" size={16} color="black" />
              <Text style={styles.webinarDetailText}>
                {moment(webinar.dateTime).format('hh:mm')}
              </Text>
            </View>
            <View style={styles.webinarDetail}>
              <Entypo name="dots-two-horizontal" size={16} color="black" />
              <Text style={styles.webinarDetailText}>{webinar.category}</Text>
            </View>
          </View>
        </View>
        {/* Title and Intro */}
        <View style={styles.introContainer}>
          <Text style={styles.webinarIntroTitle}>{webinar.title}</Text>
        </View>
      </View>
    </TouchableComponent>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 2,
    borderRadius: 16,
    marginVertical: 5,
    padding: 5,
    width: '90%',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 }
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  webinarCardImage: {
    alignSelf: 'flex-start',
    width: 200,
    height: 150,
    borderRadius: 10
  },
  webinarDetails: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
    height: 150
  },
  webinarDetail: {
    flexDirection: 'row',
    marginVertical: 6
  },
  webinarDetailText: {
    marginLeft: 10
  },
  introContainer: {
    flex: 1,
    alignItems: 'center'
  },
  webinarIntroTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 10,
  }
})

export default WebinarCard
