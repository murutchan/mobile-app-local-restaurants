import React from 'react';
import {Text, View, FlatList, StyleSheet, Image} from 'react-native';
import {Avatar, Button, Card, Paragraph} from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'some fancy Restaurant',
    icon,
    photos = ['https://images.dog.ceo/breeds/clumber/n02101556_6154.jpg'],
    address = '100 random street, Chicago, IL, 60656',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card style={styles.cardContainer} elevation={5}>
      <Card.Cover key={name} source={{uri: photos[0]}} style={styles.image} />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>{address}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
  },
  image: {
    padding: 10,
    paddingBottom: 0,
  },
});

export default RestaurantInfoCard;
