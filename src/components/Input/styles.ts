import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from 'styles/theme';

export const Container = styled.View`
    width: 100%;
    height: 60px;
    justify-content: center;
    border-radius: ${RFValue(15)}px;
    margin-top: 10px;
    padding: 0 12px;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.COLORS.GRAY5};
`;

export const InputContainer = styled.TextInput`
    border: 0;
    flex: 1;
    width: 100%;
    height: 50px;
    border-radius: 8px;
    justify-content: center;
    font-size: 16px;
    font-family: ${theme.FONTS.POPPINSLIGHT};
`;
