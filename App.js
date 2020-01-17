import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import Board from './components/board'

export default class App extends React.Component {
  state = {boardVersion: 0, sets: 0}

  render() {
    var doReload = (() => {
      this.setState({boardVersion: this.state.boardVersion + 1})
    });

    var incSets = () => this.setState({sets: this.state.sets + 1});

    return (
      <View style={styles.container}>
        <Text style={styles.setCount}>{this.state.sets}</Text>
        <Button
          title="Reload"
          onPress={doReload}
        />
        <Board key={this.state.boardVersion} incSets={incSets}/>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    setCount: {
      fontSize: 20,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
);
