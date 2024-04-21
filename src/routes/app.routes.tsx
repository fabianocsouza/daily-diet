import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Feedback } from "@screens/Feedback";
import { DailyDiet } from "@screens/DailyDiet";
import { Statistic } from "@screens/Statistic";
import { RegisterDiet } from "@screens/RegisterDiet";

export const AppRoute = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return(
    <Navigator screenOptions={{headerShown: false, animation: 'fade'}}>
      <Screen name="Home" component={Home}/>
      <Screen name="Statistic" component={Statistic}/>
      <Screen name="Register" component={RegisterDiet}/>
      <Screen name="Feedback" component={Feedback}/>
      <Screen name="DailyDiet" component={DailyDiet}/>
    </Navigator>
  )
}