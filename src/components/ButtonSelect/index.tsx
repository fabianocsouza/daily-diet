import { Container, Name, Status } from "./styles";

type Props = {
  text: string;
  active: boolean;
  status?: boolean;
}

export function  ButtonSelect({text, active, status }: Props){
  return (
    <Container active={active}  status={status}>
      <Status status={status} />
      <Name>{text}</Name>
    </Container>
  );
}