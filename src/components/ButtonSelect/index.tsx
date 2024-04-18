import { TouchableOpacityProps } from "react-native";
import { Container, Name, Status } from "./styles";

type Props = TouchableOpacityProps & {
  text: string;
  active: boolean;
  status?: boolean;
}

export function  ButtonSelect({text, active, status, ...props}: Props){
  return (
    <Container {...props} active={active}  status={status}>
      <Status status={status} />
      <Name>{text}</Name>
    </Container>
  );
}