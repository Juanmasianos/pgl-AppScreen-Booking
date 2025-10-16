import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BodyTable from './BodyTable'
import BodyUnlockedRewards from './BodyUnlockedRewards'
import BodyCarRecommendation from './BodyCarRecommendation'

export default function Body() {
  return (
    <View style={styles.body}>
      <BodyTable />
      <BodyUnlockedRewards />
      <BodyCarRecommendation />
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
    flex: 5,
    backgroundColor: '#fff',
  },
})
