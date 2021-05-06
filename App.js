import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswaldFont,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useLatoFont,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";

export default function App() {
  let [oswaldFontsLoaded] = useOswaldFont({
    Oswald_400Regular,
  });

  let [latoFontsLoaded] = useLatoFont({
    Lato_400Regular,
  });

  if (!oswaldFontsLoaded || !latoFontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
