import AsyncStorage from "@react-native-async-storage/async-storage";
import { DailyStorageDTO } from "../../dtos/DietStorageDTO";
import { DIET_COLLECTION } from "@storage/storageConfig";

export async function dietGetAll() {
  try {
    const storage = await AsyncStorage.getItem(DIET_COLLECTION);

    const diets: DailyStorageDTO[] = storage ? JSON.parse(storage): [];

    return diets;

  } catch (error) {
    throw error;
  }
}