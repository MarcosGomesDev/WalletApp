import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import theme from 'styles/theme';

export const Container = styled.View`
    margin-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
    width: 100%;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const ContentHeader = styled.View`
    padding: 10px;
    justify-content: center;
    margin-left: 20px;
`;

export const AppName = styled.Text`
    font-size: 24px;
    line-height: 29.8px;
    letter-spacing: 0.9px;
    font-weight: bold;
    color: ${theme.COLORS.PURPLEDARK3};
    font-family: ${theme.FONTS.RUBIKMEDIUM};
`;

export const Status = styled.Text`
    font-size: 16px;
    letter-spacing: 0.5px;
    color: ${theme.COLORS.GRAY3};
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
`;

export const Avatar = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 30px;
    margin-right: 20px;
`;
