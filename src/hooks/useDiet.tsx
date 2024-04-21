import { useContext } from "react";
import { DietContext } from "src/contexts/DietContext";

export function useDiet(){
  const context = useContext(DietContext);

  return context;
}