import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBKXjrwGg7uTr5MWk0WcxNbANGk_L1eDaI',
      authDomain: 'manager-1a366.firebaseapp.com',
      databaseURL: 'https://manager-1a366.firebaseio.com',
      projectId: 'manager-1a366',
      storageBucket: '',
      messagingSenderId: '561570212023'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm/>
      </Provider>
    );
  }
}

export default App;
