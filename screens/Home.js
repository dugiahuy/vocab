import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { title: 'Chọn 8 từ tiếng anh để bắt đầu học nhé!' };
    console.log(this.state.title);
  }

  componentDidMount() {
    console.log(this.props.title);
    // if (this.props.title !== prevProps.title) {
      this.setState({ title: this.props.title });
    // }
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: '#03a9f4' }]}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {this.state.title}
          </Text>
        </View>

        <View style={styles.container}>
          <Button
            onPress={() => Actions.select()}
            style={styles.button}
            title="Start"
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
    width: 200
  }
});

export default Home;
