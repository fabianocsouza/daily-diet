import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { PencilSimpleLine, Trash } from "phosphor-react-native";

import { 
  ArrowL, Container, Content,
   DateHours, DateHoursTitle, Description, 
   Header, IconButton, Status, StatusDescription, 
   StatusView, Title, TitleDiet } from "./style";

import { Modal } from "@components/Modal";
import { Button } from "@components/Button";

import theme from "src/theme";

export function DailyDiet() {
    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <IconButton
          onPress={()=>navigation.navigate("Home")}
        >
        <ArrowL/>
        </IconButton>
        <Title>Refeição</Title>
      </Header>
      <Content>
        <TitleDiet>Sanduíche</TitleDiet>
        <Description>Sanduíche de pão integral com atum e salada de alface e tomate</Description>
        <DateHoursTitle>Data e hora</DateHoursTitle>
        <DateHours>12/04/24 às 20:00</DateHours>
        <StatusView>
          <Status/>
          <StatusDescription>dentro da dieta</StatusDescription>
        </StatusView>
        <Modal visible={visible} setVisible={setVisible} />
        <Button  title="Editar refeição"
          onPress={()=>navigation.navigate("Register")}
        >
          <PencilSimpleLine size={20} color={theme.COLORS.WHITE}/>
        </Button>
        <Button  showDark={false} title="Excluir refeição"
          onPress={() => setVisible(true)}
        >
          <Trash size={20} color={theme.COLORS.GRAY_100}/>
        </Button>
      </Content>
    </Container>
  );
}