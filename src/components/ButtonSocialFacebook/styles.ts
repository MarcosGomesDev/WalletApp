import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Fontisto';
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
    background-color: ${theme.COLORS.BLUE};
`;

export const IconFacebook = styled(Icon)`
    font-size: ${RFValue(20)}px;
    color: ${theme.COLORS.WHITE};
`;

export const Title = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${RFValue(17)}px;
    margin-left: ${RFValue(10)}px;
`;
