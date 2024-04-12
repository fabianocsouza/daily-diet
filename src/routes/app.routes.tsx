import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DailyDiet } from "@screens/DailyDiet";
import { Feedback } from "@screens/Feedback";
import { Home } from "@screens/Home";
import { Register } from "@screens/Register";
import { Statistic } from "@screens/Statistic";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Statistic: undefined;
      Register: undefined;
      Feedback: { status: boolean } | undefined;
      DailyDiet: undefined;
    }
  }
}


export const AppRoute = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return(
    <Navigator screenOptions={{headerShown: false, animation: 'fade'}}>
      <Screen name="Home" component={Home}/>
      <Screen name="Statistic" component={Statistic}/>
      <Screen name="Register" component={Register}/>
      <Screen name="Feedback" component={Feedback}/>
      <Screen name="DailyDiet" component={DailyDiet}/>
    </Navigator>
  )
}