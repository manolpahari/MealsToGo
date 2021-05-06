import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/restaurants-info-card.component.js";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onSearchChange = (query) => setSearchQuery(query);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder={"Search"}
            onChangeText={onSearchChange}
            value={searchQuery}
          />
        </View>
        <View style={styles.listContainer}>
          <RestaurantsInfoCard />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    padding: 16,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
