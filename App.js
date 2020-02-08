import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import firstpage from './First';
import secondpage from './Second';
import thirdpage from './Third';
import showVideo from './ShowVideo'

const App = createStackNavigator(
  {
    Home: { screen: firstpage },

    Second: { screen: secondpage },

    Third: {screen: thirdpage},

    ShowVideo: {screen: showVideo},
  },

  { initialRouteName: 'Home', headerMode: 'none' }
);

export default createAppContainer(App);
