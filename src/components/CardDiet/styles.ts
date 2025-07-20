import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  status: string;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 55px;

  border: 1.5px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  margin-bottom: 10px;
`;

export const InfoDiet = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Hours = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.SM}px;
    font-family: ${theme.COLORS.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Separator = styled.View`
  height: 18px;
  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.LG}px;
    font-family: ${theme.COLORS.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Status = styled.View<Props>`
  width: 17px;
  height: 17px;

  background-color: ${({ theme, status }) =>
    status === "SIM" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};

  border-radius: 50%;
`;
