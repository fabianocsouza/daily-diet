import { useFocusEffect } from "@react-navigation/native";
import { dietGetAll } from "@storage/diet/dietGetAll";
import { useCallback, useState } from "react";
import { DailyStorageDTO } from "src/dtos/DietStorageDTO";
import { useAuth } from "src/hooks/useAuth";

export function updateData() {

  const [ dailyDiet, setDailyDiets ] = useState<DailyStorageDTO[]>([]);
  const { refreshData } =  useAuth();


  async function fetchDailyDiet(){
    try {
      const data = await dietGetAll();
      
      refreshData(data);
      setDailyDiets(data);
      
    } catch (error) {
      console.log(error);
      
    }
  }
   
  useFocusEffect( useCallback(() => {
    fetchDailyDiet();
  },[]));

  return dailyDiet;
}