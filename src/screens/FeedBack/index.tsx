import { Button } from "@/components/Button";
import { Container, Image, Strong, SubTitle, Title } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import feedBackPositive from "@/assets/positive.png";
import feedBackNegative from "@/assets/negative.png";
import { useState } from "react";

type RouteParams = {
  diet: string;
};

export function FeedBack() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { diet } = params as RouteParams;

  return (
    <Container>
      <>
        <Title diet={diet}>
          {diet === "SIM" ? "Continue assim!" : "Que nada!"}
        </Title>
        {diet === "SIM" ? (
          <>
            <SubTitle>
              Você continua <Strong>dentro da dieta.</Strong> Muito bem!
            </SubTitle>
          </>
        ) : (
          <>
            <SubTitle>
              Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se
              esforçando e não desista!
            </SubTitle>
          </>
        )}
        <Image source={diet === "SIM" ? feedBackPositive : feedBackNegative} />
      </>

      <Button
        title="Ir para a página inicial"
        onPress={() => navigation.navigate("home")}
        style={{ width: 250 }}
      />
    </Container>
  );
}
