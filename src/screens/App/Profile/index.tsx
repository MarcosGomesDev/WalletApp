import GoBackButton from 'components/GoBackButton';
import React from 'react';
import { View } from 'react-native';
import { Pen } from 'phosphor-react-native'
import { useTheme } from 'styled-components';
import ButtonOption from 'components/ButtonOption';

import {
    Container,
    Header,
    Content,
    Footer,
    Avatar,
    ViewHeader,
    HeaderName,
    IconButton
} from './styles';
import ButtonOut from 'components/ButtonOut';

const Profile = () => {
    const {COLORS} = useTheme()

    return (
        <>
            <GoBackButton />
            <Container>
                <Header>
                    <Avatar
                        source={{uri: 'https://avatars.githubusercontent.com/u/69877839?s=400&u=31fe3882018f5323104f9ac304b2213e783c9760&v=4'}}
                    />
                    <ViewHeader>
                        <HeaderName>Marcos</HeaderName>
                        <IconButton>
                            <Pen
                                size={28}
                                weight="light"
                                color={COLORS.GRAY2}
                            />
                        </IconButton>
                    </ViewHeader>
                </Header>
                <Content>
                    <ButtonOption
                        title='Connected Account'
                        onPress={() => {}}
                    />
                    <ButtonOption
                        title='Privacy and security'
                        onPress={() => {}}
                    />
                    <ButtonOption
                        title='Login Settings'
                        onPress={() => {}}
                    />
                    <ButtonOption
                        title='Service Center'
                        onPress={() => {}}
                    />
                </Content>
                <Footer>
                    <ButtonOut
                        title="Deletar Conta"
                        iconName="trash-outline"
                        onPress={() => {}}
                    />
                </Footer>
            </Container>
        </>
    );
}

export default Profile;
