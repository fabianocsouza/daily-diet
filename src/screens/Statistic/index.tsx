import { PercentCard } from "@components/PercentCard";
import { Card, Card2, Card3, Container, Content, Description, Result, Title, Value} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

export const Statistic = () => {
  
  const navigation = useNavigation();
  return(
    <Container>
      <PercentCard active onPress={()=>navigation.goBack()} />
      <Content>
        <Title>Estatísticas gerais</Title>
        <Card>
          <Value>22</Value>
          <Description>melhor sequência de pratos dentro da dieta</Description>
        </Card>
        <Card>
          <Value>109</Value>
          <Description>refeições registradas</Description>
        </Card>
        <Result>
          <Card2>
            <Value>109</Value>
            <Description>refeições dentro da dieta</Description>
          </Card2>
          <Card3>
            <Value>109</Value>
            <Description>refeições fora da dieta</Description>
          </Card3>
        </Result>
      </Content>
    </Container>
  );
}