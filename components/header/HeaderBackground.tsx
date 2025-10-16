import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../styles/colors';
import HeaderButtons from './HeaderButtons';
import HeaderTitle from './HeaderTitle';

export default function HeaderBackground() {
  return (
    <View style={styles.header}>
      <HeaderTitle />
      <HeaderButtons />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 3,
    backgroundColor: colors.primary
  },
});