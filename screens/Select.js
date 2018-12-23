import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Divider } from 'react-native-elements';
import {
  VocabCard,
  SCREEN_WIDTH,
  GradientBackground,
} from '../components';
import data from '../database/VocabData.json';
import styles from '../themes';

export default class Select extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0, words: [] };
  }

  swipeRight(item) {
    this.setState({
      count: this.state.count + 1,
      words: [...this.state.words, item],
    });

    if (this.state.words.length === 8) {
      Actions.pop({ refresh: { done: true, words: this.state.words } });
    }
  }

  swipeLeft(item) {
    console.log(item);
  }

  renderTextHeader() {
    return (this.state.count === 0) ?
      'HÃY CHỌN 8 TỪ MỚI ĐỂ HỌC' : `ĐÃ CHỌN ${this.state.count} TRÊN 8 TỪ MỚI`;
  }

  render() {
    console.log(data);
    return (
      <View style={styles.containerScreenCard}>
        <GradientBackground />

        <View style={{ flex: 1, justifyContent: 'flex-end', alignSelf: 'center' }}>
          <Text style={styles.textHeader}>
            {this.renderTextHeader()}
          </Text>
        </View>

        <Divider style={styless.divider} />

        <View style={{ flex: 4, alignSelf: 'center', justifyContent: 'flex-start' }}>
          <VocabCard
            data={data}
            onSwipeRight={this.swipeRight.bind(this)}
            onSwipeLeft={this.swipeLeft}
          />
        </View>
      </View>
    );
  }
}

const styless = {
  divider: {
    backgroundColor: '#67daff',
    width: SCREEN_WIDTH * 0.8,
    height: 2,
    marginTop: 30,
    marginBottom: 25,
  },
};
