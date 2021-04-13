import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Searchbar} from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import styled from 'styled-components';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${props => props.theme.space[3]};
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar style={styles.searchBar} />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    color: '#fff',
    alignItems: 'center',
    margin: 8,
  },
});

export default RestaurantsScreen;
