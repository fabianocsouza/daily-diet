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
  width: 62px;
  height: 62px;
  border-radius: 100px;
  ${ ({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_500};
  `};
`;
export const ImageButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;

  ${ ({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
    border: 4px solid ${theme.COLORS.GRAY_300};
  `};

  align-items: center;
  justify-content: center;

  border-radius: 100px;
  
`;

export const ButtonRemovePhoto = styled.TouchableOpacity`
  width: 64px;
  height: 40%;
  background-color: transparent;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;

  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;

  position: absolute;
  left: 311px;
  top: 32px
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