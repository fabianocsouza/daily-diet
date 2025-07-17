import theme from "@/theme";
import { Container, Title } from "./styles";

export function Static() {
  return (
    <Container style={{ backgroundColor: theme.COLORS.GRAY_700 }}>
      <Title>Tela Detalhes</Title>
    </Container>
  );
}
