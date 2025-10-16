import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header/Header';
import Body from './components/body/Body';


export default function App() {
  return (
    <>
      <Header />
      <Body  />
      <View style={styles.footer}>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopColor: '#000',
    borderTopWidth: 1
  },
});
