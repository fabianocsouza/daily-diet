import { useNavigation, useRoute } from "@react-navigation/native";

import { ButtonHome, ButtonTitle, Container } from "./styles";

import { FeedbackCard} from "@components/FeedbackCard";

type FeedbackProps ={
  status: boolean;
}

export function Feedback(){
  const { status } = useRoute().params as FeedbackProps;
  const navigation = useNavigation();

  return (
    <Container>
      <FeedbackCard status={status} />
      <ButtonHome
        onPress={() => navigation.navigate('Home')}
      >
        <ButtonTitle>Ir para a página inicial</ButtonTitle>
      </ButtonHome>
    </Container>
  );
}