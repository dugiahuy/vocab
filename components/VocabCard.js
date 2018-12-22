import React, { Component } from 'react';
import {
  View,
  Animated,
  Text,
  StyleSheet,
  PanResponder,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import { Card, Divider, Button } from 'react-native-elements';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from './Constant';
import styles from '../themes';

const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const DURATION = 250;

class VocabCard extends Component {
  static defaultProps = {
    onSwipeLeft: () => {},
    onSwipeRight: () => {},
  }

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          this.resetPosition();
        }
      },
    });

    this.state = { index: 0, position, panResponder };
  }

  componentDidUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    const customLayoutLinear = {
      duration: DURATION,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    };
    LayoutAnimation.configureNext(customLayoutLinear);
    // LayoutAnimation.linear();
  }

  forceSwipe(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;

    Animated.timing(this.state.position, {
      toValue: { x, y: 0 },
      duration: DURATION
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = data[this.state.index];

    console.log(direction);

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);

    this.state.position.setValue({ x: 0, y: 0 });
    this.setState({ index: this.state.index + 1 });
  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0}
    }).start();
  }

  getCardLayout() {
    const { position } = this.state;

    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return ({
      ...position.getLayout(),
      transform: [{ rotate }],
    });
  }

  renderCard(item) {
    const { word, pronunciation, vietnamese } = item;

    return (
      <Card
        borderRadius={10}
        paddingTop={50}
        width={SCREEN_WIDTH*0.8}
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

        <Divider style={{ marginTop: 70, marginBottom: 15 }}/>

        <Button
          onPress={() => {this.forceSwipe('right')}}
          style={styles.button}
          title="Tôi muốn học"
          backgroundColor="#ffbd45"
          borderRadius={50}
        />
      </Card>
    );
  }

  renderCards() {
    return this.props.data.map((item, i) => {
      if (this.state.index > i) { return null; }

      if (this.state.index === i) {
        return (
          <Animated.View
            key={item.id}
            style={this.getCardLayout()}
            {...this.state.panResponder.panHandlers}
          >
            {this.renderCard(item)}
          </Animated.View>
        );
      }

      return (
        <Animated.View
          key={item.id}
          style={{ position: "absolute", top: SCREEN_HEIGHT }}
        >
          {this.renderCard(item)}
        </Animated.View>
      );
    });
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    );
  }
}

export { VocabCard };
