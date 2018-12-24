import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Carousel from 'react-native-snap-carousel';
import { SCREEN_WIDTH } from './Constant';
import Vocab from './Vocab';
import vocabData from '../database/VocabData.json';

class Quiz extends Component {
  constructor(props) {
    super(props);

    // Convert data to learn by vietnamese
    const data1 = this.props.words.map((e) => {
      const a = _.differenceBy(_.shuffle(vocabData), [e], 'id').slice(0, 3);
      a.push(e);
      a.reverse();
      const b = a.map(el => ({ vi: el.vietnamese, en: el.word }));
      return b;
    });
    // Convert data to learn by english
    const data2 = this.props.words.map((e) => {
      const a = _.differenceBy(_.shuffle(vocabData), [e], 'id').slice(0, 3);
      a.push(e);
      a.reverse();
      const b = a.map(el => ({ vi: el.word, en: el.vietnamese }));
      return b;
    });
    // Join data
    const data = data1.concat(data2);
    this.state = { data };
  }

  onButtonPress() {
    this.carousel.snapToNext();

    if (this.carousel.currentIndex === this.state.data.length - 1) {
      Actions.home({ done: 'learned' });
    }
  }

  renderItem({ item, i }) {
    const answer = item.map(e => e.vi);

    return (
      <View key={i} style={styles.containerCard}>
        <View style={styles.containerHeader}>
          <Text style={styles.textWord}>
            {item[0].en}
          </Text>
          <Text style={styles.textHeader}>
            CHỌN NGHĨA ĐÚNG
          </Text>
        </View>
        <Vocab item={answer} />
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
            renderItem={this.renderItem.bind(this)}
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
  containerHeader: {
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  containerWord: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderTopColor: '#cfcfcf',
    borderTopWidth: 1,
    backgroundColor: '#f5f5f5',
  },
  textHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#616161',
    letterSpacing: 1,
    lineHeight: 22,
    marginTop: 5,
  },
  textWord: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 2,
  },
  textVietnamese: {
    fontSize: 16,
    color: '#757575',
  }
};

export { Quiz };
