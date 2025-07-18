import React from "react";
import { Container, Icon, Title } from "./styles";
import type { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  onPress: () => void;
};

export function Button({ title, onPress, ...rest }: Props) {
  return (
    <Container onPress={onPress} {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
