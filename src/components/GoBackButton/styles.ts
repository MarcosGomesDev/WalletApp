import { Platform, StatusBar, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import theme from 'styles/theme';

export const Container = styled.View`
padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;

`;

export const Button = styled(TouchableOpacity)`
    margin-top: 30px;
    margin-left: 20px;
    height: 40px;
    width: 40px;
    border-radius: 80px;
    border-width: 1.5px;
    border-color: ${theme.COLORS.PURPLEDARK3};
    align-items: center;
    justify-content: center;
`;

