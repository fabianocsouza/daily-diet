import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  padding-top: 35px;
  align-items: "center";
`;

export const ButtonCard = styled(TouchableOpacity)`
  width: "100%";
  height: 120px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.HX}px;
    font-family: ${theme.COLORS.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 6px;
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.MD}px;
    font-family: ${theme.COLORS.FONT_FAMILY.REGULAR};
  `}

  text-align: center;
`;
