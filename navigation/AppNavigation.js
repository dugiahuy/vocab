import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import Home from '../screens/Home';
import Select from '../screens/Select';
import Words from '../screens/Words';
import Learn from '../screens/Learn';

const AppNavigation = () => (
  <Router>
    <Stack key="root" hideNavBar >
      <Scene key="home" hideNavBar initial>
        <Scene
          key="start"
          component={Home}
          hideNavBar
          initial
        />
        <Scene
          key="select"
          component={Select}
          hideNavBar
        />
      </Scene>

      <Scene key="learn" hideNavBar>
        <Scene
          key="words"
          component={Words}
          hideNavBar
          initial
        />
        <Scene
          key="quiz"
          component={Learn}
          hideNavBar
        />
      </Scene>
    </Stack>
  </Router>
);

export default AppNavigation;
