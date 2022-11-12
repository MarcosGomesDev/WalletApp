import styled from 'styled-components/native';
import theme from 'styles/theme';

export const Container = styled.View`
    flex: 1;
    padding: 20px;
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

export const CardDetails = styled.Image`
    width: 100%;
    height: 240px;
    border-radius: 50px;
    margin-top: 30px;
`;

export const ViewDetails = styled.View`
    width: 100%;
    margin-top: 30px;
    align-items: center;
    margin-bottom: 30px;
`;

export const ViewItem = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 70%;
    padding: 6px 0;
`;

export const InfoTitle = styled.Text`
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    font-size: 17px;
    color: ${theme.COLORS.GRAY4};
`;

export const Name = styled.Text`
    flex: 1;
    text-align: right;
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    font-size: 17px;
    color: ${theme.COLORS.TEXTDARK};
`;

export const Bank = styled.Text`
    flex: 1;
    text-align: right;
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    font-size: 17px;
    color: ${theme.COLORS.TEXTDARK};
`;

export const Account = styled.Text`
    flex: 1;
    text-align: right;
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    font-size: 17px;
    color: ${theme.COLORS.TEXTDARK};
`;

export const Status = styled.Text`
    flex: 1;
    text-align: right;
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    font-size: 17px;
    color: ${theme.COLORS.TEXTDARK};
`;

export const Valid = styled.Text`
    flex: 1;
    text-align: right;
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    font-size: 17px;
    color: ${theme.COLORS.TEXTDARK};
`;
