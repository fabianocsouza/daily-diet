import '@react-navigation/native'

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