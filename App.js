import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './Screens/searchScreen';
import BookTransactionScreen from './Screens/BookTransactionScreen';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
  return (
    <AppContainer />  
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Search : {screen:SearchScreen},
  Transaction : {screen:BookTransactionScreen}
})

const AppContainer = createAppContainer(TabNavigator);
