/* eslint-disable prettier/prettier */
import React from 'react';
import {Router} from './src/route';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { WebProvider } from './src/context/Web';
// import { Header } from './src/components/Header';
import { Loading } from './src/components/Loading';
const App = () => {
  return (
    <WebProvider>
      <SafeAreaView style={styles.sectionContainer}>
        {/* <Header /> */}
        <Loading />
        <Router />
      </SafeAreaView>
    </WebProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
