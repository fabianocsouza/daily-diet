import React from "react";
import { Container, Icon, Title } from "./styles";
import type { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  isIcon?: boolean;
  onPress: () => void;
};

export function Button({ title, isIcon, onPress, ...rest }: Props) {
  return (
    <Container onPress={onPress} {...rest}>
      {isIcon && <Icon />}
      <Title>{title}</Title>
    </Container>
  );
}
