import styled from 'styled-components/native';

import theme from 'styles/theme';

export const Container = styled.View`
    margin-top: 40px;
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    margin-top: 30px;
`;

export const Footer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
`;

export const Avatar = styled.Image`
    width: 96px;
    height: 96px;
    border-radius: 200px;
`;

export const ViewHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const HeaderName = styled.Text`
    font-family: ${theme.FONTS.RUBIKMEDIUM};
    font-weight: bold;
    font-size: 24px;
    color: ${theme.COLORS.PURPLEDARK3};

`;

export const IconButton = styled.TouchableOpacity`

`;
