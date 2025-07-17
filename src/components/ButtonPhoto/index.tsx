import { type PressableProps } from "react-native";

import { Container, Icon, Photo } from "./styles";

type Props = PressableProps & {
  image: string | null;
};

export function ButtonPhoto({ image, ...rest }: Props) {
  return (
    <Container {...rest}>
      {!image ? <Icon /> : <Photo source={{ uri: image }} />}
    </Container>
  );
}
