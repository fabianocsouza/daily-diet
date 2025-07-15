import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import { ThemeProvider } from "styled-components/native";

import theme from "@/theme";

import { Home } from "@/screens/Home";
import { SafeAreaView, StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={"dark-content"} backgroundColor="transparent" />
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_600 }}>
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
}
