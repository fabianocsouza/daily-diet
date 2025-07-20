import theme from "@/theme";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  isPoint?: boolean;
  isCheck?: "NÃO" | "SIM";
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 185px;
  height: 60px;

  border-radius: 6px;

  background-color: ${({ theme, isCheck, isPoint }) =>
    isCheck === "SIM" && isPoint
      ? theme.COLORS.GREEN_LIGHT
      : isCheck === "NÃO" && !isPoint
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600};

  border: 1px;
  border-color: ${({ theme, isCheck, isPoint }) =>
    isCheck === "SIM" && isPoint
      ? theme.COLORS.GREEN_DARK
      : isCheck === "NÃO" && !isPoint
      ? theme.COLORS.RED_DARK
      : theme.COLORS.GRAY_600};

  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 10px;
`;

export const Point = styled.View<Props>`
  width: 10px;
  height: 10px;

  background-color: ${({ theme, isPoint }) =>
    isPoint ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

  border-radius: 50%;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.COLORS.FONT_SIZE.LG}px;
    font-family: ${theme.COLORS.FONT_FAMILY.BOLD};
  `}
`;
