import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import { SafeAreaView, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

import { Loading } from "@/components/Loading";

import { Routes } from "@/router";
import theme from "@/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={"dark-content"} backgroundColor="transparent" />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
