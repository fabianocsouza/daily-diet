import AsyncStorage from "@react-native-async-storage/async-storage";
import { PHOTO_COLLECTION } from "@storage/storageConfig";

export async function photoCreate(image: string) {
  try { 
    await AsyncStorage.setItem(PHOTO_COLLECTION, JSON.stringify(image));
  } catch (error) {
    throw error;
  }
}