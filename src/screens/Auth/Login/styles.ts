import styled from 'styled-components/native'
import theme from 'styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform, StatusBar, TouchableOpacity } from 'react-native';

export const Container = styled.SafeAreaView`
    padding: ${RFValue(20)}px;
    padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px !important;
`;

export const ContentHeader = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const ContentBody = styled.View`
    margin-top: 30px;
`;

export const ViewButton = styled.View`
    width: 100%;
    align-self: center;
    justify-content: space-around;
    flex-direction: row;
`;

export const Title = styled.Text`
    text-align: center;
    margin-top: ${RFValue(40)}px;
    font-size: ${RFValue(25)}px;
    color: ${theme.COLORS.PURPLEDARK3};
    font-family: ${theme.FONTS.RUBIKMEDIUM};
`;

export const Description = styled.Text`
    text-align: center;
    margin-top: ${RFValue(60)}px;
    font-size: ${RFValue(17)}px;
    margin-bottom: ${RFValue(30)}px;
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
`;

export const ContentFooter = styled.View`
    width:100%;
    align-items: center;
    justify-content: center;
`;


export const ButtonSignUp = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TitleButtonSignUp1 = styled.Text`
    font-size: 14px;
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    color: ${theme.COLORS.GRAY4};
`;

export const TitleButtonSignUp2 = styled.Text`
    font-size: 15px;
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    color: ${theme.COLORS.BLUE2};
`;

export const ContentForgotPassword = styled.View`
    margin: 15px 10px 5px 10px;
`;

export const ContentButtonForgotPassword = styled(TouchableOpacity)`
    width: 40%;
    padding: 10px 0;
    align-self: flex-end;
`;

export const ContentTitleForgotPassword = styled.Text`
    text-align: right;
    color: ${theme.COLORS.BLUE2};
    font-size: 14px;
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
`;
