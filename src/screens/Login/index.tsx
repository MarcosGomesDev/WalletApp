import React, { useState } from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import {useTheme} from 'styled-components'
import Input from 'components/Input';
import ButtonCustom from 'components/ButtonCustom';
import {ButtonSocialGoogle} from 'components/ButtonSocialGoogle';
import {ButtonSocialFacebook} from 'components/ButtonSocialFacebook';

import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
} from './styles';

const Login: React.FC = () => {
    const {COLORS} = useTheme()
    const [loading, setLoading] = useState(false)

    function onPressButton() {
        setLoading(true)
        console.log('pressionado')
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    return (
        <SafeAreaView style={{paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}}>
            <Container>
                <ContentHeader>
                    <Title>Seja bem vindo(a) {"\n"} a WalletApp</Title>

                    <Description>Entrar com:</Description>

                    <ViewButton>
                        <ButtonSocialGoogle title="Google" />
                        <ButtonSocialFacebook title="Facebook" iconName="facebook" />
                    </ViewButton>
                </ContentHeader>

                <ContentBody>
                </ContentBody>
                    <Input
                        LeftIcon
                        iconSize={25}
                        iconName="mail-outline"
                        autoCapitalize='none'
                        autoCorrect={false}
                        iconColor={COLORS.TEXTDARK}
                        keyboardType="email-address"
                        placeholder="Digite seu e-mail"
                    />
                    <Input
                        LeftIcon
                        secureTextEntry
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="default"
                        iconName='lock-closed-outline'
                        iconSize={25}
                        placeholder="Digite sua senha"
                    />

                    <ButtonCustom
                        title="Entrar"
                        variant='primary'
                        onPress={onPressButton}
                        style={{marginBottom: 20}}
                    />
                <ContentFooter>

                </ContentFooter>
            </Container>
        </SafeAreaView>
    );
}

export {Login};
