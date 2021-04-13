import React from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';
// import {SvgXml} from 'react-native-svg';
// import starSVG from '../../../../../assets/star';
import Icon from 'react-native-vector-icons/FontAwesome';

const Title = styled.Text`
  padding-top: ${props => props.theme.space[3]};
  color: ${props => props.theme.colors.ui.primary};
  /* font-family: ${props => props.theme.fonts.heading}; */
`;

const Address = styled.Text`
  padding-top: ${props => props.theme.space[2]};
  font-size: ${props => props.theme.fontSizes.caption};
`;

const RestaurantCard = styled(Card)`
  margin-top: ${props => props.theme.space[1]};
`;

const RestaurantImage = styled(Card.Cover)`
  padding: ${props => props.theme.space[2]};
  padding-bottom: 0;
  background-color: white;
`;

const RatingView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${props => props.theme.space[0]};
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

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantImage key={name} source={{uri: photos[0]}} />
      <Card.Content>
        <Title>{name.toUpperCase()}</Title>
        <RatingView>
          <View style={{flexDirection: 'row'}}>
            {ratingArray.map(() => (
              <Icon name="star" size={22} color="orange" />
            ))}
          </View>
          <Text style={{color: isOpenNow ? 'green' : 'red'}}>
            {isOpenNow ? 'Open' : 'Closed'}
          </Text>
        </RatingView>
        <Address>{address}</Address>
      </Card.Content>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
