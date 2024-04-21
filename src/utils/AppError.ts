import { Alert } from "react-native";

export class AppError {
  message: string;

  constructor(message: string){
    this.message = message;
  }

  static handleAppError = (error: any) => {
    if (error instanceof AppError) {
      Alert.alert("Nova refeição", error.message);
    } else {
      console.log(error);
      Alert.alert("Nova refeição", "Não foi possível adicionar!");
    }
  }
}