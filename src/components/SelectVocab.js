import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Card, CardSection} from './common';

// 3rd Party Library
import {Button} from 'react-native-elements';
import Swiper from 'react-native-deck-swiper';

// Reducers
import data from '../reducers/VocabList.json';

export default class Exemple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: data,
      swipedAllCards: false,
      swipeDirection: '',
      isSwipingBack: false,
      cardIndex: 0,
    };
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Text style={styles.headerText}>{card.word}</Text>
        <Text style={styles.pronunciationText}>{card.pronunciation}</Text>
        <Text style={styles.vietnameseText}>{card.vietnamese}</Text>
      </View>
    );
  };

  onSwiped = type => {
    console.log(`on swiped ${type}`);
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true,
    });
  };

  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false);
        });
      });
    }
  };

  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack: isSwipingBack,
      },
      cb,
    );
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper;
          }}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          verticalSwipe={false}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={custom.overlayLabelStyle}
          animateOverlayLabelsOpacity
          animateCardOpacity
        />
        <Button onPress={this.swipeLeft} title="Swipe Left" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  pronunciationText: {
    textAlign: 'center',
    fontSize: 30,
  },
  vietnameseText: {
    fontSize: 50,
    textAlign: 'center',
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
  },
});

const custom = {
  overlayLabelStyle: {
    left: {
      title: 'NOPE',
      style: {
        label: {
          backgroundColor: 'black',
          borderColor: 'black',
          color: 'white',
          borderWidth: 1,
        },
        wrapper: {
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          marginTop: 30,
          marginLeft: -30,
        },
      },
    },
    right: {
      title: 'LIKE',
      style: {
        label: {
          backgroundColor: 'black',
          borderColor: 'black',
          color: 'white',
          borderWidth: 1,
        },
        wrapper: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          marginTop: 30,
          marginLeft: 30,
        },
      },
    },
  },
};
