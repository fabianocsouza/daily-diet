import logoImg from "@/assets/logo.png";

import { Container, Header, Logo } from "./styles";

import * as ImagePicker from "expo-image-picker";

import { ButtonPhoto } from "@/components/ButtonPhoto";
import { useState } from "react";

export function Home() {
  const [image, setImage] = useState<string | null>(null);

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
    </Container>
  );
}
