import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderBackground from './components/header/HeaderBackground';


export default function App() {
  return (
    <>
      <HeaderBackground>
      </HeaderBackground>
      <View style={styles.body}>
      </View>
      <View style={styles.footer}>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 5,
    backgroundColor: '#fff',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopColor: '#000',
    borderTopWidth: 1
  },
});
