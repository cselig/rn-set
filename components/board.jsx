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
  n = 4;
  m = 4;

  constructor(props) {
    super(props);

    var cards = [];
    for (var i = 0; i < (this.m * this.n); i++) {
      cards.push(this.newCard(i));
    }

    this.state = {
      selectedCards: new Set(),
      cards: cards,
    };
  }

  newCard(key) {
    var cardData = {"key": key};
    PROPERTIES.forEach((prop, _) => cardData[prop] = randomIntInRange(0, 2));
    return cardData;
  }

  isSet() {
    if (this.state.selectedCards.size != SET_SIZE) {
      return false;
    }

    var isSet = true;
    PROPERTIES.forEach((prop, _) => {
      var l = []
      this.state.selectedCards.forEach((key) => {
        var val = this.state.cards[key][prop];
        l.push(val);
      });
      if (!(
          (l[1] == l[0] && l[2] == l[1])
          ||
          (l[0] != l[1] && l[1] != l[2] && l[2] != l[0]))) {
        isSet = false;
      }
    });
    return isSet;
  }

  reloadCards() {
    var newCards = Object.assign({}, this.state.cards);
    Object.assign(this.state.cards, newCards);
    this.state.selectedCards.forEach((key) => {
      newCards[key] = this.newCard(key);
    });
    this.setState({cards: newCards});
    this.setState({selectedCards: new Set()});
  }

  render() {
    var isSet = this.isSet();

    if (isSet) {
      this.props.incSets();
      this.reloadCards();
    }

    var cardsToRender = []
    for (var i = 0; i < this.m; i++) {
      var currRow = []
      for (var j = 0; j < this.n; j++) {
        var key = this.n * i + j;

        var selected = this.state.selectedCards.has(key);

        var onPress = ((key, selected, selectedCards) => {
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
                    cardData={this.state.cards[key]}
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
      display: 'flex',
      flexDirection: 'row',
    },
  }
);
