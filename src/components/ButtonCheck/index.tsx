import React from "react";
import { Container, Point, Title } from "./styles";
import type { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  check?: "NÃO" | "SIM";
  isPoint?: boolean;
};

export function ButtonCheck({ title, check, isPoint = false, ...rest }: Props) {
  return (
    <Container {...rest} isCheck={check} isPoint={isPoint}>
      <Point isPoint={isPoint} />
      <Title>{title}</Title>
    </Container>
  );
}
