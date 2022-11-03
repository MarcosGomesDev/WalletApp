import styled from 'styled-components/native';
import { Platform, StatusBar, TouchableOpacity } from 'react-native';
import theme from 'styles/theme';

export const Container = styled.View`
    padding: 25px;
    padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
`;

export const ContentHeader = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: 25px;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
    margin-top: 80px;
    color: ${theme.COLORS.PURPLEDARK3}
`;

export const Description = styled.Text`
    margin-top: 80px;
    font-size: 20px;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
    margin-bottom: 10px;
`;

export const ContentBody = styled.View`
    margin-top: 60px;
`;

export const ContentFooter = styled.View`
    margin-top: 60px;
    align-items: center;
    justify-content: center;
`;

export const ButtonGoBack = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Title1 = styled.Text`
    font-size: 14px;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
    color: ${theme.COLORS.GRAY3}
`;

export const Title2 = styled.Text`
    font-size: 15px;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
    color: ${theme.COLORS.BLUE2}
`;
