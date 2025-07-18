import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
`;

export const ButtonGoBack = styled(TouchableOpacity)``;

export const HeaderTitle = styled.Text`
  margin-top: -10px;
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.HX}px;
    font-family: ${theme.COLORS.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 6px;
  text-align: center;
`;

export const HeaderSubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.MD}px;
    font-family: ${theme.COLORS.FONT_FAMILY.REGULAR};
  `}

  text-align: center;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 35px;
  padding: 24px;
  align-items: center;
  gap: 15;
`;

export const TitleStatics = styled.Text`
  margin-top: 10;
  margin-bottom: 15;

  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.MD}px;
    font-family: ${theme.COLORS.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.HX}px;
    font-family: ${theme.COLORS.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  text-align: center;
`;

export const SubTitleStatics = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.MD}px;
    font-family: ${theme.COLORS.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}

  text-align: center;
`;
export const Registration = styled.View`
  width: 100%;
  height: 100px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
  `}
  border-radius: 8px;
  padding: 15px;
`;

export const Info = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ResultGreen = styled.View`
  width: 188px;
  height: 120px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GREEN_LIGHT};
  `}

  border-radius: 8px;

  justify-content: center;
  padding: 20px;
`;

export const ResultRed = styled.View`
  width: 188px;
  height: 120px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.RED_LIGHT};
  `}

  border-radius: 8px;

  justify-content: center;
  padding: 20px;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_DARK,
}))``;
