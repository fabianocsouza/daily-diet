import styled, { css } from "styled-components/native";

export const Container = styled.View`
  align-items: center;
`;

type Props = {
  status: boolean;
}

export const Title = styled.Text<Props>`
  margin-bottom: 10px;

  ${({theme, status }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${ status 
    ? theme.COLORS.GREEN_DARK
    : theme.COLORS.RED_DARK
  };
  `}
`;
export const Description = styled.Text`
  width: 350px;
  text-align: center;


  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-bottom: 50px;
`;

export const Span = styled.Text`
${({theme}) => css`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.LG}px;
  color: ${theme.COLORS.GRAY_100};
`}
`;


export const StatusImage = styled.Image`
  width: 260px;
  height: 350px;
`;