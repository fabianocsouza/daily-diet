import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { useDiet } from "@hooks/useDiet";
import { dietGetAll } from "@storage/diet/dietGetAll";
import { DailyStorageDTO } from "@dtos/DietStorageDTO";

export function updateData() {
  const [ dailyDiet, setDailyDiets ] = useState<DailyStorageDTO[]>([]);
  const { refreshData } =  useDiet();

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