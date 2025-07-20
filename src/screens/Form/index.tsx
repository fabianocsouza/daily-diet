import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

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
  Content,
} from "./styles";

import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { ButtonCheck } from "@/components/ButtonCheck";

type ParamsForm = {
  edit: string;
};

export function Form() {
  const [isCheck, setIsCheck] = useState<"NÃO" | "SIM">();

  const navigation = useNavigation();
  const { params } = useRoute();
  const { edit } = params as ParamsForm;

  return (
    <Container>
      <Header
        title={edit ? "Editar Refeição" : "Nova Refeição"}
        onPress={() => navigation.goBack()}
      />

      <Content>
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
          title={edit ? "Salvar alterações" : "Cadastrar refeição"}
          onPress={() =>
            edit
              ? navigation.goBack()
              : navigation.navigate("feedback", { diet: isCheck })
          }
        />
      </Content>
    </Container>
  );
}
