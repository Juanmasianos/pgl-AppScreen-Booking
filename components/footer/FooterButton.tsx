import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { FooterItem } from '../../types/FooterItem'

const FooterButton: React.FC<FooterItem> = (item : FooterItem) : React.ReactNode => { 

  const { icon, picture, title } = item


  return (
    <View style={styles.footerButton}>
      {
        icon == undefined 
        ? <Image style={styles.profilePicture} source={picture}/>
        : <Ionicons style={styles.icon} name={icon} size={24} color="black" /> 
      }
      <Text>{title}</Text>
    </View>
  )
}

export default FooterButton

const styles = StyleSheet.create({
  footerButton: {

    marginTop: 10,
    marginLeft: 20,
    marginRight: 15,
    flex: 1,

    flexDirection: 'column',
    flexWrap: 'wrap'

  },
  icon: {

    textAlign: 'center' 

  },
  profilePicture: {

    width: 25,
    height: 25,
    borderRadius: 50,
    marginLeft: 20

  }
})