import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Divider, Button } from 'react-native-elements';
import {
  VocabCard,
  StartUp,
  SCREEN_WIDTH,
  GradientBackground,
} from '../components';
import data from '../reducers/VocabData.json';
import styles from '../themes';

export default class SelectVocab extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0, words: [] };
  }

  swipeRight(item) {
    this.setState({
      count: this.state.count + 1,
      words: [...this.state.words, item]
    });
    if (this.state.words.length === 8) {
      Actions.pop({ refresh: { done: true, words: this.state.words }});
    }
  }

  swipeLeft(item) {
    console.log(item);
  }


  renderTextHeader() {
    if (this.state.count === 0) {
      return (
          <Text style={styles.textHeader}>
            HÃY CHỌN 8 TỪ MỚI ĐỂ HỌC
          </Text>
      );
    } else {
      return (
          <Text style={styles.textHeader}>
            ĐÃ CHỌN {this.state.count} TRÊN 8 TỪ MỚI
          </Text>
      );
    }
  }

  render() {
    return (
      <View style={styles.containerScreenCard}>
        <GradientBackground />

        <View style={{ flex: 1, justifyContent: 'flex-end', alignSelf: 'center' }}>
          {this.renderTextHeader()}
        </View>

        <Divider style={{ backgroundColor: '#007ac1', width: SCREEN_WIDTH*0.8, height: 2, marginTop: 30, marginBottom: 25 }} />

        <View style={{flex: 4, alignSelf: 'center', justifyContent: 'flex-start' }}>
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
