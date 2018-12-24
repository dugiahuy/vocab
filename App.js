import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import Home from './screens/Home';
import Select from './screens/Select';
import Words from './screens/Words';
import Learn from './screens/Learn';

const App = () => (
  <Router>
    <Stack key="root" hideNavBar >
      <Scene
        key="home"
        component={Home}
        hideNavBar
        initial
      />
      <Scene
        key="select"
        component={Select}
        hideNavBar
      />
      <Scene
        key="words"
        component={Words}
        hideNavBar
      />
      <Scene
        key="learn"
        component={Learn}
        hideNavBar
      />
    </Stack>
  </Router>
);

export default App;
