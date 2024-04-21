import { Alert } from "react-native";

type Props = {
  name: string;
  description: string; 
  date: string; 
  time: string;
}

export const validateInput = ({ name, description, date, time}: Props) => {
  if (name.trim().length === 0 || description.trim().length === 0 ||
    date.trim().length === 0 || time.trim().length === 0) {
    Alert.alert("Nova refeição", "Informe todos os dados necessário da dieta");
    return false;
  }
  return true;
}