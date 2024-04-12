import { Text, TouchableOpacityProps } from "react-native";
import { Container, Icon, NameButton } from "./styles";


type Props = TouchableOpacityProps & {
  title: string;
  showDark?: boolean;
}

export function Button({ showDark=true, title, ...props}: Props){
    
  return(
    <Container showDark={showDark} {...props}>
      <Icon>
        {props.children}
      </Icon>
      <NameButton showDark={showDark} >{title}</NameButton>
    </Container>
  );
}
