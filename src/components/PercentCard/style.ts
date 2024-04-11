import { MotiView } from "moti";
import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import { Pressable } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(Pressable)`
  width: 100%;
  height: 102px;
  background-color: transparent;

  border-radius: 8px;

  align-items: center;
  justify-content: center;

`;

export const Card = styled(MotiView)`
  width: 100%;
  height: 102px;

  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};

  border-radius: 8px;

  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ArrowL = styled(ArrowLeft).attrs({
  size: 24,
})`
  color: ${({theme}) => theme.COLORS.GREEN_DARK};
  right: 370px;
  top: 10px;
  position: absolute;
`
export const ArrowUpR = styled(ArrowUpRight).attrs({
  size: 24,
})`
  color: ${({theme}) => theme.COLORS.GREEN_DARK};
  left: 164px;
  top: 10px;
  
`

export const PercentageValue = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
  top: -10px;
`;

export const Description = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  top: -10px;
`;
