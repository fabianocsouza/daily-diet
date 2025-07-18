import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Header = styled.View`
  width: "100%";
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 50px;
`;

export const Title = styled.Text`
  top: -480px;

  ${({ theme }) => css`
    font-size: ${theme.COLORS.FONT_SIZE.LG}px;
    font-family: ${theme.COLORS.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
