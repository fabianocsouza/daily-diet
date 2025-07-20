import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import logoImg from "@/assets/logo.png";

import { ButtonPhoto } from "@/components/ButtonPhoto";
import { CardStatics } from "@/components/CardStatics";

import { Container, Header, Logo, Title } from "./styles";
import { Button } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";

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

      <Title>Refeições</Title>
      <Button
        title="Nova refeição"
        isIcon
        onPress={() => navigation.navigate("meal")}
        style={{ top: -470 }}
      />
    </Container>
  );
}
