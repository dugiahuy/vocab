import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import Home from '../screens/Home';
import Select from '../screens/Select';
import Words from '../screens/Words';
import Learn from '../screens/Learn';

const AppNavigation = () => (
  <Router>
    <Stack key="root" hideNavBar >
      <Scene key="home" hideNavBar >
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

      <Scene key="learn" hideNavBar initial >
        <Scene
          key="words"
          component={Words}
          hideNavBar

        />
        <Scene
          key="quiz"
          component={Learn}
          hideNavBar
          initial
          
        />
      </Scene>
    </Stack>
  </Router>
);

export default AppNavigation;
