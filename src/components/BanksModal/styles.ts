import { TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import theme from 'styles/theme';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${theme.COLORS.WHITE_100};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: 60px;
`;

export const Header = styled.View.attrs({
    borderBottomWidth: 0.5,
    borderBottomColor: `${theme.COLORS.PURPLEDARK3}`
})`
    padding: 15px 20px;
`;

export const Title = styled.Text`
    text-align: center;
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    font-size: 20px;
    font-weight: 700;
    color: ${theme.COLORS.PURPLEDARK3};
`;

export const InputContainer = styled.View.attrs({
    borderBottomWidth: 0.5,
    borderBottomColor: `${theme.COLORS.PURPLEDARK3}`
})`
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    width: 100%;
    height: 50px;
`;

export const Input = styled(TextInput)`
    width: 85%;
    flex: 1;
    height: 50px;
    font-size: 16px;
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
`;

export const EraserButton = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;

`;

export const Button = styled(TouchableOpacity)`
    background-color: ${theme.COLORS.PURPLELIGHT};
    border-radius: 15px;
    padding: 20px;
    margin: 10px 20px;
`;

export const TitleOption = styled.Text`
    fontSize: 22px;
    color: ${theme.COLORS.WHITE_100};
    text-align: center;
`;

export const Footer = styled.View.attrs({
    borderTopWidth: 0.5,
    borderTopColor: `${theme.COLORS.PURPLEDARK3}`,
})`
    margin-bottom: 10px;
`;
