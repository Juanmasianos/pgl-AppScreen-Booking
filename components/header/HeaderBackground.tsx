import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../styles/colors';

export default function HeaderBackground() {
  return (
    <View style={styles.header}>
            <Text style={styles.appTitle}>Booking.com</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 3,
    backgroundColor: colors.primary
  },
  appTitle: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 60,
    fontSize: 20,
    fontWeight: 'bold'
  }
});