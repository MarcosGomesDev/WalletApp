import React from 'react';
import { View } from 'react-native';

import {
    Container,
    ContentHeader,
    AppName,
    Status,
    Avatar
} from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <ContentHeader>
                <AppName>Wallet</AppName>
                <Status>Ativo</Status>
            </ContentHeader>
            <Avatar
                source={{uri: 'https://avatars.githubusercontent.com/u/69877839?s=400&u=31fe3882018f5323104f9ac304b2213e783c9760&v=4'}}
            />
        </Container>
    );
}

export default Header;
