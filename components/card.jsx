import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class Card extends React.Component {
  render() {
    var textStyle = [styles.text];
    if (this.props.selected) {
      textStyle.push(styles.selected);
    }

    var display = [
      this.props.cardData["number"],
      this.props.cardData["color"],
    ].join(',') + "\n" + [
      this.props.cardData["shape"],
      this.props.cardData["fill"],
    ].join(',')

    return (
      <View>
        <TouchableHighlight onPress={this.props.onPress}>
            <Text style={textStyle}>{display}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    card: {
      // doesn't work for some reason
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      backgroundColor: 'grey',
      color: 'white',
      height: 100,
      width: 70,
      margin: 10,
      textAlign: 'center',
      fontSize: 30,
    },
    selected: {
      borderColor: 'red',
      borderWidth: 5,
    }
  }
);
