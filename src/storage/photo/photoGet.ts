import AsyncStorage from "@react-native-async-storage/async-storage";

import { PHOTO_COLLECTION } from "@storage/storageConfig";

export async function photoGet(){
  try {
    const storage = await AsyncStorage.getItem(PHOTO_COLLECTION);

    const image: string = storage ? JSON.parse(storage) : '';

    return image;

  } catch (error) {
    throw error;
  }
}