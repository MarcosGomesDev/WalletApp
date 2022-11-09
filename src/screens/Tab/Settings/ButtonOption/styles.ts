import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import theme from 'styles/theme';

export const Button = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    margin: 5px 15px;
    height: 70px;
`;

export const IconContainer = styled.View.attrs({
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5.46,
    height: 45,
    width: 45,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 9,
})`
`;

export const Title = styled.Text`
    font-size: 18px;
    color: ${theme.COLORS.PURPLEDARK3};
`;

export const ViewRight = styled.View`
    flex-direction: row;
    flex: 1;
    align-items: center;
    margin-left: 15px;
    justify-content: space-between;
`;
