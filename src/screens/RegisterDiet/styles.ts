import { Pressable, TextInput } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";
import { SafeAreaView } from "react-native-safe-area-context";

type FormBorderStyleProps = {
  isActive?: string;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_500};

  align-items: center;
`;

export const Header = styled.View`
  width: 100%;

  margin-top: 15px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled(Pressable)`
  right: 100px;
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
    `}
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;

  margin-top: 40px;
  border-radius: 20px;
  padding: 30px;

  background-color: ${({theme}) => theme.COLORS.WHITE};
`

export const FormDiet = styled.View`
  margin-top: 20px;
  margin-bottom: 110px;
`;

export const LabelText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const InputName = styled(TextInput)<FormBorderStyleProps>`
  width: 100%;
  height: 60px;

  ${({theme, isActive}) => css`
    border:  1.5px solid ${ isActive === 'InputName' ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
  border-radius: 6px;
  padding: 14px;

  margin-bottom: 20px;
`;

export const InputDescription = styled.TextInput.attrs<FormBorderStyleProps>({
  multiline: true,
  numberOfLines: 4,
  maxLength: 200,
})`
  width: 100%;
  height: 142px;
  ${({theme, isActive}) => css`
    border:  1.5px solid ${ isActive === 'InputDescription' ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
  border-radius: 6px;
  padding: 14px;
  `;

export const DayTime = styled.View`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Day = styled.View`
  flex-direction: column;
`;

export const Time = styled.View`
  flex-direction: column;
`;

export const InputDate = styled(TextInputMask)<FormBorderStyleProps>`
  width: 172px;
  height: 60px;

  ${({theme, isActive}) => css`
    border:  1.5px solid ${ isActive === 'InputDate' ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
  border-radius: 6px;
  padding: 14px;
  text-align: center;
  `;

export const InputHours = styled(TextInputMask)<FormBorderStyleProps>`
  width: 172px;
  height: 60px;

  ${({theme, isActive}) => css`
    border:  1.5px solid ${ isActive === 'InputHours' ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
  border-radius: 6px;
  padding: 14px;
  text-align: center;
  `;
  
export const Options = styled.View`
margin-top: 30px;`;

export const ButtonView = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

