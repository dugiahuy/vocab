import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers';
import SelectVocab from './components/SelectVocab';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Vocab App</Text>
          <SelectVocab />
        </View>
      </Provider>
    );
  }
}

export default App;
