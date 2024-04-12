import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${ ({ theme }) => theme.COLORS.GRAY_700 };
  padding: 24px;
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 40px;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 55px;
`;
export const UserImg = styled.Image`
  width: 60px;
  height: 60px;
`;

export const NewDiet = styled.View`
  margin-bottom: 30px;
`

export const Title = styled.Text`
  margin-top: 40px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  
    margin-bottom: 10px;
  `;

export const TitleDailyDiet = styled.Text`

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  `;