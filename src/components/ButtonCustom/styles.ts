import styled from 'styled-components/native';
import theme from 'styles/theme';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
    background-color: ${theme.COLORS.PURPLE1};
    width: 60%;
    height: 65px;
    align-self: center;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(10)}px;
    border-radius: ${RFValue(15)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${theme.COLORS.WHITE_100};
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
