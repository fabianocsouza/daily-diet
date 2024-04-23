import { useNavigation, useRoute } from "@react-navigation/native";

import { CardGray, CardGreen, CardRed, Container, Content,
         Description, Result, Title, Value} from "./styles";

import { PercentCard } from "@components/PercentCard";
import { StatusDietDTO } from "@dtos/StatusDietDTO";

type Props = {
  data: StatusDietDTO;
}

export const Statistic = () => {
  const { data } = useRoute().params as Props;
  
  const navigation = useNavigation();

  return(
    <Container percent={data.percent}>
      <PercentCard active onPress={()=>navigation.goBack()} />
      <Content>
        <Title>Estatísticas gerais</Title>
        <CardGray>
          <Value>{data.bestSequence}</Value>
          <Description>melhor sequência de pratos dentro da dieta</Description>
        </CardGray>
        <CardGray>
          <Value>{data.total}</Value>
          <Description>refeições registradas</Description>
        </CardGray>
        <Result>
          <CardGreen>
            <Value>{data.positive}</Value>
            <Description>refeições dentro da dieta</Description>
          </CardGreen>
          <CardRed>
            <Value>{data.negative}</Value>
            <Description>refeições fora da dieta</Description>
          </CardRed>
        </Result>
      </Content>
    </Container>
  );
}