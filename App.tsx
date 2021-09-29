import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
const Qualtrics = require('react-native-qualtrics');


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="click me"
      onPress={() =>
        Qualtrics.initialize('qasia', 'ZN_b8iqozxU6a7uZyC', 'SI_73AmSXUIPw6FtIy', (initializationResult) => {
           if(initializationResult.passed) {
             Qualtrics.display();
           }}
         )
      }/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
