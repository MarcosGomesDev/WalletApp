import styled from 'styled-components/native';
import theme from 'styles/theme';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    justify-content: center;
    height: 60px;
    margin-top: 40px;
`;

export const Title = styled.Text`
    font-family: ${theme.FONTS.RUBIKMEDIUM};
    font-size: 24px;
    font-weight: bold;
    color: ${theme.COLORS.PURPLEDARK3};
    text-align: center;
`;

export const ButtonAddCard = styled.TouchableOpacity`

`;

export const Content = styled.ImageBackground`
    background-color: ${theme.COLORS.PURPLEDARK3};
    width: 240px;
    height: 340px;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    border-radius: 50px;
`;

export const ContentChip = styled.Image`
    width: 35px;
    height: 40px;
    position: absolute;
    top: 80px;
    left: 40px;
`;

export const ContentVisa = styled.Image`
    height: 20px;
    width: 66px;
    position: absolute;
    bottom: 40px;
    right: 30px;
`;

export const SubTitle = styled.Text`
    text-align: center;
    margin-top: 70px;
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    font-size: 16px;
    color: ${theme.COLORS.TEXTDARK};
    line-height: 20px;
`;
