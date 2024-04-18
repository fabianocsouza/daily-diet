import { DietStorageDTO } from "src/dtos/DietStorageDTO";
import { dietGetAll } from "./dietGetAll";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DIET_COLLECTION } from "@storage/storageConfig";

export async function dietUpdate(title: string, updateDiet: DietStorageDTO) {
  try {
    const storedDiets = await dietGetAll();

    const titleIndex = storedDiets.findIndex((day) => day.title === title);

    if(titleIndex !== -1) {
      const dietIndex =storedDiets[titleIndex].data.findIndex(({name}) => name === updateDiet.name);
      if(dietIndex !== -1) {
       storedDiets[titleIndex].data[dietIndex] = updateDiet;
      }else{
        return Alert.alert("Dieta", "Não foi encontrada uma dieta com o nome especificado para atualizar!");
      }
    }else{
      return Alert.alert("Dieta", "Não foi encontrado um dia com a data especificada para atualizar!");
    }

    await AsyncStorage.setItem(DIET_COLLECTION, JSON.stringify(storedDiets));
  } catch (error) {
    
  }
  return;
}