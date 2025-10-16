import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BodyCarCard from './BodyCarCard'

const BodyCarRecommendation = () => {
  return (
    <>
        <View style={styles.container}>
            <Text style={styles.title}>Get To the Property</Text>
            <Text>From Seville airport(SVQ)</Text>
        </View>
        <BodyCarCard />
    </>
  )
}

export default BodyCarRecommendation

const styles = StyleSheet.create({
    container: {

        marginLeft: 20,

    },
    title: {

        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 2

    },


})