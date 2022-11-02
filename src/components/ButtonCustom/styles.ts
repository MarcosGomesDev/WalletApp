import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
    background-color: ${({theme}: any) => theme.COLORS.PURPLE1};
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(15)}px;
    border-radius: ${RFValue(8)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme}: any) => theme.COLORS.WHITE_100};
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;