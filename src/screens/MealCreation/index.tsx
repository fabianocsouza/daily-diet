import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Today,
  DateInfo,
  Hours,
  Label,
  InputName,
  InputDescription,
  InputHours,
  InputDate,
  DietCheck,
  Form,
} from "./styles";

import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { ButtonCheck } from "@/components/ButtonCheck";

export function MealCreation() {
  const [isCheck, setIsCheck] = useState<"NÃO" | "SIM">();

  const navigation = useNavigation();

  return (
    <Container>
      <Header title="Nova Refeição" />

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
