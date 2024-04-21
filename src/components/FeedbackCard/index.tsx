import { Container, Description, Span, StatusImage, Title } from "./styles";

import negativeImg from "@assets/negative.png"
import positiveImg from "@assets/positive.png"

type Props = {
  status: boolean;
}


export function FeedbackCard({ status }: Props){

  function getMessage(status: boolean) {
    return {
      title: status? "Continue assim!" : "Que pena!",
      description: status? <>Você continua <Span> dentro da dieta.</Span> Muito bem!</>
      : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"
    };
  }
  
  const message = getMessage(status);

  return(
    <Container> 
      <Title status={status} >{message.title}</Title>
      <Description>{message.description}</Description>

      <StatusImage source={ status ? positiveImg : negativeImg}/>
    </Container>
  );
}