import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;
