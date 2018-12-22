import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import { GradientBackground } from '../components';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Chọn 8 từ tiếng anh để bắt đầu học nhé!',
      titleButton: 'Chọn từ',
      done: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.done !== prevProps.done) {
      this.setState({
        title: 'Bạn đã sẵn sàng để học chưa nào. Hãy bắt đầu ngay !',
        titleButton: 'Bắt đầu',
        done: !this.state.done,
      });
    }
  }

  onButtonPress() {
    if (!this.state.done) {
      Actions.select();
    } else {
      Actions.learn({ words: this.props.words});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <GradientBackground />

        <View style={styles.container}>
          <Text style={styles.text}>
            {this.state.title}
          </Text>
        </View>

        <View style={styles.container}>
          <Button
            onPress={this.onButtonPress.bind(this)}
            style={styles.button}
            title={this.state.titleButton}
            backgroundColor="white"
            color="#03a9f4"
            fontSize={24}
            borderRadius={75}
            fontWeight="bold"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch'
  },
  text: {
    marginTop: 100,
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    width: 300
  },
  button: {
    alignSelf: 'center',
    width: 250
  }
});

export default Home;
