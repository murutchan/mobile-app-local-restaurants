import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Searchbar} from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.component';

const RestaurantsScreen = () => {
  return (
    <SafeAreaView
      style={[styles.container, {marginTop: StatusBar.currentHeight}]}>
      <View style={styles.searchBox}>
        <Searchbar style={styles.searchBar} />
      </View>
      <View style={styles.searchList}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    flex: 0.8,
    color: '#444',
    alignContent: 'center',
  },
  searchBar: {
    color: '#fff',
    alignItems: 'center',
    margin: 8,
  },
  searchList: {
    flex: 9,
    backgroundColor: 'blue',
  },
  searchListText: {
    paddingTop: 10,
    paddingLeft: 10,
  },
});

export default RestaurantsScreen;
