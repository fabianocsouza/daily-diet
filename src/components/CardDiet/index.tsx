import type { TouchableOpacityProps } from "react-native";

import { Container, Hours, InfoDiet, Separator, Status, Title } from "./styles";

type DietProps = {
  hours: string;
  title: string;
  status: string;
};

type Props = TouchableOpacityProps & {
  data: DietProps;
};

export function CardDiet({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <InfoDiet>
        <Hours>{data.hours}</Hours>
        <Separator />
        <Title>{data.title}</Title>
      </InfoDiet>
      <Status status={data.status} />
    </Container>
  );
}
