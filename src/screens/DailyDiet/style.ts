import { Pressable } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
type Props = {
  status?: boolean;
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;

  background-color: ${({theme, status }) =>
  status
  ? theme.COLORS.GREEN_LIGHT
  : theme.COLORS.RED_LIGHT
};
`;
export const Header = styled.View`
  margin-top: 15px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
export const IconButton = styled(Pressable)`
  right: 130px;
`;

export const ArrowL = styled(ArrowLeft).attrs({
  size: 30
})`
  color: ${({theme}) => theme.COLORS.GRAY_200};
`;
export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_200};
  `};
`;
export const Content = styled.View`
  width: 100%;
  height: 100%;

  margin-top: 40px;
  border-radius: 20px;
  padding: 24px;

  background-color: ${({theme}) => theme.COLORS.WHITE};
`;
export const TitleDiet = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;
export const Description = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_200};
  `};
`;
export const DateHoursTitle = styled.Text`
  margin-top: 15px;

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;
export const DateHours = styled.Text`
   margin-top: 10px;

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `};

  margin-bottom: 30px;
`;
export const StatusView = styled.View`
  width: 150px;
  height: 40px;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: ${({theme}) => theme.COLORS.GRAY_600};

  border-radius: 100px;

  margin-bottom: 350px;
`;
export const StatusDescription = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;


export const Status = styled.View<Props>`
  width: 8px;
  height: 8px;

  background-color: ${({theme, status }) => 
  status
    ? theme.COLORS.GREEN_DARK
    : theme.COLORS.RED_DARK
  };

  border-radius: 50px;

  right: 8px;
`;
