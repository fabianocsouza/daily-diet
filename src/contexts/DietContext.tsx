import { ReactNode, createContext, useState } from "react";

import { DailyStorageDTO } from "src/dtos/DietStorageDTO";

export type DietContextDataProps = {
  data: DailyStorageDTO[];
  refreshData: (data: DailyStorageDTO[]) => Promise<void>;
}

type DietContextProviderProps = {
  children: ReactNode;
}

export const DietContext = createContext<DietContextDataProps>({} as DietContextDataProps);

  export function DietContextProvider({ children }: DietContextProviderProps) {
    const [ dailyDiet, setDailyDiet ] = useState<DailyStorageDTO[]>([] as DailyStorageDTO[] )

   async function refreshData( data: DailyStorageDTO[]){
      setDailyDiet(data)
    }
  return (
    <DietContext.Provider value={ { data: dailyDiet, refreshData }}>
      { children }
    </DietContext.Provider>
  )
}