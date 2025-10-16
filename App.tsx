import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';


export default function App() {
  return (
    <>
      <Header />
      <Body  />
      <Footer />
    </>
  );
}

