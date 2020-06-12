import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'
import moment from 'moment'
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import webinars from '../data/webinars';
import { Title } from 'react-native-paper';

const Webinar = ({ webinar }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: webinar.croppedAvatar.location }}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{webinar.title}</Text>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.detailRow}>
            <View style={styles.detail}>
              <Entypo name="language" size={30} color="black" />
              <Text style={styles.detailText}>{webinar.language}</Text>
            </View>
            <View style={styles.detail}>
              <Entypo name="dots-two-horizontal" size={30} color="black" />
              <Text style={styles.detailText}>{webinar.category}</Text>
            </View>
          </View>
          <View style={styles.detailRow}>
            <View style={styles.detail}>
              <Fontisto name="date" size={20} color="black" />
              <Text style={styles.detailText}>
                {moment(webinar.dateTime).format('D MMM YYYY')}
              </Text>
            </View>
            <View style={styles.detail}>
              <AntDesign name="clockcircleo" size={20} color="black" />
              <Text style={styles.detailText}>
                {moment(webinar.dateTime).format('hh:mm')}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.introContainer}>
          <Title style={styles.intro}>{webinar.intro}</Title>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  scrollView: {
    marginHorizontal: 10,
    width: '90%'
  },
  image: {
    width: 400,
    height: 300
  },
  titleContainer: {
    margin: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center'
  },
  introContainer: {
    margin: 10
  },
  intro: {
    textAlign: 'center'
  },
  detailContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailRow: {
    flexDirection: 'row'
  },
  detail: {
    flexDirection: 'row',
    marginVertical: 6,
    marginHorizontal: 10,
    alignItems: 'center'
  },
  detailText: {
    marginLeft: 10,
    fontSize: 20
  }
})

export default Webinar
