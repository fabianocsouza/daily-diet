import AsyncStorage from "@react-native-async-storage/async-storage";
import { dietGetAll } from "./dietGetAll";
import { DIET_COLLECTION } from "@storage/storageConfig";

export async function dietRemove( diet: string, title: string ) {
  try {

    const storage = await dietGetAll();


    const dailyDietIndex = storage.findIndex((diet) => diet.title === title);

    const dietsPorIndex = storage[dailyDietIndex].data.filter((item) => item.name !== diet);
    console.log(dietsPorIndex);
    

    if (dailyDietIndex !== -1) {
      
      if (!dietsPorIndex.length) {
        
        storage.splice(dailyDietIndex, 1);
      } else {
        storage[dailyDietIndex].data = dietsPorIndex;
      }
     
      await AsyncStorage.setItem(DIET_COLLECTION,JSON.stringify(storage));

    }
    else {
      console.log(`Não foi possível encontrar a dieta com o título '${title}'`);
    }
 
  } catch (error) {
    console.error("Erro ao remover a dieta:", error);
  }
}