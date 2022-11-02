import styled from 'styled-components/native';
import { TextInput } from 'react-native';
export const Container = styled.View`
    width: 100%;
    height: 60px;
    justify-content: center;
    border-radius: 8px;
    margin-top: 10px;
    padding: 0 12px;
    flex-direction: row;
    align-items: center;
    background-color: ${({theme}: any) => theme.COLORS.GRAY5};
`;

export const InputContainer = styled.TextInput`
    border: 0;
    flex: 2;
    width: 100%;
    height: 50px;
    border-radius: 8px;
    font-size: 14px;
`;
