import { Modal, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaProvider)`
  flex: 1;
`;

export const Content = styled(SafeAreaView)``;

export const ModalWindow = styled(Modal)``;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 24px;
`;
export const ModalContent = styled.View`
  width: 100%;
  height: 250px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-radius: 20px;
  align-items: center;
  justify-content: center;

  padding: 20px;
`;
export const ModalDescription = styled.Text`
  margin-bottom: 15px;
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.XL}px;
    font-family: ${theme.COLORS.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const ModalButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 15px;
`;
