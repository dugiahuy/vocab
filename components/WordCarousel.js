import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Divider, Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { SCREEN_WIDTH } from './Constant';

class WordCarousel extends Component {
  constructor(props) {
    super(props);

    const { words } = this.props;
    const newWords = [];
    while (words.length) {
      newWords.push(words.splice(0, 4));
    }
    this.state = { newWords };
  }


  renderItem({ item, i }) {
    return (
      <View key={i} style={styles.containerCard}>
        <View style={styles.containerWord}>
          <Text style={styles.textHeader}>
            HÃY ĐỌC NHỮNG CHỮ{'\n'}NÀY THẬT CẨN THẬN
          </Text>
        </View>
        <Vocab item={item} />
      </View>
    );
  }

  render() {
    return (
      <View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.newWords}
          renderItem={this.renderItem}
          sliderWidth={SCREEN_WIDTH}
          itemWidth={SCREEN_WIDTH*0.8}
        />
        <Button
          onPress={() => { this._carousel.snapToNext(); }}
          title="Tiếp"
        />
      </View>
    );
  }
}

const Vocab = props => {
  return props.item.map((word, i) => (
    <View key={i} style={[styles.containerWord, { borderTopWidth: 1, backgroundColor: '#f5f5f5' }]}>
      <Text style={styles.textWord}>
        {word.word}
      </Text>
      <Text style={styles.textVietnamese}>
        {word.vietnamese}
      </Text>
    </View>
  ));
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  containerCard: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH * 0.8,
    alignSelf: 'center',
    borderRadius: 10,
  },
  containerWord: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderTopColor: "#cfcfcf",
  },
  textHeader: {
    fontSize: 16,
    textAlign: 'center',
    color: '#616161',
    letterSpacing: 1,
    lineHeight: 22,
  },
  textWord: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 2,
  },
  textVietnamese: {
    fontSize: 16,
    color: "#757575",
  }
};

export { WordCarousel };
