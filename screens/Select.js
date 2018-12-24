import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Divider } from 'react-native-elements';
import {
  VocabCard,
  SCREEN_WIDTH,
  GradientBackground,
} from '../components';
import datas from '../database/VocabData.json';

const data = _.shuffle(datas);

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

    if (this.state.count === 8) {
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
    return (
      <View style={styles.container}>
        <GradientBackground />

        <View style={{ flex: 1, justifyContent: 'flex-end', alignSelf: 'center' }}>
          <Text style={styles.textHeader}>
            {this.renderTextHeader()}
          </Text>
        </View>

        <Divider style={styles.divider} />

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

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  divider: {
    backgroundColor: '#67daff',
    width: SCREEN_WIDTH * 0.8,
    height: 2,
    marginTop: 30,
    marginBottom: 25,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
    letterSpacing: 1,
    lineHeight: 22,
  },
};
