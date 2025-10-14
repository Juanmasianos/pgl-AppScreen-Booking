import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../styles/colors';
import HeaderButtons from './HeaderButtons';

export default function HeaderBackground() {
  return (
    <View style={styles.header}>
      <Text style={styles.appTitle}>Booking.com</Text>
      <HeaderButtons></HeaderButtons>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 4,
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