import { Container, Hours, InfoDiet, Separator, Status, Title } from "./styles";

type DietProps = {
  hours: string;
  title: string;
  status: string;
};

type Props = {
  data: DietProps;
};

export function CardDiet({ data }: Props) {
  return (
    <Container>
      <InfoDiet>
        <Hours>{data.hours}</Hours>
        <Separator />
        <Title>{data.title}</Title>
      </InfoDiet>
      <Status status={data.status} />
    </Container>
  );
}
