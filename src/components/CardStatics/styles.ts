import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  padding-top: 35px;
  align-items: "center";
`;

export const Content = styled.View``;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_DARK,
}))`
  top: -32px;
  left: 65px;
`;

export const ButtonCard = styled(TouchableOpacity)`
  width: "100%";
  height: 120px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  border-radius: 8px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.HX}px;
    font-family: ${theme.COLORS.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 6px;
  text-align: center;
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.MD}px;
    font-family: ${theme.COLORS.FONT_FAMILY.REGULAR};
  `}

  text-align: center;
`;
