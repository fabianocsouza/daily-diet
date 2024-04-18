import { MotiView } from "moti";
import { Pressable } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";

export const Container = styled(Pressable)`
  width: 100%;
  height: 102px;
  background-color: transparent;

  border-radius: 8px;

  align-items: center;
  justify-content: center;

`;

type Props = {
  percent: number;
}
export const Card = styled(MotiView)<Props>`
  width: 380px;
  height: 102px;

  background-color: ${({theme, percent}) => 
    percent >= 50
    ? theme.COLORS.GREEN_LIGHT
    : theme.COLORS.RED_LIGHT
  };

  border-radius: 8px;

  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ArrowL = styled(ArrowLeft).attrs({
  size: 24,
})<Props>`
  color: ${({theme, percent}) => 
  percent >= 50
    ?theme.COLORS.GREEN_DARK
    : theme.COLORS.RED_DARK
  };
  right: 370px;
  top: 10px;
  position: absolute;
`
export const ArrowUpR = styled(ArrowUpRight).attrs({
  size: 24,
})<Props>`
  color: ${({theme, percent}) => 
  percent >= 50
    ?theme.COLORS.GREEN_DARK
    : theme.COLORS.RED_DARK
  };
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
