import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome';
import { colors } from '../../styles/colors'

const BodyUnlockedRewards = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.rewardsImage} source={require("../../assets/unlocked_rewards_image.png")}></Image>
      <Text style={styles.text}>View unlocked rewards</Text>
      <FontAwesome5 style={styles.arrowIcon} name="angle-right" size={24} color="black" />
    </View>
  )
}

export default BodyUnlockedRewards

const styles = StyleSheet.create({
    container: {
        borderColor: colors.borderColor,
        borderWidth: 1,
        marginLeft: 20, 
        marginRight: 20,
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    rewardsImage: {
        width: 40,
        height: 40

    },
    text: {

        fontSize: 18,
        marginTop: 10

    },
    arrowIcon: {

        marginLeft: 60,
        marginTop: 10,

    }
})