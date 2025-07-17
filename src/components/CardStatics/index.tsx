import {
  ButtonCard,
  Container,
  Content,
  Icon,
  SubTitle,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export function CardStatics() {
  const navigate = useNavigation();
  return (
    <Container>
      <ButtonCard
        activeOpacity={0.8}
        onPress={() => navigate.navigate("static")}
      >
        <Content>
          <Title>90,86%</Title>
          <SubTitle>das refeições dentro da dieta</SubTitle>
        </Content>
        <Icon />
      </ButtonCard>
    </Container>
  );
}
