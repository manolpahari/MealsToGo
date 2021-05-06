import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import dine from "../../../../assets/dine.png";
import { Spacer } from "../../../components/spacer/spacer.component";

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

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const TempClosed = styled.Text`
  color: ${(props) => props.theme.colors.ui.error};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
  flex-direction: row;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
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
    rating = 4.5,
    isClosedTemp = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <View>
      <RestaurantCard>
        <RestaurantCardContent>
          <Card.Cover source={{ uri: imageUrl[0] }} />
          <Info>
            <Title>{name}</Title>
            <Section>
              <Rating>
                {ratingArray.map(() => (
                  <SvgXml xml={star} width={20} height={20} />
                ))}
              </Rating>
              <SectionEnd>
                {isClosedTemp && <TempClosed>TEMPORARILY CLOSED</TempClosed>}
                <Spacer position={"left"} size={"medium"}>
                  {isOpenNow && <SvgXml xml={open} width={25} height={25} />}
                </Spacer>
                <Spacer position={"left"} size={"medium"}>
                  <Image source={dine} style={{ width: 25, height: 25 }} />
                </Spacer>
              </SectionEnd>
            </Section>
            <Address>{address}</Address>
          </Info>
        </RestaurantCardContent>
      </RestaurantCard>
    </View>
  );
};
