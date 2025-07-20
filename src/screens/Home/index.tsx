import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import logoImg from "@/assets/logo.png";

import { ButtonPhoto } from "@/components/ButtonPhoto";
import { CardStatics } from "@/components/CardStatics";

import { Container, Date, Header, Logo, Title } from "./styles";
import { Button } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { CardDiet } from "@/components/CardDiet";
import { SectionList, View } from "react-native";

const DATA = [
  {
    title: "19.07.25",
    data: [
      { hours: "20:00", title: "X-tudo", status: "NÃO" },
      { hours: "16:00", title: "Whey protein com leite", status: "SIM" },
      { hours: "12:30", title: "Salada cesar com frango", status: "SIM" },
      { hours: "09:30", title: "Vitamina de banana", status: "SIM" },
    ],
  },
  {
    title: "20.07.25",
    data: [
      { hours: "20:00", title: "X-tudo", status: "NÃO" },
      { hours: "16:00", title: "Whey protein com leite", status: "SIM" },
      { hours: "12:30", title: "Salada cesar com frango", status: "SIM" },
      { hours: "09:30", title: "Vitamina de banana", status: "SIM" },
    ],
  },
];

export function Home() {
  const [image, setImage] = useState<string | null>(null);

  const navigation = useNavigation();

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }
  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <ButtonPhoto image={image} onPress={pickImage} />
      </Header>

      <CardStatics />

      <View style={{ top: 150, marginBottom: 170, gap: 10 }}>
        <Title>Refeições</Title>
        <Button
          title="Nova refeição"
          isIcon
          onPress={() => navigation.navigate("meal")}
        />
      </View>

      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <CardDiet data={item} />}
        renderSectionHeader={({ section: { title } }) => <Date>{title}</Date>}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
