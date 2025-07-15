import { Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type PhotoProps = {
  isPhoto: boolean;
};

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Header = styled.View`
  width: "100%";
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 50px;
`;
