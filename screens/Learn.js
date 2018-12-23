import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import {
  Quiz,
  GradientBackground,
  SCREEN_WIDTH
} from '../components';

export default class Learn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GradientBackground />

        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Text style={styles.textHeader}>
            THỰC HÀNH
          </Text>
        </View>

        <Divider style={styles.divider} />

        <View style={{ flex: 7 }}>
          <Quiz words={this.props.words} />
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
    marginTop: 15,
    marginBottom: 20,
  },
};
