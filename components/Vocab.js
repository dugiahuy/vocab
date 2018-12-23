import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class Vocab extends Component {
  constructor(props) {
    super(props);

    const color = _.fill(Array(4), '#f5f5f5');
    this.state = {
      data: _.shuffle(this.props.item),
      color,
      disabled: false,
      correct: this.props.item[0],
    };

    console.log(this.props);
  }

  changeColor(word, i) {
    if (word.vietnamese === this.state.correct.vietnamese) {
      this.setState({
        color: { ...this.state.color, [i]: '#00e676' },
        disabled: true,
      });
    } else {
      this.setState({
        color: { ...this.state.color, [i]: '#ff5252' },
        disabled: true,
      });
    }
  }

  render() {
    return this.state.data.map((word, i) => (
      <TouchableHighlight
        key={i}
        onPress={this.changeColor.bind(this, word, i)}
        disabled={this.state.disabled}
      >
        <View
          style={styles.containerWord}
          backgroundColor={this.state.color[i]}
        >
          <Text style={styles.textVietnamese}>
            {word.vietnamese}
          </Text>
        </View>
      </TouchableHighlight>
    ));
  }
}

const styles = {
  containerWord: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderTopColor: '#cfcfcf',
    borderTopWidth: 1,
    //backgroundColor: '#f5f5f5',
  },
  textVietnamese: {
    fontSize: 16,
    color: '#757575'
  }
};

export default Vocab;
