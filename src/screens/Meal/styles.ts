import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
  status?: string;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;

  background-color: ${({ theme, status }) =>
    status === "SIM" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-radius: 25px;
  padding: 25px;

  gap: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.XL}px;
    font-family: ${theme.COLORS.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.MD}px;
    font-family: ${theme.COLORS.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.LG}px;
    font-family: ${theme.COLORS.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-bottom: 20px;
`;
export const DescriptionDate = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.LG}px;
    font-family: ${theme.COLORS.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-bottom: 10px;
`;
export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.MD}px;
    font-family: ${theme.COLORS.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const InfoStatus = styled.View`
  width: 180px;
  height: 40px;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  border-radius: 50px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  gap: 10px;
  margin-bottom: -600px;
`;

export const Status = styled.View`
  width: 10px;
  height: 10px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`;
