import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../../styles/colors'

export default function () {
  return (
    <View style={styles.container}>
      <View style={styles.tableContent}>
        <Ionicons name="search-outline" size={24} color="black" />
        <Text style={styles.tableText}>Disneyland Paris</Text>
      </View>
      <View style={styles.tableContent}>
        <Ionicons name="calendar-clear-outline" size={24} color="black" />
        <Text style={styles.tableText}>Fri, Dec 05 - Mon, Dec 08</Text>
      </View>
      <View style={styles.tableContent}>
        <Ionicons name="person-outline" size={24} color="black" />
        <Text style={styles.tableText}>1 room - 2 adults • 0 children</Text>
      </View>
      <View>
        <Pressable style={styles.tableButton}><Text>Search</Text></Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 320,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: colors.secondary,
        borderRadius: 10,
        marginTop: -30,
        marginLeft: 20
    },
    tableContent: {
        padding: 10,
        borderColor: colors.secondary,
        borderWidth: 3,
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    tableText: {
        marginLeft: 10,
        marginTop: 2,
        fontSize: 14
    },
    tableButton: {
        borderColor: colors.secondary,
        borderWidth: 3,
        backgroundColor: colors.searchButton,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 10,
    }

})