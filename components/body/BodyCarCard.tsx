import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Octicons from '@expo/vector-icons/Octicons';
import { colors } from '../../styles/colors'

const BodyCarCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.recommendation}>
        <Octicons name="thumbsup" size={16} color={colors.discountText} />
        <Text style={styles.recommendationText}> 81% of transportation bookers chose this</Text>
      </View>
      <View style={styles.carContainer}>
        <Image style={styles.carImage} source={require("../../assets/bmw_car.jpg")} />
        <View style={styles.cardText}>
        </View>
      </View>
    </View>
  )
}

export default BodyCarCard

const styles = StyleSheet.create({
    container: {

        marginTop: 5,
        marginLeft: 20,
        width: 320,
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 10
        


    },
    recommendation: {

        backgroundColor: colors.discountBackground,
        padding: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: 'row',

    },
    recommendationText: {

        color: colors.discountText,
        fontSize: 12,
        fontWeight: 500

    },
    carContainer: {

        padding: 20,
        flexDirection: 'row',
        flexWrap: 'nowrap'

    },
    carImage: {

        width: 80,
        height: 60,
        flex: 1

    },
    cardText: {
        flex: 2,

        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    priceText: {



    }
})