import styled from 'styled-components/native';
import theme from 'styles/theme';
import {TouchableOpacity} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Button = styled(TouchableOpacity).attrs({
    type: ''
})`
    width: ${RFValue(130)}px;
    height: ${RFValue(50)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 16px;
    border-radius: ${RFValue(10)}px;
    box-shadow: 1px 3px 3px rgba(0,0,0,0.2);
    background-color: ${theme.COLORS.GRAY5};
`;

export const IconGoogle = styled.Image`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
    margin-top: -2px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(17)}px;
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    margin-left: ${RFValue(10)}px;
`;
