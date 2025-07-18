import { useNavigation } from "@react-navigation/native";
import {
  ButtonGoBack,
  Container,
  Content,
  Header,
  HeaderSubTitle,
  HeaderTitle,
  Icon,
  Info,
  Registration,
  ResultGreen,
  ResultRed,
  SubTitleStatics,
  TitleStatics,
  Value,
} from "./styles";

import theme from "@/theme";

export function Static() {
  const navigation = useNavigation();
  return (
    <Container style={{ backgroundColor: theme.COLORS.GREEN_LIGHT }}>
      <Header>
        <ButtonGoBack onPress={() => navigation.goBack()}>
          <Icon />
        </ButtonGoBack>
        <HeaderTitle>90,86%</HeaderTitle>
        <HeaderSubTitle>das refeições dentro da dieta</HeaderSubTitle>
      </Header>
      <Content>
        <TitleStatics>Estatísticas gerais</TitleStatics>

        <Registration>
          <Value>22</Value>

          <SubTitleStatics>
            melhor sequência de pratos dentro da dieta
          </SubTitleStatics>
        </Registration>

        <Registration>
          <Value>109</Value>

          <SubTitleStatics>refeições registradas</SubTitleStatics>
        </Registration>

        <Info>
          <ResultGreen>
            <Value>99</Value>
            <SubTitleStatics>refeições dentro da dieta</SubTitleStatics>
          </ResultGreen>
          <ResultRed>
            <Value>10</Value>
            <SubTitleStatics>refeições fora da dieta</SubTitleStatics>
          </ResultRed>
        </Info>
      </Content>
    </Container>
  );
}
