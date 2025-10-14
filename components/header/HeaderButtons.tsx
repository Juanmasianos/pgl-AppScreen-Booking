import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'

export default function HeaderButtons() {
  return (
    <View style={styles.container}>
        <View style={styles.rowButtons}>
            <Pressable style={styles.buttons}>
                <Text style={styles.buttonText}>Stays</Text>
            </Pressable>
            <Pressable style={styles.buttons}>
                <Text style={styles.buttonText}>Flights</Text>
            </Pressable>
        </View>
        <View style={styles.rowButtons}>
            <Pressable style={styles.buttons}>
                <Text style={styles.buttonText}>Stays</Text>
            </Pressable>
            <Pressable style={styles.buttons}>
                <Text style={styles.buttonText}>Flights</Text>
            </Pressable>
            <Pressable style={styles.buttons}>
                <Text style={styles.buttonText}>Stays</Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

        marginTop: 30,
        marginLeft: 30

    },
    buttons: {

        backgroundColor: colors.headerButtons,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 10,
        padding: 20,
        flexDirection: 'column',
        flex: 1


    },
    rowButtons: {

        
        width: 320,
        flexDirection: 'row',
        flexWrap: 'nowrap'


    },
    buttonText: {

        color: '#fff',
        textAlign: 'center'

    }

})