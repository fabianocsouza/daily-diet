import React from "react";
import { Container, Icon, Title } from "./styles";
import type { TouchableOpacityProps } from "react-native";
import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native";

export const Icons = {
  plus: Plus,
  pencil: PencilSimpleLine,
  trash: Trash,
};

export type IconName = keyof typeof Icons;

type Props = TouchableOpacityProps & {
  title: string;
  isIcon?: boolean;
  name?: IconName;
  onPress?: () => void;
  mode?: "dark" | "light";
};

export function Button({
  title,
  isIcon,
  name,
  mode = "dark",
  onPress,
  ...rest
}: Props) {
  const SelectedIcon = Icons[name as keyof typeof Icons] || Plus;
  return (
    <Container mode={mode} onPress={onPress} {...rest}>
      {isIcon && <Icon mode={mode} as={SelectedIcon} />}
      <Title mode={mode}>{title}</Title>
    </Container>
  );
}
