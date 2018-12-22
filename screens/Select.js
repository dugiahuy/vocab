import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Svg from 'react-native-svg';
import { Divider, Button } from 'react-native-elements';
import VocabCard from '../components/VocabCard';
import { StartUp } from '../components/SvgComponent';
import data from '../reducers/VocabData.json';
import styles from '../themes';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class SelectVocab extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0, words: [] };
    console.log(this.state.count);
  }

  swipeRight(item) {
    this.setState({ count: this.state.count + 1 });
    this.setState({ words: [...this.state.words, item] });
    if (this.state.words.length === 8) {
      console.log('done!');
      Actions.popTo('start', { title: 'Test' });
    }
  }

  swipeLeft(item) {
    console.log(item);
  }


  renderTextHeader() {
    if (this.state.count === 0) {
      return (
          <Text style={styles.textHeader}>
            Hãy chọn 8{'\n'}từ mới để học
          </Text>
      );
    } else {
      return (
          <Text style={styles.textHeader}>
            Đã chọn {this.state.count} trên 8 từ mới để học
          </Text>
      );
    }
  }

  render() {
    return (
      <View style={styles.containerScreenCard}>
        <View style={{ flex: 2, justifyContent: 'center', alignSelf: 'center' }}>
          {this.renderTextHeader()}
          <Divider style={{ width: SCREEN_WIDTH*0.9, height: 2 }} />
        </View>
        <View style={{ flex: 4, alignSelf: 'center', top: 0 }}>
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
