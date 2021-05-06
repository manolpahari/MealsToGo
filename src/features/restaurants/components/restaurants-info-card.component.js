import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[1]};
`;

const RestaurantCardContent = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
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
        <RestaurantCardContent>
          <Card.Cover source={{ uri: imageUrl[0] }} />
          <Info>
            <Title>{name}</Title>
          </Info>
        </RestaurantCardContent>
      </RestaurantCard>
    </View>
  );
};
