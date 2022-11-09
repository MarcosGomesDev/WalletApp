import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import theme from 'styles/theme';

export const Button = styled(TouchableOpacity)`
    height: 70px;
    width: 70px;
    align-items: center;
    justify-content: center;
`;

export const IconContainer = styled.View`
    border-radius: 60px;
    border-width: 0.7px;
    border-color: ${theme.COLORS.GRAY4};
    height: 60px;
    width: 60px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${theme.FONTS.RUBIKMEDIUM};
    font-size: 20px;
    color: ${theme.COLORS.PURPLEDARK2};
    font-weight: 700;
    margin-top: 10px;
`;
