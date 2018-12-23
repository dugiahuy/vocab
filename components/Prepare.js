import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { SCREEN_WIDTH } from './Constant';

class Prepare extends Component {
  constructor(props) {
    super(props);

    const data = _.chunk(this.props.words, 4);
    this.state = { data, buttonTitle: 'Tiếp' };
  }

  onButtonPress() {
    this.carousel.snapToNext();
    console.log(this.props.words);
    if (this.carousel.currentIndex === this.state.data.length - 1) {
      Actions.quiz({ words: this.props.words });
    }
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
      <View style={{ flex: 1 }}>
        <View style={{ flex: 4 }}>
          <Carousel
            ref={(c) => { this.carousel = c; }}
            data={this.state.data}
            renderItem={this.renderItem}
            sliderWidth={SCREEN_WIDTH}
            itemWidth={SCREEN_WIDTH * 0.8}
            scrollEnabled={false}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button
            style={{ width: 200 }}
            onPress={this.onButtonPress.bind(this)}
            title="Tiếp"
            backgroundColor="white"
            color="#0BFAD4"
            fontSize={18}
            borderRadius={75}
            fontWeight="bold"
          />
        </View>
      </View>
    );
  }
}

const Vocab = props =>
  props.item.map((word, i) => (
    <View key={i} style={[styles.containerWord, { borderTopWidth: 1, backgroundColor: '#f5f5f5' }]}>
      <Text style={styles.textWord}>
        {word.word}
      </Text>
      <Text style={styles.textVietnamese}>
        {word.vietnamese}
      </Text>
    </View>
));

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
    borderTopColor: '#cfcfcf',
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
    color: '#757575',
  }
};

export { Prepare };
