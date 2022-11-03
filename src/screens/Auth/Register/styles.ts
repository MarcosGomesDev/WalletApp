import { Platform, StatusBar, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import theme from 'styles/theme';

export const Container = styled.View`
    padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px !important;
    padding: 30px;
`;

export const ContentHeader = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: 35px;
    margin-top: 40px;
    margin-bottom: 10px;
    color: ${theme.COLORS.PURPLEDARK3};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
    font-size: 15px;
    margin-top: 60px;
    margin-bottom: 30px;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const ContentBody = styled.View`
    margin-bottom: 25px;
`;

export const ViewButton = styled.View`
    width: 100%;
    align-self: center;
    justify-content: space-around;
    flex-direction: row;
`;

export const ContentFooter = styled.View`
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const ButtonFooter = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const Title1 = styled.Text`
    font-size: 14px;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
    color: ${theme.COLORS.GRAY4};
`;

export const Title2 = styled.Text`
    font-size: 15px;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
    color: ${theme.COLORS.BLUE2};
`;
