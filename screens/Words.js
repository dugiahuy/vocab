import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  WordOverview,
  WordCarousel,
  GradientBackground,
} from '../components';
import data from '../reducers/VocabData';

const wordData = data.sort(() => .5 - Math.random()).slice(0, 8);

export default class Words extends Component {
  constructor(props) {
    super(props);

    this.state = { words: this.props.words };
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  render() {
    return (
      <View style={styles.container}>
        <GradientBackground />

        <WordCarousel words={wordData} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
};
