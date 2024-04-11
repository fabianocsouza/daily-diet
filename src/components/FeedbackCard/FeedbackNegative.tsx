import { useRoute } from "@react-navigation/native";
import { Container, Description, StatusImage, Title } from "./styles";
import negativeImg from "@assets/negative.png"

type Props = {
  status: boolean;
}
export function FeedbackNegative({ status }: Props){
  return(
    <Container> 
      <Title status={status} >Que pena!</Title>
      <Description>Você saiu da dieta dessa vez, mas continue se esforçando e não desista!</Description>
      <StatusImage source={negativeImg}/>
    </Container>
  );
}