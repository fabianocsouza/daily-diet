import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "@/screens/Home";
import { Static } from "@/screens/Statics";
import { NewMeal } from "@/screens/NewMeal";
import { FeedBack } from "@/screens/FeedBack";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({ current }) => {
          return {
            cardStyle: {
              // Faz a tela crescer de 0 para tamanho total com opacidade
              transform: [
                {
                  scale: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 1],
                    extrapolate: "clamp",
                  }),
                },
              ],
              opacity: current.progress,
            },
          };
        },
        gestureEnabled: true,
        gestureDirection: "vertical",
        cardStyle: { backgroundColor: "transparent" }, // transparente para permitir efeito
      }}
      initialRouteName="home"
    >
      <Screen name="home" component={Home} />
      <Screen name="static" component={Static} />
      <Screen
        name="meal"
        component={NewMeal}
        options={{
          animation: "none",
          presentation: "card",
        }}
      />
      <Screen
        name="feedback"
        component={FeedBack}
        options={{
          animation: "none",
          presentation: "card",
        }}
      />
    </Navigator>
  );
}
