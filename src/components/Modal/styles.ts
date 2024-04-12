import { StyleSheet } from "react-native";
import styled, { css } from "styled-components/native";

import theme from "src/theme";

export const ModalBackground = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_50};

  justify-content: center;
  align-items: center;
`;


export const Description = styled.Text`
  margin-top: 20px;
  ${({theme}) => css`
    font-size: ${ theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${ theme.COLORS.GRAY_200};
  `}

  text-align: center;
`;

export const ModalButton = styled.View`
  width: 315px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  left: 15px;
  margin-top: 30px;
`;

export const styles = StyleSheet.create({
  modalContainer: {
    width: '90%',
    backgroundColor: theme.COLORS.GRAY_700,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 8,
    elevation: 20,
  }});
