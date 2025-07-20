import React from "react";
import { ButtonGoBack, Container, Icon, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  const navigation = useNavigation();
  return (
    <Container>
      <ButtonGoBack onPress={() => navigation.goBack()}>
        <Icon />
      </ButtonGoBack>
      <Title>{title}</Title>
    </Container>
  );
}
