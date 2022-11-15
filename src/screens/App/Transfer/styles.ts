import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import theme from 'styles/theme';

export const Container = styled.View`
    flex: 1;
    width: 100%;
`;

export const ViewOption = styled.View`
    align-items: center;
    margin: 30px 0;
`;

export const ButtonOptionBank = styled(TouchableOpacity)`
    width: 90%;
    height: 60px;
    background-color: #dcdcdc;
    justify-content: space-between;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
    padding: 0px 30px;
`;

export const Title = styled.Text`
    text-align: left;
    font-size: 18px;
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    font-weight: 600;
`;

export const ViewValue = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 40px;
`;

export const Input = styled.TextInput`
    font-family: ${theme.FONTS.RUBIKMEDIUM};
    font-weight: bold;
    font-size: 36px;
    max-width: 100%;
    text-align: center;
    color: ${theme.COLORS.PURPLEDARK3};
`;

export const ViewKeyboard = styled.View`
    flex-direction: row;
    width: 99%;
    flex-wrap: wrap;
    align-items: center;
    align-self: center;
    margin-bottom: 50px;
`;

export const Button = styled.TouchableOpacity`
    width: 30%;
    height: 60px;
    margin: 5px;
    align-items: center;
    justify-content: center;
`;

export const TitleBtn = styled.Text`
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    font-size: 24px;
    font-weight: 500;
    color: #363853;
`;

export const Footer = styled.View`
    width: 100%;
`;
