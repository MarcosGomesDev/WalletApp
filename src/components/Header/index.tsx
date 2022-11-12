import { ChartBarHorizontal } from 'phosphor-react-native';
import React from 'react';
import { View } from 'react-native';

import {
    Container,
    IconButton,
    ContentHeader,
    AppName,
    Status,
    Avatar
} from './styles';

interface Header {
    iconLeft?: boolean;
    typeRelatorio?: boolean;
    appName: string;
    status?: boolean;
    avatar?: boolean;

}

const Header: React.FC<Header> = ({
    iconLeft,
    typeRelatorio,
    appName,
    status,
    avatar
}) => {
    return (
        <Container>
            {iconLeft && (
                <>
                    {typeRelatorio && (
                        <IconButton>
                            <ChartBarHorizontal size={32} weight="light" />
                        </IconButton>
                    )}
                </>
            )}
            <ContentHeader>
                <AppName>{appName}</AppName>
                {status && (
                    <Status>Ativo</Status>
                )}
            </ContentHeader>
            {avatar && (
                <Avatar
                    source={{ uri: 'https://avatars.githubusercontent.com/u/69877839?s=400&u=31fe3882018f5323104f9ac304b2213e783c9760&v=4' }}
                />
            )}
        </Container>
    );
}

export default Header;
