import React from 'react';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const GradientBackground = () => (
  <LinearGradient
    colors={['#36B6F9', '#0BFAD4']}
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    }}
  />
);
