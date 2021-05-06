import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[1]};
`;

const RestaurantCardCover = styled(Card.Cover)``;

const Title = styled.Text`
  margin-top: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    imageUrl = [
      "https://kingberestaurantbd.files.wordpress.com/2016/07/cropped-img_4135.jpg",
    ],
    address = "100 first Ave",
    isOpenNow = true,
    rating = 4,
    isClosedTemp = false,
  } = restaurant;

  return (
    <View>
      <RestaurantCard>
        <Card.Content>
          <Card.Cover source={{ uri: imageUrl[0] }} />
          <Title>{name}</Title>
        </Card.Content>
      </RestaurantCard>
    </View>
  );
};
