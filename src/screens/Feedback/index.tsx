import { FeedbackPositive } from "@components/FeedbackCard/FeedbackPositive";
import { ButtonHome, ButtonTitle, Container } from "./styles";
import { FeedbackNegative } from "@components/FeedbackCard/FeedbackNegative";
import { useNavigation, useRoute } from "@react-navigation/native";

type FeedbackProps ={
  status: boolean;
}

export function Feedback(){
  const { status } = useRoute().params as FeedbackProps;
  const navigation = useNavigation();

  return (
    <Container>
      {status
      ? <FeedbackPositive status={status} />
      : <FeedbackNegative status={status} />
      }
      <ButtonHome
        onPress={() => navigation.navigate('Home')}
      >
        <ButtonTitle>Ir para a página inicial</ButtonTitle>
      </ButtonHome>
    </Container>
  );
}