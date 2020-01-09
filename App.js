import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from './components/board'

export default function App() {
  return (
    <View style={styles.container}>
      <Board style={styles.board}/>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
);
