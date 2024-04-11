import { Text, TouchableOpacityProps } from "react-native";
import { Container, Icon, NameButton } from "./styles";


type Props = TouchableOpacityProps & {
  title: string;
}

export function Button({title, ...props}: Props){
    
  return(
    <Container {...props}>
      <Icon>
        {props.children}
      </Icon>
      <NameButton>{title}</NameButton>
    </Container>
  );
}
