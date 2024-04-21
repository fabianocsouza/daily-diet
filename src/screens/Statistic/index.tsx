import { useNavigation, useRoute } from "@react-navigation/native";

import { Card, Card2, Card3, Container, Content, Description, Result, Title, Value} from "./styles";

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
        <Card>
          <Value>{data.bestSequence}</Value>
          <Description>melhor sequência de pratos dentro da dieta</Description>
        </Card>
        <Card>
          <Value>{data.total}</Value>
          <Description>refeições registradas</Description>
        </Card>
        <Result>
          <Card2>
            <Value>{data.positive}</Value>
            <Description>refeições dentro da dieta</Description>
          </Card2>
          <Card3>
            <Value>{data.negative}</Value>
            <Description>refeições fora da dieta</Description>
          </Card3>
        </Result>
      </Content>
    </Container>
  );
}