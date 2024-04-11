import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};

`;

export const Content = styled.View`
  width: 100%;
  height: 100%;

  margin-top: 30px;
  border-radius: 20px;

  background-color: ${({theme}) => theme.COLORS.WHITE};

  padding: 40px;

  align-items: center;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  margin-bottom: 30px;

`;
export const Card = styled.View`
  width: 100%;
  height: 102px;

  background-color: ${({theme}) => theme.COLORS.GRAY_600};

  padding: 16px;
  border-radius: 8px;

  align-items: center;

  margin-bottom: 16px;
`;
export const Value = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;
export const Description = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  text-align: center;
`;

export const Result = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`
export const Card2 = styled.View`
  width: 170px;
  height: 120px;
  
  align-items: center;

  padding: 16px;
  border-radius: 8px;

  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
  
`;

export const Card3 = styled.View`
  width: 170px;
  height: 120px;

  align-items: center;

  padding: 16px;
  border-radius: 8px;

  background-color: ${({theme}) => theme.COLORS.RED_LIGHT};
  
`;