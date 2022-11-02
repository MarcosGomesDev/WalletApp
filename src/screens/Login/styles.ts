import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    padding: ${RFValue(20)}px;
`;

export const ContentHeader = styled.View`
    width: 100%;
    justify-content: space-between;
    /* align-items: center; */
`;

export const ContentBody = styled.View`
`;

export const ContentFooter = styled.View`
`;

export const ViewButton = styled.View`
    flex-direction: row;
`;

export const Title = styled.Text`
    text-align: center;
    margin-top: ${RFValue(40)}px;
    font-size: ${RFValue(25)}px
`;

export const Description = styled.Text`
    text-align: center;
    margin-top: ${RFValue(60)}px;
    font-size: ${RFValue(17)}px;
    margin-bottom: ${RFValue(10)}px;
`;
