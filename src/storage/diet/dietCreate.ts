import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { dietGetAll } from "./dietGetAll";
import { DietStorageDTO } from "@dtos/DietStorageDTO";
import { DIET_COLLECTION } from "@storage/storageConfig";


export async function dietCreate(title: string, newDiet: DietStorageDTO) {
  try {

    const storedDiets = await dietGetAll();

    const titleIndex = storedDiets.findIndex((day) => day.title === title);

    if(titleIndex != -1) {
      const existingDiet = storedDiets[titleIndex].data.find(({ name }) => name === newDiet.name);
      if (existingDiet) {

        return Alert.alert("Dieta", "Não pode adicionar a mesma dieta no mesmo dia!");
      } else {
   
        storedDiets[titleIndex].data.push(newDiet);
      }
    }else{
      storedDiets.push({title, data: [newDiet]})
    }

    await AsyncStorage.setItem(DIET_COLLECTION,JSON.stringify(storedDiets))

  } catch (error) {
    throw error;
  }
}