import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, Divider, Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import {
  SCREEN_WIDTH,
  GradientBackground,
} from '../components';
import datas from '../database/VocabData.json';

const data = _.shuffle(datas);

export default class Select extends Component {
  constructor(props) {
    super(props);

    this.swipeRight = this.swipeRight.bind(this);
    this.state = { count: 0, words: [], data };
    console.log(this.state);
  }

  swipeRight(item) {
    const selected = [...this.state.data];

    this.setState({
      count: this.state.count + 1,
      words: [...this.state.words, item],
      data: _.drop(selected),
    });
    console.log(this.state);
    console.log(item);

    if (this.state.count === 8) {
      console.log('done');
      console.log(this.state.words);

      Actions.pop({ refresh: { done: true, words: this.state.words } });
    }
  }

  renderTextHeader() {
    return (this.state.count === 0) ?
      'HÃY CHỌN 8 TỪ MỚI ĐỂ HỌC' : `ĐÃ CHỌN ${this.state.count} TRÊN 8 TỪ MỚI`;
  }

  renderItem({ item }) {
    const { word, pronunciation, vietnamese } = item;

    return (
      <Card
        borderRadius={10}
        paddingTop={50}
        width={SCREEN_WIDTH * 0.8}
      >
        <Text style={styles.textWord}>
          {word}
        </Text>

        <Text style={styles.textPronunciation}>
          {pronunciation}
        </Text>

        <Text style={styles.textVietnamese}>
          {vietnamese}
        </Text>

        <Divider style={{ marginTop: 70, marginBottom: 15 }} />

        <Button
          onPress={() => this.swipeRight(item)}
          style={styles.button}
          title="Tôi muốn học"
          backgroundColor="#ffbd45"
          borderRadius={50}
          fontWeight="bold"
        />
      </Card>
    );
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

        <View style={{ flex: 4, alignSelf: 'stretch', justifyContent: 'flex-start' }}>
          <Carousel
            data={this.state.data}
            onSwipeRight={this.swipeRight}
            ref={(c) => { this.carousel = c; }}
            renderItem={this.renderItem.bind(this)}
            sliderWidth={SCREEN_WIDTH}
            itemWidth={SCREEN_WIDTH * 0.8}
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
  textWord: {
    fontSize: 30,
    textAlign: 'center',
  },
  textPronunciation: {
    fontSize: 15,
    color: '#757575',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  textVietnamese: {
    fontSize: 20,
    color: '#bdbdbd',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    alignSelf: 'center',
    width: 200
  },
};
