import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  showDark: boolean;
  size?: string;
}

export const Container = styled(TouchableOpacity)<Props>`
   ${({theme, showDark, size}) => css`
      width: ${size};
      background-color:  ${showDark
          ? theme.COLORS.GRAY_200
          : 'transparent'
          };
      border: 1px solid ${ showDark && theme.COLORS.GRAY_100};
    `};
  height: 60px;

  border-radius: 6px;

  align-items: center;
  flex-direction: row;
  justify-content: center;



  margin-bottom: 10px;
`;
export const NameButton = styled.Text<Props>`
  ${({theme, showDark}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${
      showDark
      ? theme.COLORS.WHITE
      : theme.COLORS.GRAY_100
    };
  `}

`;

export const Icon = styled.View`
  right: 12px;
`