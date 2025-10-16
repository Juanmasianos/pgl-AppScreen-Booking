import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { colors } from '../../styles/colors'

export default function HeaderButtons() {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Pressable style={styles.topButtons}>
                <Ionicons style={styles.icons} name="bed-outline" size={24} color="white" />
                <Text style={styles.buttonText}>Stays</Text>
            </Pressable>
            <Pressable style={styles.topButtons}>
                <Ionicons style={styles.icons} name="airplane-outline" size={24} color="white" />
                <Text style={styles.buttonText}>Flights</Text>
            </Pressable>
        </View>
        <View style={styles.row}>
            <Pressable style={styles.bottomButtons}>
                <Ionicons name="car-outline" size={24} color="white" />
                <Text style={styles.buttonText}>Car rental</Text>
            </Pressable>
            <Pressable style={styles.bottomButtons}>
                <FontAwesome5 style={styles.icons} name="taxi" size={24} color="white" />
                <Text style={styles.buttonText}> Taxi</Text>
            </Pressable>
            <Pressable style={styles.bottomButtons}>
                <MaterialIcons name="attractions" size={24} color="white" />
                <Text style={styles.buttonText}>Atractions</Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

        marginTop: 20,
        marginLeft: 20

    },
    topButtons: {

        backgroundColor: colors.headerButtons,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 10,
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        flex: 1,
        justifyContent: 'center'


    },
    bottomButtons: {

        backgroundColor: colors.headerButtons,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 10,
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'center'


    },
    row: {

        
        width: 320,
        flexDirection: 'row',
        flexWrap: 'nowrap'


    },
    buttonText: {

        fontSize: 13,
        color: '#fff',
        textAlign: 'center',


    },
    icons: {

        marginRight: 5,
        marginLeft: 10

    }

})