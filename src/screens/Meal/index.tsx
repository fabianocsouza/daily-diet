import React from "react";
import {
  Container,
  Content,
  Description,
  DescriptionDate,
  InfoStatus,
  Status,
  SubTitle,
  Text,
  Title,
} from "./styles";
import { Header } from "@/components/Header";
import { Button } from "@/components/Button";

export function Meal() {
  return (
    <Container status="SIM">
      <Header title="Refeição" />
      <Content>
        <Title>Sanduíche</Title>
        <Description>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Description>
        <SubTitle>Data e hora</SubTitle>
        <DescriptionDate>
          12/08/2022
          <Text> às </Text>
          16:00
        </DescriptionDate>

        <InfoStatus>
          <Status />
          <Text>dentro da dieta</Text>
        </InfoStatus>
        <Button
          title="Editar refeição"
          name="pencil"
          isIcon
          onPress={() => {}}
        />
        <Button
          title="Excluir refeição"
          name="trash"
          isIcon
          mode="light"
          onPress={() => {}}
        />
      </Content>
    </Container>
  );
}
