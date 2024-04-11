import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";


export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 60px;

  border-radius: 6px;

  align-items: center;
  flex-direction: row;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.GRAY_200};
`;
export const NameButton = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}

`;

export const Icon = styled.View`
  right: 12px;
`