import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import { GradientBackground, StartUp } from '../components';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Chọn 8 từ tiếng anh để bắt đầu học nhé!',
      titleButton: 'Chọn từ',
      showButton: true,
    };
  }

  componentDidMount() {
    if (this.props.done === 'learned') {
      this.setState({
        title: 'Chúc mừng bạn đã hoàn thành ngày hôm nay. Hãy quay lại vào ngày mai nhé !',
        showButton: !this.state.showButton,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.done === 'selected') {
      this.setState({
        title: 'Bạn đã sẵn sàng để học chưa nào. Hãy bắt đầu ngay !',
        titleButton: 'Bắt đầu',
      });
    }
  }

  onButtonPress() {
    if (this.props.done === 'selected') {
      Actions.words({ words: this.props.words });
    } else {
      Actions.select();
    }
  }

  renderButton() {
    if (this.state.showButton) {
      return (
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
      );
    }
    return <StartUp />;
  }

  render() {
    return (
      <View style={styles.container}>
        <GradientBackground />

        <View style={[styles.container, { flex: 2 }]}>
          <Text style={styles.text}>
            {this.state.title}
          </Text>
        </View>

        <View style={styles.container}>
          {this.renderButton()}
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
    alignItems: 'center',
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
