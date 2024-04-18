import { DailyStorageDTO, DietStorageDTO } from "src/dtos/DietStorageDTO";
import { ReactNode, createContext, useState } from "react";

export type AuthContextDataProps = {
  data: DailyStorageDTO[];
  refreshData: (data: DailyStorageDTO[]) => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

  export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [ dailyDiet, setDailyDiet ] = useState<DailyStorageDTO[]>([] as DailyStorageDTO[] )

   async function refreshData( data: DailyStorageDTO[]){
      setDailyDiet(data)
    }
  return (
    <AuthContext.Provider value={ { data: dailyDiet, refreshData }}>
      { children }
    </AuthContext.Provider>
  )
}