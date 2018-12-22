import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import AppNavigation from './navigation/AppNavigation';
import reducers from './reducers';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCkJbPkArP0coAmmwu2g7TIRWxQyJL12_w',
      authDomain: 'auth-ea55e.firebaseapp.com',
      databaseURL: 'https://auth-ea55e.firebaseio.com',
      projectId: 'auth-ea55e',
      storageBucket: 'auth-ea55e.appspot.com',
      messagingSenderId: '839553083852',
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
