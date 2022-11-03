import styled from 'styled-components/native';
import theme from 'styles/theme';

export const Container = styled.View`
    flex: 1;
`;

export const CardContainer = styled.View`
    padding: 0 30px;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    background-color: ${theme.COLORS.PURPLEDARK2};
    width: 100%;
    height: 160px;
    border-radius: 50px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`;

export const ContainerBalance = styled.View`

`;

export const TitleValor = styled.Text`
    font-family: ${theme.FONTS.QUICKSANDBOLD};
    font-size: 17px;
    font-weight: bold;
    color: ${theme.COLORS.WHITE};
`;

export const TitleValorConta = styled.Text`
    font-family: ${theme.FONTS.QUICKSANDBOLD};
    font-size: 22px;
    font-weight: bold;
    color: ${theme.COLORS.WHITE};
`;

export const ContainerCard = styled.View`
`;

export const TitleCard = styled.Text`
    font-family: ${theme.FONTS.QUICKSANDBOLD};
    font-size: 17px;
    font-weight: bold;
    color: ${theme.COLORS.WHITE};
`;

export const TitleNameCard = styled.Text`
    font-family: ${theme.FONTS.QUICKSANDBOLD};
    font-size: 22px;
    font-weight: bold;
    color: ${theme.COLORS.WHITE};
`;
