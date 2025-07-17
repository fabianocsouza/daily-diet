import { useNavigation } from "@react-navigation/native";

import { ButtonCard, Container, Content, SubTitle, Title } from "./styles";

export function CardStatics() {
  const navigate = useNavigation();
  return (
    <Container>
      <Content>
        <ButtonCard
          activeOpacity={0.8}
          onPress={() => navigate.navigate("static")}
        >
          <Title>90,86%</Title>
          <SubTitle>das refeições dentro da dieta</SubTitle>
        </ButtonCard>
      </Content>
    </Container>
  );
}
