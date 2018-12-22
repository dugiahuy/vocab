import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import { StackViewStyleInterpolator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Select from '../screens/Select';

const AppNavigation = () => (
  <Router>
    <Stack
      key="root"
      hideNavBar
    >
      <Scene key="home"
        hideNavBar
      >
        <Scene
          key="start"
          component={Home}
          initial
        />

        <Scene
          key="select"
          component={Select}
          hideNavBar
        />
      </Scene>
    </Stack>
  </Router>
);

export default AppNavigation;
