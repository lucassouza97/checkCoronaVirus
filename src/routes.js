import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './pages/Home/Home';
import Dados from './pages/Dados/Dados';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  Dados: {
    screen: Dados,
  },
});

export default createAppContainer(AppNavigator);
