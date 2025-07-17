import { Pressable } from "react-native";

import styled, { css } from "styled-components/native";
import { User } from "phosphor-react-native";

export const Container = styled(Pressable)`
  width: 55px;
  height: 55px;

  border-radius: 50%;
  border: 3px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_400};
    border-color: ${theme.COLORS.GRAY_200};
  `}

  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

export const Photo = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const Icon = styled(User).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 24,
}))``;
