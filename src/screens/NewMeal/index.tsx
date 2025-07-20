import {
  ButtonGoBack,
  Container,
  Today,
  DateInfo,
  Header,
  Hours,
  Icon,
  Label,
  Title,
  InputName,
  InputDescription,
  InputHours,
  InputDate,
  DietCheck,
  Form,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@/components/Button";
import { ButtonCheck } from "@/components/ButtonCheck";
import { useState } from "react";

export function NewMeal() {
  const [isCheck, setIsCheck] = useState<"NÃO" | "SIM">();

  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <ButtonGoBack onPress={() => navigation.goBack()}>
          <Icon />
        </ButtonGoBack>
        <Title>Nova Refeição</Title>
      </Header>

      <Form>
        <Label>Nome</Label>
        <InputName />
        <Label>Descrição</Label>
        <InputDescription />

        <DateInfo>
          <Today>
            <Label>Data</Label>
            <InputDate />
          </Today>
          <Hours>
            <Label>Hora</Label>
            <InputHours />
          </Hours>
        </DateInfo>

        <Label>Está dentro da dieta?</Label>
        <DietCheck>
          <ButtonCheck
            title="Sim"
            isPoint
            check={isCheck}
            onPress={() => setIsCheck("SIM")}
          />
          <ButtonCheck
            title="Não"
            check={isCheck}
            onPress={() => setIsCheck("NÃO")}
          />
        </DietCheck>

        <Button
          title="Cadastrar refeição"
          onPress={() => navigation.navigate("feedback", { diet: isCheck })}
        />
      </Form>
    </Container>
  );
}
