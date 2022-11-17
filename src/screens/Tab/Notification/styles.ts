import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import theme from 'styles/theme';

export const Container = styled(ScrollView)`
    flex: 1;
    margin-bottom: 90px;
`;

export const Header = styled.View`
    align-items: center;
    margin-bottom: 20px;
`;

export const Title = styled.Text`
    font-family: ${theme.FONTS.RUBIKMEDIUM};
    font-size: 24px;
    font-weight: 700;
    color: ${theme.COLORS.PURPLEDARK3};
`;

export const NewNotifications = styled.View`
    align-items: center;
    margin: 10px 0 20px 0;
`;

export const RecentNotifications = styled.View`
    align-items: center;
    margin: 10px 0 20px 0;
`;

export const TitleNotification = styled.Text`
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    font-size: 18px;
    font-weight: 500;
    color: ${theme.COLORS.PURPLEDARK3};
    text-align: center;
    margin-bottom: 20px;
`;

export const NotificationContainer = styled(TouchableOpacity)`
    height: 110px;
    width: 90%;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.COLORS.WHITE_100};
    padding: 20px 20px;
    box-shadow: 30px 20px 20px #000;
    elevation: 9;
    margin-bottom: 15px;
`;

export const DataNotify = styled.Text`
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    font-size: 15px;
    font-weight: 700;
    color: #bdbdbd;
`;

export const NotifyTitle = styled.Text`
    color: ${theme.COLORS.SPECIALGRAY};
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    font-size: 17px;
    font-weight: 500;
    width: 80%;
    padding: 5px 0;
    line-height: 20px;
`;

export const Subtitle = styled.Text`
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    font-size: 15px;
    font-weight: 700;
    color: #bdbdbd;
`;

