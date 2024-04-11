import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  active: boolean;
  status?: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 175px;
  height: 60px;
  ${({theme, active, status }) => css`
  background-color:  ${ 
      active 
        ? ( status? theme.COLORS.GREEN_LIGHT: theme.COLORS.RED_LIGHT)
        : theme.COLORS.GRAY_600
      };

  border: 1px solid ${ 
      active 
        ?( status
          ? theme.COLORS.GREEN_DARK
          :theme.COLORS.RED_DARK
        )
        : theme.COLORS.GRAY_600
      };
  `}

  border-radius: 6px;

  align-items: center;
  flex-direction: row;
  justify-content: center;
`

export const Name = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;
type StatusProps = {
  status?: boolean;
}
export const Status = styled.View<StatusProps>`
  width: 10px;
  height: 10px;

  background-color: ${({theme, status}) => 
    status
  ? theme.COLORS.GREEN_DARK
  : theme.COLORS.RED_DARK
};

  border-radius: 50%;

  right: 10px;
`;