import React, { Component } from 'react';
import { View, Text, LayoutAnimation } from 'react-native';
import { Divider } from 'react-native-elements';
import {
  WordCarousel,
  GradientBackground,
  SCREEN_WIDTH,
} from '../components';
import data from '../reducers/VocabData';

//-- Test
const wordData = data.sort(() => 0.5 - Math.random()).slice(0, 8);

export default class Words extends Component {
  constructor(props) {
    super(props);

    this.state = { words: this.props.words };
  }

  componentDidMount() {
    LayoutAnimation.spring();
  }


  render() {
    return (
      <View style={styles.container}>
        <GradientBackground />
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Text style={styles.textHeader}>
            HỌC HÀNH ĐI NÀO
          </Text>
        </View>
        <Divider style={styles.divider} />
        <View style={{ flex: 5 }}>
          <WordCarousel words={wordData} />
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
    alignSelf: 'center',
  },
  textHeader: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
    letterSpacing: 1,
  },
  divider: {
    backgroundColor: '#67daff',
    width: SCREEN_WIDTH * 0.8,
    height: 2,
    marginTop: 25,
    marginBottom: 30,
  },
};
