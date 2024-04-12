import { Pressable } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(Pressable)`
  width: 100%;
  height: 60px;

  border: 1px solid ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  margin-bottom: 10px;
  padding: 15px;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  
`;
export const DailyView = styled.View`
  align-items: center;
  flex-direction: row;
  width: 300px;
`;
export const Hours = styled.Text`
  ${({theme}) => css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.SM}px;
      color: ${theme.COLORS.GRAY_100};
  `}
  margin-right: 15px;
`;
export const Separator = styled.View`
  width: 0;
  height: 16px;

  margin-right: 15px;

  border: 0.8px solid ${({theme}) => theme.COLORS.GRAY_400};
`;
export const Title = styled.Text`
   ${({theme}) => css`
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-size: ${theme.FONT_SIZE.LG}px;
      color: ${theme.COLORS.GRAY_200};
  `}
`;
export const StatusView = styled.View``;
type Props = {
  status: boolean;
}
export const Status = styled.View<Props>`
  width: 14px;
  height: 15px;

  background-color: ${({theme, status}) => 
    status
    ? theme.COLORS.GREEN_MID
    : theme.COLORS.RED_MID
  };

  border-radius: 50%;
`;