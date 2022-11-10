import React from 'react';

import ButtonOption from '../../../components/ButtonOption';

import {
    Container,
    Footer,
} from './styles';

import Header from 'components/Header';
import { useNavigation } from '@react-navigation/native';
import ButtonOut from 'components/ButtonOut';
import GoBackButton from 'components/GoBackButton';

const Settings: React.FC = () => {
    const navigation = useNavigation()

    return (
        <>
            <GoBackButton />
            <Header appName='Configurações' />
            <Container>
                <ButtonOption
                    title="Perfil"
                    onPress={() => navigation.navigate('Profile')}
                    iconName="person-outline"
                    icon
                />

                <ButtonOption
                    title="Notificações"
                    onPress={() => { }}
                    iconName="notifications-outline"
                    icon
                />

                <ButtonOption
                    title="Sua carteira"
                    onPress={() => { }}
                    iconName="wallet-outline"
                    icon
                />

                <ButtonOption
                    title="Configurações de login"
                    onPress={() => { }}
                    iconName="key-outline"
                    icon
                />

                <ButtonOption
                    title="Central de serviços"
                    onPress={() => { }}
                    iconName="call-outline"
                    icon
                />

                <Footer>
                    <ButtonOut
                        title="Sair"
                        onPress={() => { }}
                        iconName="log-out-outline"
                    />
                </Footer>
            </Container>

        </>
    );
}

export default Settings;
