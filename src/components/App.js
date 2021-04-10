/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

// const isAndroid = (Platform.OS = 'android');
const App = () => {
  return (
    <SafeAreaView
      style={[styles.container, {marginTop: StatusBar.currentHeight}]}>
      <View style={styles.searchBox}>
        <Text style={styles.searchBoxText}>search</Text>
      </View>
      <View style={styles.searchList}>
        <Text style={styles.searchListText}>List</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    flex: 0.5,
    backgroundColor: 'blue',
    color: '#fff',
    alignContent: 'center',
  },
  searchBoxText: {
    color: '#fff',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
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
