import { Container, Description, Span, StatusImage, Title } from "./styles";

import positiveImg from "@assets/positive.png"

type Props = {
  status: boolean;
}

export function FeedbackPositive({ status }: Props){
  return(
    <Container> 
      <Title status={status} >Continue assim!</Title>
      <Description>Você continua <Span>dentro da dieta.</Span> Muito bem!</Description>
      <StatusImage source={positiveImg}/>
    </Container>
  );
}