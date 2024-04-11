import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.GRAY_700};
`;


export const ButtonHome = styled(TouchableOpacity)`
  width: 220px;
  height: 60px;

  background-color: ${({theme}) => theme.COLORS.GRAY_200};

  margin-top: 40px;

  border-radius: 6px;

  align-items: center;
  justify-content: center; 
`;

export const ButtonTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;