import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform, StatusBar, TouchableOpacity } from 'react-native';

export const Container = styled.View`
    padding: ${RFValue(20)}px;
    padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px !important;
`;

export const ContentHeader = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const ContentBody = styled.View`
`;

export const ContentFooter = styled.View`
    width:100%;
    align-items: center;
    justify-content: center;
`;

export const ViewButton = styled.View`
    width: 100%;
    align-self: center;
    justify-content: space-around;
    flex-direction: row;
`;

export const Description = styled.Text`
    text-align: center;
    margin-top: ${RFValue(60)}px;
    font-size: ${RFValue(17)}px;
    margin-bottom: ${RFValue(10)}px;
`;

export const ButtonSignUp = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TitleButtonSignUp1 = styled.Text`
    font-size: 16px;
    color: ${({theme}: any) => theme.COLORS.GRAY4}
`;

export const TitleButtonSignUp2 = styled.Text`
    font-size: 17px;
    color: ${({theme}: any) => theme.COLORS.BLUE}
`;

export const Title = styled.Text`
    text-align: center;
    margin-top: ${RFValue(40)}px;
    font-size: ${RFValue(25)}px
`;
