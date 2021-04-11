import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import RestaurantsScreen from './features/restaurants/screens/restaurants.screen';

const App = () => {
  return <RestaurantsScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    flex: 0.8,
    backgroundColor: 'blue',
    color: '#fff',
    alignContent: 'center',
  },
  searchBar: {
    color: '#fff',
    alignItems: 'center',
    margin: 8,
  },
  searchList: {
    flex: 9,
    backgroundColor: 'yellow',
  },
  searchListText: {
    paddingTop: 10,
    paddingLeft: 10,
  },
});

export default App;
