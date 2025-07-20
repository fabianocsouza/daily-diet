import React from "react";
import { ButtonGoBack, Container, Icon, Title } from "./styles";

type Props = {
  title: string;
  onPress: () => void;
};

export function Header({ title, onPress }: Props) {
  return (
    <Container>
      <ButtonGoBack onPress={onPress}>
        <Icon />
      </ButtonGoBack>
      <Title>{title}</Title>
    </Container>
  );
}
