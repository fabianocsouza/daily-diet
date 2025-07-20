import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
  diet: string;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding: 24px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, diet }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.XL}px;
    font-family: ${theme.COLORS.FONT_FAMILY.BOLD};
    color: ${diet === "SIM" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `};
  margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.LG}px;
    font-family: ${theme.COLORS.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `};
  margin-bottom: 50px;
`;

export const Strong = styled.Text`
  font-family: ${({ theme }) => theme.COLORS.FONT_FAMILY.BOLD};

  margin-bottom: 50px;
`;

export const Image = styled.Image`
  width: 336px;
  height: 432px;

  margin-bottom: 50px;
`;
