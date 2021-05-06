import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/restaurants-info-card.component.js";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`}
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const ListContainer = styled.View`
  padding: 16px;
  background-color: white;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onSearchChange = (query) => setSearchQuery(query);

  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar
            placeholder={"Search"}
            onChangeText={onSearchChange}
            value={searchQuery}
          />
        </SearchContainer>
        <ListContainer>
          <RestaurantsInfoCard />
        </ListContainer>
      </SafeArea>
    </>
  );
};
