import { TouchableOpacityProps } from "react-native";

import { Container, Icon, NameButton } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  showDark?: boolean;
  size?: string;
}

export function Button({ showDark=true, title, size='100%', ...props}: Props){
    
  return(
    <Container size={size} showDark={showDark} {...props}>
      <Icon>
        {props.children}
      </Icon>
      <NameButton showDark={showDark} >{title}</NameButton>
    </Container>
  );
}
