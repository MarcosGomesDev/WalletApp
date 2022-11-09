import { TouchableOpacity } from 'react-native';
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

export const ContentBody= styled.View`
    width: 100%;
    padding: 20px 30px;
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const IconPayment = styled.Image`
    width: 70px;
    height: 70px;
`;

export const IconTransfer = styled.Image`
    width: 70px;
    height: 70px;
`;

export const IconPayOut = styled.Image`
    width: 70px;
    height: 70px;
`;

export const IconTopUp = styled.Image`
    width: 70px;
    height: 70px;
`;

export const ButtonOption = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
`;

export const TitleButton = styled.Text`
    color: ${theme.COLORS.PURPLELIGHT};
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    font-size: 13px;
    letter-spacing: 0.7px;
`;

export const ContentFooter = styled.View`
    flex: 1;
    justify-content: space-between;
`;

export const ContentFlat = styled.View`
    margin: 20px 25px;
`;

export const ContentFlatHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 25px;
`;

export const Title = styled.Text`
    color: ${theme.COLORS.PURPLEDARK3};
    font-size: 18px;
    font-family: ${theme.FONTS.RUBIKMEDIUM};
    font-weight: bold;
`;

export const ButtonShowAll = styled(TouchableOpacity)``;

export const ButtonTitle = styled.Text`
    font-size: 14px;
    color: ${theme.COLORS.PURPLELIGHT};
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
`;

export const ContentFlatFooter = styled.View`
    flex-direction: row;
    align-items: center;
    align-items: center;
`;

export const IconTransaction = styled.Image`
    width: 40px;
    height: 40px;
`;

export const DetailsTransaction = styled.View`
    flex: 1;
    margin-left: 15px;
`;

export const NameTransaction = styled.Text`
    font-family: ${theme.FONTS.RUBIKMEDIUM};
    font-size: 17px;
    color: ${theme.COLORS.TEXTDARK};
`;

export const SubTitleTransaction = styled.Text`
    font-size: 14px;
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    color: ${theme.COLORS.GRAY3};
`;

export const AmountTransaction = styled.Text`
    font-family: ${theme.FONTS.RUBIKMEDIUM};
    font-weight: bold;
    font-size: 17px;
    color: ${theme.COLORS.TEXTDARK}
`;
