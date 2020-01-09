import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './card';

const SET_SIZE = 3;
const PROPERTIES = ["number", "color", "shape", "fill"]

function randomIntInRange(min, max) {
  // min, max both inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class Board extends React.Component {
  n = 3;
  m = 3;
  cards = [];

  constructor(props) {
    super(props);

    for (var i = 0; i < (this.m * this.n); i++) {
      var cardData = {"key": i};
      PROPERTIES.forEach((prop, _) => cardData[prop] = randomIntInRange(0, 2));
      this.cards.push(cardData);
    }

    this.state = {
      selectedCards: new Set()
    };
  }

  isSet() {
    if (this.state.selectedCards.size != SET_SIZE) {
      return false;
    }
    // TODO: cleaner way to do this?
    var isSet = true;
    PROPERTIES.forEach((prop, _) => {
      var collectedProps = []
      this.state.selectedCards.forEach((key) => {
        var val = this.cards[key][prop];
        collectedProps.push(val);
      });
      if (!(collectedProps[1] == collectedProps[0] && collectedProps[2] == collectedProps[1])) {
        isSet = false;
      }
    });
    return isSet;
  }

  render() {
    // TODO: display this result
    this.isSet();

    var cardsToRender = []
    for (var i = 0; i < this.m; i++) {
      var currRow = []
      for (var j = 0; j < this.n; j++) {
        var key = 3 * j + i;

        var selected = this.state.selectedCards.has(key);

        var onPress = ((key, selected, selectedCards) => {
          // TODO: is there a cleaner way to update state in this situation?
          if (selected) {
            selectedCards.delete(key);
          } else if (selectedCards.size < SET_SIZE) {
            selectedCards.add(key);
          }
          this.setState({selectedCards: selectedCards});
        }).bind(null, key, selected, this.state.selectedCards);

        currRow.push(<Card
                    num={key}
                    key={key}
                    selected={selected}
                    cardData={this.cards[key]}
                    onPress={onPress}/>);
      }
      cardsToRender.push(<View class="card-row">{currRow}</View>);
    }

    return (
      <View style={styles.board}>
        {cardsToRender}
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    board: {
      backgroundColor: 'lightgrey',
      display: 'flex',
      flexDirection: 'row',
    },
  }
);
