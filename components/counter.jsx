import React from 'react';
import { Button } from 'react-native';


export default class Counter extends React.Component {
  state = {count: 0};

  render () {
    return (
      <Button
        title={String(this.state.count)}
        onPress={() => this.setState({count: this.state.count + 1})}
      />
    )
  }
}
