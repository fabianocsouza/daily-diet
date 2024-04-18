import '@react-navigation/native'
import { StatusDietDTO } from 'src/dtos/StatusDietDTO';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Statistic: {
                    data: StatusDietDTO;
                  }
      Register: { 
                  edit: boolean;
                  title?: string;
                  diet?: string;
                }
      Feedback: { status: boolean }
      DailyDiet: {
                  diet: string;
                  title: string;
                 }
    }
  }
}