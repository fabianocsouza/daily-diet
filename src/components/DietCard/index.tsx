import { useNavigation } from "@react-navigation/native";

import { 
  Container, DailyView, Hours, 
  Separator, Status, StatusView, Title 
  } from "./styles";
  
import { DietStorageDTO } from "src/dtos/DietStorageDTO";

  
  
type Props = {
  data: DietStorageDTO;
}
export function DietCard({ data }: Props) {
  
  const navigation = useNavigation();
  return(
    <Container
      onPress={() => navigation.navigate("DailyDiet",{ diet: data.name, title: data.date} )}
    >
      <DailyView>
        <Hours>{data.time}</Hours>
        <Separator/>
        <Title>{data.name}</Title>
      </DailyView>
      
      <StatusView>
        <Status status={data.status}/>
      </StatusView>
    </Container>
  );
}
