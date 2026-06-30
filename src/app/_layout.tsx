import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "react-native";

import HomeScreen from ".";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={DefaultTheme}>
      <HomeScreen />
    </ThemeProvider>
  );
}
