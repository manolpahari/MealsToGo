import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

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
      <Card>
        <Card.Cover
          source={{ uri: imageUrl[0] }}
          style={styles.imageContainer}
        />
        <Card.Content>
          <Text>{name}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    padding: 16,
    backgroundColor: "#fff",
  },
});
