import { StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'

export default function HeaderTitle() {
  return (
    <View style={styles.container}>
        <Text style={styles.appTitle}>Booking.com</Text>
        <AntDesign style={styles.icons} name="message" size={24} color="white" />
        <Ionicons style={styles.icons} name="notifications" size={24} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    appTitle: {
    flex: 3,
    color: '#fff',
    textAlign: 'center',
    marginTop: 30,
    marginLeft: 120,
    marginRight: 50,
    fontSize: 20,
    fontWeight: 'bold',
    flexDirection: 'column'
  },
  icons: {  
    marginTop: 30,
    flexDirection: 'column',
    flex: 1
  }
})