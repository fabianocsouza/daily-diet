import React from "react";
import { ButtonGoBack, Container, Icon, Title } from "./styles";
import { Text } from "react-native";

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
