import { useNavigation } from "@react-navigation/native";

import { 
  Container, DailyView, Hours, 
  Separator, Status, StatusView, Title 
  } from "./styles";
  
type Props = {
  status: boolean;
}
export function DietCard({ status }: Props) {
  const navigation = useNavigation();
  return(
    <Container
      onPress={() => navigation.navigate("DailyDiet")}
    >
      <DailyView>
        <Hours>20:00</Hours>
        <Separator/>
        <Title>Sanduíche</Title>
      </DailyView>
      
      <StatusView>
        <Status status={status}/>
      </StatusView>
    </Container>
  );
}
