import { useState } from "react";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import theme from "src/theme";
import { 
  ArrowL, Container, Content,
   DateHours, DateHoursTitle, Description, 
   Header, IconButton, Status, StatusDescription, 
   StatusView, Title, TitleDiet } from "./style";

import { Modal } from "@components/Modal";
import { Button } from "@components/Button";

import { updateData } from "@service/updateData";
import { dietRemove } from "@storage/diet/dietRemove";

type Props = {
  title: string;
  diet: string;
}

export function DailyDiet() {
  const { diet, title } = useRoute().params as Props;
  const [visible, setVisible] = useState(false);
   
  const data = updateData();
  const navigation = useNavigation();

  const date = title.replace(/\//g, ".");
  const daily = data.flatMap(item => item.data).find(( { name } ) => name === diet);

  async function handleRemove() {
    await dietRemove(diet, date);
    navigation.navigate("Home");
  }
 
  return (
    <Container status={daily?.status}>
      <Header>
        <IconButton
          onPress={()=>navigation.navigate("Home")}
        >
        <ArrowL/>
        </IconButton>
        <Title>Refeição</Title>
      </Header>
      <Content>
        <TitleDiet>{daily?.name}</TitleDiet>
        <Description>{daily?.description}</Description>
        <DateHoursTitle>Data e hora</DateHoursTitle>
        <DateHours>{daily?.date} às {daily?.time}</DateHours>
        <StatusView>
          <Status status={daily?.status} />
          <StatusDescription>dentro da dieta</StatusDescription>
        </StatusView>
        <Modal visible={visible} setVisible={setVisible} handleRemove={handleRemove} />
        <Button  title="Editar refeição"
          onPress={()=>navigation.navigate("Register", {edit: true, title: date, diet: diet})}
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