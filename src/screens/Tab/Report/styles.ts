import styled from 'styled-components/native';
import theme from 'styles/theme';

export const Container = styled.View`
    flex: 1;
    width: 100%;
`;

export const ViewBalance = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 60px;
`;

export const Title = styled.Text`
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
    font-size: 18px;
    color: ${theme.COLORS.GRAY2};
`;

export const TotalCash = styled.Text`
    font-family: ${theme.FONTS.RUBIKMEDIUM};
    font-weight: 700;
    font-size: 36px;
    color: ${theme.COLORS.PURPLELIGHT};
`;

export const ContentFooter = styled.View`
    flex: 1;
    justify-content: space-between;
`;

export const ContentFlat = styled.View`
    margin: 20px 25px;
`;

export const ButtonShowAll = styled.TouchableOpacity``;

export const ButtonTitle = styled.Text`
    font-size: 14px;
    color: ${theme.COLORS.PURPLELIGHT};
    font-family: ${theme.FONTS.QUICKSANDMEDIUM};
`;

export const ContentFlatHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 15px 25px 0px 25px;
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
