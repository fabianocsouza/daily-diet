import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Form = styled.View`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 25px;
  padding: 50px 24px 0px;

  gap: 10px;
`;

export const ButtonGoBack = styled(TouchableOpacity)`
  left: -100px;
`;
export const Header = styled.View`
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.XL}px;
    font-family: ${theme.COLORS.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.COLORS.FONT_SIZE.MD}px;
    font-family: ${theme.COLORS.FONT_FAMILY.BOLD};
  `}
`;

export const InputName = styled.TextInput`
  width: 100%;
  height: 55px;

  border-radius: 6px;
  border: 1.5px;

  ${({ theme }) => css`
    border-color: ${theme.COLORS.GRAY_500};
  `}
  margin-bottom: 20px;
`;
export const InputDescription = styled.TextInput`
  width: 100%;
  height: 130px;

  border-radius: 6px;
  border: 1.5px;

  ${({ theme }) => css`
    border-color: ${theme.COLORS.GRAY_500};
  `}

  margin-bottom: 20px;
`;
export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Today = styled.View``;
export const Hours = styled.View``;
export const InputDate = styled.TextInput`
  margin-top: 5px;
  width: 185px;
  height: 55px;

  border-radius: 6px;
  border: 1.5px;

  ${({ theme }) => css`
    border-color: ${theme.COLORS.GRAY_500};
  `}
`;
export const InputHours = styled.TextInput`
  width: 185px;
  height: 55px;
  margin-top: 5px;

  border-radius: 6px;
  border: 1.5px;

  ${({ theme }) => css`
    border-color: ${theme.COLORS.GRAY_500};
  `}
`;
export const DietCheck = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 130px;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GRAY_200,
}))``;
