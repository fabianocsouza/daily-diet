import { VirtualizedList } from "react-native";

import { Container } from "./styles";

import { Main } from "./main";

export const Home = () => {

  return(
    <Container>
      <VirtualizedList
      style={{padding:2}}
      getItemCount={() =>1}
      renderItem={(_) =>  <Main/>}
      keyExtractor={(_, index) => index.toString()}
      getItem={() => ({})}
      showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
