import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';

COLORS = ["green", "purple", "red"]
NUMBERS = ["single", "double", "triple"]
FILLS = ["outline", "solid", "stripes"]
SHAPES = ["capsule", "diamond", "squiggle"]

export default class Card extends React.Component {
  render() {
    var textStyle = [styles.text];
    if (this.props.selected) {
      textStyle.push(styles.selected);
    }

    number = NUMBERS[this.props.cardData["number"]]
    color = COLORS[this.props.cardData["color"]]
    shape = SHAPES[this.props.cardData["shape"]]
    fill = FILLS[this.props.cardData["fill"]]

    var key = [color, number, fill, shape].join('-')

    return (
      <View style={textStyle}>
        <TouchableHighlight style={styles.card} onPress={this.props.onPress}>
            <Image source={cards[key]} />
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    card: {
      flex: 1,
      alignItems: "center",
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

// require() needs to be provided with a statically analyzable string, so have to do this
const cards = {
  "green-single-stripes-squiggle": require("../assets/img/cards/resized/green-single-stripes-squiggle.jpg"),
  "red-single-solid-capsule": require("../assets/img/cards/resized/red-single-solid-capsule.jpg"),
  "red-triple-solid-squiggle": require("../assets/img/cards/resized/red-triple-solid-squiggle.jpg"),
  "green-single-stripes-diamond": require("../assets/img/cards/resized/green-single-stripes-diamond.jpg"),
  "green-single-outline-capsule": require("../assets/img/cards/resized/green-single-outline-capsule.jpg"),
  "green-double-solid-diamond": require("../assets/img/cards/resized/green-double-solid-diamond.jpg"),
  "purple-double-solid-squiggle": require("../assets/img/cards/resized/purple-double-solid-squiggle.jpg"),
  "purple-double-stripes-squiggle": require("../assets/img/cards/resized/purple-double-stripes-squiggle.jpg"),
  "red-single-outline-squiggle": require("../assets/img/cards/resized/red-single-outline-squiggle.jpg"),
  "purple-double-solid-diamond": require("../assets/img/cards/resized/purple-double-solid-diamond.jpg"),
  "red-single-outline-capsule": require("../assets/img/cards/resized/red-single-outline-capsule.jpg"),
  "red-double-solid-diamond": require("../assets/img/cards/resized/red-double-solid-diamond.jpg"),
  "purple-triple-outline-diamond": require("../assets/img/cards/resized/purple-triple-outline-diamond.jpg"),
  "red-double-solid-squiggle": require("../assets/img/cards/resized/red-double-solid-squiggle.jpg"),
  "purple-triple-stripes-capsule": require("../assets/img/cards/resized/purple-triple-stripes-capsule.jpg"),
  "red-single-stripes-diamond": require("../assets/img/cards/resized/red-single-stripes-diamond.jpg"),
  "purple-double-stripes-capsule": require("../assets/img/cards/resized/purple-double-stripes-capsule.jpg"),
  "purple-double-outline-diamond": require("../assets/img/cards/resized/purple-double-outline-diamond.jpg"),
  "purple-single-outline-squiggle": require("../assets/img/cards/resized/purple-single-outline-squiggle.jpg"),
  "red-double-stripes-squiggle": require("../assets/img/cards/resized/red-double-stripes-squiggle.jpg"),
  "green-double-outline-squiggle": require("../assets/img/cards/resized/green-double-outline-squiggle.jpg"),
  "green-single-solid-capsule": require("../assets/img/cards/resized/green-single-solid-capsule.jpg"),
  "purple-triple-solid-squiggle": require("../assets/img/cards/resized/purple-triple-solid-squiggle.jpg"),
  "purple-single-solid-capsule": require("../assets/img/cards/resized/purple-single-solid-capsule.jpg"),
  "purple-triple-outline-squiggle": require("../assets/img/cards/resized/purple-triple-outline-squiggle.jpg"),
  "green-triple-solid-diamond": require("../assets/img/cards/resized/green-triple-solid-diamond.jpg"),
  "purple-triple-solid-diamond": require("../assets/img/cards/resized/purple-triple-solid-diamond.jpg"),
  "green-double-outline-capsule": require("../assets/img/cards/resized/green-double-outline-capsule.jpg"),
  "green-double-stripes-diamond": require("../assets/img/cards/resized/green-double-stripes-diamond.jpg"),
  "green-triple-stripes-diamond": require("../assets/img/cards/resized/green-triple-stripes-diamond.jpg"),
  "green-triple-outline-capsule": require("../assets/img/cards/resized/green-triple-outline-capsule.jpg"),
  "green-triple-stripes-squiggle": require("../assets/img/cards/resized/green-triple-stripes-squiggle.jpg"),
  "green-single-solid-squiggle": require("../assets/img/cards/resized/green-single-solid-squiggle.jpg"),
  "red-triple-outline-capsule": require("../assets/img/cards/resized/red-triple-outline-capsule.jpg"),
  "purple-single-outline-diamond": require("../assets/img/cards/resized/purple-single-outline-diamond.jpg"),
  "red-triple-solid-diamond": require("../assets/img/cards/resized/red-triple-solid-diamond.jpg"),
  "purple-single-stripes-capsule": require("../assets/img/cards/resized/purple-single-stripes-capsule.jpg"),
  "red-triple-stripes-diamond": require("../assets/img/cards/resized/red-triple-stripes-diamond.jpg"),
  "red-triple-outline-squiggle": require("../assets/img/cards/resized/red-triple-outline-squiggle.jpg"),
  "red-double-stripes-diamond": require("../assets/img/cards/resized/red-double-stripes-diamond.jpg"),
  "red-double-outline-capsule": require("../assets/img/cards/resized/red-double-outline-capsule.jpg"),
  "red-double-outline-squiggle": require("../assets/img/cards/resized/red-double-outline-squiggle.jpg"),
  "purple-single-stripes-squiggle": require("../assets/img/cards/resized/purple-single-stripes-squiggle.jpg"),
  "red-single-solid-squiggle": require("../assets/img/cards/resized/red-single-solid-squiggle.jpg"),
  "purple-triple-solid-capsule": require("../assets/img/cards/resized/purple-triple-solid-capsule.jpg"),
  "green-triple-solid-capsule": require("../assets/img/cards/resized/green-triple-solid-capsule.jpg"),
  "green-double-stripes-capsule": require("../assets/img/cards/resized/green-double-stripes-capsule.jpg"),
  "green-double-outline-diamond": require("../assets/img/cards/resized/green-double-outline-diamond.jpg"),
  "green-triple-outline-diamond": require("../assets/img/cards/resized/green-triple-outline-diamond.jpg"),
  "green-double-stripes-squiggle": require("../assets/img/cards/resized/green-double-stripes-squiggle.jpg"),
  "green-triple-stripes-capsule": require("../assets/img/cards/resized/green-triple-stripes-capsule.jpg"),
  "green-single-outline-squiggle": require("../assets/img/cards/resized/green-single-outline-squiggle.jpg"),
  "purple-single-stripes-diamond": require("../assets/img/cards/resized/purple-single-stripes-diamond.jpg"),
  "red-triple-stripes-capsule": require("../assets/img/cards/resized/red-triple-stripes-capsule.jpg"),
  "red-single-stripes-squiggle": require("../assets/img/cards/resized/red-single-stripes-squiggle.jpg"),
  "purple-double-outline-squiggle": require("../assets/img/cards/resized/purple-double-outline-squiggle.jpg"),
  "red-triple-outline-diamond": require("../assets/img/cards/resized/red-triple-outline-diamond.jpg"),
  "red-triple-solid-capsule": require("../assets/img/cards/resized/red-triple-solid-capsule.jpg"),
  "purple-single-outline-capsule": require("../assets/img/cards/resized/purple-single-outline-capsule.jpg"),
  "red-double-outline-diamond": require("../assets/img/cards/resized/red-double-outline-diamond.jpg"),
  "purple-single-solid-squiggle": require("../assets/img/cards/resized/purple-single-solid-squiggle.jpg"),
  "red-double-stripes-capsule": require("../assets/img/cards/resized/red-double-stripes-capsule.jpg"),
  "green-triple-outline-squiggle": require("../assets/img/cards/resized/green-triple-outline-squiggle.jpg"),
  "red-single-solid-diamond": require("../assets/img/cards/resized/red-single-solid-diamond.jpg"),
  "green-single-outline-diamond": require("../assets/img/cards/resized/green-single-outline-diamond.jpg"),
  "green-double-solid-squiggle": require("../assets/img/cards/resized/green-double-solid-squiggle.jpg"),
  "green-single-stripes-capsule": require("../assets/img/cards/resized/green-single-stripes-capsule.jpg"),
  "red-triple-stripes-squiggle": require("../assets/img/cards/resized/red-triple-stripes-squiggle.jpg"),
  "purple-double-solid-capsule": require("../assets/img/cards/resized/purple-double-solid-capsule.jpg"),
  "green-double-solid-capsule": require("../assets/img/cards/resized/green-double-solid-capsule.jpg"),
  "purple-triple-stripes-diamond": require("../assets/img/cards/resized/purple-triple-stripes-diamond.jpg"),
  "red-single-stripes-capsule": require("../assets/img/cards/resized/red-single-stripes-capsule.jpg"),
  "red-double-solid-capsule": require("../assets/img/cards/resized/red-double-solid-capsule.jpg"),
  "red-single-outline-diamond": require("../assets/img/cards/resized/red-single-outline-diamond.jpg"),
  "purple-triple-outline-capsule": require("../assets/img/cards/resized/purple-triple-outline-capsule.jpg"),
  "purple-double-outline-capsule": require("../assets/img/cards/resized/purple-double-outline-capsule.jpg"),
  "purple-triple-stripes-squiggle": require("../assets/img/cards/resized/purple-triple-stripes-squiggle.jpg"),
  "purple-double-stripes-diamond": require("../assets/img/cards/resized/purple-double-stripes-diamond.jpg"),
  "green-triple-solid-squiggle": require("../assets/img/cards/resized/green-triple-solid-squiggle.jpg"),
  "purple-single-solid-diamond": require("../assets/img/cards/resized/purple-single-solid-diamond.jpg"),
  "green-single-solid-diamond": require("../assets/img/cards/resized/green-single-solid-diamond.jpg"),
}
