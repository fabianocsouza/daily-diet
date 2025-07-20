import { Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  mode: "dark" | "light" | undefined;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 55px;

  ${({ theme, mode }) => css`
    background-color: ${mode === "dark"
      ? theme.COLORS.GRAY_200
      : theme.COLORS.GRAY_700};

    border: ${mode === "dark" ? 0 : 1}px;
    border-color: ${theme.COLORS.GRAY_200};
  `}

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 6px;

  margin-bottom: 2px;
`;
export const Title = styled.Text<Props>`
  ${({ theme, mode }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.MD}px;
    font-family: ${theme.COLORS.FONT_FAMILY.BOLD};
    color: ${mode === "dark" ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};
  `}
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 20,
}))<Props>`
  color: ${({ theme, mode }) =>
    mode === "dark" ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};
`;
