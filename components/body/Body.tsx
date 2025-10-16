import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BodyTable from './BodyTable'

export default function Body() {
  return (
    <View style={styles.body}>
      <BodyTable />
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
    flex: 5,
    backgroundColor: '#fff',
  },
})
