import { Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  top: -470px;
  width: 100%;
  height: 55px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 6px;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.MD}px;
    font-family: ${theme.COLORS.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.WHITE,
}))``;
